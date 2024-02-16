import { dataPerformanceWorkPage1, dataPerformanceWorkPage2, dataPerformanceWorkPage3 } from "../data/dataPerformance";
// images
import ProjectCard from "./ProjectCard";
import { Carousel } from "antd";


const CarouselPerformanceWork = () => {

    return (
        <Carousel className="text-white py-8">
            <div className="carousel-grid gap-5 grid-cols-1 sml:grid-cols-3 px-20">
                {dataPerformanceWorkPage1.map((items) => (
                    <ProjectCard items={items} key={items.id} />
                ))}
            </div>
            <div className="carousel-grid gap-5 grid-cols-1 sml:grid-cols-3 px-20">
                {dataPerformanceWorkPage2.map((items) => (
                    <ProjectCard items={items} key={items.id} />
                ))}
            </div>
            <div className="carousel-grid gap-5 grid-cols-1 sml:grid-cols-3 px-20">
                {dataPerformanceWorkPage3.map((items) => (
                    <ProjectCard items={items} key={items.id} />
                ))}
            </div>
        </Carousel>
    );
};

export default CarouselPerformanceWork;