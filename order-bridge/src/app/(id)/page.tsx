"use client";

import WithAuth from "@/hoc/withAuth";
import { faHouse, faRefresh } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Breadcrumb, Button, Datepicker } from "flowbite-react";
import Link from "next/link";

const Page = () => {
  return (
    <>
      <Breadcrumb aria-label="Default breadcrumb example">
        <Breadcrumb.Item>
          <div className="rounded-lg text-app">
            <FontAwesomeIcon
              className="mr-2 flex-row items-center justify-center"
              icon={faHouse}
            />
            Home
          </div>
        </Breadcrumb.Item>
      </Breadcrumb>

      <div className="flex flex-col items-start justify-start w-full">
        <div className="text-3xl font-semibold text-slate-primary">
          Welcome back, Adnan
        </div>
        <div className="text-sm text-slate-secondary">
          See overview of your business
        </div>
      </div>
      <div className="flex items-center justify-between w-full">
        <div className="flex gap-2">
          <div className="flex items-center justify-center gap-2">
            <div>Start:</div>
            <Datepicker value={null} placeholder="Select start date" />
          </div>
          <div className="flex items-center justify-center gap-2">
            <div>End:</div>
            <Datepicker value={null} placeholder="Select end date" />
          </div>
        </div>
        <Button color="purple" size="sm">
          Sync Data
          <FontAwesomeIcon icon={faRefresh} className="text-base ml-2" />
        </Button>
      </div>
      <div className="w-full gap-4 grid grid-cols-4">
        <div className="p-4 bg-white border rounded-lg text-center shadow-sm">
          <div className="text-xl font-bold text-slate-primary">₹1,25,231</div>
          <div className="text-sm text-slate-secondary">Total Revenue</div>
        </div>
        <div className="p-4 bg-white border rounded-lg text-center shadow-sm">
          <div className="text-xl font-bold text-slate-primary">42</div>
          <div className="text-sm text-slate-secondary">Total Orders</div>
        </div>
        <div className="p-4 bg-white border rounded-lg text-center shadow-sm">
          <div className="text-xl font-bold text-slate-primary">₹2981</div>
          <div className="text-sm text-slate-secondary">Avg Order Value</div>
        </div>
        <div className="p-4 bg-white border rounded-lg text-center shadow-sm">
          <div className="text-xl font-bold text-slate-primary">42%</div>
          <div className="text-sm text-slate-secondary">Customer Retention</div>
        </div>
        <Link
          href="/orders"
          className="col-span-2 rounded-xl flex flex-col justify-start gap-1 items-start border p-5 hover:bg-gray-50 transition-colors duration-200 ease-in-out cursor-pointer"
        >
          <div className="text-app font-semibold">Manage Orders</div>
          <div className="text-slate-secondary text-sm ">
            Go to manage your orders
          </div>
        </Link>
        <Link
          href={"inventory"}
          className="col-span-2 rounded-xl flex flex-col justify-start gap-1 items-start border p-5 hover:bg-gray-50 transition-colors duration-200 ease-in-out cursor-pointer"
        >
          <div className="text-app font-semibold">Update Inventory</div>
          <div className="text-slate-secondary text-sm ">
            Check and Update your inventory
          </div>
        </Link>
        <div className="col-span-2 rounded-xl flex flex-col justify-start gap-2 items-start border p-5 hover:bg-gray-50 transition-colors duration-200 ease-in-out cursor-pointer">
          <div className="text-slate-secondary font-medium text-sm">
            Total SKUs
          </div>
          <div className="text-slate-primary text-4xl font-semibold">19</div>
        </div>
        <div className="col-span-2 rounded-xl flex flex-col justify-start gap-2 items-start border p-5 hover:bg-gray-50 transition-colors duration-200 ease-in-out cursor-pointer">
          <div className="text-slate-secondary font-medium text-sm">
            Active Marketplaces
          </div>
          <div className="text-slate-primary text-4xl font-semibold">1</div>
        </div>
      </div>
    </>
  );
};

export default WithAuth(Page);
