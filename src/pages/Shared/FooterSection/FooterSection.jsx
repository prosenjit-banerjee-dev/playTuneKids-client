import { Footer } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import logo2 from "../../../assets/logo.png";

const FooterSection = () => {
  return (
    <>
      <footer className="footer p-10 bg-neutral text-neutral-content">
        <div >
          <img src={logo2} alt="" className="mr-3 h-9 lg:h-16 rounded-full" />
          <p>
            KidsPlay Musical
            <br />
            Since 2006
          </p>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <Link className="link link-hover">Branding</Link>
          <Link className="link link-hover">Design</Link>
          <Link className="link link-hover">Marketing</Link>
          <Link className="link link-hover">Advertisement</Link>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <Link className="link link-hover">About us</Link>
          <Link className="link link-hover">Contact</Link>
          <Link className="link link-hover">Jobs</Link>
          <Link className="link link-hover">Press kit</Link>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <Link className="link link-hover">Terms of use</Link>
          <Link className="link link-hover">Privacy policy</Link>
          <Link className="link link-hover">Cookie policy</Link>
        </div>
      </footer>
      <div className="w-full bg-gray-700 text-white py-6 px-4 sm:flex sm:items-center sm:justify-between">
        <Link to="/">
          <p>© 2023 KidsPlay Musical</p>
        </Link>
        <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
          <Link to="https://www.facebook.com/">Facebook</Link>
          <Link to="https://www.instagram.com/">Instagram</Link>
          <Link to="https://www.twitter.com/">Twitter</Link>
        </div>
      </div>
    </>
  );
};

export default FooterSection;
