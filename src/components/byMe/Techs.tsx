"use client";

import Image from "next/image";
import { Tabs } from "../ui/tabs";

export function Techs() {
  const tabs = [
    {
      title: "FrontEnd",
      value: "FrontEnd",
      content: (
        <div className="w-full overflow-hidden relative h-[300px] rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-blue-700 to-violet-900">
          <p>Technologies</p>
          <Frontend />
        </div>
      ),
    },
    {
      title: "Backend",
      value: "Backend",
      content: (
        <div className="w-full overflow-hidden relative h-[300px] rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-blue-700 to-violet-900">
          <p>Technologies</p>
          <Backend />
        </div>
      ),
    },
    {
      title: "Devops",
      value: "Devops",
      content: (
        <div className="w-full overflow-hidden relative h-[300px] rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-blue-700 to-violet-900">
          <p>Devops & cloud</p>
          <Devops />
        </div>
      ),
    },
    {
      title: "Data",
      value: "Data",
      content: (
        <div className="w-full overflow-hidden relative h-[300px] rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-blue-700 to-violet-900">
          <p>Data science</p>
          <Data />
        </div>
      ),
    },
    {
      title: "Others",
      value: "Others",
      content: (
        <div className="w-full overflow-hidden relative h-[300px] rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-blue-700 to-violet-900">
          <p>Others</p>
          <Others />
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

const Frontend = () => {
  return (
    <div className="w-full flex flex-row justify-center items-center">
        <img src="https://develus.vercel.app/next.svg" alt="" className="w-20  m-6 h-20" />
        <img src="https://develus.vercel.app/react.svg" alt="" className="w-20 m-6 h-20" />
        <img src="https://develus.vercel.app/redux.svg" alt="" className="w-20 m-6 h-20" />
        <img src="https://develus.vercel.app/tailwind.svg" alt="" className="w-20 m-6 h-20" />
        <img src="https://develus.vercel.app/bun.svg" alt="" className="w-20 m-6 h-20" />
    </div>
  );
};

const Backend = () => {
  return (
    <div className="w-full flex flex-row justify-center items-center flex-wrap">
        <img src="https://develus.vercel.app/nest.svg" alt="" className="w-20  m-8 h-20" />
        <img src="https://develus.vercel.app/spring.svg" alt="" className="w-20 m-8 h-20" />
        <img src="https://develus.vercel.app/laravel.svg" alt="" className="w-20 m-8 h-20" />
        <img src="https://develus.vercel.app/bun.svg" alt="" className="w-20 m-8 h-20" />
        <img src="https://develus.vercel.app/fast.svg" alt="" className="w-20 m-8 h-20" />
        <img src="https://develus.vercel.app/mongo.svg" alt="" className="w-20 m-8 h-20" />
        <img src="https://develus.vercel.app/msqyl.svg" alt="" className="w-20 m-8 h-20" />
        <img src="https://develus.vercel.app/postgre.svg" alt="" className="w-20 m-8 h-20" />
    </div>
  );
};


const Data = () => {
  return (
    <div className="w-full flex flex-row justify-center items-center">
        <img src="https://develus.vercel.app/next.svg" alt="" className="w-20  m-6 h-20" />
        <img src="https://develus.vercel.app/react.svg" alt="" className="w-20 m-6 h-20" />
        <img src="https://develus.vercel.app/redux.svg" alt="" className="w-20 m-6 h-20" />
        <img src="https://develus.vercel.app/tailwind.svg" alt="" className="w-20 m-6 h-20" />
        <img src="https://develus.vercel.app/bun.svg" alt="" className="w-20 m-6 h-20" />
    </div>
  );
};
const Devops = () => {
  return (
    <div className="w-full flex flex-row justify-center items-center">
        <img src="https://develus.vercel.app/docker.svg" alt="" className="w-20  m-6 h-20" />
        <img src="https://develus.vercel.app/k8S.svg" alt="" className="w-20 m-6 h-20" />
        <img src="https://develus.vercel.app/ansible.svg" alt="" className="w-20 m-6 h-20" />
        <img src="https://develus.vercel.app/jenkins.svg" alt="" className="w-20 m-6 h-20" />
        <img src="https://develus.vercel.app/aws.svg" alt="" className="w-20 m-6 h-20" />
        <img src="https://develus.vercel.app/google.svg" alt="" className="w-20 m-6 h-20" />
    </div>
  );
};
const Others = () => {
  return (
    <div className="w-full flex flex-row justify-center items-center">
        <img src="https://develus.vercel.app/next.svg" alt="" className="w-20  m-6 h-20" />
        <img src="https://develus.vercel.app/react.svg" alt="" className="w-20 m-6 h-20" />
        <img src="https://develus.vercel.app/redux.svg" alt="" className="w-20 m-6 h-20" />
        <img src="https://develus.vercel.app/tailwind.svg" alt="" className="w-20 m-6 h-20" />
        <img src="https://develus.vercel.app/bun.svg" alt="" className="w-20 m-6 h-20" />
    </div>
  );
};



