'use client';
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Page = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/1234");
    }, 1000);
  }, []);

  return (
    <div className="w-full h-screen justify-start items-center flex flex-col gap-2 p-10 py-20">
      <div className="text-slate-primary text-3xl font-medium">
        Login Successful
      </div>
      <div className="text-slate-secondary">Redirecting...</div>
    </div>
  );
};

export default Page;
