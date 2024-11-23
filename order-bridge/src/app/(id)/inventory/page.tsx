"use client";

import { formatCurrency } from "@/utils/helpers";
import { faWarehouse } from "@fortawesome/free-solid-svg-icons";
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
    image: "/assets/logo.svg",
    item: "Item 1",
    availableQty: 1,
    skuId: "ABC123",
    ordersPlaced: 10,
    sellingPrice: 3999,
  },
  {
    image: "/assets/logo.svg",
    item: "Item 1",
    availableQty: 1,
    skuId: "ABC123",
    ordersPlaced: 10,
    sellingPrice: 3999,
  },
  {
    image: "/assets/logo.svg",
    item: "Item 1",
    availableQty: 1,
    skuId: "ABC123",
    ordersPlaced: 10,
    sellingPrice: 3999,
  },
  {
    image: "/assets/logo.svg",
    item: "Item 1",
    availableQty: 1,
    skuId: "ABC123",
    ordersPlaced: 10,
    sellingPrice: 3999,
  },
  {
    image: "/assets/logo.svg",
    item: "Item 1",
    availableQty: 1,
    skuId: "ABC123",
    ordersPlaced: 10,
    sellingPrice: 3999,
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
              <th className="px-6 py-3">Available Qty</th>
              <th className="px-6 py-3">SKU ID</th>
              <th className="px-6 py-3">Orders Placed</th>
              <th className="px-6 py-3">Selling Price</th>
              <th className="px-6 py-3"></th>
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
                <td className="px-6 py-4">{item.availableQty}</td>
                <td className="px-6 py-4">{item.skuId}</td>
                <td className="px-6 py-4">{item.ordersPlaced}</td>
                <td className="px-6 py-4">
                  {formatCurrency(item.sellingPrice)}
                </td>
                <td className="px-6 py-4">
                  <span className="text-app font-semibold text-md hover:text-app-dark transition-colors duration-100 ease-in-out">
                    ADD MORE
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
              icon={faWarehouse}
            />
            Inventory
          </div>
        </Breadcrumb.Item>
      </Breadcrumb>

      <div className="flex flex-col justify-start gap-4">
        <div className="flex flex-col gap-1">
          <div className="text-3xl font-semibold text-slate-primary">
            Inventory
          </div>
          <div className="text-sm text-slate-secondary">
            Manage your Inventory
          </div>
        </div>

        <div className="flex items-center justify-start gap-6">
          <div className="flex items-center justify-end gap-2">
            <div>Status :&nbsp;</div>

            <Dropdown label="All" size="xs" color={"secondary"}>
              <Dropdown.Item>All</Dropdown.Item>
              <Dropdown.Item>In Stock</Dropdown.Item>
              <Dropdown.Item>Out Of Stock</Dropdown.Item>
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

export default Page;
