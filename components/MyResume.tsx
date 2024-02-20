"use client";
import { useState } from "react";
import DividerUi from "./ui/DividerUi";
import Education from "./Education";
import Experience from "./Experience";
import { useAppContext } from "@/context/page";
import { useTranslation } from "@/data/language/setLanguage";

const MyResume = () => {

    const [educationData, setEducationData] = useState(false);
    const [skillData, setSkillData] = useState(true);
    const { language } = useAppContext();
    const dataLanguage = useTranslation(language);
    
    return (
        <section id="myResume">
            <div className="flex flex-row items-center justify-center px-10 z-[1] text-white">
                <DividerUi text="My Resume" />
            </div>
            <div className="flex flex-col items-center justify-center lg:px-10 text-white">
                <p className="mb-3 text-lg">{dataLanguage.resumeTitle}</p>
                <div className="flex flex-wrap pb-7 items-center justify-center w-full max-w-[1200px] bg-white bg-blend-normal bg-opacity-5 rounded-md shadow-lg">
                    <ul className="w-full grid grid-cols-2">
                        <li onClick={() => { setEducationData(false); setSkillData(true) }} className={`${skillData ? "border-orange-400  lg:border-radius-my-resume-left" : "border-transparent"} z-[1] hover:text-orange-500 w-full h-20 bg-black bg-opacity-25 lg:text-xl text-gray-300 flex justify-center cursor-pointer hover:bg-opacity-40 duration-300 items-center border-[1px]`}>
                            {dataLanguage.resumeExperience}
                        </li>
                        <li onClick={() => { setEducationData(true); setSkillData(false) }} className={`${educationData ? "border-orange-400 lg:border-radius-my-resume-right" : "border-transparent"} z-[1] hover:text-orange-500 w-full h-20 bg-black bg-opacity-25 lg:text-xl text-gray-300 flex justify-center cursor-pointer hover:bg-opacity-40 duration-300 items-center border-[1px]`}>
                            {dataLanguage.resumeEducation}
                        </li>
                    </ul>
                    <div className="px-3 lg:px-20">
                        {educationData && <Education />}
                        {skillData && <Experience />}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MyResume;