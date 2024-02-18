import { useState } from "react";
import { dataPerformanceWorkPage1, dataPerformanceWorkPage2, dataPerformanceWorkPage3 } from "../data/dataPerformance";
import ProjectCard from "./ProjectCard";

const CarouselPerformanceWork = () => {
    const [dotActive, setDotActive] = useState({
        btn1: true,
        btn2: false,
        btn3: false
    });

    const handleDotClick = (btn: string) => {
        setDotActive({
            btn1: btn === 'btn1',
            btn2: btn === 'btn2',
            btn3: btn === 'btn3'
        });
    };

    return (
        <div>
            <div className="text-white py-8 min-h-[810px]">
                <div className={`${dotActive.btn1 ? 'grid' : 'hidden'} gap-5 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 lg:px-20 m-auto w-full`}>
                    {dataPerformanceWorkPage1.map((items) => (
                        <ProjectCard items={items} key={items.id} />
                    ))}
                </div>
                <div className={`${dotActive.btn2 ? 'grid' : 'hidden'} gap-5 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 lg:px-20 m-auto w-full`}>
                    {dataPerformanceWorkPage2.map((items) => (
                        <ProjectCard items={items} key={items.id} />
                    ))}
                </div>
                <div className={`${dotActive.btn3 ? 'grid' : 'hidden'} gap-5 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 lg:px-20 m-auto w-full`}>
                    {dataPerformanceWorkPage3.map((items) => (
                        <ProjectCard items={items} key={items.id} />
                    ))}
                </div>
            </div>
            <ul className="flex items-center justify-center">
                <div
                    className={`${dotActive.btn1 ? 'bg-orange-500' : 'bg-gray-500'} w-3 h-3 cursor-pointer z-[1] ransition-transform transform hover:scale-150 rounded-full duration-500 shadow-boxShadow`}
                    onClick={() => handleDotClick('btn1')}
                ></div>
                <div
                    className={`${dotActive.btn2 ? 'bg-orange-500' : 'bg-gray-500'} mx-3 w-3 h-3 cursor-pointer z-[1] ransition-transform transform hover:scale-150 rounded-full duration-500 shadow-boxShadow`}
                    onClick={() => handleDotClick('btn2')}
                ></div>
                <div
                    className={`${dotActive.btn3 ? 'bg-orange-500' : 'bg-gray-500'} w-3 h-3 cursor-pointer z-[1] ransition-transform transform hover:scale-150 rounded-full duration-500 shadow-boxShadow`}
                    onClick={() => handleDotClick('btn3')}
                ></div>
            </ul>
        </div>
    );
};

export default CarouselPerformanceWork;