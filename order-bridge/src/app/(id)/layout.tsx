"use client";
import SideNav from "../../components/sideNav";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen flex-col">
      <div className="flex flex-1 overflow-hidden">
        <SideNav />
        <div className="flex h-screen flex-1 flex-col gap-4 overflow-y-auto p-8">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
