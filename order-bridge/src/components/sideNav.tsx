"use client";

import {
  faArrowRightFromBracket,
  faBoxOpen,
  faChartSimple,
  faGear,
  faHouse,
  faPaperPlane,
  faWarehouse,
} from "@fortawesome//free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";

import { usePathname } from "next/navigation";

const SideNav = () => {
  //   const { user, getRole, setUser, getOrgType, isSuperAdmin } = useAuth();

  //   const superAdmin = isSuperAdmin();

  //   const router = useRouter();

  //   const handleLogout = async () => {
  //     try {
  //       await axiosInstance.get('/auth/logout', { withCredentials: true });
  //       router.push('/login');
  //       setUser(null);
  //       toast.success('Logged out successfully');
  //     } catch (error) {
  //       console.error('Failed to logout', error);
  //     }
  //   };

  //   const organizationType = getOrgType();
  //   const role = getRole();
  const pathname = usePathname();
  const currentPage = pathname.split("/")[1];
  const previousPage = pathname.split("/").slice(-2)[0];

  console.log("Current Page: ", previousPage);

  //   const getInitials = () => {
  //     if (!user) return '';
  //     const name = user.name.split(' ');
  //     let initials = '';
  //     if (name[0] != 'undefined') initials += name[0][0];
  //     if (name[1] != 'undefined') initials += name[1][0];
  //     return initials;
  //   };

  //   const getDisplayName = () => {
  //     if (!user) return '';
  //     const name = user.name.split(' ');
  //     let displayName = '';
  //     if (name[0] != 'undefined') displayName += name[0];
  //     if (name[1] != 'undefined') displayName += ' ' + name[1];
  //     return displayName;
  //   };

  return (
    <aside className="flex h-full w-56 flex-col items-start justify-start gap-10 border-r border-gray-border-primary p-5">
      <div className="flex flex-row items-center justify-center gap-4">
        <Image
          src="/assets/logo.svg"
          className="mx-auto h-8 w-8"
          alt="logo"
          width={0}
          height={0}
          sizes="100%"
        />
        <div className="flex flex-col gap-2 text-xl font-semibold text-slate-primary">
          OrderBridge&nbsp;
        </div>
      </div>
      <div className="flex w-full flex-col justify-between py-8 text-slate-primary">
        <div className="flex w-full flex-col gap-5">
          <Link
            href={`/`}
            className={`flex w-full items-center gap-3 rounded-lg p-2 transition-all duration-200 ease-in-out ${
              currentPage === ""
                ? "bg-slate-bg-secondary text-app"
                : "hover:bg-slate-bg-secondary hover:text-app"
            }`}
          >
            <FontAwesomeIcon className="h-auto w-6" icon={faHouse} />
            <span className="text-base font-medium">Home</span>
          </Link>
          <Link
            href={`/analytics`}
            className={`flex w-full items-center gap-3 rounded-lg p-2 transition-all duration-200 ease-in-out ${
              currentPage === "analytics"
                ? "bg-slate-bg-secondary text-app"
                : "hover:bg-slate-bg-secondary hover:text-app"
            }`}
          >
            <FontAwesomeIcon className="h-auto w-6" icon={faChartSimple} />
            <span className="text-base font-medium">Analytics</span>
          </Link>
          <Link
            href={`/orders`}
            className={`flex w-full items-center gap-3 rounded-lg p-2 transition-all duration-200 ease-in-out ${
              currentPage === "orders"
                ? "bg-slate-bg-secondary text-app"
                : "hover:bg-slate-bg-secondary hover:text-app"
            }`}
          >
            <FontAwesomeIcon className="h-auto w-6" icon={faBoxOpen} />
            <span className="text-base font-medium">Orders</span>
          </Link>
          <Link
            href={`/inventory`}
            className={`flex w-full items-center gap-3 rounded-lg p-2 transition-all duration-200 ease-in-out ${
              currentPage === "inventory"
                ? "bg-slate-bg-secondary text-app"
                : "hover:bg-slate-bg-secondary hover:text-app"
            }`}
          >
            <FontAwesomeIcon className="h-auto w-6" icon={faWarehouse} />
            <span className="text-base font-medium">Inventory</span>
          </Link>
          <Link
            href={`/forecasting`}
            className={`flex w-full items-center gap-3 rounded-lg p-2 transition-all duration-200 ease-in-out ${
              currentPage === "forecasting"
                ? "bg-slate-bg-secondary text-app"
                : "hover:bg-slate-bg-secondary hover:text-app"
            }`}
          >
            <FontAwesomeIcon className="h-auto w-6" icon={faPaperPlane} />
            <span className="text-base font-medium">
              Forecasting
              <span className="text-app text-xs font-bold ml-2">AI</span>
            </span>
          </Link>
          <Link
            href={`/settings`}
            className={`flex w-full items-center gap-3 rounded-lg p-2 transition-all duration-200 ease-in-out ${
              currentPage === "settings"
                ? "bg-slate-bg-secondary text-app"
                : "hover:bg-slate-bg-secondary hover:text-app"
            }`}
          >
            <FontAwesomeIcon className="h-auto w-6" icon={faGear} />
            <span className="text-base font-medium">Settings</span>
          </Link>
        </div>
      </div>
      <div className="mt-auto flex w-full flex-row items-center justify-center gap-2 border-t py-4">
        <div className="w-auto max-w-full">
          <div className="inline-flex h-8 w-8 items-center justify-center overflow-hidden rounded-full border border-app">
            <span className="text-sm font-medium uppercase text-app">AK</span>
          </div>
        </div>

        <div className="flex w-full flex-col overflow-hidden">
          <div className="truncate text-sm text-slate-primary">Adnan K</div>
          <div className="truncate text-xs text-slate-secondary">
            adnan@amazon.com
          </div>
        </div>
        <Button color="transparent" className="border-none">
          <FontAwesomeIcon
            className="h-full w-4 text-slate-secondary"
            icon={faArrowRightFromBracket}
          />
        </Button>
      </div>
    </aside>
  );
};

export default SideNav;
