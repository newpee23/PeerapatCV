"use client";
import CarouselWorkDuringStudy from "./ui/CarouselWorkDuringStudy";
import DividerUi from "./ui/DividerUi";

const WorkDuringStudy = () => {
    return (
        <section id="workDuringStudy" className="mb-[200px]">
            <div className="flex flex-row items-center justify-center px-10 z-[1] text-white">
                <DividerUi text="Work During Study" />
            </div>
            <div className="flex flex-col items-center justify-center lg:px-10 text-white">
                <p className="mb-3 text-lg">ผลงานระหว่างเรียน</p>
                <div className="flex flex-wrap p-7 pb-0 items-center justify-center w-full max-w-[1200px] bg-white bg-blend-normal bg-opacity-5 rounded-md shadow-lg">
                    <CarouselWorkDuringStudy />
                </div>
            </div>
        </section>
    )
}

export default WorkDuringStudy;