'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { apiFetch } from '@/lib/api-client';

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: string;
  tenantId: string;
}

interface AuthContextType {
  user: User | null;
  adminUser: User | null;
  isLoading: boolean;
  loginCustomer: (token: string, user: User) => void;
  loginAdmin: (token: string, user: User) => void;
  logoutCustomer: () => void;
  logoutAdmin: () => void;
  fetchProfile: () => Promise<void>;
  fetchAdminProfile: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [adminUser, setAdminUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load customer session
    const token = localStorage.getItem('auth_token');
    const storedUser = localStorage.getItem('user');
    if (token && storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (e) {
        localStorage.removeItem('auth_token');
        localStorage.removeItem('user');
      }
    }

    // Load admin session
    const adminToken = localStorage.getItem('admin_auth_token');
    const storedAdminUser = localStorage.getItem('admin_user');
    if (adminToken && storedAdminUser) {
      try {
        setAdminUser(JSON.parse(storedAdminUser));
      } catch (e) {
        localStorage.removeItem('admin_auth_token');
        localStorage.removeItem('admin_user');
      }
    }

    setIsLoading(false);
  }, []);

  const loginCustomer = (token: string, user: User) => {
    localStorage.setItem('auth_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    setUser(user);
  };

  const loginAdmin = (token: string, user: User) => {
    localStorage.setItem('admin_auth_token', token);
    localStorage.setItem('admin_user', JSON.stringify(user));
    setAdminUser(user);
  };

  const logoutCustomer = () => {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('user');
    setUser(null);
  };

  const logoutAdmin = () => {
    localStorage.removeItem('admin_auth_token');
    localStorage.removeItem('admin_user');
    setAdminUser(null);
  };

  const fetchProfile = async () => {
    try {
      const token = localStorage.getItem('auth_token');
      if (!token) return;
      const profile = await apiFetch<User>('/auth/profile', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      setUser(profile);
      localStorage.setItem('user', JSON.stringify(profile));
    } catch (e) {
      logoutCustomer();
    }
  };

  const fetchAdminProfile = async () => {
    try {
      const adminToken = localStorage.getItem('admin_auth_token');
      if (!adminToken) return;
      const profile = await apiFetch<User>('/auth/profile', {
        headers: {
          'Authorization': `Bearer ${adminToken}`,
        },
      });
      setAdminUser(profile);
      localStorage.setItem('admin_user', JSON.stringify(profile));
    } catch (e) {
      logoutAdmin();
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        adminUser,
        isLoading,
        loginCustomer,
        loginAdmin,
        logoutCustomer,
        logoutAdmin,
        fetchProfile,
        fetchAdminProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
