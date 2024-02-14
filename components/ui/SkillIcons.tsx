import { TbBrandNextjs, TbBrandNodejs, TbDatabasePlus, TbDatabaseSearch, TbBrandVscode } from "react-icons/tb";
import { GrReactjs } from "react-icons/gr";
import { BiLogoTypescript, BiLogoRedux, BiLogoPostgresql, BiLogoMongodb } from "react-icons/bi";
import { RiJavascriptFill, RiAngularjsFill } from "react-icons/ri";
import { IoLogoHtml5, IoLogoCss3 } from "react-icons/io";
import { BsFillBootstrapFill } from "react-icons/bs";
import { SiTailwindcss, SiAntdesign, SiMui, SiJquery, SiExpress, SiCodeigniter, SiPrisma, SiMysql, SiFirebase, SiBitbucket, SiGithub, SiSourcetree, SiJira, SiMicrosoftsqlserver, SiAdminer, SiFilezilla, SiXampp } from "react-icons/si";
import { VscJson } from "react-icons/vsc";
import { DiPhp } from "react-icons/di";
import { FaAws } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa6";

interface iconsArrType {
    id: number;
    title: string;
    icon: React.ElementType;
}

const dataIcons: iconsArrType[] = [
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
        title: "Html",
        icon: IoLogoHtml5
    }
    , {
        id: 6,
        title: "Css",
        icon: IoLogoCss3
    }
    , {
        id: 7,
        title: "Javascript",
        icon: RiJavascriptFill
    }
    , {
        id: 8,
        title: "Tailwind",
        icon: SiTailwindcss
    }
    , {
        id: 9,
        title: "Bootstrap",
        icon: BsFillBootstrapFill
    }
    , {
        id: 10,
        title: "Antdesign",
        icon: SiAntdesign
    }
    , {
        id: 11,
        title: "Material-UI",
        icon: SiMui
    }
    , {
        id: 12,
        title: "Angularjs",
        icon: RiAngularjsFill
    }
    , {
        id: 13,
        title: "Jquery",
        icon: SiJquery
    }
    , {
        id: 14,
        title: "Json",
        icon: VscJson
    }
    , {
        id: 15,
        title: "Nodejs",
        icon: TbBrandNodejs
    }
    , {
        id: 16,
        title: "Express",
        icon: SiExpress
    }
    , {
        id: 17,
        title: "Php",
        icon: DiPhp
    }
    , {
        id: 18,
        title: "Codeigniter3",
        icon: SiCodeigniter
    }
    , {
        id: 19,
        title: "Prisma",
        icon: SiPrisma
    }
    , {
        id: 20,
        title: "Mysql",
        icon: SiMysql
    }
    , {
        id: 21,
        title: "Postgresql",
        icon: BiLogoPostgresql
    }
    , {
        id: 22,
        title: "Mongodb",
        icon: BiLogoMongodb
    }
    , {
        id: 23,
        title: "AWS(rds,s3)",
        icon: FaAws
    }
    , {
        id: 24,
        title: "Firebase Storage",
        icon: SiFirebase
    }
    , {
        id: 25,
        title: "Git",
        icon: FaGitAlt
    }
    , {
        id: 26,
        title: "Github Desktop",
        icon: SiGithub
    }
    , {
        id: 27,
        title: "Bitbucket",
        icon: SiBitbucket
    }
    , {
        id: 28,
        title: "Sourcetree",
        icon: SiSourcetree
    }
    , {
        id: 29,
        title: "Jira Software",
        icon: SiJira
    }
    , {
        id: 30,
        title: "Dbeaver",
        icon: TbDatabasePlus
    }
    , {
        id: 31,
        title: "PgAdmin",
        icon: TbDatabaseSearch
    }
    , {
        id: 32,
        title: "Mssqlserver",
        icon: SiMicrosoftsqlserver
    }
    , {
        id: 33,
        title: "Adminer",
        icon: SiAdminer
    }
    , {
        id: 34,
        title: "Filezilla",
        icon: SiFilezilla
    }
    , {
        id: 35,
        title: "VS Code",
        icon: TbBrandVscode
    }
    , {
        id: 36,
        title: "xampp",
        icon: SiXampp
    }
]

const SkillIcons = () => {
    return (
        <div className="flex flex-wrap pb-7 items-center justify-center px-20 max-w-[1200px] bg-white bg-blend-normal bg-opacity-5 rounded-md shadow-lg">
            {dataIcons.map((iconData) => (
                <div key={iconData.id} className="z-[1] cursor-pointer hover:-translate-y-2 transition-all duration-300 hover:text-orange-500">
                    <div className="m-8 mb-1 w-16 h-16 shadow-lg bg-black bg-opacity-25 text-xl inline-flex items-center justify-center rounded-md hover:bg-opacity-40 ">
                        <iconData.icon className="w-[50px] h-auto" />
                    </div>
                    <div className="text-center">
                        <span>{iconData.title}</span>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default SkillIcons;
