import { useState } from "react";
import { dataPerformanceWorkPage1, dataPerformanceWorkPage2, dataPerformanceWorkPage3, dataPerformanceWorkPageMobile1, dataPerformanceWorkPageMobile10, dataPerformanceWorkPageMobile11, dataPerformanceWorkPageMobile12, dataPerformanceWorkPageMobile13, dataPerformanceWorkPageMobile14, dataPerformanceWorkPageMobile2, dataPerformanceWorkPageMobile3, dataPerformanceWorkPageMobile4, dataPerformanceWorkPageMobile5, dataPerformanceWorkPageMobile6, dataPerformanceWorkPageMobile7, dataPerformanceWorkPageMobile8, dataPerformanceWorkPageMobile9 } from "../data/dataPerformance";
import ProjectCard from "./ProjectCard";
import Slider from "react-slick";

const CarouselPerformanceWork = () => {
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: false
    };

    return (
        <div className="w-full">
            {/* <div className="text-white py-8 min-h-[810px] hidden lg:block">
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
            <ul className="items-center justify-center hidden lg:flex">
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
            </ul> */}

            {/* Mobile */}
            {/* <div className="text-white py-8 block lg:hidden">
                <div className={`${dotActive.btn1 ? 'grid' : 'hidden'} gap-5 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 lg:px-20 m-auto w-full`}>
                    {dataPerformanceWorkPageMobile1.map((items) => (
                        <ProjectCard items={items} key={items.id} />
                    ))}
                </div>
                <div className={`${dotActive.btn2 ? 'grid' : 'hidden'} gap-5 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 lg:px-20 m-auto w-full`}>
                    {dataPerformanceWorkPageMobile2.map((items) => (
                        <ProjectCard items={items} key={items.id} />
                    ))}
                </div>
                <div className={`${dotActive.btn3 ? 'grid' : 'hidden'} gap-5 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 lg:px-20 m-auto w-full`}>
                    {dataPerformanceWorkPageMobile3.map((items) => (
                        <ProjectCard items={items} key={items.id} />
                    ))}
                </div>
                <div className={`${dotActive.btn4 ? 'grid' : 'hidden'} gap-5 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 lg:px-20 m-auto w-full`}>
                    {dataPerformanceWorkPageMobile4.map((items) => (
                        <ProjectCard items={items} key={items.id} />
                    ))}
                </div>
                <div className={`${dotActive.btn5 ? 'grid' : 'hidden'} gap-5 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 lg:px-20 m-auto w-full`}>
                    {dataPerformanceWorkPageMobile5.map((items) => (
                        <ProjectCard items={items} key={items.id} />
                    ))}
                </div>
                <div className={`${dotActive.btn6 ? 'grid' : 'hidden'} gap-5 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 lg:px-20 m-auto w-full`}>
                    {dataPerformanceWorkPageMobile6.map((items) => (
                        <ProjectCard items={items} key={items.id} />
                    ))}
                </div>
                <div className={`${dotActive.btn7 ? 'grid' : 'hidden'} gap-5 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 lg:px-20 m-auto w-full`}>
                    {dataPerformanceWorkPageMobile7.map((items) => (
                        <ProjectCard items={items} key={items.id} />
                    ))}
                </div>
                <div className={`${dotActive.btn8 ? 'grid' : 'hidden'} gap-5 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 lg:px-20 m-auto w-full`}>
                    {dataPerformanceWorkPageMobile8.map((items) => (
                        <ProjectCard items={items} key={items.id} />
                    ))}
                </div>
                <div className={`${dotActive.btn9 ? 'grid' : 'hidden'} gap-5 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 lg:px-20 m-auto w-full`}>
                    {dataPerformanceWorkPageMobile9.map((items) => (
                        <ProjectCard items={items} key={items.id} />
                    ))}
                </div>
                <div className={`${dotActive.btn10 ? 'grid' : 'hidden'} gap-5 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 lg:px-20 m-auto w-full`}>
                    {dataPerformanceWorkPageMobile10.map((items) => (
                        <ProjectCard items={items} key={items.id} />
                    ))}
                </div>
                <div className={`${dotActive.btn11 ? 'grid' : 'hidden'} gap-5 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 lg:px-20 m-auto w-full`}>
                    {dataPerformanceWorkPageMobile11.map((items) => (
                        <ProjectCard items={items} key={items.id} />
                    ))}
                </div>
                <div className={`${dotActive.btn12 ? 'grid' : 'hidden'} gap-5 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 lg:px-20 m-auto w-full`}>
                    {dataPerformanceWorkPageMobile12.map((items) => (
                        <ProjectCard items={items} key={items.id} />
                    ))}
                </div>
                <div className={`${dotActive.btn13 ? 'grid' : 'hidden'} gap-5 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 lg:px-20 m-auto w-full`}>
                    {dataPerformanceWorkPageMobile13.map((items) => (
                        <ProjectCard items={items} key={items.id} />
                    ))}
                </div>
                <div className={`${dotActive.btn14 ? 'grid' : 'hidden'} gap-5 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 lg:px-20 m-auto w-full`}>
                    {dataPerformanceWorkPageMobile14.map((items) => (
                        <ProjectCard items={items} key={items.id} />
                    ))}
                </div>
            </div>
            <ul className="items-center justify-center flex lg:hidden">
                <div
                    className={`${dotActive.btn1 ? 'bg-orange-500' : 'bg-gray-500'} mx-1 w-3 h-3 cursor-pointer z-[1] ransition-transform transform hover:scale-150 rounded-full duration-500 shadow-boxShadow`}
                    onClick={() => handleDotClick('btn1')}
                ></div>
                <div
                    className={`${dotActive.btn2 ? 'bg-orange-500' : 'bg-gray-500'} mx-1 w-3 h-3 cursor-pointer z-[1] ransition-transform transform hover:scale-150 rounded-full duration-500 shadow-boxShadow`}
                    onClick={() => handleDotClick('btn2')}
                ></div>
                <div
                    className={`${dotActive.btn3 ? 'bg-orange-500' : 'bg-gray-500'} mx-1 w-3 h-3 cursor-pointer z-[1] ransition-transform transform hover:scale-150 rounded-full duration-500 shadow-boxShadow`}
                    onClick={() => handleDotClick('btn3')}
                ></div>
                <div
                    className={`${dotActive.btn4 ? 'bg-orange-500' : 'bg-gray-500'} mx-1 w-3 h-3 cursor-pointer z-[1] ransition-transform transform hover:scale-150 rounded-full duration-500 shadow-boxShadow`}
                    onClick={() => handleDotClick('btn4')}
                ></div>
                  <div
                    className={`${dotActive.btn5 ? 'bg-orange-500' : 'bg-gray-500'} mx-1 w-3 h-3 cursor-pointer z-[1] ransition-transform transform hover:scale-150 rounded-full duration-500 shadow-boxShadow`}
                    onClick={() => handleDotClick('btn5')}
                ></div>
                <div
                    className={`${dotActive.btn6 ? 'bg-orange-500' : 'bg-gray-500'} mx-1 w-3 h-3 cursor-pointer z-[1] ransition-transform transform hover:scale-150 rounded-full duration-500 shadow-boxShadow`}
                    onClick={() => handleDotClick('btn6')}
                ></div>
                <div
                    className={`${dotActive.btn7 ? 'bg-orange-500' : 'bg-gray-500'} mx-1 w-3 h-3 cursor-pointer z-[1] ransition-transform transform hover:scale-150 rounded-full duration-500 shadow-boxShadow`}
                    onClick={() => handleDotClick('btn7')}
                ></div>
                <div
                    className={`${dotActive.btn8 ? 'bg-orange-500' : 'bg-gray-500'} mx-1 w-3 h-3 cursor-pointer z-[1] ransition-transform transform hover:scale-150 rounded-full duration-500 shadow-boxShadow`}
                    onClick={() => handleDotClick('btn8')}
                ></div>
                  <div
                    className={`${dotActive.btn9 ? 'bg-orange-500' : 'bg-gray-500'} mx-1 w-3 h-3 cursor-pointer z-[1] ransition-transform transform hover:scale-150 rounded-full duration-500 shadow-boxShadow`}
                    onClick={() => handleDotClick('btn9')}
                ></div>
                <div
                    className={`${dotActive.btn10 ? 'bg-orange-500' : 'bg-gray-500'} mx-1 w-3 h-3 cursor-pointer z-[1] ransition-transform transform hover:scale-150 rounded-full duration-500 shadow-boxShadow`}
                    onClick={() => handleDotClick('btn10')}
                ></div>
                <div
                    className={`${dotActive.btn11 ? 'bg-orange-500' : 'bg-gray-500'} mx-1 w-3 h-3 cursor-pointer z-[1] ransition-transform transform hover:scale-150 rounded-full duration-500 shadow-boxShadow`}
                    onClick={() => handleDotClick('btn11')}
                ></div>
                <div
                    className={`${dotActive.btn12 ? 'bg-orange-500' : 'bg-gray-500'} mx-1 w-3 h-3 cursor-pointer z-[1] ransition-transform transform hover:scale-150 rounded-full duration-500 shadow-boxShadow`}
                    onClick={() => handleDotClick('btn12')}
                ></div>
                       <div
                    className={`${dotActive.btn13 ? 'bg-orange-500' : 'bg-gray-500'} mx-1 w-3 h-3 cursor-pointer z-[1] ransition-transform transform hover:scale-150 rounded-full duration-500 shadow-boxShadow`}
                    onClick={() => handleDotClick('btn13')}
                ></div>
                <div
                    className={`${dotActive.btn14 ? 'bg-orange-500' : 'bg-gray-500'} mx-1 w-3 h-3 cursor-pointer z-[1] ransition-transform transform hover:scale-150 rounded-full duration-500 shadow-boxShadow`}
                    onClick={() => handleDotClick('btn14')}
                ></div>
            </ul> */}
            <div className="text-white py-8 min-h-[810px] hidden lg:block">
                <Slider {...settings}>
                    <div>
                        <div className={`grid gap-5 grid-cols-3 px-20 m-auto w-full`}>
                            {dataPerformanceWorkPage1.map((items) => (
                                <ProjectCard items={items} key={items.id} />
                            ))}
                        </div>
                    </div>
                    <div>
                        <div className={`grid gap-5 grid-cols-3 px-20 m-auto w-full`}>
                            {dataPerformanceWorkPage2.map((items) => (
                                <ProjectCard items={items} key={items.id} />
                            ))}
                        </div>
                    </div>
                    <div>
                        <div className={`grid gap-5 grid-cols-3 px-20 m-auto w-full`}>
                            {dataPerformanceWorkPage3.map((items) => (
                                <ProjectCard items={items} key={items.id} />
                            ))}
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default CarouselPerformanceWork;