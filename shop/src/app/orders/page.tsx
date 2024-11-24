"use client";

import axiosInstance from "@/utils/axiosInstance";
import { formatDate } from "@/utils/helper";
import { Accordion } from "flowbite-react";
import { useEffect, useState } from "react";

const Page = () => {
  const [orders, setOrders] = useState<any[]>([]);
  const fetchOrders = async () => {
    try {
      const { data } = await axiosInstance.get("/allorders");
      setOrders(data.orders);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="w-full flex flex-col justify-start items-center pt-10 px-10 ">
      {orders.length > 0 ? (
        <>
          <div className="w-full max-w-screen-lg  flex flex-col gap-4">
            {orders.map((order: any, index) => (
              <Accordion key={index}>
                <Accordion.Panel>
                  <Accordion.Title className="w-full">
                    <div className="w-full  flex gap-2 p-2">
                      <div className="flex flex-col gap-2">
                        <div className="text=xl text-slate-primary font-semibold">
                          Order Id:&nbsp;{order.OrderId}
                        </div>

                        <div className="font-light text-slate-primary">
                          Purchase Date: {formatDate(order.PurchaseDate)}
                        </div>
                      </div>
                      <div className="text-lg font-semibold text-cyan-700 ml-auto min-w-40">
                        Status : {order.FulfillmentOrderStatus}
                      </div>
                    </div>
                  </Accordion.Title>
                  <Accordion.Content>
                    <div className="w-full flex flex-col gap-2 divide-y">
                      {order.ListItems.map((item: any, index: number) => (
                        <div key={index} className="w-full flex gap-2 p-2">
                          <div className="flex flex-col gap-2">
                            <div className="text-sm text-slate-primary font-semibold">
                              SKU:&nbsp;{item.SKU}
                            </div>
                            <div className="text-sm text-slate-primary font-semibold">
                              Quantity:&nbsp;{item.Quantity}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Accordion.Content>
                </Accordion.Panel>
              </Accordion>
            ))}
          </div>
        </>
      ) : (
        <div className="text-2xl font-bold text-gray-900 dark:text-white">
          No orders found
        </div>
      )}
    </div>
  );
};

export default Page;

{
  /* <div
key={index}
className="w-full shadow rounded border border-gray-300 flex gap-2 p-4"
>
<div className="flex flex-col gap-2">
  <div className="text=xl text-slate-primary font-semibold">
    Order Id:&nbsp;{order.OrderId}
  </div>
</div>
<div className="text-lg font-semibold text-cyan-700 ml-auto min-w-40">
  Status : {order.FulfillmentOrderStatus}
</div>
</div> */
}
