import { GrReactjs } from "react-icons/gr";
import { dataPerformanceWorkPage1, dataPerformanceWorkPage2, dataPerformanceWorkPageMobile, performanceArrType } from "../../data/dataPerformance";
import ProjectCard from "./ProjectCard";
import Slider from "react-slick";
import { RiJavascriptFill } from "react-icons/ri";
import { SiTailwindcss } from "react-icons/si";

// Images
import me from "@/public/Screenshot.png";
import image2 from "@/public/imgProject/nextjsPOS/1.png";
import image3 from "@/public/imgProject/front-pver/1.png";
import image4 from "@/public/imgProject/backendPver/1.png";
import image5 from "@/public/imgProject/fullStarckAuthtenJwtMongood/1.jpg";
import image6 from "@/public/imgProject/vitejsCrudMysql/1.png";
import image7 from "@/public/imgProject/nextJsZustandTS/1.png";
import image8 from "@/public/imgProject/ViteJs-ReactThunk-Cart_Vitejs-ReactToolkit-Cart_Vitejs-Typescript-ReduxToolkit-Cart/3.png";
import image9 from "@/public/imgProject/ViteJs-ReactThunk-Cart_Vitejs-ReactToolkit-Cart_Vitejs-Typescript-ReduxToolkit-Cart/2.png";
import image10 from "@/public/imgProject/ViteJs-ReactThunk-Cart_Vitejs-ReactToolkit-Cart_Vitejs-Typescript-ReduxToolkit-Cart/1.png";
import image11 from "@/public/imgProject/vitejsCrudMysql/1.png";
import image12 from "@/public/imgProject/vitejsWeatherApp/1.png";
import image13 from "@/public/imgProject/todolistStorageKey/1.png";
import image14 from "@/public/imgProject/reactRestapiPokeapi/2.png";
import { useAppContext } from "@/context/page";
import { useTranslation } from "@/data/language/setLanguage";

const CarouselPerformanceWork = () => {
    
    const { language } = useAppContext();
    const dataLanguage = useTranslation(language);

    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: false
    };

     const dataPerformanceWorkPage3: performanceArrType[] = [
        {
            id: 13,
            image: image13,
            title: dataLanguage.performanceDetail,
            detail: dataLanguage.performanceDetailCard13,
            detailIcon: dataLanguage.performanceTechnology,
            icon: [
                {
                    name: "Reactjs",
                    icon: GrReactjs
                },
                {
                    name: "Javascript",
                    icon: RiJavascriptFill
                },
                {
                    name: "Tailwind",
                    icon: SiTailwindcss
                },
            ],
            github: "https://github.com/newpee23/ToDoListStorageKey",
            namePdf: "https://firebasestorage.googleapis.com/v0/b/project-nextpos-828f7.appspot.com/o/performance%2F13.pdf?alt=media&token=ca227d3b-56af-4b11-aebc-8a9f87589e53",
            detailPdf: "ภาพตัวอย่าง",
            detailGithub: "source code",
        },
        {
            id: 14,
            image: image14,
            title: dataLanguage.performanceDetail,
            detail: dataLanguage.performanceDetailCard14,
            detailIcon: dataLanguage.performanceTechnology,
            icon: [
                {
                    name: "Reactjs",
                    icon: GrReactjs
                },
                {
                    name: "Javascript",
                    icon: RiJavascriptFill
                },
                {
                    name: "Tailwind",
                    icon: SiTailwindcss
                },
            ],
            github: "https://github.com/newpee23/React-Restapi-Pokeapi",
            namePdf: "https://firebasestorage.googleapis.com/v0/b/project-nextpos-828f7.appspot.com/o/performance%2F14.pdf?alt=media&token=e7dd42fb-3e96-4cda-a0a2-3c4b812e853e",
            detailPdf: "ภาพตัวอย่าง",
            detailGithub: "source code",
        },
    ];

    return (
        <div className="w-full">
            <div className="text-white py-8 xl:min-h-[810px] hidden xl:block">
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