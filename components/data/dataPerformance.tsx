//  Icons
import { StaticImageData } from "next/image";
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

export interface performanceArrType {
    id: number;
    image: StaticImageData;
    title: string;
    detail: string;
    detailIcon: string;
    icon: { name: string, icon: React.ElementType }[];
    github: string;
    namePdf: string;
    detailPdf: string;
    detailGithub: string;
}

export const dataPerformanceWorkPage1: performanceArrType[] = [
    {
        id: 1,
        image: me,
        title: "รายละเอียด",
        detail: "เป็นโปรเจคที่เกี่ยวกับรายละเอียด Portfolio โดยจะมี แค่ส่วน Frontend",
        detailIcon: "เทคโนโลยีหลักที่ใช้",
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
        namePdf: "https://drive.google.com/file/d/1HEvb5xAcTIn835HWFjKgREjZgq0B3p_d/view?usp=sharing",
        detailPdf: "ภาพตัวอย่าง",
        detailGithub: "source code",
    },
    {
        id: 2,
        image: image2,
        title: "รายละเอียด",
        detail: "เป็นโปรเจคที่เกี่ยวกับระบบ POS ขนาดเล็กประกอบ ไปด้วย ระบบขาย ระบบจัดการข้อมูล และรายงาน",
        detailIcon: "เทคโนโลยีหลักที่ใช้",
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
        namePdf: "https://drive.google.com/file/d/1zK1MIcLacc9AF6wKBVn83iz4LdQhKboF/view?usp=sharing",
        detailPdf: "ภาพตัวอย่าง",
        detailGithub: "source code",
    },
    {
        id: 3,
        image: image3,
        title: "รายละเอียด",
        detail: "เป็นโปรเจคที่เกี่ยวกับ Frontend ระบบบันทึกข้อมูล ที่มีการจัดการฟอร์มบันทึกข้อมูลที่มีหลายหน้า",
        detailIcon: "เทคโนโลยีหลักที่ใช้",
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
        namePdf: "https://drive.google.com/file/d/1NjP-jC46UHsJOqnCHOvsf3Tcp_g4bMMO/view?usp=sharing",
        detailPdf: "ภาพตัวอย่าง",
        detailGithub: "source code",
    },
    {
        id: 4,
        image: image4,
        title: "รายละเอียด",
        detail: "เป็นโปรเจคที่เกี่ยวกับ Backend ระบบบันทึกข้อมูล ที่มีการจัดการฟอร์มบันทึกข้อมูลที่มีหลายหน้า",
        detailIcon: "เทคโนโลยีหลักที่ใช้",
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
        namePdf: "Server-Project-Pver",
        detailPdf: "ภาพตัวอย่าง",
        detailGithub: "source code",
    },
    {
        id: 5,
        image: image5,
        title: "รายละเอียด",
        detail: "เป็นโปรเจคที่เกี่ยวกับ Authentication แบบง่ายๆ ซึ่งมีการนำ Jwt มาช่วยในการยืนยันตัวตนอีกชั้นหนึ่งด้วย",
        detailIcon: "เทคโนโลยีหลักที่ใช้",
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
        namePdf: "https://drive.google.com/file/d/1zdLZhe_YGWjpiYs5LWDKrCbSnTV2BFm5/view?usp=sharing",
        detailPdf: "ภาพตัวอย่าง",
        detailGithub: "source code",
    },
    {
        id: 6,
        image: image6,
        title: "รายละเอียด",
        detail: "เป็นโปรเจคที่เกี่ยวการทำระบบ CRUD ซึ่งเป็นการฝึกใช้ Express ร่วมกับ Mysql",
        detailIcon: "เทคโนโลยีหลักที่ใช้",
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
        namePdf: "https://drive.google.com/file/d/1nTjNx-kcH-GfPABb0qK2i8q2U-7tO-5h/view?usp=sharing",
        detailPdf: "ภาพตัวอย่าง",
        detailGithub: "source code",
    },
];

export const dataPerformanceWorkPage2: performanceArrType[] = [
    {
        id: 7,
        image: image7,
        title: "รายละเอียด",
        detail: "เป็นโปรเจคที่เกี่ยว Frontend โดยทำ Todolist ซึ่งเป็นการฝึกใช้ Zustand เบื้องต้น",
        detailIcon: "เทคโนโลยีหลักที่ใช้",
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
        namePdf: "https://drive.google.com/file/d/14_ImDmhUIPpEOYyHQ9ODWjxTeX6xrhYB/view?usp=sharing",
        detailPdf: "ภาพตัวอย่าง",
        detailGithub: "source code",
    },
    {
        id: 8,
        image: image8,
        title: "รายละเอียด",
        detail: "เป็นโปรเจคที่เกี่ยว Frontend Typescript เป็นระบบ ตระกร้าสินค้า ซึ่งเป็นการฝึกใช้ Redux Toolkit เบื้องต้น",
        detailIcon: "เทคโนโลยีหลักที่ใช้",
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
        namePdf: "https://drive.google.com/file/d/1zKtEdiGIEy2a5g-YxKaQvneYViGeuTTz/view?usp=sharing",
        detailPdf: "ภาพตัวอย่าง",
        detailGithub: "source code",
    },
    {
        id: 9,
        image: image9,
        title: "รายละเอียด",
        detail: "เป็นโปรเจคที่เกี่ยว Frontend Javascript เป็นระบบ ตระกร้าสินค้า ซึ่งเป็นการฝึกใช้ Redux Toolkit เบื้องต้น",
        detailIcon: "เทคโนโลยีหลักที่ใช้",
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
        namePdf: "https://drive.google.com/file/d/1zKtEdiGIEy2a5g-YxKaQvneYViGeuTTz/view?usp=sharing",
        detailPdf: "ภาพตัวอย่าง",
        detailGithub: "source code",
    },
    {
        id: 10,
        image: image10,
        title: "รายละเอียด",
        detail: "เป็นโปรเจคที่เกี่ยว Frontend Javascript เป็นระบบ ตระกร้าสินค้า ซึ่งเป็นการฝึกใช้ Redux เบื้องต้น",
        detailIcon: "เทคโนโลยีหลักที่ใช้",
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
        namePdf: "https://drive.google.com/file/d/1zKtEdiGIEy2a5g-YxKaQvneYViGeuTTz/view?usp=sharing",
        detailPdf: "ภาพตัวอย่าง",
        detailGithub: "source code",
    },
    {
        id: 11,
        image: image11,
        title: "รายละเอียด",
        detail: "เป็นโปรเจคที่เกี่ยว Frontend Javascript เป็นการฝึกสร้าง Ui ส่วนของหน้าเว็บไซต์",
        detailIcon: "เทคโนโลยีหลักที่ใช้",
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
        namePdf: "https://drive.google.com/file/d/1nTjNx-kcH-GfPABb0qK2i8q2U-7tO-5h/view?usp=sharing",
        detailPdf: "ภาพตัวอย่าง",
        detailGithub: "source code",
    },
    {
        id: 12,
        image: image12,
        title: "รายละเอียด",
        detail: "เป็นโปรเจคที่เกี่ยว Frontend Javascript เป็นการฝึกส่วนของการแสดงผลหน้าเว็บไซต์",
        detailIcon: "เทคโนโลยีหลักที่ใช้",
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
        namePdf: "https://drive.google.com/file/d/1PUsOWgSD-caoHPV40_NXnvAACkRM7HHj/view?usp=sharing",
        detailPdf: "ภาพตัวอย่าง",
        detailGithub: "source code",
    },
];

export const dataPerformanceWorkPage3: performanceArrType[] = [
    {
        id: 13,
        image: image13,
        title: "รายละเอียด",
        detail: "เป็นโปรเจคที่เกี่ยว Frontend Javascript เป็นการฝึกส่วนของการแสดงผลหน้าเว็บไซต์",
        detailIcon: "เทคโนโลยีหลักที่ใช้",
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
        namePdf: "https://drive.google.com/file/d/1qXDVnsUOj7vGpgA5U3gxYNarezgNzxVf/view?usp=sharing",
        detailPdf: "ภาพตัวอย่าง",
        detailGithub: "source code",
    },
    {
        id: 14,
        image: image14,
        title: "รายละเอียด",
        detail: "เป็นโปรเจคที่เกี่ยว Frontend Javascript เป็นการฝึกส่วนของการแสดงผลหน้าเว็บไซต์",
        detailIcon: "เทคโนโลยีหลักที่ใช้",
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
        namePdf: "https://drive.google.com/file/d/16QzdzKjAV-8E3TgVXiSeTc379cx2siVt/view?usp=sharing",
        detailPdf: "ภาพตัวอย่าง",
        detailGithub: "source code",
    },
];

export const dataPerformanceWorkPageMobile1: performanceArrType[] = [
    {
        id: 1,
        image: me,
        title: "รายละเอียด",
        detail: "เป็นโปรเจคที่เกี่ยวกับรายละเอียด Portfolio โดยจะมี แค่ส่วน Frontend",
        detailIcon: "เทคโนโลยีหลักที่ใช้",
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
        namePdf: "https://drive.google.com/file/d/1HEvb5xAcTIn835HWFjKgREjZgq0B3p_d/view?usp=sharing",
        detailPdf: "ภาพตัวอย่าง",
        detailGithub: "source code",
    }
];

export const dataPerformanceWorkPageMobile2: performanceArrType[] = [
    {
        id: 2,
        image: image2,
        title: "รายละเอียด",
        detail: "เป็นโปรเจคที่เกี่ยวกับระบบ POS ขนาดเล็กประกอบ ไปด้วย ระบบขาย ระบบจัดการข้อมูล และรายงาน",
        detailIcon: "เทคโนโลยีหลักที่ใช้",
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
        namePdf: "https://drive.google.com/file/d/1zK1MIcLacc9AF6wKBVn83iz4LdQhKboF/view?usp=sharing",
        detailPdf: "ภาพตัวอย่าง",
        detailGithub: "source code",
    }
];

export const dataPerformanceWorkPageMobile3: performanceArrType[] = [
    {
        id: 3,
        image: image3,
        title: "รายละเอียด",
        detail: "เป็นโปรเจคที่เกี่ยวกับ Frontend ระบบบันทึกข้อมูล ที่มีการจัดการฟอร์มบันทึกข้อมูลที่มีหลายหน้า",
        detailIcon: "เทคโนโลยีหลักที่ใช้",
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
        namePdf: "https://drive.google.com/file/d/1NjP-jC46UHsJOqnCHOvsf3Tcp_g4bMMO/view?usp=sharing",
        detailPdf: "ภาพตัวอย่าง",
        detailGithub: "source code",
    }
];

export const dataPerformanceWorkPageMobile4: performanceArrType[] = [
    {
        id: 4,
        image: image4,
        title: "รายละเอียด",
        detail: "เป็นโปรเจคที่เกี่ยวกับ Backend ระบบบันทึกข้อมูล ที่มีการจัดการฟอร์มบันทึกข้อมูลที่มีหลายหน้า",
        detailIcon: "เทคโนโลยีหลักที่ใช้",
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
        namePdf: "Server-Project-Pver",
        detailPdf: "ภาพตัวอย่าง",
        detailGithub: "source code",
    }
];

export const dataPerformanceWorkPageMobile5: performanceArrType[] = [
    {
        id: 6,
        image: image6,
        title: "รายละเอียด",
        detail: "เป็นโปรเจคที่เกี่ยวการทำระบบ CRUD ซึ่งเป็นการฝึกใช้ Express ร่วมกับ Mysql",
        detailIcon: "เทคโนโลยีหลักที่ใช้",
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
        namePdf: "https://drive.google.com/file/d/1nTjNx-kcH-GfPABb0qK2i8q2U-7tO-5h/view?usp=sharing",
        detailPdf: "ภาพตัวอย่าง",
        detailGithub: "source code",
    }
];

export const dataPerformanceWorkPageMobile6: performanceArrType[] = [
    {
        id: 6,
        image: image6,
        title: "รายละเอียด",
        detail: "เป็นโปรเจคที่เกี่ยวการทำระบบ CRUD ซึ่งเป็นการฝึกใช้ Express ร่วมกับ Mysql",
        detailIcon: "เทคโนโลยีหลักที่ใช้",
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
        namePdf: "https://drive.google.com/file/d/1nTjNx-kcH-GfPABb0qK2i8q2U-7tO-5h/view?usp=sharing",
        detailPdf: "ภาพตัวอย่าง",
        detailGithub: "source code",
    }
];

export const dataPerformanceWorkPageMobile7: performanceArrType[] = [
    {
        id: 7,
        image: image7,
        title: "รายละเอียด",
        detail: "เป็นโปรเจคที่เกี่ยว Frontend โดยทำ Todolist ซึ่งเป็นการฝึกใช้ Zustand เบื้องต้น",
        detailIcon: "เทคโนโลยีหลักที่ใช้",
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
        namePdf: "https://drive.google.com/file/d/14_ImDmhUIPpEOYyHQ9ODWjxTeX6xrhYB/view?usp=sharing",
        detailPdf: "ภาพตัวอย่าง",
        detailGithub: "source code",
    }
];

export const dataPerformanceWorkPageMobile8: performanceArrType[] = [
    {
        id: 8,
        image: image8,
        title: "รายละเอียด",
        detail: "เป็นโปรเจคที่เกี่ยว Frontend Typescript เป็นระบบ ตระกร้าสินค้า ซึ่งเป็นการฝึกใช้ Redux Toolkit เบื้องต้น",
        detailIcon: "เทคโนโลยีหลักที่ใช้",
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
        namePdf: "https://drive.google.com/file/d/1zKtEdiGIEy2a5g-YxKaQvneYViGeuTTz/view?usp=sharing",
        detailPdf: "ภาพตัวอย่าง",
        detailGithub: "source code",
    }
];

export const dataPerformanceWorkPageMobile9: performanceArrType[] = [
    {
        id: 9,
        image: image9,
        title: "รายละเอียด",
        detail: "เป็นโปรเจคที่เกี่ยว Frontend Javascript เป็นระบบ ตระกร้าสินค้า ซึ่งเป็นการฝึกใช้ Redux Toolkit เบื้องต้น",
        detailIcon: "เทคโนโลยีหลักที่ใช้",
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
        namePdf: "https://drive.google.com/file/d/1zKtEdiGIEy2a5g-YxKaQvneYViGeuTTz/view?usp=sharing",
        detailPdf: "ภาพตัวอย่าง",
        detailGithub: "source code",
    }
];

export const dataPerformanceWorkPageMobile10: performanceArrType[] = [
    {
        id: 10,
        image: image10,
        title: "รายละเอียด",
        detail: "เป็นโปรเจคที่เกี่ยว Frontend Javascript เป็นระบบ ตระกร้าสินค้า ซึ่งเป็นการฝึกใช้ Redux เบื้องต้น",
        detailIcon: "เทคโนโลยีหลักที่ใช้",
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
        namePdf: "https://drive.google.com/file/d/1zKtEdiGIEy2a5g-YxKaQvneYViGeuTTz/view?usp=sharing",
        detailPdf: "ภาพตัวอย่าง",
        detailGithub: "source code",
    }
];

export const dataPerformanceWorkPageMobile11: performanceArrType[] = [
    {
        id: 10,
        image: image10,
        title: "รายละเอียด",
        detail: "เป็นโปรเจคที่เกี่ยว Frontend Javascript เป็นระบบ ตระกร้าสินค้า ซึ่งเป็นการฝึกใช้ Redux เบื้องต้น",
        detailIcon: "เทคโนโลยีหลักที่ใช้",
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
        namePdf: "https://drive.google.com/file/d/1zKtEdiGIEy2a5g-YxKaQvneYViGeuTTz/view?usp=sharing",
        detailPdf: "ภาพตัวอย่าง",
        detailGithub: "source code",
    }
];

export const dataPerformanceWorkPageMobile12: performanceArrType[] = [
    {
        id: 12,
        image: image12,
        title: "รายละเอียด",
        detail: "เป็นโปรเจคที่เกี่ยว Frontend Javascript เป็นการฝึกส่วนของการแสดงผลหน้าเว็บไซต์",
        detailIcon: "เทคโนโลยีหลักที่ใช้",
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
        namePdf: "https://drive.google.com/file/d/1PUsOWgSD-caoHPV40_NXnvAACkRM7HHj/view?usp=sharing",
        detailPdf: "ภาพตัวอย่าง",
        detailGithub: "source code",
    }
];

export const dataPerformanceWorkPageMobile13: performanceArrType[] = [
    {
        id: 13,
        image: image13,
        title: "รายละเอียด",
        detail: "เป็นโปรเจคที่เกี่ยว Frontend Javascript เป็นการฝึกส่วนของการแสดงผลหน้าเว็บไซต์",
        detailIcon: "เทคโนโลยีหลักที่ใช้",
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
        namePdf: "https://drive.google.com/file/d/1qXDVnsUOj7vGpgA5U3gxYNarezgNzxVf/view?usp=sharing",
        detailPdf: "ภาพตัวอย่าง",
        detailGithub: "source code",
    },
];

export const dataPerformanceWorkPageMobile14: performanceArrType[] = [
    {
        id: 14,
        image: image14,
        title: "รายละเอียด",
        detail: "เป็นโปรเจคที่เกี่ยว Frontend Javascript เป็นการฝึกส่วนของการแสดงผลหน้าเว็บไซต์",
        detailIcon: "เทคโนโลยีหลักที่ใช้",
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
        namePdf: "https://drive.google.com/file/d/16QzdzKjAV-8E3TgVXiSeTc379cx2siVt/view?usp=sharing",
        detailPdf: "ภาพตัวอย่าง",
        detailGithub: "source code",
    }
];
