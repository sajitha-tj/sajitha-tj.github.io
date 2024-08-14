"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import { FaGithub, FaGlobe, FaSquareBehance } from "react-icons/fa6";
import { IoCloseCircleOutline, IoLogoJavascript } from "react-icons/io5";

type Card = {
  id: number;
  className: string;
  name: string;
  description: string;
  category: string;
  thumbnail: string;
  icons: React.ReactNode | string;
  link: string;
};

export const LayoutGrid = ({ cards }: { cards: Card[] }) => {
  const [selected, setSelected] = useState<Card | null>(null);
  const [lastSelected, setLastSelected] = useState<Card | null>(null);

  const handleClick = (card: Card) => {
    setLastSelected(selected);
    setSelected(card);
  };

  const handleOutsideClick = () => {
    setLastSelected(selected);
    setSelected(null);
  };

  return (
    <div className="w-full h-full p-10 grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-2  max-w-7xl mx-auto gap-3 relative">
      {cards.map((card, i) => (
        <div key={i} className={cn(card.className, "")}>
          <motion.div
            onClick={() => handleClick(card)}
            className={cn(
              card.className,
              "relative overflow-hidden cursor-pointer",
              selected?.id === card.id
                ? "rounded-lg absolute inset-0 h-60 md:h-96 w-full lg:w-3/4 xl:w-1/2 m-auto z-50 flex justify-center items-center flex-wrap flex-col"
                : lastSelected?.id === card.id
                ? "z-40 bg-white rounded-xl h-44 md:h-52 w-full"
                : "bg-white rounded-xl h-44 md:h-52 w-full"
            )}
            layoutId={`card-${card.id}`}
          >
            {selected?.id === card.id && <SelectedCard selected={selected} handleClose={handleOutsideClick} />}
            <ImageComponent card={card} />
            {selected?.id != card.id && <CardTopic card={card} /> }
          </motion.div>
        </div>
      ))}
      <motion.div
        onClick={handleOutsideClick}
        className={cn(
          "absolute h-full w-full left-0 top-0 bg-black opacity-0 z-10",
          selected?.id ? "pointer-events-auto cursor-pointer" : "pointer-events-none cursor-default"
        )}
        animate={{ opacity: selected?.id ? 0.3 : 0 }}
      />
    </div>
  );
};

const ImageComponent = ({ card }: { card: Card }) => {
  return (
    <motion.img
      layoutId={`image-${card.id}-image`}
      src={card.thumbnail}
      height="500"
      width="500"
      className={cn(
        "object-cover object-top absolute inset-0 h-full w-full transition duration-200"
      )}
      alt="thumbnail"
    />
  );
};

const SelectedCard = ({ selected, handleClose }: { selected: Card | null; handleClose: () => void }) => {
  return (
    <div className="bg-transparent cursor-default h-full w-full flex flex-col justify-end rounded-lg shadow-2xl relative z-[60]">
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 0.75,
        }}
        className="absolute inset-0 h-full w-full bg-black opacity-75 z-10"
      />
      {/* close Btn */}
      <div className="text-white absolute top-4 right-4 z-[70]">
          <button onClick={handleClose}><IoCloseCircleOutline className="text-xl"/></button>
      </div>
      <motion.div
        layoutId={`content-${selected?.id}`}
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          y: 100,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className="relative px-8 pb-4 z-[70]"
      >
        {/* content */}
        <div>
            <p className="font-bold md:text-4xl text-xl text-white">
                {selected?.name}
            </p>
            <div className="text-base leading-tight my-4 max-w-lg text-neutral-200">
                {selected?.description}
            </div>
            <div className="text-white flex gap-2 items-center justify-between mb-2">
                <div className="flex gap-2">
                    {selected?.icons}
                </div>
                <div className="text-xs uppercase">
                    <a
                    href={selected?.link}
                    className="flex text-xs border border-gray-500 px-4 py-1 rounded-md hover:bg-black hover:text-violet-400 hover:border-violet-400 transition-colors duration-200"
                    target="_blank"
                    >
                        View on
                        {selected?.link.toLowerCase().includes('github') ? 
                          <FaGithub className="inline ml-2 text-sm" /> 
                          : selected?.link.toLowerCase().includes('behance') ? 
                            <FaSquareBehance className="inline ml-2 text-sm" /> 
                            : <FaGlobe className="inline ml-2 text-sm" />
                        }
                    </a>
                </div>
            </div>
        </div>
      </motion.div>
    </div>
  );
};


const CardTopic = ({ card }: { card: Card }) => {
    return(
        <div className="w-full h-full absolute bg-gradient-to-t from-black to-transparent">
            <div className="absolute bottom-0 left-0 right-0 px-4 py-3 text-white">
                <span className='flex gap-2 mb-1'>{card.icons}</span>
                <h1 className="text-xl font-bold">{card.name}</h1>
            </div>
        </div>
    );
}