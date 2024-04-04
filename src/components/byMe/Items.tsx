"use client";
import React from "react";
import { PinContainer } from "../ui/3d-pin";
import { HoverBorderGradientDemo } from "./Buton";

export function AnimatedPinDemo({title , projectName , desc , imgUri} : any) {
  return (
    <div className="h-[40rem] w-full flex items-center justify-center ">
      <PinContainer
        title={title}
       
      >
        <div className="flex basis-full flex-col p-2 tracking-tight text-slate-100/50 sm:basis-1/2 w-[21rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            {projectName}
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
                {desc}
            </span>
          </div>
          {/* <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" /> */}
          <img src={imgUri} className="flex flex-1 w-full object-cover p-1 rounded-lg mt-4  bg-gradient-to-br from-blue-200  to-blue-500" alt="image" />
      {/* <HoverBorderGradientDemo /> */}
        </div>
      </PinContainer>
    </div>
  );
}
