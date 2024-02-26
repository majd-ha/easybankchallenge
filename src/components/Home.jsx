import React from "react";
import Deskbg from "./Deskbg";
import ReqBtn from "./ReqBtn";

export default function Home() {
  return (
    <div className="w-[90%] ml-[10%] max-sm:m-0 max-sm:w-full flex  max-sm:flex-col-reverse h-[690px] overflow-y-visible">
      <div className="w-1/3 flex flex-col items-start pr-5 max-sm:w-full max-sm:p-0 max-sm:items-center h-[450px]">
        <h1 className="text-5xl mt-28 mb-5 max-sm:my-1 max-sm:text-3xl max-sm:text-center text-[#2d314d] ">
          Next generation digital banking
        </h1>
        <p className="text-gray-400 text-sm my-5 max-sm:text-center">
          Take your financial life online . Your easybank account will be a
          one-stop-shope for shoping , saving , budgeting , investing and much
          more .
        </p>
        <ReqBtn show={true} />
      </div>
      <div className="w-2/3  overflow-x-hidden  overflow-y-visible max-sm:w-full max-sm:h-[250px] ">
        <Deskbg />
      </div>
    </div>
  );
}
