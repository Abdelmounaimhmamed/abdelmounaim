"use client";
import React from "react";
import { PinContainer } from "../components/ui/3d-pin";
import { GlobeDemo } from "@/components/byMe/DevelusConcept";
import { Projects } from "@/components/byMe/projects";
import { NavbarDemo } from "@/components/byMe/NavBar";
import { SignupFormDemo } from "@/components/byMe/Contact";
import { GoogleGeminiEffectDemo } from "@/components/byMe/Benefits";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { HeroParallaxDemo } from "@/components/byMe/Hero";



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
      <HeroParallaxDemo />
      <GlobeDemo />
      <Projects />

      {/* <NavbarDemo />
      <GoogleGeminiEffectDemo />
      <SignupFormDemo /> */}

    </main>
  );
}
