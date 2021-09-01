import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from 'react';

interface AuthState {
  token: string;
}

interface AuthContextData {
  token: string;
  signIn(state: AuthState): void;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>({} as AuthState);

  useEffect(() => {
    function loadStorageData(): void {
      const token = window.localStorage.getItem('token');

      if (token) {
        setData({ token });
      }
    }

    loadStorageData();
  }, []);

  const signIn = useCallback(({ token }) => {
    window.localStorage.setItem('token', token);
    setData({ token });
  }, []);

  const signOut = useCallback(() => {
    window.localStorage.removeItem('token');
    window.localStorage.removeItem('userId');

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ token: data.token, signIn, signOut }}>
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
