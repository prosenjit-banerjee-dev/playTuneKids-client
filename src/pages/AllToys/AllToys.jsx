import React from "react";
import { useLoaderData } from "react-router-dom";
import AllToysCard from "./AllToysCard";

const AllToys = () => {
  const toysData = useLoaderData();
  return (
    <div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full ">
          {/* head */}
          <thead>
            <tr>
              <th>Toy Name</th>
              <th>Price</th>
              <th>Sub-category</th>
              <th>Available Quantity</th>
              <th>Seller</th>
              <th></th>
            </tr>
          </thead>
          {toysData?.map((toys) => (
            <AllToysCard key={toys._id} toys={toys}></AllToysCard>
          ))}
        </table>
      </div>
    </div>
  );
};

export default AllToys;
