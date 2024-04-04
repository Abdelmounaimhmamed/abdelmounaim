

"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { SparklesPreview } from "./CustomH";

export function InfiniteMovingCardsDemo() {
  return (
    <>
    <SparklesPreview type="Certifications" />

    <div className="h-[20rem] rounded-md my-20 flex flex-col antialiased bg-dark dark:bg-black dark:bg-grid-white/[0.05] items-center justify-start relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
    </>
  );
}

const testimonials = [
  {
    quote:
      "Certified Kubernetes application Dveloper - CKAD  ",
    name: "Udemy",
    title: "Kodekloud mumshad manabeth",
  },
  {
    quote:"Docke and kubernetes : The complete Developer guide ",
    name: "Udemy",
    title: "Setephen Grider",
  },
  {
    quote: "Langchain and chatGpt : The complete Developer guide (LLM)",
    name: "Udemy",
    title: "Stephen grider",
  },
  {
    quote: "The utlimate Nextjs course ",
    name: "Udemy",
    title: "Stephen grider",
  },
  {
    quote: "The Complete NestJs Bootcamp ",
    name: "Udemy",
    title: "Stephen grider",
  },
  {
    quote: "The  Ultimate aws certified solution architect SSA",
    name: "Udemy",
    title: "Stephan merek",
  },
  {
    quote: "microservices using nodejs and reactjs",
    name: "Udemy",
    title: "Stephen grider",
  },

];
