import React from "react";

const Footer = () => {
  return (
    <div className="mx-36 mt-20">
      <div className="grid grid-cols-2">
        <div>
          <h1>Get an update every week</h1>
          <p>
            Livedoc was created in order to improve the patient experience.
            Providing world-class tests, and a wide range of other services.
          </p>
        </div>
        <div>
        <h1>SUBSCRIBE TO NEWS LETTER</h1>
        <div className="flex">
        <input type="text" className="w-full border border-gray-300 rounded-full px-2 " placeholder="Email"/>
        <button className="ms-3 w-[200px] bg-white text-[#4C38C3]  py-2 border rounded-full">Button</button>
        </div>
    </div>
      </div>
    </div>
  );
};

export default Footer;
