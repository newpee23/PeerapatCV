"use client";
import CarouselPerformanceWork from "./ui/CarouselPerformanceWork";
import DividerUi from "./ui/DividerUi";

const PerformanceWork = () => {
    return (
        <section id="performanceWork">
            <div className="flex flex-row items-center justify-center px-10 z-[1] text-white">
                <DividerUi text="Performance" />
            </div>
            <div className="flex flex-col items-center justify-center lg:px-10 text-white">
                <p className="mb-3 text-lg">ตัวอย่างผลงาน</p>
                <div className="flex flex-wrap p-7 items-center justify-center w-full max-w-[1200px] min-h-[875px] bg-white bg-blend-normal bg-opacity-5 rounded-md shadow-lg">
                    <CarouselPerformanceWork />
                </div>
            </div>
        </section>
    )
}

export default PerformanceWork;