import React from "react";

import heroImg from "../../assets/images/header-img.svg";
import CountUp from "react-countup";
import cv from "../../assets//images/CV_2024-02-09_EL ATTAR_MOUAD (2).pdf";

const hero = () => {
  return (
    <section className="pt-0 lg:px-20 md:pt-4" id="about">
      <div className="container pt-14 ">
        <div className="flex items-center justify-between flex-col md:flex-row">
          <div className=" w-full md:basis-1/2">
            <h5
              data-aos="fade-right"
              data-aos-duration="1500"
              className=" text-headingColor font-[600] text-[25px]"
            >
              Hello Everybody
            </h5>{" "}
            <h1
              data-aos="fade-up"
              data-aos-duration="1500"
              className=" text-headingColor font-[800] text-[1.8rem] sm:text-[40px] leading-[35px] sm:leading-[46px] mt-5"
            >
              I'm Mouad Elattar <br /> a WEB Developer
            </h1>
            <div
              data-aos="fade-up"
              data-aos-duration="1500"
              className=" flex  items-center gap-6 mt-7"
            >
              <a href="#contact">
                <button className=" bg-[#3498DB] text-black font-[500] flex items-center gap-2 hover:bg-smallTextColor hover:text-white ease-in duration-500 py-2 px-4 rounded-[8px]">
                  <i className="ri-mail-line"></i>Hire Me
                </button>
              </a>
              <a
                href={cv}
                className=" bg-smallTextColor text-white font-[500] flex items-center gap-2 hover:bg-[#3498DB] hover:text-black ease-in duration-500 py-2 px-4 rounded-[8px]"
                target="_blank"
              >
                Get My CV
              </a>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="1500"
              className=" flex gap-0 lg:gap-2 text-headingColor mt-10 font-[500] text-[16px] lg:text-[18px] leading-7 lg:leading-9 "
            >
              <span>
                <i className="ri-apps-line"></i>
              </span>
              <ul className="list-none">
                <li className="flex items-center">
                  <span className="mr-2"></span> Hi there, I'm Mouad Elattar 👋
                </li>
                <li className="flex items-center">
                  <span className="mr-2">&#8226;</span>🖥️ I love coding using
                  JavaScript and React.js.
                </li>
                <li className="flex items-center">
                  <span className="mr-2">&#8226;</span> 🌱 I’m currently
                  learning (Spring Boot, Asp.net core, Angular)...
                </li>
                <li className="flex items-center">
                  <span className="mr-2">&#8226;</span> 🔭 I’m currently looking
                  for a job
                </li>
              </ul>
            </div>
            <div className=" flex items-center gap-3 mt-10">
              <span className=" text-headingColor text-[15px] font-[600]">
                Follow me:
              </span>
              <span>
                <a
                  href="https://github.com/MOUAD-EL01"
                  className=" text-headingColor text-[18px] font-[600]"
                >
                  <i className="ri-github-fill"></i>
                </a>
              </span>
              <span>
                <a
                  href="https://www.linkedin.com/in/mouad-el-attar-384096225/"
                  className=" text-headingColor text-[18px] font-[600]"
                >
                  <i className="ri-linkedin-fill"></i>
                </a>
              </span>
            </div>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="1500"
            className="basis-1/3 mt-10 lg:ml-[-240px] hidden lg:block "
          >
            <figure className=" flex items-center justify-center">
              <img src={heroImg} alt="image" />
            </figure>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1500"
            className="md:basis-1/5 border-none rounded-lg border-2 flex justify-between text-center mt-10 flex-wrap gap-3 md:mt-0 md:flex-col md:justify-end md:text-end"
          >
            <div className="lg:mb-10 p-1 ">
              <h2 className=" text-[#3498DB] font-[700] text-[32px] ">
                <CountUp start={0} end={1} duration={2} suffix="+" />
              </h2>
              <h4 className=" text-headingColor font-[600] text-[18px]">
                Years of experience
              </h4>
            </div>
            <div className="mb-10 p-2">
              <h2 className=" text-[#3498DB]  font-[700] text-[32px] mb-[-4.2px]">
                <CountUp start={0} end={10} duration={2} suffix="+" />
              </h2>
              <h4 className=" text-headingColor font-[600] text-[18px]">
                Project Done
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default hero;
