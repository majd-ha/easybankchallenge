import React from "react";
export default function ArticleCard({ img, writer, title, description }) {
  return (
    <div className="flex-1 flex flex-col max-sm:items-center rounded-lg w-1/4 overflow-hidden shadow-xl max-sm:w-full max-sm:my-2">
      <div className="h-[200px]">
        <img src={img} alt="f" className="w-full h-full " />
      </div>
      <div className="p-4">
        <p className="text-xs text-gray-400 font-bold">By : {writer}</p>
        <h1>{title}</h1>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>
    </div>
  );
}
