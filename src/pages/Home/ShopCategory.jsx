import React, { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const ShopCategory = () => {
  const [categories, setCategories] = useState([]);
  const [activeTab, setActiveTab] = useState('Musical Instruments');

  useEffect(() => {
    fetch(
      `https://play-tune-kids-server-pbrudro.vercel.app/toydetails/${activeTab}`
    )
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, [activeTab]);
  // console.log(categories);
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    console.log(activeTab);
  };
  return (
    <div>
      {/* <div className="w-full mx-auto">
        <button
          onClick={() => handleTabClick("Musical Instruments")}
          className={
            activeTab == "Musical Instruments"
              ? "btn btn-success mr-3"
              : "btn btn-outline mr-3"
          }
        >
          Musical Instruments
        </button>
        <button
          onClick={() => handleTabClick("Educational Toys")}
          className={
            activeTab == "Educational Toys"
              ? "btn btn-success mr-3"
              : "btn btn-outline mr-3"
          }
        >
          Educational Toys
        </button>
        <button
          onClick={() => handleTabClick("Music Accessories")}
          className={
            activeTab == "Music Accessories"
              ? "btn btn-success mr-3"
              : "btn btn-outline mr-3"
          }
        >
          Music Accessories
        </button>
      </div> */}
      <Tabs>
        <TabList>
          <Tab
            onClick={() => handleTabClick("Musical Instruments")}
            className={
              activeTab == "Musical Instruments"
                ? "btn btn-success mr-3"
                : "btn btn-outline mr-3"
            }
          >
            Musical Instruments
          </Tab>
          <Tab
            onClick={() => handleTabClick("Educational Toys")}
            className={
              activeTab == "Educational Toys"
                ? "btn btn-success mr-3"
                : "btn btn-outline mr-3"
            }
          >
            Educational Toys
          </Tab>
          <Tab
            onClick={() => handleTabClick("Music Accessories")}
            className={
              activeTab == "Music Accessories"
                ? "btn btn-success mr-3"
                : "btn btn-outline mr-3"
            }
          >
            Music Accessories
          </Tab>
        </TabList>
            <TabPanel></TabPanel>
            <TabPanel></TabPanel>
            <TabPanel></TabPanel>
      
        <h2>{activeTab}</h2>
        <div className="lg:grid grid-cols-3 gap-5 mt-3">
            {categories?.map((c) => (
              <CategoryCard key={c._id} c={c}></CategoryCard>
            ))}
          </div>
      </Tabs>
    </div>
  );
};

export default ShopCategory;
