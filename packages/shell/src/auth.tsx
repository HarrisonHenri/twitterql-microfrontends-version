import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from 'react';

interface AuthState {
  token: string;
  userId: string;
}

interface AuthContextData {
  userId: string;
  signIn(state: AuthState): void;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>({} as AuthState);

  useEffect(() => {
    function loadStorageData(): void {
      const token = window.localStorage.getItem('token');
      const userId = window.localStorage.getItem('userId');

      if (token && userId) {
        setData({ token, userId });
      }
    }

    loadStorageData();
  }, []);

  const signIn = useCallback(({ userId, token }) => {
    window.localStorage.setItem('token', token);
    window.localStorage.setItem('userId', userId);
    setData({ token, userId });
  }, []);

  const signOut = useCallback(() => {
    window.localStorage.removeItem('token');
    window.localStorage.removeItem('userId');

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ userId: data.userId, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export { AuthProvider, useAuth };
