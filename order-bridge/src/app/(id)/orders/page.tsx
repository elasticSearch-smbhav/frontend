"use client";

import WithAuth from "@/hoc/withAuth";
import { formatCurrency, formatDate } from "@/utils/helpers";
import { faBoxOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Breadcrumb, Button, Datepicker, Dropdown } from "flowbite-react";
import Image from "next/image";
import { useState } from "react";

interface TableComponentProps {
  rowsPerPage: number;
  currentPage: number;
  setCurrentPage: (currentPage: number) => void;
  startDate: Date | string;
  endDate: Date | string;
}

const data = [
  {
    id: 1,
    image: "/assets/logo.svg",
    item: "Item 1",
    qty: 1,
    skuId: "ABC123",
    placedOn: new Date(),
    orderValue: 3999,
    platform: "Shopify",
    status: "Shipped",
    eta: new Date(),
    slaCompliant: true,
  },
  {
    id: 2,
    image: "/assets/logo.svg",
    item: "Item 1",
    qty: 1,
    skuId: "ABC123",
    placedOn: new Date(),
    orderValue: 3999,
    platform: "Shopify",
    status: "Shipped",
    eta: new Date(),
    slaCompliant: true,
  },
  {
    id: 3,
    image: "/assets/logo.svg",
    item: "Item 1",
    qty: 1,
    skuId: "ABC123",
    placedOn: new Date(),
    orderValue: 3999,
    platform: "Shopify",
    status: "Shipped",
    eta: new Date(),
    slaCompliant: true,
  },
  {
    id: 4,
    image: "/assets/logo.svg",
    item: "Item 1",
    qty: 1,
    skuId: "ABC123",
    placedOn: new Date(),
    orderValue: 3999,
    platform: "Shopify",
    status: "Shipped",
    eta: new Date(),
    slaCompliant: true,
  },
  {
    id: 5,
    image: "/assets/logo.svg",
    item: "Item 1",
    qty: 1,
    skuId: "ABC123",
    placedOn: new Date(),
    orderValue: 3999,
    platform: "Shopify",
    status: "Shipped",
    eta: new Date(),
    slaCompliant: true,
  },
];

const TableComponent = ({
  rowsPerPage,
  currentPage,
  setCurrentPage,
  startDate,
  endDate,
}: TableComponentProps) => {
  const startIndex = (currentPage - 1) * rowsPerPage;

  return (
    <div className="relative">
      <div className="relative z-0 overflow-x-auto border border-gray-200 sm:rounded-lg">
        <table className="w-full text-left text-sm text-gray-500">
          <thead className="bg-gray-100 text-xs uppercase text-gray-700">
            <tr>
              <th className="px-6 py-3">Image</th>
              <th className="px-6 py-3">Item</th>
              <th className="px-6 py-3">Qty</th>
              <th className="px-6 py-3">SKU ID</th>
              <th className="px-6 py-3">Placed On</th>
              <th className="px-6 py-3">Order Value</th>
              <th className="px-6 py-3">Platform</th>
              <th className="px-6 py-3">Status</th>
              <th className="px-6 py-3">ETA</th>
              <th className="px-6 py-3">SLA Compliant</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr
                key={index}
                className="cursor-pointer border-b bg-white transition-colors duration-100 ease-in-out text-slate-primary"
              >
                <td className="px-6 py-4 text-base">
                  <Image
                    src={item.image}
                    alt=""
                    width={0}
                    height={0}
                    sizes="100%"
                    className="h-10 w-10 rounded-xl"
                  />
                </td>
                <td className="px-6 py-4 text-base font-medium text-app hover:text-app-dark">
                  Item 1
                </td>
                <td className="px-6 py-4">{item.qty}</td>
                <td className="px-6 py-4">{item.skuId}</td>
                <td className="px-6 py-4">{formatDate(item.placedOn)}</td>
                <td className="px-6 py-4">{formatCurrency(item.orderValue)}</td>
                <td className="px-6 py-4">{item.platform}</td>
                <td className="px-6 py-4">{item.status}</td>
                <td className="px-6 py-4">{formatDate(item.eta)}</td>
                <td className="px-6 py-4">
                  <span className="px-2 py-1 bg-green-100 border border-green-600 text-green-600 rounded-full">
                    {item.slaCompliant ? "YES" : "NO"}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <nav
          className="flex-column sticky bottom-0 flex flex-wrap items-center justify-between border-t bg-white px-6 py-4 md:flex-row"
          aria-label="Table navigation"
        >
          <span className="mb-4 block w-full text-sm font-normal text-gray-500 dark:text-gray-400 md:mb-0 md:inline md:w-auto">
            Showing&nbsp;
            <span className="font-semibold text-gray-900">
              {startIndex + 1}-{startIndex + Math.min(rowsPerPage, 5)}
            </span>
            &nbsp; of <span className="font-semibold text-gray-900">{10}</span>
          </span>
          <ul className="inline-flex h-8 -space-x-px text-sm">
            <li>
              <button className="ms-0 flex h-8 items-center justify-center rounded-s-lg border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-brand-bg-secondary hover:text-app">
                Previous
              </button>
            </li>
            {Array.from({ length: 2 }, (_, i) => (
              <li key={i}>
                <button
                  className={`flex h-8 items-center justify-center border border-gray-300 px-3 leading-tight ${
                    currentPage === i + 1
                      ? "bg-brand-bg-secondary font-medium text-app hover:bg-brand-bg-secondary hover:text-app"
                      : "bg-white text-gray-500 hover:bg-brand-bg-secondary hover:text-app"
                  }`}
                >
                  {i + 1}
                </button>
              </li>
            ))}
            <li>
              <button className="flex h-8 items-center justify-center rounded-e-lg border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-brand-bg-secondary hover:text-app">
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

const Page = () => {
  const [startDate, setStartDate] = useState<Date | string>("");

  const [endDate, setEndDate] = useState<Date | string>("");

  const [clearDateDisabled, setClearDateDisabled] = useState(true);

  const clearDateFilters = () => {
    setStartDate("");
    setEndDate("");
    setClearDateDisabled(true);
  };

  const [currentPage, setCurrentPage] = useState(1);

  return (
    <>
      <Breadcrumb aria-label="Default breadcrumb example">
        <Breadcrumb.Item>
          <div className="rounded-lg text-app">
            <FontAwesomeIcon
              className="mr-2 flex-row items-center justify-center"
              icon={faBoxOpen}
            />
            Orders
          </div>
        </Breadcrumb.Item>
      </Breadcrumb>

      <div className="flex flex-col justify-start gap-4">
        <div className="flex flex-col gap-1">
          <div className="text-3xl font-semibold text-slate-primary">
            Orders
          </div>
          <div className="text-sm text-slate-secondary">
            Manage your Orders
          </div>
        </div>

        <div className="flex items-center justify-start gap-6">
          <div className="flex items-center justify-end gap-2">
            <div>Status :&nbsp;</div>

            <Dropdown label="Active" size="xs" color={"secondary"}>
              <Dropdown.Item>Active</Dropdown.Item>
              <Dropdown.Item>Fulfilled</Dropdown.Item>
              <Dropdown.Item>Cancelled</Dropdown.Item>
            </Dropdown>
          </div>
          <div className="ml-auto flex gap-2">
            <div className="flex items-center justify-center gap-2">
              <div>Start:</div>
              <Datepicker />
            </div>
            <div className="flex items-center justify-center gap-2">
              <div>End:</div>
              <Datepicker />
            </div>
            <Button
              color={"secondary"}
              size={"xs"}
              disabled={clearDateDisabled}
              onClick={clearDateFilters}
            >
              Clear
            </Button>
          </div>
        </div>
      </div>
      <TableComponent
        rowsPerPage={10}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        startDate={startDate}
        endDate={endDate}
      />
    </>
  );
};

export default WithAuth(Page);
