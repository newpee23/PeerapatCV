import React from "react";
import Image from "next/image";

// images
import me from "@/public/Screenshot.png";
import ProjectCard from "./ProjectCard";
import { Carousel } from "antd";

const CarouselPerformanceWork = () => {

    return (

        <Carousel className="text-white py-8">
            <div className="carousel-grid gap-5 grid-cols-1 sml:grid-cols-3 px-20">
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </div>
            <div className="carousel-grid gap-5 grid-cols-1 sml:grid-cols-3 px-20">
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </div>
        </Carousel>
    );
};

export default CarouselPerformanceWork;