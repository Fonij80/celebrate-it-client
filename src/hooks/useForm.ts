import { useState, useCallback } from 'react';

interface ValidationRule {
    validator: (value: string) => boolean;
    message: string;
}

interface FormField {
    value: string;
    error: string | null;
    touched: boolean;
    rules: ValidationRule[];
}

interface FormState {
    [key: string]: FormField;
}

interface UseFormReturn {
    formState: FormState;
    handleChange: (field: string, value: string) => void;
    handleBlur: (field: string) => void;
    validateField: (field: string) => boolean;
    validateForm: () => boolean;
    resetForm: () => void;
    setFieldValue: (field: string, value: string) => void;
    setFieldError: (field: string, error: string | null) => void;
}

export const useForm = (initialState: { [key: string]: { value: string; rules: ValidationRule[] } }): UseFormReturn => {
    const [formState, setFormState] = useState<FormState>(
        Object.entries(initialState).reduce((acc, [key, { value, rules }]) => {
            acc[key] = {
                value,
                error: null,
                touched: false,
                rules,
            };
            return acc;
        }, {} as FormState)
    );

    const validateField = useCallback((field: string): boolean => {
        const fieldState = formState[field];
        if (!fieldState) return true;

        const { value, rules } = fieldState;
        const error = rules.find((rule) => !rule.validator(value))?.message || null;

        setFormState((prev) => ({
            ...prev,
            [field]: {
                ...prev[field],
                error,
            },
        }));

        return !error;
    }, [formState]);

    const validateForm = useCallback((): boolean => {
        let isValid = true;
        Object.keys(formState).forEach((field) => {
            if (!validateField(field)) {
                isValid = false;
            }
        });
        return isValid;
    }, [formState, validateField]);

    const handleChange = useCallback((field: string, value: string) => {
        setFormState((prev) => ({
            ...prev,
            [field]: {
                ...prev[field],
                value,
                error: null,
            },
        }));
    }, []);

    const handleBlur = useCallback((field: string) => {
        setFormState((prev) => ({
            ...prev,
            [field]: {
                ...prev[field],
                touched: true,
            },
        }));
        validateField(field);
    }, [validateField]);

    const resetForm = useCallback(() => {
        setFormState(
            Object.entries(initialState).reduce((acc, [key, { value, rules }]) => {
                acc[key] = {
                    value,
                    error: null,
                    touched: false,
                    rules,
                };
                return acc;
            }, {} as FormState)
        );
    }, [initialState]);

    const setFieldValue = useCallback((field: string, value: string) => {
        setFormState((prev) => ({
            ...prev,
            [field]: {
                ...prev[field],
                value,
            },
        }));
    }, []);

    const setFieldError = useCallback((field: string, error: string | null) => {
        setFormState((prev) => ({
            ...prev,
            [field]: {
                ...prev[field],
                error,
            },
        }));
    }, []);

    return {
        formState,
        handleChange,
        handleBlur,
        validateField,
        validateForm,
        resetForm,
        setFieldValue,
        setFieldError,
    };
};

export const required = (message = 'This field is required'): ValidationRule => ({
    validator: (value) => value.trim().length > 0,
    message,
});

export const email = (message = 'Please enter a valid email address'): ValidationRule => ({
    validator: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
    message,
});

export const minLength = (length: number, message = `Must be at least ${length} characters`): ValidationRule => ({
    validator: (value) => value.length >= length,
    message,
});

export const maxLength = (length: number, message = `Must be at most ${length} characters`): ValidationRule => ({
    validator: (value) => value.length <= length,
    message,
});

export const pattern = (regex: RegExp, message = 'Invalid format'): ValidationRule => ({
    validator: (value) => regex.test(value),
    message,
}); 