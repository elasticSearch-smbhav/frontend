"use client";
import { useAuth } from "@/context/authContext";
import axiosInstance from "@/utils/axiosInstance";
import { useRouter } from "next/navigation";
import React, { ComponentType, useEffect, useState } from "react";

const WithAuth = (WrappedComponent: ComponentType): React.FC => {
  const WithAuth: React.FC = (props) => {
    const router = useRouter();
    const { user, setUser } = useAuth();
    const [showPage, setShowPage] = useState(false);

    useEffect(() => {
      const checkAuth = async () => {
        if (!user) {
          try {
            const response = await axiosInstance.get("/auth/profile", {
              withCredentials: true,
            });

            if (response.status === 200) {
              setShowPage(true);
              setUser(response.data.profile);
            } else if (response.status === 401) {
              setUser(null);
              router.push("/login");
            }
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
          } catch (err) {
            setUser(null);
            router.push("/login");
          }
        } else {
          setShowPage(true);
        }
      };

      checkAuth();
    }, [router, setUser, user]);

    if (!showPage) {
      return <div className="h-screen w-screen bg-white"></div>;
    }

    return <WrappedComponent {...props} />;
  };

  return WithAuth;
};

export default WithAuth;
