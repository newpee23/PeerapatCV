import { dataPerformanceWorkPage1, dataPerformanceWorkPage2, dataPerformanceWorkPage3, dataPerformanceWorkPageMobile } from "../data/dataPerformance";
import ProjectCard from "./ProjectCard";
import Slider from "react-slick";

const CarouselPerformanceWork = () => {
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: false
    };

    return (
        <div className="w-full">
            <div className="text-white py-8 min-h-[810px] hidden xl:block">
                <Slider {...settings}>
                    <div>
                        <div className={`grid gap-4 xl:gap-5 grid-cols-3 xl:px-20 m-auto w-full`}>
                            {dataPerformanceWorkPage1.map((items) => (
                                <ProjectCard items={items} key={items.id} />
                            ))}
                        </div>
                    </div>
                    <div>
                        <div className={`grid gap-4 xl:gap-5 grid-cols-3 xl:px-20 m-auto w-full`}>
                            {dataPerformanceWorkPage2.map((items) => (
                                <ProjectCard items={items} key={items.id} />
                            ))}
                        </div>
                    </div>
                    <div>
                        <div className={`grid gap-4 xl:gap-5 grid-cols-3 xl:px-20 m-auto w-full`}>
                            {dataPerformanceWorkPage3.map((items) => (
                                <ProjectCard items={items} key={items.id} />
                            ))}
                        </div>
                    </div>
                </Slider>
            </div>
            <div className="py-8 block xl:hidden">
                <Slider {...settings}>
                    {dataPerformanceWorkPageMobile.map((items) => (
                        <div key={items.id}>
                            <div className={`grid grid-cols-1 m-auto w-full`}>
                                <ProjectCard items={items} key={items.id} />
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default CarouselPerformanceWork;