import React from "react";
import academicImage from "../../assets/images/academic.png";

const academic = () => {
  return (
    <section id="academic">
      <div className=" container lg:px-20 lg:pt-5">
        <div className=" text-center">
          <h2
            data-aos="fade-down-right"
            data-aos-duration="1500"
            className=" text-headingColor font-[800] text-[2.4rem] mb-5"
          >
            {" "}
            📜 Diplomas and qualifications
          </h2>
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
                        className=" bg-white p-4 rounded shadow group hover:bg-[#3498DB] cursor-pointer ease-in duration-150"
                      >
                        <h3 className=" text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-2xl">
                          Software development technician
                        </h3>
                        <h6 className=" text-smallTextColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-sm">
                          📅 From October 2020 to July 2022 OFPPT ISGI
                          Casablanca, Morocco
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div
                    className=" rounded-full bg-[#3498DB] border-white border-2 w-10 h-10 p-2 absolute left-1/2 translate
                   -translate-x-1/2 -translate-y-4 sm:translet-y-0 flex items-center justify-center"
                  >
                    <figure>
                      <img src={academicImage} alt="" />
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
                        className=" bg-white p-4 rounded shadow group hover:bg-[#3498DB] cursor-pointer ease-in duration-150"
                      >
                        <h3 className=" text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-2xl">
                          National Baccalaureate
                        </h3>
                        <h6 className=" text-smallTextColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-sm">
                          📅 From September 2019 to July 2020 boustan el malaika
                          Casablanca, Morocco
                        </h6>
                        <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500]">
                          💡 filière : science physique <br />
                          💡 Mention : Très Bien
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className=" rounded-full bg-[#3498DB] border-white border-2 w-10 h-10 p-2 absolute left-1/2 translate
                   -translate-x-1/2 -translate-y-4 sm:translet-y-0 flex items-center justify-center"
                  >
                    <figure>
                      <img src={academicImage} alt="" />
                    </figure>
                  </div>
                </div>
              </div>

              {/* {right card} */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default academic;
