import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Providers/AuthProvider';
import { useForm } from 'react-hook-form';
import { useLoaderData } from 'react-router-dom';

const EditToys = () => {
  const { user } = useContext(AuthContext);
  const data = useLoaderData();

  const {
    _id,
    name,
    seller_name,
    seller_email,
    price,
    description,
    sub_category,
    quantity,
    rating,
    status,
  } = data || {};
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const handleEdit = (data) => {
    console.log(data);
    fetch(`https://play-tune-kids-server-pbrudro.vercel.app/addtoys/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "You Update the Your Toys",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <div className="card w-full max-w-2xl mx-auto shadow-2xl bg-sky-100 p-4 mt-6 mb-6">
    <h1 className="text-5xl font-bold text-center mb-5">Update A Toy</h1>
    <div className="card-body">
      <form onSubmit={handleSubmit(handleEdit)}>
        <div className="lg:grid grid-cols-2 gap-4">
          
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
          value="Update A Toy"
        />
      </form>
    </div>
  </div>
  );
};

export default EditToys;