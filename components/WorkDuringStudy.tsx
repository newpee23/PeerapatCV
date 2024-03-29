"use client";

import { useAppContext } from "@/context/page";
import CarouselWorkDuringStudy from "./ui/CarouselWorkDuringStudy";
import DividerUi from "./ui/DividerUi";
import { useTranslation } from "@/data/language/setLanguage";

const WorkDuringStudy = () => {

    const { language } = useAppContext();
    const dataLanguage = useTranslation(language);
    
    return (
        <section id="workDuringStudy">
            <div className="flex flex-row items-center justify-center px-10 z-[1] text-white">
                <DividerUi text="Work During Study" />
            </div>
            <div className="flex flex-col items-center justify-center lg:px-10 text-white">
                <p className="mb-3 text-lg">{dataLanguage.performanceAcademic}</p>
                <div className="flex flex-wrap p-8 items-center justify-center w-full max-w-[1200px] bg-white bg-blend-normal bg-opacity-5 rounded-md shadow-lg">
                    <CarouselWorkDuringStudy />
                </div>
            </div>
        </section>
    )
}

export default WorkDuringStudy;