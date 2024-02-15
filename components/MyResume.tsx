"use client";
import { useState } from "react";
import DividerUi from "./ui/DividerUi";
import Education from "./Education";
import Experience from "./Experience";

const MyResume = () => {

    const [educationData, setEducationData] = useState(false);
    const [skillData, setSkillData] = useState(true);

    return (
        <section id="myResume">
            <div className="flex flex-row items-center justify-center px-10 z-[1] text-white">
                <DividerUi text="My Resume" />
            </div>
            <div className="flex flex-col items-center justify-center px-10 text-white">
                <p className="mb-3 text-lg">ประวัติส่วนตัวและประสบการณ์ทำงาน</p>
                <div className="flex flex-wrap pb-7 items-center justify-center w-full max-w-[1200px] bg-white bg-blend-normal bg-opacity-5 rounded-md shadow-lg">
                    <ul className="w-full grid grid-cols-1 md:grid-cols-2">
                        <li onClick={() => { setEducationData(false); setSkillData(true) }} className={`${skillData ? "border-orange-400  border-radius-my-resume-left" : "border-transparent"} z-[1] hover:text-orange-500 w-full h-20 bg-black bg-opacity-25 text-xl text-gray-300 flex justify-center cursor-pointer hover:bg-opacity-40 duration-300 items-center border-[1px]`}>
                            ประสบการณ์ทำงาน
                        </li>
                        <li onClick={() => { setEducationData(true); setSkillData(false) }} className={`${educationData ? "border-orange-400 border-radius-my-resume-right" : "border-transparent"} z-[1] hover:text-orange-500 w-full h-20 bg-black bg-opacity-25 text-xl text-gray-300 flex justify-center cursor-pointer hover:bg-opacity-40 duration-300 items-center border-[1px]`}>
                            การศึกษา
                        </li>
                    </ul>
                    <div className="px-20">
                        {educationData && <Education />}
                        {skillData && <Experience />}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MyResume;