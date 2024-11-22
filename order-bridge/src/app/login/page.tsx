"use client";
import { Button, Label, TextInput } from "flowbite-react";
import Image from "next/image";

const LoginPage = () => {
  const handleLogin = () => {
    window.location.href = `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/amazon`;
  };

  return (
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
              <div className="text-4xl font-semibold text-slate-primary">
                Login
              </div>
              <div className="text-slate-secondary">
                Welcome! Please login using one of your accounts
              </div>
            </div>
            <div className="flex flex-col w-full gap-4 mb-6">
              <div className="w-full">
                <div className="mb-2 block">
                  <Label htmlFor="email" value="Email" className="text-base" />
                </div>
                <TextInput
                  id="email"
                  type="email"
                  placeholder="Enter email"
                  required
                  color="primary"
                  sizing="sm"
                />
              </div>
              <div className=" w-full">
                <div className="mb-2 block">
                  <Label
                    htmlFor="password"
                    value="Password"
                    className="text-base"
                  />
                </div>
                <TextInput
                  id="password"
                  type="password"
                  placeholder="Enter password"
                  required
                  color="primary"
                  sizing="sm"
                />
              </div>
              <Button className="w-full" color={"primary"} size="sm">
                Login
              </Button>
            </div>

            <hr className="mb-10 w-full"></hr>

            <div className="flex w-full flex-col gap-4">
              <Button
                onClick={handleLogin}
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
  );
};

export default LoginPage;
