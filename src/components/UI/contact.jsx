import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    // alert("hi");
    toast.success(" 🚀 Email send!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
    emailjs
      .sendForm(
        "service_6pk8fxb",
        "template_bv3wlnn",
        form.current,
        "1TKI4DMTZmAhLehs5"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section id="contact" className=" ">
      <div className="py-8 lg:py-16 px-12 mx-auto max-w-screen-md bg-[#6053BE] rounded-lg">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-white ">
          Contact me
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-white  sm:text-xl">
          Send me a Message for more details
        </p>

        <form ref={form} onSubmit={sendEmail}>
          <div>
            <label
              htmlFor="email"
              className="block mb-4 mt-4 text-lg font-semibold text-[#1B385E] "
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-[#0B0C10] text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
              placeholder="name@flowbite.com"
              required
            />
            <label
              htmlFor="Name"
              className="block mb-4 mt-4 lgxt-sm font-semibold text-[#1B385E] "
            >
              Your Name
            </label>
            <input
              type="text"
              id="Name"
              name="name"
              className="shadow-sm bg-gray-50 border border-gray-300 text-[#0B0C10] text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
              placeholder="name@flowbite.com"
              required
            />
            <label
              htmlFor="Last Name"
              className="block mb-4 mt-4 lgxt-sm font-semibold text-[#1B385E] "
            >
              Your Last Name
            </label>
            <input
              type="text"
              id="Last-Name"
              name="last-name"
              className="shadow-sm bg-gray-50 border border-gray-300 text-[#0B0C10] text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
              placeholder="name@flowbite.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block my-4 text-lg font-semibold text-[#1B385E] "
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="block p-3 w-full text-sm text-[#0B0C10] bg-gray-50 ro[#0B0C10]-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
              placeholder="Let us know how I can help you"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block my-4 text-lg font-semibold text-[#1B385E] "
            >
              Your message
            </label>
            <textarea
              id="message"
              name="message"
              rows="6"
              className="block p-2.5 w-full text-sm text-[#0B0C10] bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 "
              placeholder="Leave a Message..."
            ></textarea>
          </div>
          <div className=" flex mt-6 justify-end">
            {" "}
            <button
              className=" text-black bg-[#FFF] font-[600] border border-solid
               border-smallTextColor py-2 px-4 rounded-[8px] max-h-[40px] hover:bg-smallTextColor
            hover:text-white hover:font-[600] ease-in duration-300 "
            >
              <i className="ri-send-plane-line"></i>Send
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </section>
  );
};

export default contact;
