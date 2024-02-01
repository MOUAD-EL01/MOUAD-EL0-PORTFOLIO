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
            <h3 className=" text-headingColor text-[2rem] font-[700]">
              My recent Project:
            </h3>
          </div>
          <div className="flex gap-1">
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
          </div>
        </div>
        <div
          data-aos="fade-right"
          data-aos-duration="1500"
          className="flex items-center gap-4 flex-wrap mt-12"
        >
          {portfolios.slice(0, nextItems).map((portfolio, index) => (
            <div
              key={index}
              className="group max-w-full sm:w-[48.5%] md:w-[30%]  lg:w-[32.2%] relative z-[1]"
            >
              <figure>
                <img className="rounded-[8px]" src={portfolio.imgUrl} alt="" />
              </figure>
              <div className=" w-full h-full bg-primaryColor bg-opacity-40 absolute top-0 left-0 z-[5 hidden group-hover:block">
                <div className="w-full h-full flex items-center justify-center">
                  <button
                    onClick={() => showModalHandler(portfolio.id)}
                    className="text- bg-[#DAE4EA] hover:bg-smallTextColor py-2 px-4 rounded-[8px] font-[500] ease-in duration-200"
                  >
                    see details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className=" text-center mt-6">
          {nextItems < portfolios.length && data.length > 6 && (
            <button
              onClick={loadMoreHandler}
              className="text-white bg-[#66FCF1] hover:bg-smallTextColor py-2 px-4 rounded-[8px] font-[500] ease-in duration-200"
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
