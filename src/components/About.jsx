import React from "react";
import Banking from "../icons/Banking";
import Budgeting from "../icons/Budgeting";
import OnBoarding from "../icons/OnBoarding";
import OpenApi from "../icons/OpenApi";
import Card from "./Card";

export default function About() {
  const data = [
    {
      id: 1,
      title: "online banking",
      description:
        "Our modern web and mobile application allow you to keep track of your finances wherever you are in the world.",
      icon: <Banking />,
    },
    {
      id: 2,
      title: "Simple Budgeting",
      description:
        "See exactly where your money goes each month . Receive notification when you are close to hitting your limit .",
      icon: <Budgeting />,
    },
    {
      id: 3,
      title: "fast Onboarding",
      description:
        "We dont do branches . Open your account in minutes online and start taking control of your finances right away .",
      icon: <OnBoarding />,
    },
    {
      id: 4,
      title: "Open Api",
      description:
        "Manage your saving , investments ,pension and much more from one account . Tracking your money have never been easer .",
      icon: <OpenApi />,
    },
  ];
  return (
    <div className="bg-gray-100 text-black flex flex-col items-start">
      <div className="w-4/5 mx-auto py-16">
        <h1 className="text-3xl text-primary">Why choose Easybank ?</h1>
        <p className="text-gray-400 mt-5">
          We leverage open banking to turn your bank accout into your financial
          hub .
        </p>
        <p className="text-gray-400">
          Control your finance like never before .
        </p>
        <div className="flex items-center mt-8 max-sm:flex-col gap-5">
          {data.map((el) => (
            <Card
              key={el.id}
              description={el.description}
              title={el.title}
              icon={el.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
