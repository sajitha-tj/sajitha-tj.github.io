import React from 'react'
import { TbExternalLink } from 'react-icons/tb'

const Resume = () => {
  return (
    <div className='py-20 resume'>
        <div className='w-full mb-12'>
            <h2 className='text-3xl font-bold uppercase mx-auto w-fit mb-4'>Resume</h2>
            <div className='h-[1px] w-28 mx-auto relative bg-violet-200'>
                <div className='h-[3px] w-10 bg-violet-600 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />
            </div>
        </div>
        <div className='grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-6 xl:auto-rows-[14rem] pb-10'>
            {resumeItems.map((resumeItem, idx)=>(
                <div key={idx} className='h-fit row-span-1'>
                    <h3 className='resume-title'>
                        {resumeItem.title}
                    </h3>
                    {resumeItem.items.map((item,idx)=>(
                    <div key={idx} className='resume-item'>
                        <h4 className='block'>
                            {item.itemHeading}
                        </h4>
                        <h5 className='inline-flex max-w-[90%]'>
                            {item.itemSubHeading}
                            {item.link != "" ?
                            <a className='ml-1 text-sm' href={item.link} target='_blank'><TbExternalLink /></a>
                            : ""}
                        </h5>
                    </div>
                    ))}
                </div>
            ))}
        </div>
    </div>
  )
}

let resumeItems = [
        {
            title : "Education",
            items: [
                {
                    itemHeading : "B.Sc. Engineering Undergraduate at Computer Science and Engineering",
                    itemSubHeading : "University of Moratuwa",
                    link: "",
                },
                {
                    itemHeading : "G.C.E. Advanced Level",
                    itemSubHeading : "Mahinda College - Galle",
                    link: "",
                },
                
            ]
        },
        {
            title : "Certifications",
            items: [
                {
                    itemHeading : "Javascript (Basic) Certification",
                    itemSubHeading : "Offered by HackerRank",
                    link: "https://www.hackerrank.com/certificates/0dbbf850a956",
                },
                {
                    itemHeading : "Python (Basic) Certification",
                    itemSubHeading : "Offered by HackerRank",
                    link: "https://www.hackerrank.com/certificates/001140af2c0c",
                },
                {
                    itemHeading : "Connect and Protect: Networks and Network Security",
                    itemSubHeading : "Offered by Google (Coursera)",
                    link: "https://coursera.org/verify/RMHSS783AG2N",
                },
                {
                    itemHeading : "Play It Safe: Manage Security Risks",
                    itemSubHeading : "Offered by Google (Coursera)",
                    link: "https://www.coursera.org/verify/RNFFXY7SR7R5",
                },
                {
                    itemHeading : "Foundations of Cybersecurity",
                    itemSubHeading : "Offered by Google (Coursera)",
                    link: "https://www.coursera.org/verify/7J5HUKUZ2YHS",
                },{
                    itemHeading : "Comprehensive Master Java Developer",
                    itemSubHeading : "Offered by Institute of Java & Software Engineering (IJSE)",
                    link: "",
                },
                
            ]
        },
        {
            title : "Awards",
            items: [
                {
                    itemHeading : "2nd Runners Up at Brainstorm 2024",
                    itemSubHeading : "Organized by IEEE EMBS of UoM",
                    link: "",
                },
                {
                    itemHeading : "Best Responsive Team at Genesiz 2023",
                    itemSubHeading : "Organized by ERIC KDU",
                    link: "",
                },
                {
                    itemHeading : "Runners Up at TechTriathlon 2023",
                    itemSubHeading : "Organized by Rootcode Sri Lanka",
                    link: "",
                },
                {
                    itemHeading : "Semifinalist at HackX 2022",
                    itemSubHeading : "Organized by University of Kelaniya",
                    link: "",
                },
                {
                    itemHeading : "Best Web Developer of the year 2019",
                    itemSubHeading : "Annual Prize Distribution of Mahinda College, 2020",
                    link: "",
                },
                
            ]
        },
        {
            title : "Skills",
            items: [
                {
                    itemHeading : "Programming Languages",
                    itemSubHeading : "Python, Java, Javascript, HTML, CSS, C++",
                    link: "",
                },
                {
                    itemHeading : "Web Development",
                    itemSubHeading : "React.js, Next.js, TailwindCSS, Bootstrap",
                    link: "",
                },
                {
                    itemHeading : "Cybersecurity Tools",
                    itemSubHeading : "Nmap, Burp Suite, Wireshark, Hydra, etc.",
                    link: "",
                },
                {
                    itemHeading : "Graphic Design",
                    itemSubHeading : "Adobe Photoshop, Adobe Illustrator, Figma",
                    link: "",
                },
            ]
        },
        
    ]

export default Resume