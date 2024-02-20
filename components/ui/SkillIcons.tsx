import { dataIconsSkill, dataIconsTool } from "../../data/dataSkill";
import { useAppContext } from "@/context/page";
import { useTranslation } from "@/data/language/setLanguage";

const SkillIcons = () => {
    
    const { language } = useAppContext();
    const dataLanguage = useTranslation(language);

    return (
        <div className="flex py-7 items-start justify-center max-w-[1200px] bg-white bg-blend-normal bg-opacity-5 rounded-md shadow-lg">
            <div className="w-full lg:w-6/12 border-l-solid">
                <div className="text-center">
                    <p className="mb-3 text-lg text-white">{dataLanguage.skillLanguages}</p>
                </div>
                <div className="flex justify-between mdl:justify-center p-8 lg:p-0 xl:justify-start flex-wrap mt-[-20px] lg:px-10 text-center">
                    {dataIconsSkill.map((iconData) => (
                        <div key={iconData.id} className="z-[1] hover:-translate-y-2 transition-all duration-300 hover:text-orange-500">
                            <div className="m-2 lg:m-8 mb-1 w-6 h-6 lg:w-16 lg:h-16 shadow-boxShadow bg-black bg-opacity-25 text-base lg:text-xl inline-flex items-center justify-center rounded-md hover:bg-opacity-40 ">
                                <iconData.icon className="w-[50px] h-auto" />
                            </div>
                            <div className="text-center hidden lg:block">
                                <span>{iconData.title}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="w-full lg:w-6/12">
                <div className="text-center">
                    <p className="mb-3 text-lg text-white">{dataLanguage.skillTools}</p>
                </div>
                <div className="flex justify-between mdl:justify-center p-8 lg:p-0 xl:justify-start flex-wrap mt-[-20px] lg:px-10">
                    {dataIconsTool.map((iconData) => (
                        <div key={iconData.id} className="z-[1] hover:-translate-y-2 transition-all duration-300 hover:text-orange-500">
                            <div className="m-2 lg:m-8 mb-1 w-6 h-6 lg:w-16 lg:h-16 shadow-boxShadow bg-black bg-opacity-25 text-base lg:text-xl inline-flex items-center justify-center rounded-md hover:bg-opacity-40 ">
                                <iconData.icon className="w-[50px] h-auto" />
                            </div>
                            <div className="text-center hidden lg:block">
                                <span>{iconData.title}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SkillIcons;
