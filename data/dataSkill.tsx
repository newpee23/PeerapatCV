import { TbBrandNextjs, TbBrandNodejs, TbDatabasePlus, TbDatabaseSearch, TbBrandVscode } from "react-icons/tb";
import { GrReactjs } from "react-icons/gr";
import { BiLogoTypescript, BiLogoRedux, BiLogoPostgresql, BiLogoMongodb } from "react-icons/bi";
import { RiJavascriptFill } from "react-icons/ri";
import { IoLogoHtml5, IoLogoCss3 } from "react-icons/io";
import { BsFillBootstrapFill } from "react-icons/bs";
import { SiTailwindcss, SiAntdesign, SiPostman, SiMui, SiVite, SiReactquery, SiJquery, SiExpress, SiCodeigniter, SiPrisma, SiMysql, SiFirebase, SiBitbucket, SiGithub, SiSourcetree, SiJira, SiMicrosoftsqlserver, SiAdminer, SiFilezilla, SiXampp, SiJsonwebtokens } from "react-icons/si";
import { VscJson } from "react-icons/vsc";
import { DiPhp } from "react-icons/di";
import { FaAws } from "react-icons/fa";
import { FaDocker, FaGitAlt } from "react-icons/fa6";

interface iconsArrType {
    id: number;
    title: string;
    icon: React.ElementType;
}

export const dataIconsSkill: iconsArrType[] = [
    {
        id: 1,
        title: "Nextjs",
        icon: TbBrandNextjs
    }
    , {
        id: 2,
        title: "Reactjs",
        icon: GrReactjs
    }
    , {
        id: 3,
        title: "Typescript",
        icon: BiLogoTypescript
    }
    , {
        id: 4,
        title: "Redux",
        icon: BiLogoRedux
    }
    , {
        id: 5,
        title: "React Query",
        icon: SiReactquery
    }
    , {
        id: 6,
        title: "Html",
        icon: IoLogoHtml5
    }
    , {
        id: 7,
        title: "Css",
        icon: IoLogoCss3
    }
    , {
        id: 8,
        title: "Javascript",
        icon: RiJavascriptFill
    }
    , {
        id: 9,
        title: "Tailwind",
        icon: SiTailwindcss
    }
    , {
        id: 10,
        title: "Bootstrap",
        icon: BsFillBootstrapFill
    }
    , {
        id: 11,
        title: "Antdesign",
        icon: SiAntdesign
    }
    , {
        id: 12,
        title: "Material-UI",
        icon: SiMui
    }
    , {
        id: 13,
        title: "Vitejs",
        icon: SiVite
    }
    , {
        id: 14,
        title: "Jquery",
        icon: SiJquery
    }
    , {
        id: 15,
        title: "Json",
        icon: VscJson
    }
    , {
        id: 16,
        title: "Nodejs",
        icon: TbBrandNodejs
    }
    , {
        id: 17,
        title: "Express",
        icon: SiExpress
    }
    , {
        id: 18,
        title: "Php",
        icon: DiPhp
    }
    , {
        id: 19,
        title: "Codeigniter3",
        icon: SiCodeigniter
    }
    , {
        id: 20,
        title: "Prisma",
        icon: SiPrisma
    }
];

export const dataIconsTool: iconsArrType[] = [
    {
        id: 21,
        title: "Mysql",
        icon: SiMysql
    }
    , {
        id: 22,
        title: "Postgresql",
        icon: BiLogoPostgresql
    }
    , {
        id: 23,
        title: "Mongodb",
        icon: BiLogoMongodb
    }
    , {
        id: 24,
        title: "AWS(rds,s3)",
        icon: FaAws
    }
    , {
        id: 25,
        title: "Firebase Storage",
        icon: SiFirebase
    }
    , {
        id: 26,
        title: "Git",
        icon: FaGitAlt
    }
    , {
        id: 27,
        title: "Github Desktop",
        icon: SiGithub
    }
    , {
        id: 28,
        title: "Bitbucket",
        icon: SiBitbucket
    }
    , {
        id: 29,
        title: "Sourcetree",
        icon: SiSourcetree
    }
    , {
        id: 30,
        title: "Jira Software",
        icon: SiJira
    }
    , {
        id: 31,
        title: "Dbeaver",
        icon: TbDatabasePlus
    }
    , {
        id: 32,
        title: "PgAdmin",
        icon: TbDatabaseSearch
    }
    , {
        id: 33,
        title: "Mssqlserver",
        icon: SiMicrosoftsqlserver
    }
    , {
        id: 34,
        title: "Adminer",
        icon: SiAdminer
    }
    , {
        id: 35,
        title: "Filezilla",
        icon: SiFilezilla
    }
    , {
        id: 36,
        title: "VS Code",
        icon: TbBrandVscode
    }
    , {
        id: 37,
        title: "Xampp",
        icon: SiXampp
    }
    , {
        id: 38,
        title: "Postman",
        icon: SiPostman
    }
    , {
        id: 39,
        title: "Jsonwebtokens",
        icon: SiJsonwebtokens
    }
    , {
        id: 40,
        title: "Docker",
        icon: FaDocker
    }
];