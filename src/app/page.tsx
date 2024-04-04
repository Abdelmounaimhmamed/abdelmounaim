"use client";
import React from "react";
import { PinContainer } from "../components/ui/3d-pin";
import { GlobeDemo } from "@/components/byMe/DevelusConcept";
import  Projects  from "@/components/byMe/Projects";
import { NavbarDemo } from "@/components/byMe/NavBar";
import { SignupFormDemo } from "@/components/byMe/Contact";
import { GoogleGeminiEffectDemo } from "@/components/byMe/Benefits";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { HeroParallaxDemo } from "@/components/byMe/Hero";
import { WavyBackgroundDemo } from "@/components/byMe/Wavywavy";
import { GlowingStarsBackgroundCardPreview } from "@/components/byMe/Cards";
import Services from "@/components/byMe/Services";
import GlowingCard from "@/components/byMe/GlowingCard";
import { Techs } from "@/components/byMe/Techs";
import AoutMe from "@/components/byMe/AoutMe";



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
      <NavbarDemo />
      <HeroParallaxDemo />
      <AoutMe />
      <GlobeDemo />
      
    
      <Projects />
      <Services />
     <GlowingCard /> 
     <Techs />
     <SignupFormDemo /> 

    </main>
  );
}
