import { useState, useEffect, useCallback } from 'react';
import { celebrations, templates, payments, analytics } from '../utils/api';
import { Celebration, Template, Payment, Analytics } from '../types';

interface CelebrationsState {
    celebrations: Celebration[];
    templates: Template[];
    payments: Payment[];
    analytics: Analytics[];
    isLoading: boolean;
    error: string | null;
}

interface UseCelebrationsReturn extends CelebrationsState {
    createCelebration: (celebration: Omit<Celebration, 'id'>) => Promise<Celebration>;
    updateCelebration: (id: string, celebration: Partial<Celebration>) => Promise<void>;
    deleteCelebration: (id: string) => Promise<void>;
    shareCelebration: (id: string, platform: string) => Promise<{ url: string }>;
    scheduleCelebration: (id: string, date: string) => Promise<void>;
    makePayment: (amount: number, celebrationId: string) => Promise<Payment>;
    clearError: () => void;
}

export const useCelebrations = (): UseCelebrationsReturn => {
    const [state, setState] = useState<CelebrationsState>({
        celebrations: [],
        templates: [],
        payments: [],
        analytics: [],
        isLoading: false,
        error: null,
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                setState((prev) => ({ ...prev, isLoading: true, error: null }));
                const [celebrationsData, templatesData] = await Promise.all([
                    celebrations.getAll(),
                    templates.getAll(),
                ]);
                setState((prev) => ({
                    ...prev,
                    celebrations: celebrationsData,
                    templates: templatesData,
                    isLoading: false,
                }));
            } catch (error) {
                setState((prev) => ({
                    ...prev,
                    isLoading: false,
                    error: 'Failed to fetch data',
                }));
            }
        };

        fetchData();
    }, []);

    const createCelebration = useCallback(async (celebrationData: Omit<Celebration, 'id'>) => {
        try {
            setState((prev) => ({ ...prev, isLoading: true, error: null }));
            const newCelebration = await celebrations.create(celebrationData);
            setState((prev) => ({
                ...prev,
                celebrations: [...prev.celebrations, newCelebration],
                isLoading: false,
            }));
            return newCelebration;
        } catch (error) {
            setState((prev) => ({
                ...prev,
                isLoading: false,
                error: 'Failed to create celebration',
            }));
            throw error;
        }
    }, []);

    const updateCelebration = useCallback(async (id: string, celebrationData: Partial<Celebration>) => {
        try {
            setState((prev) => ({ ...prev, isLoading: true, error: null }));
            const updatedCelebration = await celebrations.update(id, celebrationData);
            setState((prev) => ({
                ...prev,
                celebrations: prev.celebrations.map((celebration) =>
                    celebration.id === id ? updatedCelebration : celebration
                ),
                isLoading: false,
            }));
        } catch (error) {
            setState((prev) => ({
                ...prev,
                isLoading: false,
                error: 'Failed to update celebration',
            }));
            throw error;
        }
    }, []);

    const deleteCelebration = useCallback(async (id: string) => {
        try {
            setState((prev) => ({ ...prev, isLoading: true, error: null }));
            await celebrations.delete(id);
            setState((prev) => ({
                ...prev,
                celebrations: prev.celebrations.filter((celebration) => celebration.id !== id),
                isLoading: false,
            }));
        } catch (error) {
            setState((prev) => ({
                ...prev,
                isLoading: false,
                error: 'Failed to delete celebration',
            }));
            throw error;
        }
    }, []);

    const shareCelebration = useCallback(async (id: string, platform: string) => {
        try {
            setState((prev) => ({ ...prev, isLoading: true, error: null }));
            const result = await celebrations.share(id, platform);
            setState((prev) => ({ ...prev, isLoading: false }));
            return result;
        } catch (error) {
            setState((prev) => ({
                ...prev,
                isLoading: false,
                error: 'Failed to share celebration',
            }));
            throw error;
        }
    }, []);

    const scheduleCelebration = useCallback(async (id: string, date: string) => {
        try {
            setState((prev) => ({ ...prev, isLoading: true, error: null }));
            await updateCelebration(id, { scheduledDate: date, status: 'scheduled' });
            setState((prev) => ({ ...prev, isLoading: false }));
        } catch (error) {
            setState((prev) => ({
                ...prev,
                isLoading: false,
                error: 'Failed to schedule celebration',
            }));
            throw error;
        }
    }, [updateCelebration]);

    const makePayment = useCallback(async (amount: number, celebrationId: string) => {
        try {
            setState((prev) => ({ ...prev, isLoading: true, error: null }));
            const payment = await payments.create({ amount, celebrationId });
            setState((prev) => ({
                ...prev,
                payments: [...prev.payments, payment],
                isLoading: false,
            }));
            return payment;
        } catch (error) {
            setState((prev) => ({
                ...prev,
                isLoading: false,
                error: 'Failed to process payment',
            }));
            throw error;
        }
    }, []);

    const clearError = useCallback(() => {
        setState((prev) => ({ ...prev, error: null }));
    }, []);

    return {
        ...state,
        createCelebration,
        updateCelebration,
        deleteCelebration,
        shareCelebration,
        scheduleCelebration,
        makePayment,
        clearError,
    };
}; 