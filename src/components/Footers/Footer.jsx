import React from "react";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
const Footer = () => {
  return (
    <div>
      <footer class="bg-[#3498DB] rounded-lg m-2 ">
        <div class="w-full justify-center  p-4 md:flex md:items-center md:justify-between">
          <span class="text-xl flex justify-center  text-black text-center ">
            © 2023 . All Rights Reserved.
          </span>
          <ul class="flex justify-center items-center text-xl font-medium text-black  sm:mt-0">
            <li>
              <a
                href="https://www.linkedin.com/in/mouad-el-attar-384096225/"
                class="hover:underline px-8"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/MOUAD-EL01"
                class="hover:underline px-8"
              >
                <FaGithub />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
