import React from "react";

const Footer = () => {
  return (
    <div>
      <footer class="bg-[#66FCF1] rounded-lg shadow m-4 ">
        <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span class="text-xl text-black text-center ">
            © 2023 . All Rights Reserved.
          </span>
          <ul class="flex flex-wrap items-center mt-3 text-xl font-medium text-black  sm:mt-0">
            <li>
              <a href="#about" class="hover:underline me-4 md:me-6">
                About
              </a>
            </li>
            <li>
              <a href="#services" class="hover:underline me-4 md:me-6">
                Services
              </a>
            </li>
            <li>
              <a href="#portfolio" class="hover:underline me-4 md:me-6">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#contact" class="hover:underline me-4 md:me-6">
                Contact
              </a>
            </li>
            <li>
              <a href="#academic" class="hover:underline me-4 md:me-6">
                Academic
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
