"use client";
import Image from "next/image";
import logo from "@/public/Logo/Next.js-Logo-Vector.png"
import Link from "next/link";

const Navber = () => {
    return (
        <nav className="w-full h-[65px] bg-['#ffff'] fixed backdrop-blur-sm z-50 px-10">
            <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
                <Link href="#banner" scroll={true} className="h-auto w-auto flex flex-row items-center">
                    <Image
                        src={logo}
                        alt="logo"
                        width={100}
                        height={100}
                        sizes="100vw"
                        className="w-[45px] h-auto"
                        priority={true}
                    />
                </Link>
                <div className="flex flex-row gap-5">
                    <Link href="#banner" scroll={true} className="h-auto w-auto flex flex-row items-center">
                        <div className=" z-[1] bg-transparent  padding-10 cursor-pointer bg-black hover:bg-[#2E2E2E] rounded-xl  text-white  py-2 px-5 duration-300 hover:text-orange-500">
                            Profile
                        </div>
                    </Link>
                    <Link href="#skillAndTool" scroll={true} className="h-auto w-auto flex flex-row items-center">
                        <div className=" z-[1] bg-transparent  padding-10 cursor-pointer bg-black hover:bg-[#2E2E2E] rounded-xl  text-white  py-2 px-5 duration-300 hover:text-orange-500">
                            Skill
                        </div>
                    </Link>
                    <Link href="#myResume" scroll={true} className="h-auto w-auto flex flex-row items-center">
                        <div className=" z-[1] bg-transparent  padding-10 cursor-pointer bg-black hover:bg-[#2E2E2E] rounded-xl  text-white  py-2 px-5 duration-300 hover:text-orange-500">
                            My Resume
                        </div>
                    </Link>
                    <Link href="#performanceWork" scroll={true} className="h-auto w-auto flex flex-row items-center">
                        <div className=" z-[1] bg-transparent  padding-10 cursor-pointer bg-black hover:bg-[#2E2E2E] rounded-xl  text-white  py-2 px-5 duration-300 hover:text-orange-500">
                            Performance
                        </div>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navber