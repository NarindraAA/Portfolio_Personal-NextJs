"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { motion } from "framer-motion";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Express</li>
        <li>PostgreSQL</li>
        <li>Sequelize</li>
        <li>JavaScript</li>
        <li>React</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Fullstack Academy of Code</li>
        <li>University of California, Santa Cruz</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>AWS Cloud Practitioner</li>
        <li>Google Professional Cloud Developer</li>
      </ul>
    ),
  },
];

const Experience = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols gap-8 items-center py-8 px-4 xl:gap-16 sm:pb-16 sm:pt-3 xl:px-16">

        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">Experience</h2>
          <span className="text-2xl  text-white mb-4">BPSDMP Kominfo Surabaya <span className="font-bold text-white mb-4">as Programer Internship</span></span>
          <p className="text-base lg:text-lg">
          - Create a website program for registration of training and education with the team according to the wishes and directions
          <br></br>
          - Design and develop the interface and interaction between users and websites for training and education registration using bootstrap
          <br></br>
          - Develop and integrate website backends such as databases with the interface that has been created
          </p>
          
        </div>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">Community</h2>
          <span className="text-2xl  text-white mb-4">Ma-Tech <span className="font-bold text-white mb-4">as Department of Home Affairs</span></span>
          <p className="text-base lg:text-lg">
          - Exchange ideas and share information with other students about existing Information Technology.
          <br></br>
          - Learn together about the lessons in the subjects taken.
          <br></br>
          - Assist in the realization of an information technology seminar event to educate high school / vocational students.
          </p>
          
        </div>
      </div>
    </section>
  );
};

export default Experience;
