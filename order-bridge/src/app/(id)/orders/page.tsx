"use client";

import WithAuth from "@/hoc/withAuth";
import axiosInstance from "@/utils/axiosInstance";
import { formatDate } from "@/utils/helpers";
import { faBoxOpen, faRefresh } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Breadcrumb, Button, Dropdown, Modal } from "flowbite-react";
import { useEffect, useState } from "react";

interface TableComponentProps {
  rowsPerPage: number;
  currentPage: number;
  setCurrentPage: (currentPage: number) => void;
  status: string;
  refreshData: boolean;
}

const TableComponent = ({
  rowsPerPage,
  currentPage,
  setCurrentPage,
  status,
  refreshData,
}: TableComponentProps) => {
  const startIndex = (currentPage - 1) * rowsPerPage;

  const [data, setData] = useState<any[]>([]);

  const [statusFilterData, setStatusFilterData] = useState<any[]>([]);

  const [selectedOrder, setSelectedOrder] = useState<any | null>(null);

  const fetchOrders = async () => {
    try {
      const response = await axiosInstance.get("/allorders");
      setData(response.data.orders);
      setStatusFilterData(response.data.orders);
    } catch (error) {
      console.error("Failed to fetch orders", error);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, [refreshData]);

  useEffect(() => {
    const newData = data.filter((order) => {
      if (status === "All") {
        return true;
      }
      return order.FulfillmentOrderStatus === status;
    });
    setStatusFilterData(newData);
  }, [status, refreshData]);

  return (
    <>
      <Modal
        show={selectedOrder !== null}
        onClose={() => {
          setSelectedOrder(null);
        }}
        dismissible
      >
        <Modal.Header>
          <div className="font-bold text-lg text-app">Item Details</div>
        </Modal.Header>
        <Modal.Body>
          <div className="text-lg text-app">
            Order ID : {selectedOrder?.OrderId}
          </div>
          <div className="w-full flex-col flex divide-y">
            {selectedOrder?.ListItems.map((item: any, index: number) => (
              <div key={index} className="w-full flex flex-col gap-1 p-2">
                <div className=" text-slate-primary">SKU ID: {item.SKU}</div>
                <div className=" text-slate-primary">Qty: {item.Quantity}</div>
              </div>
            ))}
          </div>
        </Modal.Body>
      </Modal>
      <div className="relative">
        <div className="relative z-0 overflow-x-auto border border-gray-200 sm:rounded-lg">
          <table className="w-full text-left text-sm text-gray-500">
            <thead className="bg-gray-100 text-xs uppercase text-gray-700">
              <tr>
                <th className="px-6 py-3">Order ID</th>
                <th className="px-6 py-3">Placed On</th>
                <th className="px-6 py-3">No. of Items</th>
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {statusFilterData.map((order, index) => (
                <tr
                  key={index}
                  className="cursor-pointer border-b bg-white transition-colors duration-100 ease-in-out text-slate-primary"
                >
                  <td className="px-6 py-4">{order.OrderId}</td>
                  <td className="px-6 py-4">
                    {formatDate(order.PurchaseDate)}
                  </td>
                  <td className="px-6 py-4">{order.ListItems.length}</td>
                  <td className="px-6 py-4">{order.FulfillmentOrderStatus}</td>
                  <td className="px-6 py-4">
                    <Button
                      color={"secondary"}
                      size={"xs"}
                      onClick={() => setSelectedOrder(order)}
                    >
                      Item Details
                    </Button>
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
                {startIndex + 1}-
                {startIndex + Math.min(rowsPerPage, statusFilterData.length)}
              </span>
              &nbsp; of{" "}
              <span className="font-semibold text-gray-900">
                {statusFilterData.length}
              </span>
            </span>
            <ul className="inline-flex h-8 -space-x-px text-sm">
              <li>
                <button className="ms-0 flex h-8 items-center justify-center rounded-s-lg border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-brand-bg-secondary hover:text-app">
                  Previous
                </button>
              </li>
              {Array.from({ length: 1 }, (_, i) => (
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
    </>
  );
};

const Page = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const [status, setStatus] = useState("All");

  const [refreshData, setRefreshData] = useState(false);

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
          <div className="text-sm text-slate-secondary">Manage your Orders</div>
        </div>

        <div className="flex items-center justify-start gap-6">
          <div className="flex items-center justify-end gap-2">
            <div>Status :&nbsp;</div>

            <Dropdown label={status} size="xs" color={"secondary"}>
              <Dropdown.Item onClick={() => setStatus("All")}>
                All
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setStatus("Received")}>
                Received
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setStatus("Invalid")}>
                Invalid
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setStatus("Planning")}>
                Planning
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setStatus("Processing")}>
                Processing
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setStatus("Cancelled")}>
                Cancelled
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setStatus("Complete")}>
                Complete
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setStatus("CompletePartialled")}>
                CompletePartialled
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setStatus("Unfulfillable")}>
                Unfulfillable
              </Dropdown.Item>
            </Dropdown>
          </div>
          <Button
            onClick={() => {
              setStatus("All");
              setRefreshData(!refreshData);
            }}
            className="ml-auto"
            color="purple"
            size="xs"
          >
            Sync Data
            <FontAwesomeIcon icon={faRefresh} className="text-base ml-2" />
          </Button>
        </div>
      </div>
      <TableComponent
        rowsPerPage={10}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        status={status}
        refreshData={refreshData}
      />
    </>
  );
};

export default WithAuth(Page);
