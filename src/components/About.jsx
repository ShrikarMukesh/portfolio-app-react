import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi. I'm Shrikar, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>
              Having more than 5.3 years of work experience in software
              development with good experience in spring-boot, Micro Services
              and Programming in Java.
            </p>
            <p>
              Developed Informatica Cloud Connectors for multiple Cloud
              applications such as Google Sheets, Hub Spot and SAP Litmos using
              Informatica Connector Toolkit (ICT). Worked with RESTful
              Web-Services using Jersey framework, JAX-RS.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
