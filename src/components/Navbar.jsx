import React, { useState } from "react";
import Close from "../icons/Close";
import Logo from "../icons/Logo";
import Openicon from "../icons/Openicon";
import NavLinks from "./NavLinks";
import ReqBtn from "./ReqBtn";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="h-16 bg-white">
      <div className="w-4/5 mx-auto flex items-center h-full justify-between max-sm:flex-wrap">
        <Logo fill={"#2D314D"} />
        <div className="w-1/3 h-full max-sm:hidden">
          <NavLinks />
        </div>
        <div className="hidden max-sm:block" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <Close /> : <Openicon />}
        </div>
        <div
          className={`absolute top-20  mx-auto bg-white overflow-hidden transition-all duration-500 rounded-lg z-20 ${
            isOpen ? "w-4/5" : "w-0"
          }`}
        >
          <NavLinks />
        </div>
        <ReqBtn show={false} />
      </div>
    </div>
  );
}
