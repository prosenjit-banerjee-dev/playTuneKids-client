import React from "react";
import img1 from '../.././assets/images/istockphoto-1097258406-612x612.jpg'

import { Link } from "react-router-dom";


const GallerySection = () => {
  return (
    <div>
      <div className="max-w-full mx-auto bg-base-200 mt-16">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={img1}
            className="max-w-md rounded-xl mr-5"
          />
          <div className="max-w-xl">
            <h1 className="text-5xl font-bold">All types of music Toys</h1>
            <p className="py-6">
            Our collection of musical instruments for kids includes colorful xylophones, mini keyboards, tambourines, and more. Spark your child's creativity and help them discover the joy of music through play.
            </p>
            <Link to='/alltoys'>
            <button className="btn btn-primary">All Toys</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GallerySection;
