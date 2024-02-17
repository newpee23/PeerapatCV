import Image from "next/image";
import { Popover } from "antd";
import { performanceArrType } from "../data/dataPerformance";
import Link from "next/link";

// Icons
import { FaGithub, FaRegFilePdf } from "react-icons/fa6";

interface Prop {
    items: performanceArrType
}

const ProjectCard = ({ items }: Prop) => {

    return (
        <div className="project-card shadow-boxShadow p-5 z-[1]">
            <div className="project-img">
                <Image
                    className="w-full h-auto rounded-md"
                    priority
                    src={items.image}
                    height={0}
                    width={0}
                    alt="Peerapat Mueangmo"
                />
            </div>
            <div className="project-title m-[-10px] text-sm px-3">
                <h2>{items.title}</h2>
            </div>
            <div className="text-xs mt-3 text-justify text-gray-300 h-[35px]">
                <p className="text-indent-2">{items.detail}</p>
            </div>
            <div className="project-title text-xs text-gray-300">
                <h2>{items.detailIcon}</h2>
            </div>
            <div className={`flex px-3 gap-2 text-xl mt-2 justify-start flex-wrap`}>
                {items.icon.map((icon, index) => (
                    <Popover key={index} content={icon.name} trigger="hover">
                        <span className="transition-transform transform hover:scale-150 duration-300 hover:text-orange-500">
                            <icon.icon />
                        </span>
                    </Popover>
                ))}
            </div>
            <div className={`flex gap-3 text-2xl mt-4 ${items.id === 4 ? 'justify-end' : 'justify-between'}`}>
                <Popover content={items.detailPdf} trigger="hover">
                    <Link href={items.namePdf} target="_blank">
                        <div className={`${items.id === 4 && 'hidden'}`}>
                            <span className="cursor-pointer transition-transform transform hover:scale-150 duration-300">
                                <FaRegFilePdf />
                            </span>
                        </div>
                    </Link>
                </Popover>
                <Popover content={items.detailGithub} trigger="hover">
                    <Link href={items.github} target="_blank">
                        <span className="cursor-pointer transition-transform transform hover:scale-150 duration-300"><FaGithub /></span>
                    </Link>
                </Popover>
            </div>
        </div>
    )
}

export default ProjectCard