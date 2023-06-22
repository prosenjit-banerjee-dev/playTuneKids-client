import React from "react";
import img1 from "../../assets/images/images (9).jpg";
import img2 from "../../assets/images/images (10).jpg";
import img3 from "../../assets/images/download.jpg";
import { Carousel } from "flowbite-react";

const GalleryCard = () => {
  return (
    <div className="lg:grid grid-cols-3 gap-4 m-16">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={img1} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Sing-Along Toys</h2>
          <p>
            {" "}
            Let your little ones unleash their inner superstar with our
            sing-along toys. These interactive toys come with built-in
            microphones and pre-programmed songs.
          </p>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={img2} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Music-themed Plush Toys</h2>
          <p>
            Delight your little music lovers with our adorable music-themed
            plush toys. These soft and cuddly toys are designed in the shape of
            musical instruments, musical notes
          </p>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={img3} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Electronic Music Gadgets</h2>
          <p>
            Dive into the world of electronic music with our collection of music
            gadgets. These toys allow kids to create their own beats, remix
            songs, and experiment with different sound effects.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GalleryCard;
