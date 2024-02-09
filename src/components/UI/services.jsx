import React from "react";
import fontendpageimage from "../../assets/images/front-end.png";
import backendpageimage from "../../assets/images/backend.png";
import wordpress from "../../assets/images/social.png";
import mobile from "../../assets/images/tools (3).png";

const services = () => {
  return (
    <section id="services">
      <div className=" container lg:px-20 lg:pt-5">
        <div className=" text-center">
          <h2
            data-aos="fade-down-right"
            data-aos-duration="1500"
            className=" text-headingColor font-[800] text-[2.4rem] mb-5"
          >
            {" "}
            What do I help In
          </h2>
          <p className=" lg:max-w-[600px] lg:mx-auto text-headingColor font-[500] text-[16px] leading-7">
            🚀 Hello World! I'm Mouad, a passionate and creative Full Stack
            Developer on a mission to bring digital ideas to life. With a love
            for crafting websites and a knack for solving problems using a
            diverse range of technologies, I thrive in the dynamic world of web
            development.
          </p>
        </div>
        <div className=" flex flex-col justify-center sm:py-12">
          <div className=" w-full py-3 px-2 sm:max-w-4xl sm:mx-auto sm:px-0 ">
            <div className=" relative text-gray-700 antialiased text-sm font-semibold">
              <div className="hidden lg:block absolute w-1  bg-indigo-300 h-full left-1/2 transform -translate-x-1/2"></div>
              {/*====left card====*/}

              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className=" flex items-center flex-col sm:flex-row">
                  <div className=" flex justify-start w-full mx-auto items-center">
                    {" "}
                    <div className="w-full sm:w-1/2 sm:pr-8">
                      <div
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        className=" bg-white p-4 rounded shadow group hover:bg-[#1B385E] cursor-pointer ease-in duration-150"
                      >
                        <h3 className=" text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-2xl">
                          Front-End Development
                        </h3>
                        <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500]">
                          🌐 As a Front-End Developer, I revel in the art of
                          translating design concepts into interactive and
                          visually stunning websites. My proficiency in HTML,
                          CSS, and, most importantly, JavaScript, allows me to
                          create seamless, user-friendly interfaces that leave a
                          lasting impression. From responsive designs to dynamic
                          web applications, I thrive on turning ideas into
                          engaging digital experiences. my Front-End tech-stack:
                          Html - Css - Javascript - Reactjs - Bootstrap -
                          Tailwind - TypeScript
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className=" rounded-full bg-[#1B385E] border-white border-2 p-2 w-10 h-10 absolute left-1/2 translate
                   -translate-x-1/2 -translate-y-4 sm:translet-y-0 flex items-center justify-center"
                  >
                    <figure>
                      <img src={fontendpageimage} alt="" />
                    </figure>
                  </div>
                </div>
              </div>
              {/* {right card} */}
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className=" flex items-center flex-col sm:flex-row">
                  <div className=" flex justify-end w-full mx-auto items-center">
                    {" "}
                    <div className="w-full sm:w-1/2 sm:pl-8">
                      <div
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        className=" bg-white p-4 rounded shadow group hover:bg-[#1B385E] cursor-pointer ease-in duration-150"
                      >
                        <h3 className=" text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-2xl">
                          Back-End Development
                        </h3>
                        <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500]">
                          💡 On the Back-End, I architect and implement robust
                          server-side solutions that form the backbone of web
                          applications. Database management, server logic, and
                          ensuring optimal performance – these are the
                          challenges I embrace to ensure a seamless user
                          experience. my Back-End tech-stack: Java - C# - Nodejs
                          - Expressjs - SQLserver - Mysql - Asp.netCore
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className=" rounded-full bg-[#1B385E] border-white border-2 p-2 w-10 h-10 absolute left-1/2 translate
                   -translate-x-1/2 -translate-y-4 sm:translet-y-0 flex items-center justify-center"
                  >
                    <figure>
                      <img src={backendpageimage} alt="" />
                    </figure>
                  </div>
                </div>
              </div>
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className=" flex items-center flex-col sm:flex-row">
                  <div className=" flex justify-start w-full mx-auto items-center">
                    {" "}
                    <div className="w-full sm:w-1/2 sm:pr-8">
                      <div
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        className=" bg-white p-4 rounded shadow group hover:bg-[#1B385E] cursor-pointer ease-in duration-150"
                      >
                        <h3 className=" text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-2xl">
                          Wordpress
                        </h3>
                        <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500]">
                          💻 I am also a WordPress developer. I use a different
                          range of plugins and themes that help me make my
                          clients or boss happy.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className=" rounded-full bg-[#1B385E] border-white border-2 p-2 w-10 h-10 absolute left-1/2 translate
                   -translate-x-1/2 -translate-y-4 sm:translet-y-0 flex items-center justify-center"
                  >
                    <figure>
                      <img src={wordpress} alt="" />
                    </figure>
                  </div>
                </div>
              </div>
              {/* {right card} */}
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className=" flex items-center flex-col sm:flex-row">
                  <div className=" flex justify-end w-full mx-auto items-center">
                    {" "}
                    <div className="w-full sm:w-1/2 sm:pl-8">
                      <div
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        className=" bg-white p-4 rounded shadow group hover:bg-[#1B385E] cursor-pointer ease-in duration-150"
                      >
                        <h3 className=" text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-2xl">
                          Problem solving
                        </h3>
                        <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500]">
                          Troubleshooting and debugging are second nature to me,
                          and I pride myself on my ability to identify and
                          resolve issues efficiently. No bug is too elusive, and
                          no problem too intricate to deter my enthusiasm for
                          finding elegant solutions.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className=" rounded-full bg-[#1B385E] border-white border-2 p-2 w-10 h-10 absolute left-1/2 translate
                   -translate-x-1/2 -translate-y-4 sm:translet-y-0 flex items-center justify-center"
                  >
                    <figure>
                      <img src={mobile} alt="" />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default services;
