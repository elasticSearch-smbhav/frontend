"use client";

import LineChartComponent from "@/components/charts/lineChart";
import WithAuth from "@/hoc/withAuth";
import axiosInstance from "@/utils/axiosInstance";
import {
    faPaperPlane,
    faRefresh,
    faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Breadcrumb, Button, TextInput } from "flowbite-react";
import { useEffect, useState } from "react";

interface DataPoint {
  name: string;
  value: number;
}

const data: DataPoint[] = [
  {
    name: "Dec 1",
    value: 35,
  },
  {
    name: "Dec 8",
    value: 56,
  },
  {
    name: "Dec 15",
    value: 72,
  },
  {
    name: "Dec 22",
    value: 92,
  },
  {
    name: "Dec 29",
    value: 32,
  },
  {
    name: "Jan 5",
    value: 5,
  },
];

const Page = () => {
  const [selectedItemName, setSelectedItemName] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [searchResults, setSearchResults] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [forecastData, setForecastData] = useState<any[]>([]);

  const fetchForecastData = async () => {
    try {
      const { data } = await axiosInstance.get("/forecasting");
      setForecastData(data);
    } catch (error) {
      console.error("Failed to fetch forecast data", error);
    }
  };

  useEffect(() => {
    if (searchQuery.toLowerCase() === "san") {
      console.log("searchQuery", searchQuery);
      setSearchResults(["Santa Hat"]);
      setOpen(true);
    }
  }, [searchQuery]);

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
                    searchResults.map((name: string, index) => (
                      <div
                        onClick={() => {
                          setLoading(true);
                          setOpen(false);
                          setTimeout(() => {
                            setSelectedItemName(name);
                          }, 3000);
                        }}
                        key={index}
                        className="flex cursor-pointer gap-2 p-2 px-4 text-slate-secondary transition-colors duration-100 ease-in-out hover:bg-gray-50 hover:text-app"
                      >
                        {name}
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
      {selectedItemName && (
        <div className="w-full rounded-xl border border-app p-2 px-4 gap-6 flex justify-between items-center">
          <div className="flex-1 bg-app-bg-primary text-app font-semibold text-xl p-2 px-4 rounded-xl">
            Increasing demand predicted for upcoming months
          </div>
          <div className=" flex justify-start items-center gap-4">
            <div className="text-app font-semibold text-xs border border-app py-1 px-2 rounded-full">
              AI Powered
            </div>
          </div>
        </div>
      )}
      {selectedItemName ? (
        <div className="w-full p-6 border rounded-xl flex flex-col justify-start items-start gap-8">
          <div className="text-slate-primary font-medium text-xl">
            Demand Forecasting of&nbsp;
            <span className="text-app hover:text-app-dark cursor-pointer transition-colors duration-100">
              {selectedItemName}
            </span>
          </div>
          <LineChartComponent data={data} />
        </div>
      ) : (
        <div className="w-full p-6 border rounded-xl flex flex-col justify-start items-start gap-8">
          <div>
            {loading ? "Please wait..." : "The forecast will appear here"}
          </div>
        </div>
      )}
    </>
  );
};

export default WithAuth(Page);
