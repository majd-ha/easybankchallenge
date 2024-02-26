import React from "react";
import img4 from "../assets/image-confetti.jpg";
import img1 from "../assets/image-currency.jpg";
import img3 from "../assets/image-plane.jpg";
import img2 from "../assets/image-restaurant.jpg";
import ArticleCard from "./ArticleCard";

export default function Articles() {
  const data = [
    {
      id: 1,
      title: "Receive money with any currency with no fees",
      description:
        "The world becoming smaller and we are becming ore mobile . so we you should be forced to only receive money in a single...",
      image: img1,
      writer: "Chlaire Robinson",
    },
    {
      id: 2,
      title: "Treat yourself without worring about money",
      description:
        "Our simple budgeting feature allow you to seperate out your sending and set realstic limit each month that means you...",
      image: img2,
      writer: "Wilson Hutton",
    },
    {
      id: 3,
      title: "Take your easyBank card wherever you want",
      description:
        "We want you to enjoy your travels that is why we dont charge any fees on purchases while you are aboard . We will even show you...",
      image: img3,
      writer: "Wilson Hutton",
    },
    {
      id: 4,
      title: "Take your easyBank card wherever you want",
      description:
        "After alot of hard work by the whole team we are excited to launch our closed beta . Its easy to request an invite through the site...",
      image: img4,
      writer: "Chlaire Robinson",
    },
  ];
  return (
    <div className="flex flex-col items-start">
      <div className="w-4/5 mx-auto py-16">
        <h1 className="text-3xl text-primary my-8 max-sm:text-center">
          Latest Articles
        </h1>
        <div className="flex items-center mt-8 max-sm:flex-col gap-4">
          {data.map((el) => (
            <ArticleCard
              key={el.id}
              title={el.title}
              description={el.description}
              writer={el.writer}
              img={el.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
