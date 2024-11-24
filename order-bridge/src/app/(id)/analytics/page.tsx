"use client";
import BarChartComponent from "@/components/charts/barChart";
import LineChartComponent from "@/components/charts/lineChart";
import PieChartComponent from "@/components/charts/pieChart"; // For category/product breakdown
import WithAuth from "@/hoc/withAuth";
import { faChartSimple, faRefresh } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Breadcrumb, Button, Datepicker } from "flowbite-react";
import dynamic from "next/dynamic";

// Dynamically import MapChartComponent with SSR disabled
const MapChartComponent = dynamic(
  () => import("@/components/charts/mapChart"),
  { ssr: false }
);

interface DataPoint {
  name: string;
  value: number;
}

const ordersReceived: DataPoint[] = [
  { name: "Wed", value: 1253 },
  { name: "Thu", value: 559 },
  { name: "Fri", value: 859 },
  { name: "Sat", value: 1763 },
  { name: "Sun", value: 2323 },
  { name: "Mon", value: 1300 },
  { name: "Tue", value: 1127 },
];

const totalOrderValue: DataPoint[] = [
  { name: "Wed", value: 12530 },
  { name: "Thu", value: 3590 },
  { name: "Fri", value: 7590 },
  { name: "Sat", value: 17890 },
  { name: "Sun", value: 23990 },
  { name: "Mon", value: 13500 },
  { name: "Tue", value: 10620 },
];

const productCategoryData = [
  { name: "Electronics", value: 45500 },
  { name: "Fashion", value: 29800 },
  { name: "Home Decor", value: 19900 },
  { name: "Books", value: 15450 },
];

const customerData = [
  { name: "New Customers", value: 58 },
  { name: "Returning Customers", value: 42 },
];

const geographicalSalesData = [
  { name: "New York", lat: 40.7128, lng: -74.006, value: 5284 },
  { name: "San Francisco", lat: 37.7749, lng: -122.4194, value: 3420 },
  { name: "Los Angeles", lat: 34.0522, lng: -118.2437, value: 2123 },
];

const Page = () => {
  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item>
          <div className="rounded-lg text-app">
            <FontAwesomeIcon
              className="mr-2 flex-row items-center justify-center"
              icon={faChartSimple}
            />
            Analytics
          </div>
        </Breadcrumb.Item>
      </Breadcrumb>

      <div className="flex flex-col items-start justify-start w-full mb-6">
        <div className="text-3xl font-semibold text-slate-primary">
          Analytics
        </div>
        <div className="text-sm text-slate-secondary">
          Your current business analytics
        </div>
      </div>

      <div className="flex items-center justify-between w-full mb-6">
        <div className="flex gap-4">
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

      {/* KPI Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-6">
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
      </div>

      {/* Charts Section */}
      <div className="w-full p-6 border rounded-xl flex flex-col gap-8">
        <div className="text-slate-primary font-medium text-xl">
          Orders Received
        </div>
        <BarChartComponent data={ordersReceived} />
      </div>

      <div className="w-full p-6 border rounded-xl flex flex-col gap-8">
        <div className="text-slate-primary font-medium text-xl">
          Total Order Value
        </div>
        <LineChartComponent data={totalOrderValue} />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="w-full p-6 border rounded-xl flex flex-col gap-8">
          <div className="text-slate-primary font-medium text-xl">
            Sales by Product Category
          </div>
          <PieChartComponent data={productCategoryData} />
        </div>

        <div className="w-full p-6 border rounded-xl flex flex-col gap-8">
          <div className="text-slate-primary font-medium text-xl">
            Customer Insights
          </div>
          <PieChartComponent data={customerData} />
        </div>
      </div>

      <div className="w-full p-6 border rounded-xl flex flex-col gap-8">
        <div className="text-slate-primary font-medium text-xl">
          Geographical Sales Insights
        </div>
        <MapChartComponent data={geographicalSalesData} />
      </div>
    </>
  );
};

export default WithAuth(Page);
