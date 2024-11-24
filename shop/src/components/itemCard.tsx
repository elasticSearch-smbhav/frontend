"use client";

import { useCart } from "@/context/cartProvider";
import { formatCurrency } from "@/utils/helper";
import { Button } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import { toast } from "react-toastify";

interface CartItem {
  id: string;
  quantity: number;
  item: any;
}

const ItemCard = ({ item }: { item: any }) => {
  const { addItem, getItem, modifyQuantity } = useCart();

  const handleAddToCart = () => {
    const cartItem: CartItem = {
      id: item["Unique ID"],
      quantity: 1,
      item: item,
    };
    addItem(cartItem);
    toast.success("Item added to cart");
  };

  const quantity = getItem(item["Unique ID"])?.quantity || 0;

  const image = item["Image Urls"].split("|")[0];
  return (
    <div className="w-72 flex flex-col gap-2 border border-gray-300 shadow-md rounded-md">
      <Image
        src={image}
        alt={""}
        width={0}
        height={0}
        sizes="100%"
        className="w-full aspect-square"
      />
      <div className="px-4 py-2 pt-0 w-full flex flex-col gap-2 flex-1">
        <Link
          href="#"
          className="text-base font-semibold tracking-tight text-gray-900 dark:text-white hover:text-cyan-700"
        >
          {item["Product Title"]}
        </Link>

        <div className="flex items-center justify-between mt-auto">
          <span className="text-2xl font-bold text-gray-900 dark:text-white">
            {formatCurrency(item["Price"])}
          </span>
          {getItem(item["Unique ID"]) ? (
            <div className="flex items-center">
              <button
                onClick={() => {
                  modifyQuantity(item["Unique ID"], -1);
                }}
                className="px-2 py-1 bg-black hover:bg-gray-500 text-white rounded disabled:bg-gray-300"
              >
                -
              </button>
              <span className="text-lg px-4 font-bold border-2 border-gray-300">{quantity}</span>
              <button
                onClick={() => {
                  modifyQuantity(item["Unique ID"], 1);
                }}
                className="px-2 py-1 bg-black hover:bg-gray-500 text-white rounded"
              >
                +
              </button>
            </div>
          ) : item["Status"] == "DISCOVERABLE" ? (
            <Button disabled>Out of Stock</Button>
          ) : (
            <Button onClick={handleAddToCart}>Add to Cart</Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
