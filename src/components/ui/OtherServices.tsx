"use client";
import React, { useState } from "react";
import { MultiStepLoader as Loader } from "../ui/multi-step-loader";
import { IconSquareRoundedX } from "@tabler/icons-react";


const loadingStates = [
  {
    text: "Integrate large language model in web application like bard and chatgpt",
  },
  {
    text: "Develop application using advanced technologies and stacks",
  },
  {
    text: "Setup your cloud infrastructure in any cloud provider",
  },
  {
    text: "Optimize your apps by adding the search optimization",
  },
  {
    text: "Deploy your apps with any archhitecture using devops automation tools",
  },
  {
    text: "Clean architecture",
  },
  {
    text: "Develop micro service based architecture",
  },
  {
    text: "And much more",
  },
];

export function MultiStepLoaderDemo() {
  const [loading, setLoading] = useState(false);
  return (
    <div className="w-full h-[5vh] flex items-center justify-center">
      {/* Core Loader Modal */}
      <Loader loadingStates={loadingStates} loading={loading} duration={2000} />

      {/* The buttons are for demo only, remove it in your actual code ⬇️ */}
      <button
        onClick={() => setLoading(true)}
        className="bg-[#3386f2] hover:bg-[#39C3EF]/90 text-white mx-auto text-sm md:text-base transition font-medium duration-200 h-10 rounded-lg px-8 flex items-center justify-center"
        style={{
          boxShadow:
            "0px -1px 0px 0px #ffffff40 inset, 0px 1px 0px 0px #ffffff40 inset",
        }}
      >
        Click to load
      </button>

      {loading && (
        <button
          className="fixed top-4 right-4 text-white z-[120]"
          onClick={() => setLoading(false)}
        >
          <IconSquareRoundedX className="h-10 w-10 " />
        </button>
      )}
    </div>
  );
}
