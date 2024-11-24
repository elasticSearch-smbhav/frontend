"use client";

import { useCart } from "@/context/cartProvider";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navbar } from "flowbite-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();

  const { items } = useCart();
  return (
    <Navbar fluid className="bg-cyan-700">
      <Navbar.Brand>
        <div
          onClick={() => router.push("/")}
          className="self-center whitespace-nowrap text-xl font-semibold text-white cursor-pointer"
        >
          Online Shop
        </div>
      </Navbar.Brand>

      <div className="flex gap-4">
        <Link
          href={"/cart"}
          className="flex gap-2  justify-center items-center bg-white p-2 rounded-md hover:bg-gray-200"
        >
          <FontAwesomeIcon
            icon={faShoppingCart}
            className="text-2xl text-black"
          />
          {items.length > 0 && (
            <span className=" text-xs bg-red-500 text-white font-medium rounded-full px-2 p-1 hover:bg-red-500">
              {items.length}
            </span>
          )}
        </Link>
        <Link
          href={"/orders"}
          className="ml-auto flex gap-2  justify-center items-center bg-white p-2 rounded-md hover:bg-gray-200"
        >
          My Orders
        </Link>
      </div>
      <Navbar.Toggle />
    </Navbar>
  );
};
export default Header;
