"use client";
import React, { createContext, ReactNode, useContext, useState } from "react";

interface User {
  name: string;
  email: string;
  user_id: string;
  getName: () => string | undefined;
  getEmail: () => string | undefined;
}

interface AuthContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  sessionLogout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const sessionLogout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        sessionLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
