export interface Event {
  id: number;
  title: string;
  description: string;
  type: 'cultural' | 'music' | 'workspace' | 'rooftop';
  image_url: string;
  price: number;
  date: string;
  location: string;
  available_tickets: number;
  is_featured: boolean;
  created_at: string;
  updated_at: string;
}

export interface Booking {
  id: number;
  event_id: number;
  user_id: number;
  ticket_count: number;
  total_price: number;
  status: 'pending' | 'confirmed' | 'cancelled';
  created_at: string;
  updated_at: string;
}

export interface ApiResponse<T> {
  data: T;
  message?: string;
  errors?: Record<string, string[]>;
}