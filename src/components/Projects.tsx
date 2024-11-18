import React from 'react'
import Heading from './Heading';
import Card from './Card';

const data = [
    {
        id: 0,
        tital:"Todo List",
        desc: "A React & TypeScript based app for managing and organizing",
        img: "/project 02.png",
        tags: ["React", "Node", "CSS", "Typescript"],

    },
    {
        id: 1,
        tital:"Weather App",
        desc: "A Next.JS & TypeScript based tool for fetching ",
        img: "/project 01.png",
        tags: ["Next.JS", "Node", "CSS", "Typescript"],
    },
    {
        id: 2,
        tital:"Static Interactive Resume",
        desc: "A TypeScript based interactive resume built with HTML and CSS",
        img: "/project 03.png",
        tags: ["HTML", "Node", "CSS", "Typescript"],  
    },
];

const Projects = () => {
    return (
        <div id='projects' className='Container pt-32'>
            <Heading tital='My Projects'/>
            <div className='grid gap-10 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
                {data.map((el) => (<Card 
                key={el.id}
                tital={el.tital}
                desc={el.desc}
                img={el.img}
                tags={el.tags}
                />))}
            </div>

        </div>
    )
}

export default Projects 