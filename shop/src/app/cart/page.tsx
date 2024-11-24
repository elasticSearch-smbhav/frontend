"use client";

import CartCard from "@/components/cartCard";
import { useCart } from "@/context/cartProvider";
import axiosInstance from "@/utils/axiosInstance";
import { formatCurrency } from "@/utils/helper";
import { format } from "date-fns";
import { Button } from "flowbite-react";
import { toast } from "react-toastify";

interface Order {
  FulfillmentOrderStatus: string;
  ListItems: Array<{
    Quantity: number;
    SKU: string;
  }>;
  OrderId: string;
  PurchaseDate: string;
}

const Page = () => {
  const { items, getTotalAmount, clearCart } = useCart();

  const handlePlaceOrders = async () => {
    try {
      const orderObj: Order = {
        FulfillmentOrderStatus: "Received",
        ListItems: items.map((item) => ({
          Quantity: item.quantity,
          SKU: item.item["Unique ID"],
        })),
        OrderId: new Date().getTime().toString(),
        PurchaseDate: format(new Date(), "yyyy-MM-dd HH:mm:ss"),
      };

      await axiosInstance.post("/placeorder", {
        ...orderObj,
      });
      clearCart();
      toast.success("Order placed successfully");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-full flex flex-col justify-start items-center pt-10 px-10 ">
      {items.length > 0 ? (
        <>
          <div className="w-full max-w-screen-lg p-4 flex justify-between gap-2">
            <div className="text-3xl text-cyan-800 font-bold">
              Total: {formatCurrency(getTotalAmount())}
            </div>
            <Button color="success" onClick={handlePlaceOrders}>
              Place Order
            </Button>
          </div>
          <div className="w-full max-w-screen-lg  flex flex-col gap-2">
            {items.map((item: any, index) => (
              <CartCard key={index} item={item} />
            ))}
          </div>
        </>
      ) : (
        <div className="text-2xl font-bold text-gray-900 dark:text-white">
          Your cart is empty
        </div>
      )}
    </div>
  );
};

export default Page;
