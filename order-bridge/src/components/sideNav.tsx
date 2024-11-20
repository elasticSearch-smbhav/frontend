"use client";

import {
    faArrowRightFromBracket,
    faCoins,
    faGamepad,
    faHouse,
} from "@fortawesome//free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";

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
  //   const pathname = usePathname();
  //   const orgId = pathname.split('/')[1];

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
            href={"#"}
            className={`flex w-full items-center gap-3 rounded-lg p-2 transition-all duration-200 ease-in-out bg-slate-bg-secondary "
            }`}
          >
            <FontAwesomeIcon
              className="h-auto w-8 text-xl text-app"
              icon={faHouse}
            />
            <span className="text-base text-app font-medium">Home</span>
          </Link>
          <Link
            href={`#`}
            className={`flex w-full items-center gap-3 rounded-lg p-2 transition-all duration-200 ease-in-out hover:bg-slate-bg-secondary hover:text-app"}`}
          >
            <FontAwesomeIcon className="h-auto w-8 text-xl" icon={faGamepad} />
            <span className="text-base font-medium">Games</span>
          </Link>
          <Link
            href={`#`}
            className={`flex w-full items-center gap-3 rounded-lg p-2 transition-all duration-200 ease-in-out hover:bg-slate-bg-secondary hover:text-app"}`}
          >
            <FontAwesomeIcon className="h-auto w-8 text-xl" icon={faCoins} />
            <span className="text-base font-medium">Coins</span>
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
        </div>
        <Button color="secondary" className="border-none text-slate-secondary">
          <FontAwesomeIcon
            className="h-full w-auto text-xl"
            icon={faArrowRightFromBracket}
          />
        </Button>
      </div>
    </aside>
  );
};

export default SideNav;
