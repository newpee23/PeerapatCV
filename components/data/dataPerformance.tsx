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
        namePdf: "https://firebasestorage.googleapis.com/v0/b/project-nextpos-828f7.appspot.com/o/performance%2F4.png?alt=media&token=238b1fef-ac61-42bf-950d-488bc9409a09",
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
        namePdf: "https://firebasestorage.googleapis.com/v0/b/project-nextpos-828f7.appspot.com/o/performance%2F2.pdf?alt=media&token=92ab9255-fb6a-4579-9cd1-ede5f15b0750",
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
        namePdf: "https://firebasestorage.googleapis.com/v0/b/project-nextpos-828f7.appspot.com/o/performance%2F3.pdf?alt=media&token=286f1266-69a0-45e7-9ee0-f9578ba376bb",
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
        namePdf: "https://firebasestorage.googleapis.com/v0/b/project-nextpos-828f7.appspot.com/o/performance%2F4.png?alt=media&token=238b1fef-ac61-42bf-950d-488bc9409a09",
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
        namePdf: "https://firebasestorage.googleapis.com/v0/b/project-nextpos-828f7.appspot.com/o/performance%2F5.pdf?alt=media&token=52e889e5-bbcd-44bf-896e-4b50c7027f8b",
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
        namePdf: "https://firebasestorage.googleapis.com/v0/b/project-nextpos-828f7.appspot.com/o/performance%2F11.pdf?alt=media&token=29b7a0ab-0a8e-4ac1-bf29-a58efd283a6e",
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
        namePdf: "https://firebasestorage.googleapis.com/v0/b/project-nextpos-828f7.appspot.com/o/performance%2F7.pdf?alt=media&token=e4f436f9-b9bc-4bde-a851-d40416bf4d30",
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
        namePdf: "https://firebasestorage.googleapis.com/v0/b/project-nextpos-828f7.appspot.com/o/performance%2F8-10.pdf?alt=media&token=d76af534-d660-4007-9b06-360281345900",
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
        namePdf: "https://firebasestorage.googleapis.com/v0/b/project-nextpos-828f7.appspot.com/o/performance%2F8-10.pdf?alt=media&token=d76af534-d660-4007-9b06-360281345900",
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
        namePdf: "https://firebasestorage.googleapis.com/v0/b/project-nextpos-828f7.appspot.com/o/performance%2F8-10.pdf?alt=media&token=d76af534-d660-4007-9b06-360281345900",
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
        namePdf: "https://firebasestorage.googleapis.com/v0/b/project-nextpos-828f7.appspot.com/o/performance%2F11.pdf?alt=media&token=29b7a0ab-0a8e-4ac1-bf29-a58efd283a6e",
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
        namePdf: "https://firebasestorage.googleapis.com/v0/b/project-nextpos-828f7.appspot.com/o/performance%2F12.pdf?alt=media&token=a700df76-088a-418d-9c0f-212661f069a8",
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
        namePdf: "https://firebasestorage.googleapis.com/v0/b/project-nextpos-828f7.appspot.com/o/performance%2F13.pdf?alt=media&token=ca227d3b-56af-4b11-aebc-8a9f87589e53",
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
        namePdf: "https://firebasestorage.googleapis.com/v0/b/project-nextpos-828f7.appspot.com/o/performance%2F14.pdf?alt=media&token=e7dd42fb-3e96-4cda-a0a2-3c4b812e853e",
        detailPdf: "ภาพตัวอย่าง",
        detailGithub: "source code",
    },
];

export const dataPerformanceWorkPageMobile: performanceArrType[] = [
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
        namePdf: "https://firebasestorage.googleapis.com/v0/b/project-nextpos-828f7.appspot.com/o/performance%2F4.png?alt=media&token=238b1fef-ac61-42bf-950d-488bc9409a09",
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
        namePdf: "https://firebasestorage.googleapis.com/v0/b/project-nextpos-828f7.appspot.com/o/performance%2F2.pdf?alt=media&token=92ab9255-fb6a-4579-9cd1-ede5f15b0750",
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
        namePdf: "https://firebasestorage.googleapis.com/v0/b/project-nextpos-828f7.appspot.com/o/performance%2F3.pdf?alt=media&token=286f1266-69a0-45e7-9ee0-f9578ba376bb",
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
        namePdf: "https://firebasestorage.googleapis.com/v0/b/project-nextpos-828f7.appspot.com/o/performance%2F4.png?alt=media&token=238b1fef-ac61-42bf-950d-488bc9409a09",
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
        namePdf: "https://firebasestorage.googleapis.com/v0/b/project-nextpos-828f7.appspot.com/o/performance%2F5.pdf?alt=media&token=52e889e5-bbcd-44bf-896e-4b50c7027f8b",
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
        namePdf: "https://firebasestorage.googleapis.com/v0/b/project-nextpos-828f7.appspot.com/o/performance%2F11.pdf?alt=media&token=29b7a0ab-0a8e-4ac1-bf29-a58efd283a6e",
        detailPdf: "ภาพตัวอย่าง",
        detailGithub: "source code",
    },
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
        namePdf: "https://firebasestorage.googleapis.com/v0/b/project-nextpos-828f7.appspot.com/o/performance%2F7.pdf?alt=media&token=e4f436f9-b9bc-4bde-a851-d40416bf4d30",
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
        namePdf: "https://firebasestorage.googleapis.com/v0/b/project-nextpos-828f7.appspot.com/o/performance%2F8-10.pdf?alt=media&token=d76af534-d660-4007-9b06-360281345900",
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
        namePdf: "https://firebasestorage.googleapis.com/v0/b/project-nextpos-828f7.appspot.com/o/performance%2F8-10.pdf?alt=media&token=d76af534-d660-4007-9b06-360281345900",
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
        namePdf: "https://firebasestorage.googleapis.com/v0/b/project-nextpos-828f7.appspot.com/o/performance%2F8-10.pdf?alt=media&token=d76af534-d660-4007-9b06-360281345900",
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
        namePdf: "https://firebasestorage.googleapis.com/v0/b/project-nextpos-828f7.appspot.com/o/performance%2F11.pdf?alt=media&token=29b7a0ab-0a8e-4ac1-bf29-a58efd283a6e",
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
        namePdf: "https://firebasestorage.googleapis.com/v0/b/project-nextpos-828f7.appspot.com/o/performance%2F12.pdf?alt=media&token=a700df76-088a-418d-9c0f-212661f069a8",
        detailPdf: "ภาพตัวอย่าง",
        detailGithub: "source code",
    },
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
        namePdf: "https://firebasestorage.googleapis.com/v0/b/project-nextpos-828f7.appspot.com/o/performance%2F13.pdf?alt=media&token=ca227d3b-56af-4b11-aebc-8a9f87589e53",
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
        namePdf: "https://firebasestorage.googleapis.com/v0/b/project-nextpos-828f7.appspot.com/o/performance%2F14.pdf?alt=media&token=e7dd42fb-3e96-4cda-a0a2-3c4b812e853e",
        detailPdf: "ภาพตัวอย่าง",
        detailGithub: "source code",
    },
];
