"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const info = [
  {
    icoon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+92) 313 463 6785",
  },
  {
    icoon: <FaEnvelope />,
    title: "E-mail",
    description: "ahmadraza71331@gmail.com",
  },
  {
    icoon: <FaMapMarkerAlt />,
    title: "Address",
    description:
      "House NO E-453, street No 2, near Nishat Colony Lahore Cantt",
  },
];

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.2, duration: 0.6, ease: "easeIn" },
      }}
      className="py-6"
    >           
      <div className="container mx-auto">
        {/* Desktop View (xl and above) */}
            <div className="hidden xl:flex flex-col xl:flex-row gap-[30px] xl:mt-[-55px]">
          {/* Form */}
         
          <div className="xl:w-[54%] ">
            <form className="flex flex-col gap-3 p-10 bg-[#27272c] rounded-xl h-[490px]">
              <h3 className="text-4xl text-[#00ff99]">Let's Work together</h3>
              <p className="text-white/60">
                I am a motivated BSCS student at Virtual University with a passion
                for frontend web development, eager to learn from mentors and offer
                services to clients.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="text" placeholder="Firstname" />
                <Input type="text" placeholder="Lastname" />
                <Input type="email" placeholder="Email address" />
                <Input type="tel" placeholder="Phone number" />
              </div>

              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="web">Web Development</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <Textarea className="h-[200px]" placeholder="Type your message here." />
              <Button size="md" className="max-w-40">Send Message</Button>
            </form>
          </div>

          {/* Info */}
          <div className="flex-1 flex items-center xl:justify-end xl:mt-[-60px]">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-[#00ff99] rounded-md flex items-center justify-center text-[28px]">
                    {item.icoon}
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mobile/Tablet View */}
        <div className="block  xl:hidden">
          <Swiper direction="vertical" spaceBetween={30} slidesPerView={1} className="h-[600px] ">
            {/* Slide 1: Form */}
           <SwiperSlide>
              <div className="p-6 mt-[-140px] rounded-xl h-full flex flex-col justify-center gap-6 ">
                <ul className="flex flex-col gap-10 ">
                  {info.map((item, index) => (
                    <li key={index} className="flex items-center gap-6">
                      <div className="w-[52px] h-[52px] /10 text-[#00ff99] rounded-md flex items-center justify-center text-[24px]">
                        {item.icoon}
                      </div>
                      <div className="flex-1">
                        <p className="text-white/60">{item.title}</p>
                        <h3 className="text-lg text-white">{item.description}</h3>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </SwiperSlide>

            {/* Slide 2: Info */}
             <SwiperSlide>
              <form className="flex flex-col gap-6 p-6 bg-[#27272c] rounded-xl h-[800px] mt-[-260px]">
                <h3 className="text-3xl text-[#00ff99]">Let's Work together</h3>
                <p className="text-white/60 text-sm">
                  I am a motivated BSCS student at Virtual University with a passion
                  for frontend web development, eager to learn from mentors and offer
                  services to clients.
                </p>

                <div className="grid grid-cols-1 gap-4">
                  <Input type="text" placeholder="Firstname" />
                  <Input type="text" placeholder="Lastname" />
                  <Input type="email" placeholder="Email address" />
                  <Input type="tel" placeholder="Phone number" />
                </div>

                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Select a service</SelectLabel>
                      <SelectItem value="web">Web Development</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>

                <Textarea className="h-[250px] " placeholder="Type your message here." />
                <Button size="md" className="max-w-40">Send</Button>
              </form>
            </SwiperSlide>
            
          </Swiper>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
