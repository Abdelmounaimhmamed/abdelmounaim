"use client";
import { TextGenerateEffect } from "../ui/text-generate-effect";

const words = `Hello, I'm Abdelmounaim Hmamed, a dedicated student pursuing a degree in Software and Data Engineering. Currently, I am in my second year, specializing in Software and Data Science at ENSA Khouribga in Morocco. Prior to this, I also attended 1337 Khouribga.

My passion lies in software development, optimization, cloud computing, DevOps practices, and the fascinating realm of data science. I believe in leveraging the latest technologies to propel businesses to new heights.

Let's connect and discuss how we can elevate your business using cutting-edge technologies. Together, we can take your venture to the next level.

`;

export function TextGenerateEffectDemo() {
  return <TextGenerateEffect words={words} />;
}
