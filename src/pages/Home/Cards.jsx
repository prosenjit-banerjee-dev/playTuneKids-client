import { Button } from "flowbite-react";
import React from "react";
import img2 from "../.././assets/images/musical-instruments-collection-white-background-top-view_635416-381.jpg";
import img3 from "../.././assets/images/toys-games-children-horizontal-bright-rainbow-montessori-toys-games-children-horizontal-bright-rainbow-white-168981333.jpg";

const Cards = () => {
  return (
    <div className="lg:flex gap-4 justify-center p-2 gap-6 m-16">
      <div className="card bg-gradient-to-r from-blue-300 to-pink-300  mb-4 ">
        <div className="card-body">
          <h2 className="card-title">Play, Fun & Explore Musical Toys</h2>
          <small>
            {" "}
            Welcome to our enchanting kingdom of musical toys designed
            exclusively for kids. Unleash their creativity, foster their love
            for music, and watch them shine as they embark on a melodic
            adventure like no other.
          </small>
          <div className="card-actions justify-start mt-3">
            <button className="btn btn-primary btn-outline">Explore</button>
          </div>
        </div>
      </div>
      <div className="card bg-gradient-to-r from-blue-300 to-pink-300  mb-4">
        <div className="card-body">
          <h2 className="card-title">Interactive Music Learning Toys</h2>
          <small>
            {" "}
            Our interactive music learning toys offer a fun and educational
            experience. With features like lights, sound effects, and built-in
            lessons, children can explore different musical concepts while
            having a blast.
          </small>
          <div className="card-actions justify-start mt-3">
            <button className="btn btn-primary btn-outline">Get Toys</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
