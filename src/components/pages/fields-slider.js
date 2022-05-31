import React from "react";
import "./fields-slider.css";
import ToolCard from "./tool-card";

const fieldContent = [
  {
    title: "Marketing",
    description:
      "Marketing tools feature models that help you define your customer base and its needs",
  },
  {
    title: "Strategy",
    description:
      "Strategic tools allow you to plan you organization's value creation and all the necessary prerequisites to deliver it to the customer",
  },
  {
    title: "Sustainability",
    description:
      "Sustainability tools are aimed at maximizing your organizational bottom line in terms of economic, environmental, and social value",
  },
  {
    title: "Social",
    description:
      "Social tools are aimed at fostering social innovation and maximizing social value that your organization produces",
  },
];

function Fields() {

  function createCards () {

    const cards = fieldContent.map(item => {
      return (
        <ToolCard key={fieldContent.indexOf(item)} title={item.title} description={item.description} />
      )
    })
    return cards;
  }

  return <div className="fields-container">
    {createCards()}
  </div>;
}

export default Fields;
