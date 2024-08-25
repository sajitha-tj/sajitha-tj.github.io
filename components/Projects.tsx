"use client";

import React, { useEffect, useState } from 'react'
import { LayoutGrid } from './ui/layout-grid';
import { IoLogoJavascript } from 'react-icons/io5';
import { FaFigma, FaPython, FaReact } from 'react-icons/fa6';
import { SiAdobeillustrator, SiAdobephotoshop, SiGnubash, SiMui } from 'react-icons/si';
import { RiJavaLine } from 'react-icons/ri';

type Card = {
  id: number;
  className: string;
  thumbnail: string;
  category: string;
  name: string;
  description: string;
  icons: React.ReactNode | string;
  link: string;
};

const Projects = () => {

  const [gridItems, setGridItems] = useState<Card[]>(cards);
  const [selectedFilter, setSelectedFilter] = useState('All');

  const [projectFilters, setProjectFilters] = useState<string[]>(['All']);

  const handleFilterItems = (category: string) => {
    if (category.toLowerCase() === 'all') {
      setGridItems(cards);
      setSelectedFilter('All');
      return;
    }
    const newItems = cards.filter((item) => item.category.toLowerCase() === category.toLowerCase());
    setGridItems(newItems);
    setSelectedFilter(category);
  }

  useEffect(() => {
    let filters = cards.map((item) => item.category);
    filters = ['All', ...filters];
    let setfilters = new Set(filters);
    setProjectFilters(Array.from(setfilters));
  },[]);

  return (
    <div className='py-20'>
      <div className='w-full mb-8'>
        <h2 className='text-3xl font-bold uppercase mx-auto w-fit mb-4'>Projects</h2>
        <div className='h-[1px] w-28 mx-auto relative bg-violet-200'>
            <div className='h-[3px] w-10 bg-violet-600 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />
        </div>
      </div>
      <p className='text-center mb-8'>Explore my work in software development, web development and graphic designing.</p>
      {/* filter buttons */}
      <div className='w-full flex justify-center gap-4 tracking-wider mb-3 overflow-scroll md:overflow-hidden'>
        {projectFilters.map((filter, i) => (
          <button
            key={i}
            className={`project-filter-btns ${selectedFilter === filter ? 'filter-btn-active' : ''}`}
            onClick={()=>handleFilterItems(filter)}
            >
              {filter}
          </button>
        ))}
      </div>
      {/* grid */}
      {/* style={{height:`${Math.ceil(gridItems.length/3) * 250}px`}} */}
      <div>
        <LayoutGrid cards={gridItems} />
      </div>
    </div>
  )
}

const cards = [
  {
    id: 1,
    className: " ",
    name: "PosturePulse",
    description: 'PosturePulse is an AI-based physiotherapy assistant that provides real-time feedback and personalized exercise programs to help users improve their posture and alleviate pain.',
    category: "Web",
    thumbnail: "/images/projects/posturepulse-image.png",
    icons: <> <FaReact /><IoLogoJavascript /> </>,
    link: "https://github.com/TeamRedshifts/posture-pulse-frontend"
  },
  {
    id: 2,
    className: " ",
    name: "Shellify",
    description: 'Shellify is a terminal-based application that allows you to download and play Spotify playlists and albums directly from your terminal.',
    category: "Software",
    thumbnail: "/images/projects/shellify-image.png",
    icons: <FaPython />,
    link: "https://github.com/sajitha-tj/shellify"
  },
  {
    id: 3,
    className: " ",
    name: "HRM-Portal",
    description: 'HRM-Portal: A comprehensive Human Resource Management System designed to streamline employee data management, leave tracking, and reporting for organizations.',
    category: "Web",
    thumbnail: "/images/projects/hrmportal-image.png",
    icons: <> <FaReact /><SiMui /><IoLogoJavascript /> </>,
    link: "https://github.com/DBMS-group-11/HRM-Portal/"
  },
  {
    id: 4,
    className: " ",
    name: "theOWL",
    description: 'The OWL is a bash script designed to help ensure continued access to a linux based target system by establishing multiple backdoor mechanisms.',
    category: "Scripts",
    thumbnail: "/images/projects/theOWL-image.png",
    icons: <SiGnubash />,
    link: "https://github.com/sajitha-tj/theOWL"
  },
  {
    id: 5,
    className: " ",
    name: "B'Day Post Generator",
    description: 'This is a simple python program which was used to generate birthday wish posts(flyers) for the Members of Sasnaka Sansada.',
    category: "Scripts",
    thumbnail: "/images/projects/bdaypost-image.png",
    icons: <FaPython />,
    link: "https://github.com/sajitha-tj/b-day-post-generator"
  },
  {
    id: 6,
    className: " ",
    name: "Hotel Reservation System",
    description: 'This Hotel Management System has the potential to Register new Guests, reserve rooms for them and calculates the bill on check-out. Users (Hotel Crew) can log in to the system to make changes.',
    category: "Software",
    thumbnail: "/images/projects/hotel-management-image.png",
    icons: <RiJavaLine />,
    link: "https://github.com/sajitha-tj/Hotel-Reservation-System"
  },
  {
    id: 7,
    className: " ",
    name: "Stride Mobile App UI",
    description: '',
    category: "Design",
    thumbnail: "/images/projects/stride-image.png",
    icons: <FaFigma />,
    link: "https://www.behance.net/gallery/203682013/Stride-TechTriathlon-2023-1st-Runners-Up"
  },
  {
    id: 8,
    className: " ",
    name: "MoraXtreme Flyer Designs",
    description: 'Moraxtreme is a competition organized by IEEE computer society student branch at University of Moratuwa. Thrilled to unveil my designs for this amazing project.',
    category: "Design",
    thumbnail: "/images/projects/moraxtreme-image.png",
    icons: <SiAdobephotoshop />,
    link: 'https://www.behance.net/gallery/186386099/Moraxtreme-Flyer-Designs'
  },
  {
    id: 9,
    className: " ",
    name: "Manaru Logo Designs",
    description: "Explore the essence of Manaruu's identity through the logo design, where the Sinhala letter \'ම\' intertwines with modern photography.",
    category: "Design",
    thumbnail: "/images/projects/manaru-image.png",
    icons: <> <SiAdobephotoshop /><SiAdobeillustrator /> </>,
    link: 'https://www.behance.net/gallery/195706909/MANARUU-Logo-Design'
  },  
]

export default Projects