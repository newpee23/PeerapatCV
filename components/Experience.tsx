import { useAppContext } from "@/context/page";
import ResumeCard from "./ui/ResumeCard";
import { useTranslation } from "@/data/language/setLanguage";
import Link from "next/link";

const Experience = () => {

    const { language } = useAppContext();
    const dataLanguage = useTranslation(language);

    return (
        <div>
            <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4 lg:px-11">
                <h2 className="text-xl md:text-3xl font-bold">{dataLanguage.resumeEx}</h2>
                <div className="z-[1] mt-[-5px] cursor-pointer text-sm text-orange-500 tracking-[4px] hover:text-white hover:bg-orange-500 hover:p-3 hover:text-center rounded-md hover:shadow-lg max-w-[240px] text-center duration-300">
                    <Link href="https://firebasestorage.googleapis.com/v0/b/project-nextpos-828f7.appspot.com/o/meResume.pdf?alt=media&token=d111a01f-dac4-46a0-b187-6dcb89b38cd7" target="_blank">
                        <p>Download Resume</p>
                    </Link>
                </div>
            </div>
            <div className="w-full xl:border-l-[6px] border-l-black border-opacity-30 lg:flex lg:flex-col gap-4 lg:gap-10 lg:max-w-[965px] lgl:w-[965px]">
                <ResumeCard
                    title={dataLanguage.resumeExTitle1}
                    subTitle={dataLanguage.resumeExSubTitle1}
                    gpa={dataLanguage.resumeExDate1}
                    descriptionArr={dataLanguage.resumeExDetail1}
                />
                <ResumeCard
                    title={dataLanguage.resumeExTitle2}
                    subTitle={dataLanguage.resumeExSubTitle2}
                    gpa={dataLanguage.resumeExDate2}
                    descriptionArr={dataLanguage.resumeExDetail2}
                />
            </div>
        </div>
    )
}

export default Experience;