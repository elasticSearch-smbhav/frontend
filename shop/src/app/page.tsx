"use client";

import ItemCard from "@/components/itemCard";
import axios from "axios";
import { useEffect, useState } from "react";



const Page = () => {
  const [listings, setListings] = useState<any[]>([]);

  const fetchListings = async () => {
    try {
      const { data } = await axios.get("http://localhost:8080/listings");
      setListings(data.listings);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchListings();
  }, []);

  return (
    <div>

      {listings.length > 0 && (
        <div className="flex w-full flex-row flex-wrap gap-6 p-4 justify-center">
          {listings.map((listing: any, index) => (
            <ItemCard key={index} item={listing} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Page;
