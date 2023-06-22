import React from "react";
import NavigationBar from "../pages/Shared/NavigationBar/NavigationBar";
import FooterSection from "../pages/Shared/FooterSection/FooterSection";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <Outlet></Outlet>
      <FooterSection></FooterSection>
    </div>
  );
};

export default Main;
