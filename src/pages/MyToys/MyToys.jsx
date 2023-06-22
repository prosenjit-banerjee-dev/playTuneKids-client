import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import MyToysCard from "./MyToysCard";
import { AuthContext } from "../../Providers/AuthProvider";

const MyToys = () => {
  const [updateToys, setUpdateToys] = useState([]);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    fetch(`http://localhost:5000/addedtoys/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setUpdateToys(data));
  }, [user]);
  return (
    <div>
      <div className="overflow-x-auto w-full">
        <h1 className="text-5xl font-bold text-center mb-5">My Toys</h1>
        <table className="table w-full ">
          {/* head */}
          <thead>
            <tr>
              <th>Toy Name</th>
              <th>Price</th>
              <th>Sub-category</th>
              <th>Available Quantity</th>
              <th>Seller</th>
              <th>Actions</th>
            </tr>
          </thead>
          {updateToys?.map((toys) => (
            <MyToysCard
              key={toys._id}
              toys={toys}
              updateToys={updateToys}
              setUpdateToys={setUpdateToys}
              user={user}
            ></MyToysCard>
          ))}
        </table>
      </div>
    </div>
  );
};

export default MyToys;
