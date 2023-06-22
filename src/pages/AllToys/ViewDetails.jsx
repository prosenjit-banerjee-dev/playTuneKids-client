import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const ViewDetails = () => {
  const {
    name,
    picture_url,
    seller_name,
    seller_email,
    price,
    description,
    sub_category,
    quantity,
    rating,
  } = useLoaderData();
  return (
    // <div>
    //   {/* The button to open modal */}
    //   <label htmlFor="my-modal-3" className="btn">
    //     View Details
    //   </label>

    //   {/* Put this part before </body> tag */}
    //   <input type="checkbox" id="my-modal-3" className="modal-toggle" />
    //   <div className="modal">
    //     <div className="modal-box relative bg-sky-200">
    //       <label
    //         htmlFor="my-modal-3"
    //         className="btn btn-sm btn-circle absolute right-2 top-2"
    //       >
    //         ✕
    //       </label>
    //       <div className="flex space-x-6">
    //       <img className="w-36 h-36 rounded-lg mb-5" src={picture_url} alt="" />
    //       <div>
    //       <h3 className="text-lg font-bold">{name}</h3>
    //       <p className="py-4">Price: ${price}</p>
    //       <p>
    //         Seller Name: {seller_name} <br />
    //         <span className="">Seller Email: {seller_email}</span>
    //       </p>
    //       <p className="py-4">Description: {description}</p>
    //       </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
   <div>
     <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row space-x-8">
        <img
          src={picture_url} className="w-56 h-56 rounded-xl"
        />
        <div>
          <h1 className="text-5xl font-bold">{name}</h1>
          <p className="py-4">Price: ${price}</p>
          <p>
            Seller Name: {seller_name} <br />
             <span className="">Seller Email: {seller_email}</span>
           </p>
         <p className="py-4">Description: {description}</p>
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
        <Link to ={-1}><button className="btn btn-outline">Go Back</button></Link>
   </div>
  );
};

export default ViewDetails;
