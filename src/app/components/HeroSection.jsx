"use client";
import React, {Component}from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import Link from "next/link";

const HeroSection = () => {
  
        return (
          <section className="lg:py-16">
            <div className="grid grid-cols-1 sm:grid-cols-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
              >
                <h1 className="text-white mb-4 text-4xl sm:text-5xl  lg:leading-normal font-extrabold">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-emerald-600">
                    Hello, I&apos;m{" "}Narindra Arifta Antoko
                  </span>
                  <br></br>
                  <TypeAnimation
                    sequence={[
                      "Junior Frontend Developer",
                      1000,
                    ]}
                    wrapper="span"
                    speed={150}
                    repeat={Infinity}
                  />
                </h1>
                <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
                I have experience in creating web applications, I develop products for website
                <br></br>
                Want to collaborate with me? Take a look at the button below !
                </p>
                  <div className=" rounded-md py-1 px-1 flex flex-col sm:flex-row items-center ">  
                    <Link
                      href="https://www.linkedin.com/in/narindra-arifta-antoko/"
                      className="px-6 columns-1x2 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-cyan-500 to-emerald-500 hover:bg-slate-200 text-white"
                    >
                    {/* Linkedin */}
                    <FaLinkedinIn/> 
                    </Link>
                    <Link
                      href="https://github.com/NarindraAA"
                      className="px-6 columns-1x2 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-cyan-500 to-emerald-500 hover:bg-slate-200 text-white"
                    >
                    {/* Linkedin */}
                    <FaGithub/> 
                    </Link>
                    <Link
                      href="https://drive.google.com/file/d/1w9pVFlgvWboFfFM0T6Ds6lRHAUuUBHZp/view?usp=sharing"
                      className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-cyan-500 to-emerald-500 hover:bg-slate-800 text-white "
                    >
                      <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                        Download resume
                      </span>
                    </Link>
                  </div>
              </motion.div>
            </div>
          </section>
        );
  };


export default HeroSection;
