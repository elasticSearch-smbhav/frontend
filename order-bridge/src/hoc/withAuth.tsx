"use client";
import { useRouter } from "next/navigation";
import React, { ComponentType, useEffect, useState } from "react";

const WithAuth = (WrappedComponent: ComponentType): React.FC => {
  const WithAuth: React.FC = (props) => {
    const router = useRouter();

    const [showPage, setShowPage] = useState(false);

    useEffect(() => {
      const checkAuth = async () => {
        if (typeof window !== "undefined") {
          const token = localStorage.getItem("refresh_token");
          if (token) {
            console.log("Token exists");
            setShowPage(true);
          } else {
            router.push("/login");
          }
        }
      };

      checkAuth();
    }, [router]);

    if (!showPage) {
      return <div className="h-screen w-screen bg-white"></div>;
    }

    return <WrappedComponent {...props} />;
  };

  return WithAuth;
};

export default WithAuth;
