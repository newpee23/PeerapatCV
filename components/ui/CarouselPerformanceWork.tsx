import { dataPerformanceWorkPage1, dataPerformanceWorkPage2, dataPerformanceWorkPage3 } from "../data/dataPerformance";
// images
import ProjectCard from "./ProjectCard";
import { Carousel } from "antd";


const CarouselPerformanceWork = () => {

    return (
        <Carousel className="text-white py-8">
            <div className="carousel-grid gap-5 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 lg:px-20 m-auto w-full">
                {dataPerformanceWorkPage1.map((items) => (
                    <ProjectCard items={items} key={items.id} />
                ))}
            </div>
            <div className="carousel-grid gap-5 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 lg:px-20 m-auto  w-full">
                {dataPerformanceWorkPage2.map((items) => (
                    <ProjectCard items={items} key={items.id} />
                ))}
            </div>
            <div className="carousel-grid gap-5 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 lg:px-20 m-auto  w-full">
                {dataPerformanceWorkPage3.map((items) => (
                    <ProjectCard items={items} key={items.id} />
                ))}
            </div>
        </Carousel>
    );
};

export default CarouselPerformanceWork;