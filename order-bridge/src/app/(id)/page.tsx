"use client";

import { faRefresh } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Breadcrumb, Button, Datepicker } from "flowbite-react";

const Page = () => {
  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item>
          <div className="rounded-lg bg-app-bg-primary p-2 text-app">Home</div>
        </Breadcrumb.Item>
      </Breadcrumb>

      <div className="flex flex-col items-start justify-start w-full">
        <div className="text-3xl font-semibold text-slate-primary">
          Welcome back, Adnan
        </div>
        <div className="text-base text-slate-tertiary">
          See overview of your business
        </div>
      </div>
      <div className="flex items-center justify-between w-full">
        <div className="flex gap-2">
          <div className="flex items-center justify-center gap-2">
            <div>Start:</div>
            <Datepicker
            // value={startDate === '' ? '' : formatDate(startDate)}
            // onSelectedDateChanged={handleStartDate}
            // maxDate={endDate === '' ? new Date() : new Date(endDate)}
            />
          </div>
          <div className="flex items-center justify-center gap-2">
            <div>End:</div>
            <Datepicker
            // value={endDate === "" ? "" : formatDate(endDate)}
            // onSelectedDateChanged={handleEndDate}
            // minDate={startDate === "" ? undefined : new Date(startDate)}
            // maxDate={new Date()}
            />
          </div>
        </div>
        <Button color="purple" size="sm">
          Sync Data
          <FontAwesomeIcon icon={faRefresh} className="text-base ml-2" />
        </Button>
      </div>
      <div className="w-full gap-4 grid grid-cols-6">
        <div className="col-span-2 rounded-xl flex flex-col justify-start gap-2 items-start border p-5 hover:bg-gray-50 transition-colors duration-200 ease-in-out cursor-pointer">
          <div className="text-slate-secondary font-medium text-sm">
            Orders fulfilled
          </div>
          <div className="text-slate-primary text-4xl font-semibold">410</div>
        </div>
        <div className="col-span-2 rounded-xl flex flex-col justify-start gap-2 items-start border p-5 hover:bg-gray-50 transition-colors duration-200 ease-in-out cursor-pointer">
          <div className="text-slate-secondary font-medium text-sm">
            Active Orders
          </div>
          <div className="text-slate-primary text-4xl font-semibold">32</div>
        </div>
        <div className="col-span-2 rounded-xl flex flex-col justify-start gap-2 items-start border p-5 hover:bg-gray-50 transition-colors duration-200 ease-in-out cursor-pointer">
          <div className="text-slate-secondary font-medium text-sm">
            Average Order Value
          </div>
          <div className="text-slate-primary text-4xl font-semibold">6850</div>
        </div>
        <div className="col-span-3 rounded-xl flex flex-col justify-start gap-1 items-start border p-5 hover:bg-gray-50 transition-colors duration-200 ease-in-out cursor-pointer">
          <div className="text-app font-semibold">Manage Orders</div>
          <div className="text-slate-secondary text-sm ">
            Go to manage your orders
          </div>
        </div>
        <div className="col-span-3 rounded-xl flex flex-col justify-start gap-1 items-start border p-5 hover:bg-gray-50 transition-colors duration-200 ease-in-out cursor-pointer">
          <div className="text-app font-semibold">Update Inventory</div>
          <div className="text-slate-secondary text-sm ">
            Check and Update your inventory
          </div>
        </div>
        <div className="col-span-3 rounded-xl flex flex-col justify-start gap-2 items-start border p-5 hover:bg-gray-50 transition-colors duration-200 ease-in-out cursor-pointer">
          <div className="text-slate-secondary font-medium text-sm">
            Total SKUs
          </div>
          <div className="text-slate-primary text-4xl font-semibold">23</div>
        </div>
        <div className="col-span-3 rounded-xl flex flex-col justify-start gap-2 items-start border p-5 hover:bg-gray-50 transition-colors duration-200 ease-in-out cursor-pointer">
          <div className="text-slate-secondary font-medium text-sm">
            Active Marketplaces
          </div>
          <div className="text-slate-primary text-4xl font-semibold">3</div>
        </div>
      </div>
    </>
  );
};

export default Page;
