import { useQuery } from 'react-query';
import { eventService } from '../services/api';
import type { Event } from '../types/api';

export function useEvents(type?: Event['type']) {
  return useQuery(
    ['events', type],
    () => type ? eventService.getByType(type) : eventService.getAll(),
    {
      staleTime: 1000 * 60 * 5, // 5 minutes
    }
  );
}

export function useFeaturedEvents() {
  return useQuery(
    'featuredEvents',
    () => eventService.getFeatured(),
    {
      staleTime: 1000 * 60 * 5, // 5 minutes
    }
  );
}

export function useEvent(id: number) {
  return useQuery(
    ['event', id],
    () => eventService.get(id),
    {
      enabled: !!id,
    }
  );
}