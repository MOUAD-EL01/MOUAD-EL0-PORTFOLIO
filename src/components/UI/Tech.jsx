// import React from "react";
// import reacticon from "../../assets/images/structure_3334886.png";
// import typescripte from "../../assets/images/typescript_5968381.png";
// import csharp from "../../assets/images/c-sharp_6132221.png";
// import java from "../../assets/images/java_5433712.png";
// import javas from "../../assets/images/js_5968292.png";
// import html from "../../assets/images/html_1051277.png";
// import css from "../../assets/images/social_11516361.png";
// import sql from "../../assets/images/sql-server_3161133.png";
// import next from "../../assets/images/download.png";
// import nodejs from "../../assets/images/node-js-icon-454x512-nztofx17.png";
// import asp from "../../assets/images/images.jpg";
// import exp from "../../assets/images/exp.png";
// import tailw from "../../assets/images/tailwind-css-icon-2048x1229-u8dzt4uh.png";
// import boot from "../../assets/images/bootstrap-stack.png";
// import GIT from "../../assets/images/GIT.png";

// import sqlserver from "../../assets/images/sqlserver.png";
// import mysql from "../../assets/images/mysql.png";
// import mongo from "../../assets/images/mongo.png";

// const Tech = () => {
//   return (
//     <section className=" container mx-auto text-center">
//       <h2
//         data-aos="fade-down"
//         data-aos-duration="1500"
//         className=" text-headingColor font-[800] text-[2.4rem] mb-5"
//       >
//         {" "}
//         My Tech Stack
//       </h2>
//       <h3 className=" text-smallTextColor font-semibold text-[1.4rem]  mb-5">
//         {" "}
//         Language:
//       </h3>
//       {/* </center> */}
//       <div className="flex flex-wrap justify-center max-w-screen-sm lg:w-full lg:max-w-full mx-auto">
//         <img
//           src={html}
//           className="lg:m-4 m-2 w-[40px] h-[40px] lg:w-[65px] lg:h-[65px]"
//           alt=""
//         />
//         <img
//           src={css}
//           className="lg:m-4 m-2 w-[40px] h-[40px] lg:w-[65px] lg:h-[65px]"
//           alt=""
//         />
//         <img
//           src={typescripte}
//           className="lg:m-4 m-2 w-[40px] h-[40px] lg:w-[65px] lg:h-[65px]"
//           alt=""
//         />
//         <img
//           src={csharp}
//           className="lg:m-4 m-2 w-[40px] h-[40px] lg:w-[65px] lg:h-[65px]"
//           alt=""
//         />
//         <img
//           src={javas}
//           className="lg:m-4 m-2 w-[40px] h-[40px] lg:w-[65px] lg:h-[65px]"
//           alt=""
//         />
//         <img
//           src={java}
//           className="lg:m-4 m-2 w-[40px] h-[40px] lg:w-[65px] lg:h-[65px]"
//           alt=""
//         />
//         <img
//           src={sql}
//           className="lg:m-4 m-2 w-[40px] h-[40px] lg:w-[65px] lg:h-[65px]"
//           alt=""
//         />
//       </div>{" "}
//       <h3 className=" text-smallTextColor font-semibold text-[1.4rem]  mb-5 mt-4">
//         Framework:
//       </h3>
//       <div className="flex flex-wrap justify-center max-w-screen-sm lg:w-full lg:max-w-full mx-auto">
//         {/* </center> */}
//         <div className=" flex justify-center">
//           <img
//             src={reacticon}
//             className="  lg:m-4 m-2  w-[40px] h-[40px] lg:w-[65px] lg:h-[65px]"
//             alt=""
//           />{" "}
//           <img
//             src={next}
//             className="  lg:m-4 m-2  w-[40px] h-[40px] lg:w-[65px] lg:h-[65px]"
//             alt=""
//           />
//           <img
//             src={nodejs}
//             className="  lg:m-4 m-2  w-[40px] h-[40px] lg:w-[65px] lg:h-[65px]"
//             alt=""
//           />
//           <img
//             src={exp}
//             className="  lg:m-4 m-2  w-[40px] h-[40px] lg:w-[65px] lg:h-[65px]"
//             alt=""
//           />
//           <img
//             src={tailw}
//             className="  lg:m-4 m-2  w-[40px] h-[40px] lg:w-[65px] lg:h-[65px]"
//             alt=""
//           />
//           <img
//             src={boot}
//             className="  lg:m-4 m-2  w-[40px] h-[40px] lg:w-[65px] lg:h-[65px]"
//             alt=""
//           />{" "}
//           <img
//             src={asp}
//             className="  lg:m-4 m-2  w-[40px] h-[40px] lg:w-[65px] lg:h-[65px]"
//             alt=""
//           />
//         </div>
//       </div>
//       <h3 className=" text-smallTextColor font-semibold text-[1.4rem]  mb-2 mt-4">
//         {" "}
//         SGBD:
//       </h3>
//       {/* </center> */}
//       <div className=" flex justify-center">
//         <img
//           src={sqlserver}
//           className="  lg:m-4 m-2  w-[40px] h-[40px] lg:w-[65px] lg:h-[65px]"
//           alt=""
//         />
//         <img
//           src={mongo}
//           className="  lg:m-4 m-2  w-[40px] h-[40px] lg:w-[65px] lg:h-[65px]"
//           alt=""
//         />
//         <img
//           src={mysql}
//           className="  lg:m-4 m-2  w-[40px] h-[40px] lg:w-[65px] lg:h-[65px]"
//           alt=""
//         />
//       </div>{" "}
//       <h3 className=" text-smallTextColor font-semibold text-[1.4rem]  mb-2 mt-4">
//         {" "}
//         Version Control:
//       </h3>
//       {/* </center> */}
//       <div className=" flex justify-center">
//         <img
//           src={GIT}
//           className="  lg:m-4 m-2  w-[40px] h-[40px] lg:w-[65px] lg:h-[65px]"
//           alt=""
//         />
//       </div>
//     </section>
//   );
// };

// export default Tech;
import React from "react";
import reacticon from "../../assets/images/structure_3334886.png";
import typescripte from "../../assets/images/typescript_5968381.png";
import csharp from "../../assets/images/c-sharp_6132221.png";
import java from "../../assets/images/java_5433712.png";
import javas from "../../assets/images/js_5968292.png";
import html from "../../assets/images/html_1051277.png";
import css from "../../assets/images/social_11516361.png";
import sql from "../../assets/images/sql-server_3161133.png";
import next from "../../assets/images/download.png";
import nodejs from "../../assets/images/node-js-icon-454x512-nztofx17.png";
import asp from "../../assets/images/images.jpg";
import exp from "../../assets/images/exp.png";
import tailw from "../../assets/images/tailwind-css-icon-2048x1229-u8dzt4uh.png";
import boot from "../../assets/images/bootstrap-stack.png";
import GIT from "../../assets/images/GIT.png";
import sqlserver from "../../assets/images/sqlserver.png";
import mysql from "../../assets/images/mysql.png";
import mongo from "../../assets/images/mongo.png";

const Tech = () => {
  return (
    <section id="Tech" className="container mx-auto text-center">
      <h2
        data-aos="fade-down"
        data-aos-duration="1500"
        className="text-headingColor font-[800] text-[2.4rem] mb-5"
      >
        My Tech Stack
      </h2>
      <h3 className="text-smallTextColor font-semibold text-[1.4rem] mb-5">
        Language:
      </h3>
      <div className="flex flex-wrap justify-center max-w-screen-sm lg:w-full lg:max-w-full mx-auto">
        <img
          src={html}
          className="lg:m-4 m-2 w-[40px] h-[40px] lg:w-[65px] lg:h-[65px]"
          alt=""
        />
        <img
          src={css}
          className="lg:m-4 m-2 w-[40px] h-[40px] lg:w-[65px] lg:h-[65px]"
          alt=""
        />
        <img
          src={typescripte}
          className="lg:m-4 m-2 w-[40px] h-[40px] lg:w-[65px] lg:h-[65px]"
          alt=""
        />
        <img
          src={csharp}
          className="lg:m-4 m-2 w-[40px] h-[40px] lg:w-[65px] lg:h-[65px]"
          alt=""
        />
        <img
          src={javas}
          className="lg:m-4 m-2 w-[40px] h-[40px] lg:w-[65px] lg:h-[65px]"
          alt=""
        />
        <img
          src={java}
          className="lg:m-4 m-2 w-[40px] h-[40px] lg:w-[65px] lg:h-[65px]"
          alt=""
        />
        <img
          src={sql}
          className="lg:m-4 m-2 w-[40px] h-[40px] lg:w-[65px] lg:h-[65px]"
          alt=""
        />
      </div>
      <h3 className="text-smallTextColor font-semibold text-[1.4rem] mb-5 mt-4">
        Framework:
      </h3>
      <div className="flex flex-wrap justify-center max-w-screen-sm lg:w-full lg:max-w-full mx-auto">
        <img
          src={reacticon}
          className="  lg:m-4 m-2  w-[40px] h-[40px] lg:w-[65px] lg:h-[65px]"
          alt=""
        />{" "}
        <img
          src={next}
          className="  lg:m-4 m-2  w-[40px] h-[40px] lg:w-[65px] lg:h-[65px]"
          alt=""
        />
        <img
          src={nodejs}
          className="  lg:m-4 m-2  w-[40px] h-[40px] lg:w-[65px] lg:h-[65px]"
          alt=""
        />
        <img
          src={exp}
          className="  lg:m-4 m-2  w-[40px] h-[40px] lg:w-[65px] lg:h-[65px]"
          alt=""
        />
        <img
          src={tailw}
          className="  lg:m-4 m-2  w-[40px] h-[40px] lg:w-[65px] lg:h-[65px]"
          alt=""
        />
        <img
          src={boot}
          className="  lg:m-4 m-2  w-[40px] h-[40px] lg:w-[65px] lg:h-[65px]"
          alt=""
        />{" "}
        <img
          src={asp}
          className="  lg:m-4 m-2  w-[40px] h-[40px] lg:w-[65px] lg:h-[65px]"
          alt=""
        />
      </div>
      <h3 className="text-smallTextColor font-semibold text-[1.4rem] mb-2 mt-4">
        SGBD:
      </h3>
      <div className="flex flex-wrap justify-center max-w-screen-sm lg:w-full lg:max-w-full mx-auto">
        <img
          src={sqlserver}
          className="  lg:m-4 m-2  w-[40px] h-[40px] lg:w-[65px] lg:h-[65px]"
          alt=""
        />
        <img
          src={mongo}
          className="  lg:m-4 m-2  w-[40px] h-[40px] lg:w-[65px] lg:h-[65px]"
          alt=""
        />
        <img
          src={mysql}
          className="  lg:m-4 m-2  w-[40px] h-[40px] lg:w-[65px] lg:h-[65px]"
          alt=""
        />
      </div>
      <h3 className="text-smallTextColor font-semibold text-[1.4rem] mb-2 mt-4">
        Version Control:
      </h3>
      <div className="flex flex-wrap justify-center max-w-screen-sm lg:w-full lg:max-w-full mx-auto">
        <img
          src={GIT}
          className="  lg:m-4 m-2  w-[40px] h-[40px] lg:w-[65px] lg:h-[65px]"
          alt=""
        />
      </div>
    </section>
  );
};

export default Tech;
