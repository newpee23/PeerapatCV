import Image from "next/image";
// Icons
import { FaGithub, FaRegFilePdf } from "react-icons/fa6";
// Images
import me from "@/public/Screenshot.png";
import { TbBrandNextjs } from "react-icons/tb";
import { Popover } from "antd";
import { BiLogoPostgresql, BiLogoRedux, BiLogoTypescript } from "react-icons/bi";
import { SiAntdesign, SiFirebase, SiPrisma, SiReactquery, SiTailwindcss } from "react-icons/si";

const ProjectCard = () => {
    return (
        <div className="project-card shadow-boxShadow p-5 z-[50]">
            <div className="project-img">
                <Image
                    className="w-full h-auto rounded-md"
                    priority
                    src={me}
                    height={0}
                    width={0}
                    alt="Peerapat Mueangmo"
                />
            </div>
            <div className="project-title m-[-10px] text-sm px-3">
                <h2>รายละเอียด</h2>
            </div>
            <div className="text-xs mt-3 text-justify text-gray-300">
                <p className="text-indent-2">เป็นโปรเจคที่เกี่ยวกับระบบ POS ขนาดเล็กประกอบ ไปด้วย ระบบขาย ระบบจัดการข้อมูล และรายงาน</p>
            </div>
            <div className="project-title text-xs text-gray-300">
                <h2>เทคโนโลยีหลักที่ใช้</h2>
            </div>
            <div className="flex gap-3 text-xl mt-2 justify-start">
                <Popover content="Nextjs(Base Reactjs)" trigger="hover">
                    <TbBrandNextjs className="transition-transform transform hover:scale-150 duration-300 hover:text-orange-500" />
                </Popover>
                <Popover content="Typescript" trigger="hover">
                    <BiLogoTypescript className="transition-transform transform hover:scale-150 duration-300 hover:text-orange-500" />
                </Popover>
                <Popover content="Redux" trigger="hover">
                    <BiLogoRedux className="transition-transform transform hover:scale-150 duration-300 hover:text-orange-500" />
                </Popover>
                <Popover content="React Query" trigger="hover">
                    <SiReactquery className="transition-transform transform hover:scale-150 duration-300 hover:text-orange-500" />
                </Popover>
                <Popover content="Tailwind" trigger="hover">
                    <SiTailwindcss className="transition-transform transform hover:scale-150 duration-300 hover:text-orange-500" />
                </Popover>
                <Popover content="Antdesign" trigger="hover">
                    <SiAntdesign className="transition-transform transform hover:scale-150 duration-300 hover:text-orange-500" />
                </Popover>
                <Popover content="Prisma" trigger="hover">
                    <SiPrisma className="transition-transform transform hover:scale-150 duration-300 hover:text-orange-500" />
                </Popover>
                <Popover content="Postgresql" trigger="hover">
                    <BiLogoPostgresql className="transition-transform transform hover:scale-150 duration-300 hover:text-orange-500" />
                </Popover>
                <Popover content="Firebase Storage" trigger="hover">
                    <SiFirebase className="transition-transform transform hover:scale-150 duration-300 hover:text-orange-500" />
                </Popover>
            </div>
            <div className="flex gap-3 text-2xl mt-4 justify-between">
                <Popover content="ภาพตัวอย่าง" trigger="hover">
                    <FaRegFilePdf className="cursor-pointer transition-transform transform hover:scale-150 duration-300" />
                </Popover>
                <Popover content="source code" trigger="hover">
                    <FaGithub className="cursor-pointer transition-transform transform hover:scale-150 duration-300" />
                </Popover>
            </div>
        </div>
    )
}

export default ProjectCard