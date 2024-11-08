import React, { createContext, useContext, useState } from 'react';
import LoginModal from './LoginModal';
import SignupModal from './SignupModal';

interface AuthContextType {
  openLogin: () => void;
  openSignup: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  const openLogin = () => {
    setIsSignupOpen(false);
    setIsLoginOpen(true);
  };

  const openSignup = () => {
    setIsLoginOpen(false);
    setIsSignupOpen(true);
  };

  return (
    <AuthContext.Provider value={{ openLogin, openSignup }}>
      {children}
      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        onSwitchToSignup={openSignup}
      />
      <SignupModal
        isOpen={isSignupOpen}
        onClose={() => setIsSignupOpen(false)}
        onSwitchToLogin={openLogin}
      />
    </AuthContext.Provider>
  );
}

export function useAuthModals() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuthModals must be used within an AuthProvider');
  }
  return context;
}