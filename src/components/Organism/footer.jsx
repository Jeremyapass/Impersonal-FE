import React from "react";

const Footer = () => {
  return (
    <div className="flex">
      <div className="flex flex-col">
        <div className="flex bg-blue-500">Impersonal</div>

        <div className="flex flex-col bg-red-500">
          <p>Build a professional online</p>
          <p>identity that inspires</p>
          <p>people!</p>
        </div>

        <p>c2024 Impersonal. All rights reserved</p>
      </div>

      <div className="flex bg-purple-500 items-end">
        <div>Button ig</div>
        <div>Button LinkedIn</div>
      </div>
    </div>
  );
};

export default Footer;
