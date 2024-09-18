'use client';

import React, { useEffect, useState } from 'react'
import { FaGithub, FaGlobe, FaSquareBehance } from 'react-icons/fa6';

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

export const ProjectGrid = ({ cards }:{ cards:Card[] }) => {
    const [selected, setSelected] = useState<Card | null>(null);

    useEffect(()=>{
        setSelected(cards[0]);
    },[cards]);

    const handleClick = (card: Card) => {
        setSelected(card);
    };

    const GridCard = ({ card }: { card: Card }) => {
        return (
            <div
                className={`${card === selected ? 'w-full h-[77vh] sm:w-[450px]' : 'w-full h-[20vh] sm:w-[200px]'} sm:min-h-[77vh] bg-gradient-to-t from-black to-[rgba(0,0,0,0.5)] relative rounded-md overflow-hidden`}
                onClick={()=>handleClick(card)}
                onMouseEnter={()=>handleClick(card)}
                >
                    <img src={card.thumbnail} alt={card.name} className="absolute -z-10 object-cover object-top inset-0 h-full w-full"/>
                    <div className={`absolute ${card === selected ? "top-1/2 -translate-y-1/2" : "bottom-0"} px-4 mb-2 transition-all duration-700`}>
                        <div className="text-white mb-2 transition duration-200">
                            { card !== selected && <span className='flex gap-2 mb-1'>{card.icons}</span>}
                            <h1 className="text-xl font-bold">{card.name}</h1>
                        </div>
                    {card === selected ? 
                        <div>
                            <img src={card.thumbnail} alt={card.name} className="w-full rounded-lg" />
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
                        :
                        <div className='h-2' />
                    }
                    </div>
            </div>
        );
    };

    return (
        <div className='overflow-x-scroll'>
            <div className='sm:w-fit w-full min-h-10 mt-4 flex flex-col sm:flex-row gap-2'>
                {cards.map((card,i)=>(
                    <GridCard key={i} card={card} />
                ))}
            </div>
        </div>
    )
};