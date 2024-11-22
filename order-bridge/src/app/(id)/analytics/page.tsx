"use client";

import BarChartComponent from "@/components/charts/barChart";
import LineChartComponent from "@/components/charts/lineChart";
import { faRefresh } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Breadcrumb, Button, Datepicker } from "flowbite-react";

interface DataPoint {
  name: string;
  value: number;
}

const data: DataPoint[] = [
  {
    name: "Wed",
    value: 4000,
  },
  {
    name: "Thu",
    value: 1000,
  },
  {
    name: "Fri",
    value: 2000,
  },
  {
    name: "Sat",
    value: 6000,
  },
  {
    name: "Sun",
    value: 8000,
  },
  {
    name: "Mon",
    value: 4000,
  },
  {
    name: "Tue",
    value: 3500,
  },
];

const Page = () => {
  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item>
          <div className="rounded-lg bg-app-bg-primary p-2 text-app">
            Analytics
          </div>
        </Breadcrumb.Item>
      </Breadcrumb>

      <div className="flex flex-col items-start justify-start w-full">
        <div className="text-3xl font-semibold text-slate-primary">
          Analytics
        </div>
        <div className="text-base text-slate-tertiary">
          Your current summary and activity.
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
      <div className="w-full p-6 border rounded-xl flex flex-col justify-start items-start gap-8">
        <div className="text-slate-primary font-medium text-xl">
          Orders received
        </div>
        <BarChartComponent data={data} />
      </div>
      <div className="w-full p-6 border rounded-xl flex flex-col justify-start items-start gap-8">
        <div className="text-slate-primary font-medium text-xl">
          SLA Compliance Score of Fulfilled Orders
        </div>
        <LineChartComponent data={data} />
      </div>
      <div className="w-full p-6 border rounded-xl flex flex-col justify-start items-start gap-8">
        <div className="text-slate-primary font-medium text-xl">
          Total order value
        </div>
        <BarChartComponent data={data} />
      </div>
    </>
  );
};

export default Page;
