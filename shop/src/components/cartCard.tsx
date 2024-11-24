import { useCart } from "@/context/cartProvider";
import { formatCurrency } from "@/utils/helper";
import Image from "next/image";

const CartCard = ({ item }: { item: any }) => {
  const { items, modifyQuantity } = useCart();

  return (
    <div className="p-4 flex gap-2 border border-gray-300 shadow rounded-md">
      <div className="w-1/12">
        <Image
          src={item.item["Image Urls"].split("|")[0]}
          alt={""}
          width={0}
          height={0}
          sizes="100%"
          className="w-full aspect-square"
        />
      </div>
      <div className="flex flex-col gap-2">
        <div className="text-lg font-bold text-slate-primary">
          {item.item["Product Title"]}
        </div>
        <div className="flex gap-6 justify-start items-center">
          <div className="text-lg font-bold text-slate-primary">
            Price: {formatCurrency(item.item["Price"])}
          </div>
          <div className="min-w-32">
            <button
              onClick={() => {
                modifyQuantity(item.item["Unique ID"], -1);
              }}
              className="px-2 py-1 bg-black hover:bg-gray-500 text-white rounded disabled:bg-gray-300"
            >
              -
            </button>
            <span className="text-lg px-4 font-bold border-2 border-gray-300">
              {item.quantity}
            </span>
            <button
              onClick={() => {
                modifyQuantity(item.item["Unique ID"], 1);
              }}
              className="px-2 py-1 bg-black hover:bg-gray-500 text-white rounded"
            >
              +
            </button>
          </div>
        </div>
      </div>
      <div className="ml-auto min-w-32 text-lg font-bold text-cyan-700">
        Amount: {formatCurrency(item.item["Price"] * item.quantity)}
      </div>
    </div>
  );
};

export default CartCard;
