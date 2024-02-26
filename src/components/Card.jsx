import React from "react";

export default function Card({ icon, title, description }) {
  return (
    <div className="flex-1 flex flex-col max-sm:items-center ">
      {icon}
      <h1 className="text-xl mt-5 mb-4">{title}</h1>
      <p className="text-gray-400 text-sm text-wrap pr-5 max-sm:text-center max-sm:p-0">
        {description}
      </p>
    </div>
  );
}
