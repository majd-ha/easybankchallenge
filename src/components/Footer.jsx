import React from "react";
import Logo from "../icons/Logo";
import Facebok from "../icons/social/Facebook";
import Insta from "../icons/social/Insta";
import Pintreset from "../icons/social/Pintreset";
import Twitter from "../icons/social/Twitter";
import Youtube from "../icons/social/Youtube";
import ReqBtn from "./ReqBtn";
export default function Footer() {
  return (
    <div className="mt-10 bg-primary min-h-[200px] py-10 text-white">
      <div className="flex justify-between w-4/5 mx-auto max-sm:flex-col max-sm:items-center">
        <div className="flex justify-between h-full w-1/2 max-sm:flex-col max-sm:items-center">
          <div className="flex flex-col justify-between max-sm:items-center">
            <Logo fill={"#fff"} />
            <div className="flex items-center justify-between max-sm:my-3 gap-3 socials">
              <Facebok />
              <Youtube />
              <Twitter />
              <Pintreset />
              <Insta />
            </div>
          </div>
          <div className="flex flex-col gap-6 max-sm:items-center max-sm:gap-2 max-sm:my-2 footerlinks">
            <p>About Us</p>
            <p>Contact </p>
            <p>Blog</p>
          </div>
          <div className="flex flex-col gap-6 max-sm:items-center max-sm:gap-2 footerlinks">
            <p>Careers </p>
            <p>Support </p>
            <p>Privacy Policy</p>
          </div>
        </div>
        <div className="w-1/3 flex justify-center items-end gap-4 flex-col max-sm:w-full max-sm:gap-2 max-sm:items-center max-sm:my-3">
          <ReqBtn show={true} />
          <p className="text-gray-500">
            {" "}
            &copy; EasyBank . All Rights Reserved .{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
