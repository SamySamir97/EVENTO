import { useMutation, useQuery, useQueryClient } from 'react-query';
import { bookingService } from '../services/api';

export function useBookings() {
  const queryClient = useQueryClient();

  const bookings = useQuery(
    'bookings',
    () => bookingService.getUserBookings(),
    {
      enabled: !!localStorage.getItem('token'),
    }
  );

  const createBooking = useMutation(
    (data: { eventId: number; ticketCount: number }) =>
      bookingService.create(data.eventId, data.ticketCount),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('bookings');
        queryClient.invalidateQueries('events');
      },
    }
  );

  const cancelBooking = useMutation(
    (bookingId: number) => bookingService.cancel(bookingId),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('bookings');
        queryClient.invalidateQueries('events');
      },
    }
  );

  return {
    bookings,
    createBooking,
    cancelBooking,
  };
}