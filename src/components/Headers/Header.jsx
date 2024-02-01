import React from "react";
import { useState } from "react";
import xclose from "../../assets/images/xrp-line.svg";
// import Aos from "aos";
const Header = () => {
  const [open, setOpen] = useState(false);
  const openNaveMobile = () => {
    setOpen(!open);

    // alert(open);
  };
  return (
    <header className="sticky top-0 z-10 w-full h-[80px] leading-[80px] flex items-center bg-[#66FCF1] shadow-md md:px-20">
      <div className="container">
        <div className=" flex items-center justify-between">
          <div className=" flex items-center gap-[10px]">
            <span
              className=" w-[35px] h-[35px] bg-smallTextColor text-white text-[18px] font-[500]
          rounded-full flex items-center justify-center "
            >
              M
            </span>
            <div className=" leading-[20px]">
              <h2 className="text-xl text-smallTextColor font-[700]">Mouad</h2>
              <p className=" text-smallTextColor text-[16px] font-[500]">
                Elattar
              </p>
            </div>
          </div>
          <div className="menu hidden lg:block">
            <ul className="flex items-center gap-10">
              <li>
                <a className=" text-smallTextColor font-[600]" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className=" text-smallTextColor font-[600]" href="#services">
                  Services
                </a>
              </li>
              <li>
                <a
                  className=" text-smallTextColor font-[600]"
                  href="#portfolio"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a className="text-smallTextColor font-[600]" href="#academic">
                  Academic
                </a>
              </li>
              <li>
                <a className=" text-smallTextColor font-[600]" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>{" "}
          <div className="flex items-center gap-4">
            <a href="#contact">
              <button
                className=" flex items-center gap-2 text-smallTextColor font-[600] border border-solid
               border-smallTextColor py-2 px-4 rounded-[8px] max-h-[40px] hover:bg-smallTextColor
            hover:text-white hover:font-[600] ease-in duration-300 "
              >
                <i className="ri-send-plane-line"></i>Let's Talk
              </button>
            </a>
            <span
              className=" text-2xl text-smallTextColor md:hidden cursor-pointer "
              onClick={openNaveMobile}
            >
              <i className="ri-menu-line"></i>
            </span>
            {open && (
              <div
                id="test"
                data-aos="fade-left"
                data-aos-duration="350"
                className="fixed top-0 left-0 w-screen h-screen bg-[#66FCF1] flex items-center justify-center"
              >
                <center>
                  {" "}
                  <div className="menu">
                    <div
                      className=" absolute top-4 right-6"
                      onClick={openNaveMobile}
                    >
                      {" "}
                      <img src={xclose} alt="" />
                    </div>
                    <ul className="flex-col justify-center items-center gap-6">
                      <li data-aos="fade-left" data-aos-duration="750">
                        <a
                          onClick={openNaveMobile}
                          className="text-[#202833] text-lg uppercase font-[600]"
                          href="#about"
                        >
                          about
                        </a>
                      </li>
                      <li data-aos="fade-left" data-aos-duration="650">
                        <a
                          onClick={openNaveMobile}
                          className="text-[#202833] text-lg uppercase font-[600]"
                          href="#services"
                        >
                          services
                        </a>
                      </li>
                      <li data-aos="fade-left" data-aos-duration="550">
                        <a
                          onClick={openNaveMobile}
                          className="text-[#202833] text-lg uppercase font-[600]"
                          href="#portfolio"
                        >
                          portfolio
                        </a>
                      </li>
                      <li data-aos="fade-left" data-aos-duration="450">
                        <a
                          onClick={openNaveMobile}
                          className="text-[#202833] text-lg uppercase font-[600]"
                          href="#contact"
                        >
                          contact
                        </a>
                      </li>
                      <li data-aos="fade-left" data-aos-duration="450">
                        <a
                          onClick={openNaveMobile}
                          className="text-[#202833] text-lg uppercase font-[600]"
                          href="#academic"
                        >
                          Academic
                        </a>
                      </li>
                    </ul>
                  </div>
                </center>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
