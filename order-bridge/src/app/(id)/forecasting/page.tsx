"use client";

import LineChartComponent from "@/components/charts/lineChart";
import {
    faPaperPlane,
    faRefresh,
    faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Breadcrumb, Button, TextInput } from "flowbite-react";
import { useState } from "react";

interface DataPoint {
  name: string;
  value: number;
}

const data: DataPoint[] = [
  {
    name: "Nov",
    value: 35,
  },
  {
    name: "Dec",
    value: 95,
  },
  {
    name: "Jan",
    value: 10,
  },
  {
    name: "Feb",
    value: 5,
  },
  {
    name: "Mar",
    value: 5,
  },
  {
    name: "Apr",
    value: 5,
  },
];

const Page = () => {
  const [selectedItemId, setSelectedItemId] = useState("");
  const [selectedItemName, setSelectedItemName] = useState("Santa Hat");
  const [searchQuery, setSearchQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [searchResults, setSearchResults] = useState<any>([]);

  return (
    <>
      <Breadcrumb aria-label="Default breadcrumb example">
        <Breadcrumb.Item>
          <div className="rounded-lg text-app">
            <FontAwesomeIcon
              className="mr-2 flex-row items-center justify-center"
              icon={faPaperPlane}
            />
            Forecasting
          </div>
        </Breadcrumb.Item>
      </Breadcrumb>
      <div className="flex flex-col items-start justify-start w-full">
        <div className="text-3xl font-semibold text-slate-primary">
          Forecasting
        </div>
        <div className="text-sm text-slate-secondary">
          Demand Forecasting of Inventory items
        </div>
      </div>
  
      <div className="w-full rounded-xl border border-app p-2 px-4 gap-6 flex justify-between items-center">
        <div className="flex-1 bg-app-bg-primary text-app font-semibold text-xl p-2 px-4 rounded-xl">
          Increasing demand predicted for upcoming months
        </div>
        <div className=" flex justify-start items-center gap-4">
          <Button color="purple" size="sm">
            Add Stock
          </Button>
          <div className="text-app font-semibold text-xs border border-app py-1 px-2 rounded-full">
            AI Powered
          </div>
        </div>
      </div>
      <div className="flex items-center justify-start gap-6">
        {selectedItemName === "" ? (
          <div className="relative">
            <TextInput
              type="text"
              sizing="sm"
              color="primary"
              placeholder="Search by Item"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {open && (
              <div className="absolute z-20 mt-2 w-80 rounded border overflow-y-auto bg-white text-slate-primary drop-shadow">
                <div>
                  {searchResults.length > 0 ? (
                    searchResults.map((item: any) => (
                      <div
                        onClick={() => {
                          setSelectedItemId(item.id);
                          setSelectedItemName(item.name);
                          setOpen(false);
                        }}
                        key={item.id}
                        className="flex cursor-pointer gap-2 p-2 px-4 text-slate-secondary transition-colors duration-100 ease-in-out hover:bg-gray-50 hover:text-app"
                      >
                        {item.name}
                      </div>
                    ))
                  ) : (
                    <div>No results found</div>
                  )}
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="flex items-center justify-center gap-2">
            <div>Item:</div>
            <div className="jus flex cursor-pointer items-center gap-2 rounded-lg border bg-transparent px-2 py-1 text-sm bg-app-bg-primary text-app">
              <div>{selectedItemName}</div>
              <FontAwesomeIcon
                icon={faTimes}
                onClick={() => {
                  setSelectedItemName("");
                  setOpen(true);
                }}
              />
            </div>
          </div>
        )}
        <div className="ml-auto flex gap-2">
          <Button color="purple" size="sm">
            Sync Data
            <FontAwesomeIcon icon={faRefresh} className="text-base ml-2" />
          </Button>
        </div>
      </div>
      <div className="w-full p-6 border rounded-xl flex flex-col justify-start items-start gap-8">
        <div className="text-slate-primary font-medium text-xl">
          Demand Forecasting of{" "}
          <span className="text-app hover:text-app-dark cursor-pointer transition-colors duration-100">
            Santa Hat
          </span>
        </div>
        <LineChartComponent data={data} />
      </div>
    </>
  );
};

export default Page;
