import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/api';
import { User } from '../types';

interface AuthState {
    user: User | null;
    isAuthenticated: boolean;
    isLoading: boolean;
    error: string | null;
}

interface UseAuthReturn extends AuthState {
    login: (email: string, password: string) => Promise<void>;
    register: (name: string, email: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
    clearError: () => void;
}

export const useAuth = (): UseAuthReturn => {
    const navigate = useNavigate();
    const [state, setState] = useState<AuthState>({
        user: null,
        isAuthenticated: false,
        isLoading: false,
        error: null,
    });

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            // TODO: Implement token validation and user data fetching
            setState((prev) => ({
                ...prev,
                isAuthenticated: true,
            }));
        }
    }, []);

    const login = useCallback(async (email: string, password: string) => {
        try {
            setState((prev) => ({ ...prev, isLoading: true, error: null }));
            const { token, user } = await auth.login(email, password);
            localStorage.setItem('token', token);
            setState({
                user,
                isAuthenticated: true,
                isLoading: false,
                error: null,
            });
            navigate('/');
        } catch (error) {
            setState((prev) => ({
                ...prev,
                isLoading: false,
                error: 'Invalid email or password',
            }));
            throw error;
        }
    }, [navigate]);

    const register = useCallback(async (name: string, email: string, password: string) => {
        try {
            setState((prev) => ({ ...prev, isLoading: true, error: null }));
            const { token, user } = await auth.register({ name, email, password });
            localStorage.setItem('token', token);
            setState({
                user,
                isAuthenticated: true,
                isLoading: false,
                error: null,
            });
            navigate('/');
        } catch (error) {
            setState((prev) => ({
                ...prev,
                isLoading: false,
                error: 'Registration failed',
            }));
            throw error;
        }
    }, [navigate]);

    const logout = useCallback(async () => {
        try {
            setState((prev) => ({ ...prev, isLoading: true, error: null }));
            await auth.logout();
            localStorage.removeItem('token');
            setState({
                user: null,
                isAuthenticated: false,
                isLoading: false,
                error: null,
            });
            navigate('/login');
        } catch (error) {
            setState((prev) => ({
                ...prev,
                isLoading: false,
                error: 'Logout failed',
            }));
            throw error;
        }
    }, [navigate]);

    const clearError = useCallback(() => {
        setState((prev) => ({ ...prev, error: null }));
    }, []);

    return {
        ...state,
        login,
        register,
        logout,
        clearError,
    };
}; 