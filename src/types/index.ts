export interface Recipient {
    id: string;
    name: string;
    email: string;
}

export interface Template {
    id: string;
    title: string;
    description: string;
    preview: string;
    type: string;
    price?: number;
    isPremium?: boolean;
}

export interface Customization {
    message: string;
    color: string;
    animation: string;
    music: string;
    font?: string;
    background?: string;
}

export interface Celebration {
    id: string;
    title: string;
    type: string;
    recipients: Recipient[];
    template: Template;
    customization: Customization;
    date: string;
    preview: string;
    status: 'draft' | 'sent' | 'scheduled';
    scheduledDate?: string;
}

export interface User {
    id: string;
    name: string;
    email: string;
    avatar?: string;
    preferences?: {
        theme: 'light' | 'dark';
        notifications: boolean;
    };
}

export interface Payment {
    id: string;
    amount: number;
    status: 'pending' | 'completed' | 'failed';
    date: string;
    celebrationId: string;
}

export interface Analytics {
    views: number;
    shares: number;
    likes: number;
    comments: number;
    celebrationId: string;
} 