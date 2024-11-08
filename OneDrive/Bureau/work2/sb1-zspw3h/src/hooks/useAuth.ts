import { useMutation, useQueryClient } from 'react-query';
import { authService } from '../services/api';

export function useAuth() {
  const queryClient = useQueryClient();

  const login = useMutation(
    (credentials: { email: string; password: string }) =>
      authService.login(credentials.email, credentials.password),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('user');
      },
    }
  );

  const register = useMutation(
    (data: {
      name: string;
      email: string;
      password: string;
      password_confirmation: string;
    }) => authService.register(data),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('user');
      },
    }
  );

  const logout = useMutation(() => authService.logout(), {
    onSuccess: () => {
      queryClient.invalidateQueries('user');
    },
  });

  return {
    login,
    register,
    logout,
  };
}