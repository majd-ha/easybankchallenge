import React from "react";

export default function ReqBtn({ show }) {
  return (
    <button
      className={`rounded-3xl px-7 py-2 h-fit bg-gradient-to-r from-green-400 to-blue-400 text-white capitalize ${
        !show ? "max-sm:hidden" : ""
      } `}
    >
      request invite
    </button>
  );
}
