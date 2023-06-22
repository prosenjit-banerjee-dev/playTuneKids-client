import React, { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const AddToys = () => {
  const { user } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    fetch("https://play-tune-kids-server-pbrudro.vercel.app/addedtoys", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId > 0) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <div className="card w-full max-w-2xl mx-auto shadow-2xl bg-sky-100 p-4 mt-6 mb-6">
      <h1 className="text-5xl font-bold text-center mb-5">Add Toys</h1>
      <div className="card-body">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="lg:grid grid-cols-2 gap-4">
            <div>
              <p>Toy Name :</p>
              <input className="input input-bordered" {...register("name",{ required: true, maxLength: 20 })} />
            </div>
            <div>
              <p>Seller Email:</p>
              <input
                className="input input-bordered"
                defaultValue={user?.email}
                {...register("seller_email", { required: "Email Address is required" })}
              />
            </div>
            <div>
              <p>Photo URL :</p>
              <input
                className="input input-bordered"
                {...register("picture_url")}
              />
            </div>
            <div>
              <p>Select Category:</p>
              <select {...register("sub_category",{ required: "Sub Category required" })} >
                <option value="Musical Instruments">Musical Instruments</option>
                <option value="Educational Toys">Educational Toys</option>
                <option value="Music Accessories">Music Accessories</option>
              </select>
            </div>

            <div>
              <p>Seller name:</p>
              <input
                className="input input-bordered"
                defaultValue={user?.displayName}
                {...register("seller_name", { required:true, maxLength: 20 })}
              />
            </div>
            <div>
              <p>Available Quantity :</p>
              <input
                className="input input-bordered"
                {...register("quantity",{ required: "Available Quantity required" })}
              />
            </div>
            <div>
              <p>Price :</p>
              <input
                className="input input-bordered"
                {...register("price", { required: true },{ required: "Price is required" })}
              />
            </div>
            <div>
              <p>Rating :</p>
              <input className="input input-bordered" {...register("rating",{ required: true })} />
            </div>
          </div>
          <div>
            <p>Description :</p>
            <input
              className="input input-bordered w-full h-32"
              {...register("description")}
            />
          </div>
          <div>
            {errors.email && <span>This field is required</span>}
          </div>
          <input
            className="btn btn-primary mt-5 w-full"
            type="submit"
            value="Add Toy"
          />
        </form>
      </div>
    </div>
  );
};

export default AddToys;
