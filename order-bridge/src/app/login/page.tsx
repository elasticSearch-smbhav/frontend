"use client";
import { Button, TextInput } from "flowbite-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const LoginPage = () => {
  const router = useRouter();
  const [showPage, setShowPage] = useState(false);

  const [token, setToken] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("refresh_token");
      if (token) {
        router.push("/");
      } else {
        setShowPage(true);
      }
    }
  }, []);

  const setRefreshToken = () => {
    localStorage.setItem("refresh_token", token);
    router.push("/");
  };

  return showPage ? (
    <div className="flex h-screen w-screen flex-row">
      <div className="mx-auto flex h-full min-w-[50%] flex-col">
        <div className="flex h-full w-full items-center justify-center">
          <div className="flex flex-col items-center justify-start bg-white">
            <div className="mb-20 flex flex-row items-center justify-center gap-5">
              <Image
                src="/assets/logo.svg"
                className="mx-auto h-9 w-9"
                alt="logo"
                width={0}
                height={0}
                sizes="100%"
              />
              <div className="text-3xl font-semibold text-slate-primary">
                OrderBridge
              </div>
            </div>
            <div className="mb-12 flex flex-col justify-center items-center gap-1">
              <div className="text-2xl font-semibold text-slate-primary">
                Please enter your SP API Refresh Token to get started
              </div>
            </div>
            <div className="w-96 flex flex-col gap-4 mb-6">
              <div className="w-full">
                <TextInput
                  id="token"
                  type="text"
                  placeholder="Enter refresh token"
                  required
                  color="primary"
                  value={token}
                  onChange={(e) => setToken(e.target.value)}
                />
              </div>
              <Button onClick={setRefreshToken} className="w-full" color={"purple"} size="sm">
                Get Started
              </Button>
            </div>

            <hr className="mb-10 w-full hidden"></hr>

            <div className="w-full flex-col gap-4 hidden">
              <Button
                color="light"
                size="sm"
                className="flex w-full flex-row items-center justify-center font-medium transition-colors duration-200 ease-in-out hover:ring-1 hover:ring-app focus:ring focus:ring-app"
              >
                <Image
                  src="/assets/socials/amazon.svg"
                  className="mr-3 h-auto w-5"
                  alt="logo"
                  width={0}
                  height={0}
                  sizes="100%"
                />
                Sign in with Amazon
              </Button>
              <Button
                color="light"
                size="sm"
                className="flex w-full flex-row items-center justify-center font-medium transition-colors duration-200 ease-in-out hover:ring-1 hover:ring-app focus:ring focus:ring-app"
              >
                <Image
                  src="/assets/socials/google.svg"
                  className="mr-3 h-auto w-5"
                  alt="logo"
                  width={0}
                  height={0}
                  sizes="100%"
                />
                Sign in with Google
              </Button>
              <Button
                color="light"
                size="sm"
                className="flex w-full flex-row items-center justify-center font-medium transition-colors duration-200 ease-in-out hover:ring-1 hover:ring-app focus:ring focus:ring-app"
              >
                <Image
                  src="/assets/socials/microsoft.svg"
                  className="mr-3 h-auto w-5"
                  alt="logo"
                  width={0}
                  height={0}
                  sizes="100%"
                />
                Sign in with Microsoft
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="w-full h-full bg-white"></div>
  );
};

export default LoginPage;
