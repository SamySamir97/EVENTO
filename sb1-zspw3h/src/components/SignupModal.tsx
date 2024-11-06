import React from 'react';
import { X } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import { countries } from '../data/countries';

interface SignupModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSwitchToLogin: () => void;
}

export default function SignupModal({ isOpen, onClose, onSwitchToLogin }: SignupModalProps) {
  const { register } = useAuth();
  const [formData, setFormData] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    password_confirmation: '',
    phoneNumber: '',
    country: '',
    city: ''
  });

  const [cities, setCities] = React.useState<string[]>([]);

  React.useEffect(() => {
    if (formData.country) {
      // In a real app, fetch cities based on country
      setCities(['Cairo', 'Alexandria', 'Giza', 'Luxor', 'Aswan', 'Hurghada']);
    } else {
      setCities([]);
    }
  }, [formData.country]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await register.mutateAsync({
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        password: formData.password,
        password_confirmation: formData.password_confirmation,
        // Additional fields will be handled by the backend
        phone: formData.phoneNumber,
        country: formData.country,
        city: formData.city
      });
      onClose();
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-8 max-w-xl w-full mx-4 relative my-8">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-stone-400 hover:text-stone-600"
        >
          <X className="w-6 h-6" />
        </button>

        <h2 className="text-2xl font-bold text-amber-900 mb-6">Create Account</h2>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-stone-600 mb-1">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              required
              className="w-full px-4 py-2 rounded-lg border border-stone-200 focus:outline-none focus:ring-2 focus:ring-amber-500"
              value={formData.firstName}
              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
            />
          </div>

          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-stone-600 mb-1">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              required
              className="w-full px-4 py-2 rounded-lg border border-stone-200 focus:outline-none focus:ring-2 focus:ring-amber-500"
              value={formData.lastName}
              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
            />
          </div>

          <div className="md:col-span-2">
            <label htmlFor="email" className="block text-sm font-medium text-stone-600 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              required
              className="w-full px-4 py-2 rounded-lg border border-stone-200 focus:outline-none focus:ring-2 focus:ring-amber-500"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-stone-600 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              required
              className="w-full px-4 py-2 rounded-lg border border-stone-200 focus:outline-none focus:ring-2 focus:ring-amber-500"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-stone-600 mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              required
              className="w-full px-4 py-2 rounded-lg border border-stone-200 focus:outline-none focus:ring-2 focus:ring-amber-500"
              value={formData.password_confirmation}
              onChange={(e) => setFormData({ ...formData, password_confirmation: e.target.value })}
            />
          </div>

          <div>
            <label htmlFor="phoneNumber" className="block text-sm font-medium text-stone-600 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              required
              className="w-full px-4 py-2 rounded-lg border border-stone-200 focus:outline-none focus:ring-2 focus:ring-amber-500"
              value={formData.phoneNumber}
              onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
            />
          </div>

          <div>
            <label htmlFor="country" className="block text-sm font-medium text-stone-600 mb-1">
              Country
            </label>
            <select
              id="country"
              required
              className="w-full px-4 py-2 rounded-lg border border-stone-200 focus:outline-none focus:ring-2 focus:ring-amber-500"
              value={formData.country}
              onChange={(e) => setFormData({ ...formData, country: e.target.value })}
            >
              <option value="">Select a country</option>
              {countries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="city" className="block text-sm font-medium text-stone-600 mb-1">
              City
            </label>
            <select
              id="city"
              required
              disabled={!formData.country}
              className="w-full px-4 py-2 rounded-lg border border-stone-200 focus:outline-none focus:ring-2 focus:ring-amber-500 disabled:bg-stone-50 disabled:cursor-not-allowed"
              value={formData.city}
              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
            >
              <option value="">Select a city</option>
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>

          <div className="md:col-span-2 mt-4">
            <button
              type="submit"
              disabled={register.isLoading}
              className="w-full bg-amber-700 text-white py-2 rounded-lg hover:bg-amber-800 transition-colors disabled:opacity-50"
            >
              {register.isLoading ? 'Creating account...' : 'Create Account'}
            </button>
          </div>
        </form>

        <div className="mt-6 text-center">
          <p className="text-stone-600">
            Already have an account?{' '}
            <button
              onClick={onSwitchToLogin}
              className="text-amber-700 hover:text-amber-800 font-medium"
            >
              Login
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}