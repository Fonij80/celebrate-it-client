import axios, { InternalAxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import { User, Celebration, Template, Payment, Analytics } from '../types';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api';

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Add a request interceptor to add the auth token to requests
api.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error: AxiosError) => {
        return Promise.reject(error);
    }
);

// Add a response interceptor to handle errors
api.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error: AxiosError) => {
        if (error.response?.status === 401) {
            // Handle unauthorized access
            localStorage.removeItem('token');
            window.location.href = '/login';
        }
        return Promise.reject(error);
    }
);

export const auth = {
    login: async (email: string, password: string): Promise<{ token: string; user: User }> => {
        const response = await api.post('/auth/login', { email, password });
        return response.data;
    },
    register: async (userData: { name: string; email: string; password: string }): Promise<{ token: string; user: User }> => {
        const response = await api.post('/auth/register', userData);
        return response.data;
    },
    logout: async (): Promise<void> => {
        await api.post('/auth/logout');
    },
};

export const celebrations = {
    getAll: async (): Promise<Celebration[]> => {
        const response = await api.get('/celebrations');
        return response.data;
    },
    getById: async (id: string): Promise<Celebration> => {
        const response = await api.get(`/celebrations/${id}`);
        return response.data;
    },
    create: async (celebrationData: Omit<Celebration, 'id'>): Promise<Celebration> => {
        const response = await api.post('/celebrations', celebrationData);
        return response.data;
    },
    update: async (id: string, celebrationData: Partial<Celebration>): Promise<Celebration> => {
        const response = await api.put(`/celebrations/${id}`, celebrationData);
        return response.data;
    },
    delete: async (id: string): Promise<void> => {
        await api.delete(`/celebrations/${id}`);
    },
    share: async (id: string, platform: string): Promise<{ url: string }> => {
        const response = await api.post(`/celebrations/${id}/share`, { platform });
        return response.data;
    },
};

export const templates = {
    getAll: async (): Promise<Template[]> => {
        const response = await api.get('/templates');
        return response.data;
    },
    getById: async (id: string): Promise<Template> => {
        const response = await api.get(`/templates/${id}`);
        return response.data;
    },
};

export const payments = {
    create: async (paymentData: { amount: number; celebrationId: string }): Promise<Payment> => {
        const response = await api.post('/payments', paymentData);
        return response.data;
    },
    getByCelebrationId: async (celebrationId: string): Promise<Payment[]> => {
        const response = await api.get(`/payments?celebrationId=${celebrationId}`);
        return response.data;
    },
};

export const analytics = {
    getByCelebrationId: async (celebrationId: string): Promise<Analytics> => {
        const response = await api.get(`/analytics?celebrationId=${celebrationId}`);
        return response.data;
    },
};

export default api; 