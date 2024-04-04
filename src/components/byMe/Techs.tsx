"use client";

import Image from "next/image";
import { Tabs } from "../ui/tabs";

export function Techs() {
  const tabs = [
    {
      title: "FrontEnd",
      value: "FrontEnd",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Technologies</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Backend",
      value: "Backend",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Technologies</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Devops",
      value: "Devops",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Devops & cloud</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Data",
      value: "Data",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Data science</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Others",
      value: "Others",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Others</p>
          <DummyContent />
        </div>
      ),
    },
  ];

  return (
    <div className="h-[25rem] md:h-[45rem]  [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full text-black  items-start justify-start my-40">
        <h1 className="text-6xl font-bold w-full text-center my-10 text-white">Technologies</h1>
      <Tabs tabs={tabs} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <div className="w-full flex flex-row justify-center items-center">
        <img src="https://develus.vercel.app/next.svg" alt="" className="w-20 h-20" />
    </div>
  );
};
