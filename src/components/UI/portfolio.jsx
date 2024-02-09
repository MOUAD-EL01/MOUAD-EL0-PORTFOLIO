import React, { useState, useEffect } from "react";
import data from "../../assets/data/portfolioData";
import Model from "./Model";

const portfolio = () => {
  const [nextItems, setNextItems] = useState(6);
  const [portfolios, setPortfolios] = useState(data);
  const [selectedTap, setSelectedTap] = useState("all");
  const [showModal, setshowModal] = useState(false);
  const [activeID, setActiveID] = useState(null);
  const showModalHandler = (id) => {
    setshowModal(true);
    setActiveID(id);
  };
  const loadMoreHandler = () => {
    setNextItems((prev) => prev + 3);
  };
  useEffect(() => {
    if (selectedTap === "all") {
      setPortfolios(data);
    }
    if (selectedTap === "Front-End") {
      const filterData = data.filter((item) => item.category === "Front-End"); // Change '=' to '==='
      setPortfolios(filterData);
    }
    if (selectedTap === "Back-End") {
      const filterData = data.filter((item) => item.category === "Back-End"); // Change '=' to '==='
      setPortfolios(filterData);
    }
    if (selectedTap === "Wordpress") {
      const filterData = data.filter((item) => item.category === "Wordpress"); // Change '=' to '==='
      setPortfolios(filterData);
    }
  }, [selectedTap]);

  return (
    <section className="" id="portfolio">
      <div className=" container lg:px-20 md:pt-4">
        <div className=" flex items-center justify-between flex-wrap">
          <div className="mb-7 sm:mb-0">
            <h3 className=" text-headingColor pl-16 text-[2rem] font-[700]">
              My recent Project:
            </h3>
          </div>
          {/* <div className="flex gap-1">
            {" "}
            <button
              onClick={() => setSelectedTap("all")}
              className=" text-[#66FCF1] border border-solid border-smallTextColor py-2 px-4 rounded-[8px] hover:bg-smallTextColor
            hover:text-white hover:font-[600] ease-in duration-300"
            >
              All
            </button>
            <button
              onClick={() => setSelectedTap("Front-End")}
              className=" text-[#66FCF1] border border-solid border-smallTextColor py-2 px-4 rounded-[8px] hover:bg-smallTextColor
            hover:text-white hover:font-[600] ease-in duration-300 "
            >
              Front-End
            </button>
            <button
              onClick={() => setSelectedTap("Back-End")}
              className=" text-[#66FCF1] border border-solid border-smallTextColor py-2 px-4 rounded-[8px] hover:bg-smallTextColor
            hover:text-white hover:font-[600] ease-in duration-300 "
            >
              Back-End
            </button>
            <button
              onClick={() => setSelectedTap("Wordpress")}
              className=" text-[#66FCF1] border border-solid border-smallTextColor py-2 px-4 rounded-[8px] hover:bg-smallTextColor
            hover:text-white hover:font-[600] ease-in duration-300 "
            >
              Wordpress
            </button>
          </div> */}
        </div>
        <div
          data-aos="fade-right"
          data-aos-duration="1500"
          className="flex items-center justify-center gap-4 flex-wrap mt-12"
        >
          {portfolios.slice(0, nextItems).map((portfolio, index) => (
            <a target="_blank" href={portfolio.siteUrl}>
              <div
                key={index}
                className="group max-w-full rounded-lg border border-solid border-[#3498DB] bg-[#3498DB]  relative "
              >
                <figure>
                  <img
                    className="rounded-lg w-[400px] h-[250px]"
                    src={portfolio.imgUrl}
                    alt=""
                  />
                </figure>
                <p className="mx-2 mt-4 text-yellow-50 font-bold uppercase">
                  {portfolio.title} :
                </p>
                <div className="flex my-4 text-white font-semibold">
                  {portfolio.technologies.map((tech) => (
                    <p className="mx-2">{tech}</p>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
        <div className=" text-center mt-6">
          {nextItems < portfolios.length && data.length > 6 && (
            <button
              onClick={loadMoreHandler}
              className="text-white bg-[#3498DB] py-2 px-4 rounded-[8px] font-[500] ease-in duration-200"
            >
              Load more
            </button>
          )}
        </div>
      </div>
      {showModal && <Model setShowModel={setshowModal} activeId={activeID} />}
    </section>
  );
};

export default portfolio;
