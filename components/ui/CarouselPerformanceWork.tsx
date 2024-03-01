import { performanceArrType } from "../../data/dataPerformance";
import ProjectCard from "./ProjectCard";
import Slider from "react-slick";

//  Icons
import { BiLogoMongodb, BiLogoPostgresql, BiLogoRedux, BiLogoTypescript } from "react-icons/bi";
import { SiAntdesign, SiExpress, SiFirebase, SiJsonwebtokens, SiMui, SiMysql, SiPostman, SiPrisma, SiReactquery, SiTailwindcss, SiVite, SiXampp } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { RiJavascriptFill } from "react-icons/ri";
import { GrReactjs } from "react-icons/gr";

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
import image15 from "@/public/imgProject/crudDockerExpress/1.png";

import { useAppContext } from "@/context/page";
import { useTranslation } from "@/data/language/setLanguage";
import { FaDocker } from "react-icons/fa6";

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

    const dataPerformanceWorkPage1: performanceArrType[] = [
        {
            id: 1,
            image: me,
            title: dataLanguage.performanceDetail,
            detail: dataLanguage.performanceDetailCard11,
            detailIcon: dataLanguage.performanceTechnology,
            icon: [
                {
                    name: "Nextjs(Base Reactjs)",
                    icon: TbBrandNextjs
                },
                {
                    name: "Typescript",
                    icon: BiLogoTypescript
                },
                {
                    name: "Tailwind",
                    icon: SiTailwindcss
                },
                {
                    name: "Antdesign",
                    icon: SiAntdesign
                },
            ],
            github: "https://github.com/newpee23/PeerapatCV",
            namePdf: "https://peerapat-cv.vercel.app/",
            detailPdf: dataLanguage.performancePickger,
            detailGithub: "source code",
        },
        {
            id: 2,
            image: image2,
            title: dataLanguage.performanceDetail,
            detail: dataLanguage.performanceDetailCard12,
            detailIcon: dataLanguage.performanceTechnology,
            icon: [
                {
                    name: "Nextjs(Base Reactjs)",
                    icon: TbBrandNextjs
                },
                {
                    name: "Typescript",
                    icon: BiLogoTypescript
                },
                {
                    name: "Redux",
                    icon: BiLogoRedux
                },
                {
                    name: "React Query",
                    icon: SiReactquery
                },
                {
                    name: "Tailwind",
                    icon: SiTailwindcss
                },
                {
                    name: "Antdesign",
                    icon: SiAntdesign
                },
                {
                    name: "Prisma",
                    icon: SiPrisma
                },
                {
                    name: "Postgresql",
                    icon: BiLogoPostgresql
                },
                {
                    name: "Firebase Storage",
                    icon: SiFirebase
                },
            ],
            github: "https://github.com/newpee23/Full-Stack-NextJs-Pos",
            namePdf: "https://firebasestorage.googleapis.com/v0/b/project-nextpos-828f7.appspot.com/o/performance%2F2.pdf?alt=media&token=92ab9255-fb6a-4579-9cd1-ede5f15b0750",
            detailPdf: dataLanguage.performancePickger,
            detailGithub: "source code",
        },
        {
            id: 3,
            image: image3,
            title: dataLanguage.performanceDetail,
            detail: dataLanguage.performanceDetailCard3,
            detailIcon: dataLanguage.performanceTechnology,
            icon: [
                {
                    name: "Vitejs(Base Reactjs)",
                    icon: SiVite
                },
                {
                    name: "Typescript",
                    icon: BiLogoTypescript
                },
                {
                    name: "Redux",
                    icon: BiLogoRedux
                },
                {
                    name: "Tailwind",
                    icon: SiTailwindcss
                },
                {
                    name: "Material-UI",
                    icon: SiMui
                },
            ],
            github: "https://github.com/newpee23/Client-Project-Pver",
            namePdf: "https://firebasestorage.googleapis.com/v0/b/project-nextpos-828f7.appspot.com/o/performance%2F3.pdf?alt=media&token=286f1266-69a0-45e7-9ee0-f9578ba376bb",
            detailPdf: dataLanguage.performancePickger,
            detailGithub: "source code",
        },
        {
            id: 4,
            image: image4,
            title: dataLanguage.performanceDetail,
            detail: dataLanguage.performanceDetailCard4,
            detailIcon: dataLanguage.performanceTechnology,
            icon: [
                {
                    name: "Express",
                    icon: SiExpress
                },
                {
                    name: "Typescript",
                    icon: BiLogoTypescript
                },
                {
                    name: "Prisma",
                    icon: SiPrisma
                },
                {
                    name: "Mysql",
                    icon: SiMysql
                },
                {
                    name: "Xampp",
                    icon: SiXampp
                },
                {
                    name: "Postman",
                    icon: SiPostman
                },
                {
                    name: "Jsonwebtokens",
                    icon: SiJsonwebtokens
                },
            ],
            github: "https://github.com/newpee23/Server-Project-Pver",
            namePdf: "https://firebasestorage.googleapis.com/v0/b/project-nextpos-828f7.appspot.com/o/performance%2F4.png?alt=media&token=238b1fef-ac61-42bf-950d-488bc9409a09",
            detailPdf: dataLanguage.performancePickger,
            detailGithub: "source code",
        },
        {
            id: 5,
            image: image5,
            title: dataLanguage.performanceDetail,
            detail: dataLanguage.performanceDetailCard5,
            detailIcon: dataLanguage.performanceTechnology,
            icon: [
                {
                    name: "Vitejs(Base Reactjs)",
                    icon: SiVite
                },
                {
                    name: "Redux",
                    icon: BiLogoRedux
                },
                {
                    name: "Tailwind",
                    icon: SiTailwindcss
                },
                {
                    name: "Material-UI",
                    icon: SiMui
                },
                {
                    name: "Express",
                    icon: SiExpress
                },
                {
                    name: "Typescript",
                    icon: BiLogoTypescript
                },
                {
                    name: "Mongodb",
                    icon: BiLogoMongodb
                },
                {
                    name: "Postman",
                    icon: SiPostman
                },
                {
                    name: "Jsonwebtokens",
                    icon: SiJsonwebtokens
                },
            ],
            github: "https://github.com/newpee23/FullStarck-AuthtenJwt-Mongood-Mui-TS",
            namePdf: "https://firebasestorage.googleapis.com/v0/b/project-nextpos-828f7.appspot.com/o/performance%2F5.pdf?alt=media&token=52e889e5-bbcd-44bf-896e-4b50c7027f8b",
            detailPdf: dataLanguage.performancePickger,
            detailGithub: "source code",
        },
        {
            id: 6,
            image: image6,
            title: dataLanguage.performanceDetail,
            detail: dataLanguage.performanceDetailCard6,
            detailIcon: dataLanguage.performanceTechnology,
            icon: [
                {
                    name: "Vitejs(Base Reactjs)",
                    icon: SiVite
                },
                {
                    name: "Typescript",
                    icon: BiLogoTypescript
                }
                , {
                    name: "Redux",
                    icon: BiLogoRedux
                }
                , {
                    name: "Tailwind",
                    icon: SiTailwindcss
                }
                , {
                    name: "Express",
                    icon: SiExpress
                }
                , {
                    name: "Mysql",
                    icon: SiMysql
                }
                , {
                    name: "Postman",
                    icon: SiPostman
                }
            ],
            github: "https://github.com/newpee23/Vitejs-Typescript-FullStack",
            namePdf: "https://firebasestorage.googleapis.com/v0/b/project-nextpos-828f7.appspot.com/o/performance%2F11.pdf?alt=media&token=29b7a0ab-0a8e-4ac1-bf29-a58efd283a6e",
            detailPdf: dataLanguage.performancePickger,
            detailGithub: "source code",
        },
    ];

    const dataPerformanceWorkPage2: performanceArrType[] = [
        {
            id: 7,
            image: image7,
            title: dataLanguage.performanceDetail,
            detail: dataLanguage.performanceDetailCard7,
            detailIcon: dataLanguage.performanceTechnology,
            icon: [
                {
                    name: "Nextjs(Base Reactjs)",
                    icon: TbBrandNextjs
                },
                {
                    name: "Typescript",
                    icon: BiLogoTypescript
                },
                {
                    name: "Tailwind",
                    icon: SiTailwindcss
                },
            ],
            github: "https://github.com/newpee23/NextJs-Zustand-TS",
            namePdf: "https://firebasestorage.googleapis.com/v0/b/project-nextpos-828f7.appspot.com/o/performance%2F7.pdf?alt=media&token=e4f436f9-b9bc-4bde-a851-d40416bf4d30",
            detailPdf: dataLanguage.performancePickger,
            detailGithub: "source code",
        },
        {
            id: 8,
            image: image8,
            title: dataLanguage.performanceDetail,
            detail: dataLanguage.performanceDetailCard8,
            detailIcon: dataLanguage.performanceTechnology,
            icon: [
                {
                    name: "Vitejs",
                    icon: SiVite
                },
                {
                    name: "Typescript",
                    icon: BiLogoTypescript
                },
                {
                    name: "Redux",
                    icon: BiLogoRedux
                },
                {
                    name: "Tailwind",
                    icon: SiTailwindcss
                },
            ],
            github: "https://github.com/newpee23/Vitejs-Typescript-ReduxToolkit-Cart",
            namePdf: "https://firebasestorage.googleapis.com/v0/b/project-nextpos-828f7.appspot.com/o/performance%2F8-10.pdf?alt=media&token=d76af534-d660-4007-9b06-360281345900",
            detailPdf: dataLanguage.performancePickger,
            detailGithub: "source code",
        },
        {
            id: 9,
            image: image9,
            title: dataLanguage.performanceDetail,
            detail: dataLanguage.performanceDetailCard9,
            detailIcon: dataLanguage.performanceTechnology,
            icon: [
                {
                    name: "Vitejs",
                    icon: SiVite
                },
                {
                    name: "Javascript",
                    icon: RiJavascriptFill
                },
                {
                    name: "Redux",
                    icon: BiLogoRedux
                },
                {
                    name: "Tailwind",
                    icon: SiTailwindcss
                },
            ],
            github: "https://github.com/newpee23/Vitejs-ReactToolkit-Cart",
            namePdf: "https://firebasestorage.googleapis.com/v0/b/project-nextpos-828f7.appspot.com/o/performance%2F8-10.pdf?alt=media&token=d76af534-d660-4007-9b06-360281345900",
            detailPdf: dataLanguage.performancePickger,
            detailGithub: "source code",
        },
        {
            id: 10,
            image: image10,
            title: dataLanguage.performanceDetail,
            detail: dataLanguage.performanceDetailCard10,
            detailIcon: dataLanguage.performanceTechnology,
            icon: [
                {
                    name: "Vitejs",
                    icon: SiVite
                },
                {
                    name: "Javascript",
                    icon: RiJavascriptFill
                },
                {
                    name: "Redux",
                    icon: BiLogoRedux
                },
                {
                    name: "Tailwind",
                    icon: SiTailwindcss
                },
            ],
            github: "https://github.com/newpee23/ViteJs-ReactThunk-Cart/tree/main",
            namePdf: "https://firebasestorage.googleapis.com/v0/b/project-nextpos-828f7.appspot.com/o/performance%2F8-10.pdf?alt=media&token=d76af534-d660-4007-9b06-360281345900",
            detailPdf: dataLanguage.performancePickger,
            detailGithub: "source code",
        },
        {
            id: 11,
            image: image11,
            title: dataLanguage.performanceDetail,
            detail: dataLanguage.performanceDetailCard11,
            detailIcon: dataLanguage.performanceTechnology,
            icon: [
                {
                    name: "Vitejs",
                    icon: SiVite
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
            github: "https://github.com/newpee23/Vitejs-Ui-Form",
            namePdf: "https://firebasestorage.googleapis.com/v0/b/project-nextpos-828f7.appspot.com/o/performance%2F11.pdf?alt=media&token=29b7a0ab-0a8e-4ac1-bf29-a58efd283a6e",
            detailPdf: dataLanguage.performancePickger,
            detailGithub: "source code",
        },
        {
            id: 12,
            image: image12,
            title: dataLanguage.performanceDetail,
            detail: dataLanguage.performanceDetailCard12,
            detailIcon: dataLanguage.performanceTechnology,
            icon: [
                {
                    name: "Vitejs",
                    icon: SiVite
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
            github: "https://github.com/newpee23/Vitejs-Weather-App",
            namePdf: "https://firebasestorage.googleapis.com/v0/b/project-nextpos-828f7.appspot.com/o/performance%2F12.pdf?alt=media&token=a700df76-088a-418d-9c0f-212661f069a8",
            detailPdf: dataLanguage.performancePickger,
            detailGithub: "source code",
        },
    ];

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
            detailPdf: dataLanguage.performancePickger,
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
            detailPdf: dataLanguage.performancePickger,
            detailGithub: "source code",
        },
        {
            id: 15,
            image: image15,
            title: dataLanguage.performanceDetail,
            detail: dataLanguage.performanceDetailCard15,
            detailIcon: dataLanguage.performanceTechnology,
            icon: [
                {
                    name: "Express",
                    icon: SiExpress
                },
                {
                    name: "Typescript",
                    icon: BiLogoTypescript
                },
                {
                    name: "Docker",
                    icon: FaDocker
                },
                {
                    name: "Mysql",
                    icon: SiMysql
                },
                {
                    name: "Postman",
                    icon: SiPostman
                },
            ],
            github: "https://github.com/newpee23/dockerTypescriptBaseExpress",
            namePdf: "",
            detailPdf: dataLanguage.performancePickger,
            detailGithub: "source code",
        },
    ];

    const dataPerformanceWorkPageMobile: performanceArrType[] = [
        {
            id: 1,
            image: me,
            title: dataLanguage.performanceDetail,
            detail: dataLanguage.performanceDetailCard1,
            detailIcon: dataLanguage.performanceTechnology,
            icon: [
                {
                    name: "Nextjs(Base Reactjs)",
                    icon: TbBrandNextjs
                },
                {
                    name: "Typescript",
                    icon: BiLogoTypescript
                },
                {
                    name: "Tailwind",
                    icon: SiTailwindcss
                },
                {
                    name: "Antdesign",
                    icon: SiAntdesign
                },
            ],
            github: "https://github.com/newpee23/PeerapatCV",
            namePdf: "https://peerapat-cv.vercel.app/",
            detailPdf: dataLanguage.performancePickger,
            detailGithub: "source code",
        },
        {
            id: 2,
            image: image2,
            title: dataLanguage.performanceDetail,
            detail: dataLanguage.performanceDetailCard2,
            detailIcon: dataLanguage.performanceTechnology,
            icon: [
                {
                    name: "Nextjs(Base Reactjs)",
                    icon: TbBrandNextjs
                },
                {
                    name: "Typescript",
                    icon: BiLogoTypescript
                },
                {
                    name: "Redux",
                    icon: BiLogoRedux
                },
                {
                    name: "React Query",
                    icon: SiReactquery
                },
                {
                    name: "Tailwind",
                    icon: SiTailwindcss
                },
                {
                    name: "Antdesign",
                    icon: SiAntdesign
                },
                {
                    name: "Prisma",
                    icon: SiPrisma
                },
                {
                    name: "Postgresql",
                    icon: BiLogoPostgresql
                },
                {
                    name: "Firebase Storage",
                    icon: SiFirebase
                },
            ],
            github: "https://github.com/newpee23/Full-Stack-NextJs-Pos",
            namePdf: "https://firebasestorage.googleapis.com/v0/b/project-nextpos-828f7.appspot.com/o/performance%2F2.pdf?alt=media&token=92ab9255-fb6a-4579-9cd1-ede5f15b0750",
            detailPdf: dataLanguage.performancePickger,
            detailGithub: "source code",
        },
        {
            id: 3,
            image: image3,
            title: dataLanguage.performanceDetail,
            detail: dataLanguage.performanceDetailCard3,
            detailIcon: dataLanguage.performanceTechnology,
            icon: [
                {
                    name: "Vitejs(Base Reactjs)",
                    icon: SiVite
                },
                {
                    name: "Typescript",
                    icon: BiLogoTypescript
                },
                {
                    name: "Redux",
                    icon: BiLogoRedux
                },
                {
                    name: "Tailwind",
                    icon: SiTailwindcss
                },
                {
                    name: "Material-UI",
                    icon: SiMui
                },
            ],
            github: "https://github.com/newpee23/Client-Project-Pver",
            namePdf: "https://firebasestorage.googleapis.com/v0/b/project-nextpos-828f7.appspot.com/o/performance%2F3.pdf?alt=media&token=286f1266-69a0-45e7-9ee0-f9578ba376bb",
            detailPdf: dataLanguage.performancePickger,
            detailGithub: "source code",
        },
        {
            id: 4,
            image: image4,
            title: dataLanguage.performanceDetail,
            detail: dataLanguage.performanceDetailCard4,
            detailIcon: dataLanguage.performanceTechnology,
            icon: [
                {
                    name: "Express",
                    icon: SiExpress
                },
                {
                    name: "Typescript",
                    icon: BiLogoTypescript
                },
                {
                    name: "Prisma",
                    icon: SiPrisma
                },
                {
                    name: "Mysql",
                    icon: SiMysql
                },
                {
                    name: "Xampp",
                    icon: SiXampp
                },
                {
                    name: "Postman",
                    icon: SiPostman
                },
                {
                    name: "Jsonwebtokens",
                    icon: SiJsonwebtokens
                },
            ],
            github: "https://github.com/newpee23/Server-Project-Pver",
            namePdf: "https://firebasestorage.googleapis.com/v0/b/project-nextpos-828f7.appspot.com/o/performance%2F4.png?alt=media&token=238b1fef-ac61-42bf-950d-488bc9409a09",
            detailPdf: dataLanguage.performancePickger,
            detailGithub: "source code",
        },
        {
            id: 5,
            image: image5,
            title: dataLanguage.performanceDetail,
            detail: dataLanguage.performanceDetailCard5,
            detailIcon: dataLanguage.performanceTechnology,
            icon: [
                {
                    name: "Vitejs(Base Reactjs)",
                    icon: SiVite
                },
                {
                    name: "Redux",
                    icon: BiLogoRedux
                },
                {
                    name: "Tailwind",
                    icon: SiTailwindcss
                },
                {
                    name: "Material-UI",
                    icon: SiMui
                },
                {
                    name: "Express",
                    icon: SiExpress
                },
                {
                    name: "Typescript",
                    icon: BiLogoTypescript
                },
                {
                    name: "Mongodb",
                    icon: BiLogoMongodb
                },
                {
                    name: "Postman",
                    icon: SiPostman
                },
                {
                    name: "Jsonwebtokens",
                    icon: SiJsonwebtokens
                },
            ],
            github: "https://github.com/newpee23/FullStarck-AuthtenJwt-Mongood-Mui-TS",
            namePdf: "https://firebasestorage.googleapis.com/v0/b/project-nextpos-828f7.appspot.com/o/performance%2F5.pdf?alt=media&token=52e889e5-bbcd-44bf-896e-4b50c7027f8b",
            detailPdf: dataLanguage.performancePickger,
            detailGithub: "source code",
        },
        {
            id: 6,
            image: image6,
            title: dataLanguage.performanceDetail,
            detail: dataLanguage.performanceDetailCard6,
            detailIcon: dataLanguage.performanceTechnology,
            icon: [
                {
                    name: "Vitejs(Base Reactjs)",
                    icon: SiVite
                },
                {
                    name: "Typescript",
                    icon: BiLogoTypescript
                }
                , {
                    name: "Redux",
                    icon: BiLogoRedux
                }
                , {
                    name: "Tailwind",
                    icon: SiTailwindcss
                }
                , {
                    name: "Express",
                    icon: SiExpress
                }
                , {
                    name: "Mysql",
                    icon: SiMysql
                }
                , {
                    name: "Postman",
                    icon: SiPostman
                }
            ],
            github: "https://github.com/newpee23/Vitejs-Typescript-FullStack",
            namePdf: "https://firebasestorage.googleapis.com/v0/b/project-nextpos-828f7.appspot.com/o/performance%2F11.pdf?alt=media&token=29b7a0ab-0a8e-4ac1-bf29-a58efd283a6e",
            detailPdf: dataLanguage.performancePickger,
            detailGithub: "source code",
        },
        {
            id: 7,
            image: image7,
            title: dataLanguage.performanceDetail,
            detail: dataLanguage.performanceDetailCard7,
            detailIcon: dataLanguage.performanceTechnology,
            icon: [
                {
                    name: "Nextjs(Base Reactjs)",
                    icon: TbBrandNextjs
                },
                {
                    name: "Typescript",
                    icon: BiLogoTypescript
                },
                {
                    name: "Tailwind",
                    icon: SiTailwindcss
                },
            ],
            github: "https://github.com/newpee23/NextJs-Zustand-TS",
            namePdf: "https://firebasestorage.googleapis.com/v0/b/project-nextpos-828f7.appspot.com/o/performance%2F7.pdf?alt=media&token=e4f436f9-b9bc-4bde-a851-d40416bf4d30",
            detailPdf: dataLanguage.performancePickger,
            detailGithub: "source code",
        },
        {
            id: 8,
            image: image8,
            title: dataLanguage.performanceDetail,
            detail: dataLanguage.performanceDetailCard8,
            detailIcon: dataLanguage.performanceTechnology,
            icon: [
                {
                    name: "Vitejs",
                    icon: SiVite
                },
                {
                    name: "Typescript",
                    icon: BiLogoTypescript
                },
                {
                    name: "Redux",
                    icon: BiLogoRedux
                },
                {
                    name: "Tailwind",
                    icon: SiTailwindcss
                },
            ],
            github: "https://github.com/newpee23/Vitejs-Typescript-ReduxToolkit-Cart",
            namePdf: "https://firebasestorage.googleapis.com/v0/b/project-nextpos-828f7.appspot.com/o/performance%2F8-10.pdf?alt=media&token=d76af534-d660-4007-9b06-360281345900",
            detailPdf: dataLanguage.performancePickger,
            detailGithub: "source code",
        },
        {
            id: 9,
            image: image9,
            title: dataLanguage.performanceDetail,
            detail: dataLanguage.performanceDetailCard9,
            detailIcon: dataLanguage.performanceTechnology,
            icon: [
                {
                    name: "Vitejs",
                    icon: SiVite
                },
                {
                    name: "Javascript",
                    icon: RiJavascriptFill
                },
                {
                    name: "Redux",
                    icon: BiLogoRedux
                },
                {
                    name: "Tailwind",
                    icon: SiTailwindcss
                },
            ],
            github: "https://github.com/newpee23/Vitejs-ReactToolkit-Cart",
            namePdf: "https://firebasestorage.googleapis.com/v0/b/project-nextpos-828f7.appspot.com/o/performance%2F8-10.pdf?alt=media&token=d76af534-d660-4007-9b06-360281345900",
            detailPdf: dataLanguage.performancePickger,
            detailGithub: "source code",
        },
        {
            id: 10,
            image: image10,
            title: dataLanguage.performanceDetail,
            detail: dataLanguage.performanceDetailCard10,
            detailIcon: dataLanguage.performanceTechnology,
            icon: [
                {
                    name: "Vitejs",
                    icon: SiVite
                },
                {
                    name: "Javascript",
                    icon: RiJavascriptFill
                },
                {
                    name: "Redux",
                    icon: BiLogoRedux
                },
                {
                    name: "Tailwind",
                    icon: SiTailwindcss
                },
            ],
            github: "https://github.com/newpee23/ViteJs-ReactThunk-Cart/tree/main",
            namePdf: "https://firebasestorage.googleapis.com/v0/b/project-nextpos-828f7.appspot.com/o/performance%2F8-10.pdf?alt=media&token=d76af534-d660-4007-9b06-360281345900",
            detailPdf: dataLanguage.performancePickger,
            detailGithub: "source code",
        },
        {
            id: 11,
            image: image11,
            title: dataLanguage.performanceDetail,
            detail: dataLanguage.performanceDetailCard11,
            detailIcon: dataLanguage.performanceTechnology,
            icon: [
                {
                    name: "Vitejs",
                    icon: SiVite
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
            github: "https://github.com/newpee23/Vitejs-Ui-Form",
            namePdf: "https://firebasestorage.googleapis.com/v0/b/project-nextpos-828f7.appspot.com/o/performance%2F11.pdf?alt=media&token=29b7a0ab-0a8e-4ac1-bf29-a58efd283a6e",
            detailPdf: dataLanguage.performancePickger,
            detailGithub: "source code",
        },
        {
            id: 12,
            image: image12,
            title: dataLanguage.performanceDetail,
            detail: dataLanguage.performanceDetailCard12,
            detailIcon: dataLanguage.performanceTechnology,
            icon: [
                {
                    name: "Vitejs",
                    icon: SiVite
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
            github: "https://github.com/newpee23/Vitejs-Weather-App",
            namePdf: "https://firebasestorage.googleapis.com/v0/b/project-nextpos-828f7.appspot.com/o/performance%2F12.pdf?alt=media&token=a700df76-088a-418d-9c0f-212661f069a8",
            detailPdf: dataLanguage.performancePickger,
            detailGithub: "source code",
        },
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
            detailPdf: dataLanguage.performancePickger,
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
            detailPdf: dataLanguage.performancePickger,
            detailGithub: "source code",
        },
        {
            id: 15,
            image: image15,
            title: dataLanguage.performanceDetail,
            detail: dataLanguage.performanceDetailCard14,
            detailIcon: dataLanguage.performanceTechnology,
            icon: [
                {
                    name: "Express",
                    icon: SiExpress
                },
                {
                    name: "Typescript",
                    icon: BiLogoTypescript
                },
                {
                    name: "Docker",
                    icon: FaDocker
                },
                {
                    name: "Mysql",
                    icon: SiMysql
                },
                {
                    name: "Postman",
                    icon: SiPostman
                },
            ],
            github: "https://github.com/newpee23/dockerTypescriptBaseExpress",
            namePdf: "",
            detailPdf: dataLanguage.performancePickger,
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
                                <ProjectCard language={language} items={items} key={items.id} />
                            ))}
                        </div>
                    </div>
                    <div>
                        <div className={`grid gap-4 xl:gap-5 grid-cols-3 xl:px-20 m-auto w-full`}>
                            {dataPerformanceWorkPage2.map((items) => (
                                <ProjectCard language={language} items={items} key={items.id} />
                            ))}
                        </div>
                    </div>
                    <div>
                        <div className={`grid gap-4 xl:gap-5 grid-cols-3 xl:px-20 m-auto w-full`}>
                            {dataPerformanceWorkPage3.map((items) => (
                                <ProjectCard language={language} items={items} key={items.id} />
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
                                <ProjectCard language={language} items={items} key={items.id} />
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default CarouselPerformanceWork;