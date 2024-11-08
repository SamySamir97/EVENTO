import axios from 'axios';
import type { Event, Booking, ApiResponse } from '../types/api';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8000/api',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
});

// Add auth interceptor
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const eventService = {
  getAll: async (params?: Record<string, string>) => {
    const response = await api.get<ApiResponse<Event[]>>('/events', { params });
    return response.data;
  },

  getFeatured: async () => {
    const response = await api.get<ApiResponse<Event[]>>('/events/featured');
    return response.data;
  },

  getByType: async (type: Event['type']) => {
    const response = await api.get<ApiResponse<Event[]>>(`/events/type/${type}`);
    return response.data;
  },

  get: async (id: number) => {
    const response = await api.get<ApiResponse<Event>>(`/events/${id}`);
    return response.data;
  }
};

export const bookingService = {
  create: async (eventId: number, ticketCount: number) => {
    const response = await api.post<ApiResponse<Booking>>('/bookings', {
      event_id: eventId,
      ticket_count: ticketCount
    });
    return response.data;
  },

  getUserBookings: async () => {
    const response = await api.get<ApiResponse<Booking[]>>('/bookings');
    return response.data;
  },

  cancel: async (bookingId: number) => {
    const response = await api.post<ApiResponse<Booking>>(`/bookings/${bookingId}/cancel`);
    return response.data;
  }
};

export const authService = {
  login: async (email: string, password: string) => {
    const response = await api.post<ApiResponse<{ token: string }>>('/auth/login', {
      email,
      password
    });
    if (response.data.data.token) {
      localStorage.setItem('token', response.data.data.token);
    }
    return response.data;
  },

  register: async (data: {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
  }) => {
    const response = await api.post<ApiResponse<{ token: string }>>('/auth/register', data);
    if (response.data.data.token) {
      localStorage.setItem('token', response.data.data.token);
    }
    return response.data;
  },

  logout: async () => {
    await api.post('/auth/logout');
    localStorage.removeItem('token');
  }
};