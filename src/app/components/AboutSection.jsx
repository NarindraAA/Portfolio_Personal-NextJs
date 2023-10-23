"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { motion } from "framer-motion";
import { FaBorderAll } from "react-icons/fa";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Html</li>
        <li>Css</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Figma</li>
        <li>Invison</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Institut Teknologi Adhi Tama Surabaya</li>
        <li>SMAN 8 Surabaya</li>
      </ul>
    ),
  },
  {
    title: "Certificate",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Frontend-Html by MySkill</li>
        <li>Frontend-JavaScript by MySkill</li>
        <li>Frontend-Css by MySkill</li>
        <li>Frontend-React by MySkill</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-10 px-4 xl:gap-28 sm:py-28 xl:px-28">
        {/* <Image src="/images/about-image.png" width={500} height={500} /> */}
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/img.jpg"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full"
              width={400}
              height={400}
              // style={}
              
            />
          </div>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          I am an information systems graduate. Interested in the world 
          of programming and computers. Joined a technology student community while 
          studying to improve my skills. Loved the modern and attractive website interface.
           Once developed a training registration website during an internship at BPSDMP Kominfo Surabaya.
            Doing coding using CSS, HTML, and currently learning website development with a backend using Golang.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certificate{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
