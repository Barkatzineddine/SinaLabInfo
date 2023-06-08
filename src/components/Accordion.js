import React from "react";
import "./Accordion.css";
import Accordionitem from "./Accordionitem";
const data = [
  {
    question: "What do you mean by Accordion?",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus nobis ut perspiciatis minima quidem nisi, obcaecati, delectus consequatur fuga nostrum iusto ipsam ducimus quibusdam possimus. Maiores non enim numquam voluptatem?",
    match: false,
  },
  {
    question: "What do you mean by Accordion?",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus nobis ut perspiciatis minima quidem nisi, obcaecati, delectus consequatur fuga nostrum iusto ipsam ducimus quibusdam possimus. Maiores non enim numquam voluptatem?",
    match: false,
  },
  {
    question: "What do you mean by Accordion?",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus nobis ut perspiciatis minima quidem nisi, obcaecati, delectus consequatur fuga nostrum iusto ipsam ducimus quibusdam possimus. Maiores non enim numquam voluptatem?",
    match: false,
  },
  {
    question: "What do you mean by Accordion?",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus nobis ut perspiciatis minima quidem nisi, obcaecati, delectus consequatur fuga nostrum iusto ipsam ducimus quibusdam possimus. Maiores non enim numquam voluptatem?",
    match: false,
  },
].map((ques) => ({ ...ques, id: Math.random() }));

export default function Accordion() {
  return (
    <div className="body-accordion">
      <h2>A PROPOS DE MON PRELEVEMENT </h2>
      <div className="accordion">
        {data.map((item) => (
          <Accordionitem item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}
