import { createContext, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import nookies, { parseCookies, destroyCookie } from 'nookies';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const cookies = parseCookies();
    if (cookies.user) {
      setUser(JSON.parse(cookies.user));
    }
  }, []);

  const login = async (username, password) => {
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      const user = await response.json();
      setUser(user);
      nookies.set(null, 'user', JSON.stringify(user), { path: '/' });
      router.push('/dashboard');
    } else {
      alert('Invalid credentials');
    }
  };

  const logout = async () => {
    await fetch('/api/auth/logout', {
      method: 'POST',
    });
    setUser(null);
    destroyCookie(null, 'user');
    router.push('/');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
