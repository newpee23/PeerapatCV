"use client";
import Image from "next/image";
import logo from "@/public/Logo/Next.js-Logo-Vector.png"
import Link from "next/link";
import { HiMenu } from "react-icons/hi";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";

const Navber = () => {
    
    const [showMenu, setShowMenu] = useState(false);

    return (
        <nav className="w-full h-[65px] bg-['#ffff'] fixed backdrop-blur-sm z-50 lg:px-10">
            <div className="w-full h-full flex flex-row items-center justify-between m-auto px-10">
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
                <div className="hidden lg:flex">
                    <Link href="#banner" scroll={true} className="h-auto w-auto flex flex-row items-center">
                        <div className=" z-[1] bg-transparent cursor-pointer bg-black hover:bg-[#2E2E2E] rounded-xl  text-white  py-2 px-4 duration-300 hover:text-orange-500">
                            Profile
                        </div>
                    </Link>
                    <Link href="#skillAndTool" scroll={true} className="h-auto w-auto flex flex-row items-center">
                        <div className=" z-[1] bg-transparent cursor-pointer bg-black hover:bg-[#2E2E2E] rounded-xl  text-white  py-2 px-4 duration-300 hover:text-orange-500">
                            Skill
                        </div>
                    </Link>
                    <Link href="#myResume" scroll={true} className="h-auto w-auto flex flex-row items-center">
                        <div className=" z-[1] bg-transparent cursor-pointer bg-black hover:bg-[#2E2E2E] rounded-xl  text-white  py-2 px-4 duration-300 hover:text-orange-500">
                            My Resume
                        </div>
                    </Link>
                    <Link href="#performanceWork" scroll={true} className="h-auto w-auto flex flex-row items-center">
                        <div className=" z-[1] bg-transparent cursor-pointer bg-black hover:bg-[#2E2E2E] rounded-xl  text-white  py-2 px-4 duration-300 hover:text-orange-500">
                            Performance
                        </div>
                    </Link>
                    <Link href="#workDuringStudy" scroll={true} className="h-auto w-auto flex flex-row items-center">
                        <div className=" z-[1] bg-transparent cursor-pointer bg-black hover:bg-[#2E2E2E] rounded-xl  text-white  py-2 px-4 duration-300 hover:text-orange-500">
                            Work During Study
                        </div>
                    </Link>
                </div>
                {/* mobile */}
                <div className="lg:hidden text-white z-[1] bg-transparent cursor-pointer bg-black hover:bg-[#2E2E2E] rounded-xl py-2 px-4 duration-300 hover:text-orange-500 group">
                    <IoMdClose onClick={() => setShowMenu(false)} className={`${showMenu ? '' : 'hidden'} duration-300`} />
                    <HiMenu onClick={() => setShowMenu(true)} className={`${showMenu ? 'hidden' : ''} duration-300`} />
                </div>
            </div>
            {
                showMenu &&
                <div className=" bg-[#2E2E2E] rounded-md shadow-boxShadow mx-5">
                    <div>
                        <Link href="#banner" scroll={true} className="h-auto w-auto flex flex-row items-center">
                            <div className=" z-[1] bg-transparent cursor-pointer bg-black hover:bg-[#2E2E2E] rounded-xl  text-white  py-2 px-4 duration-300 hover:text-orange-500">
                                Profile
                            </div>
                        </Link>
                        <Link href="#skillAndTool" scroll={true} className="h-auto w-auto flex flex-row items-center">
                            <div className=" z-[1] bg-transparent cursor-pointer bg-black hover:bg-[#2E2E2E] rounded-xl  text-white  py-2 px-4 duration-300 hover:text-orange-500">
                                Skill
                            </div>
                        </Link>
                        <Link href="#myResume" scroll={true} className="h-auto w-auto flex flex-row items-center">
                            <div className=" z-[1] bg-transparent cursor-pointer bg-black hover:bg-[#2E2E2E] rounded-xl  text-white  py-2 px-4 duration-300 hover:text-orange-500">
                                My Resume
                            </div>
                        </Link>
                        <Link href="#performanceWork" scroll={true} className="h-auto w-auto flex flex-row items-center">
                            <div className=" z-[1] bg-transparent cursor-pointer bg-black hover:bg-[#2E2E2E] rounded-xl  text-white  py-2 px-4 duration-300 hover:text-orange-500">
                                Performance
                            </div>
                        </Link>
                        <Link href="#workDuringStudy" scroll={true} className="h-auto w-auto flex flex-row items-center">
                            <div className=" z-[1] bg-transparent cursor-pointer bg-black hover:bg-[#2E2E2E] rounded-xl  text-white  py-2 px-4 duration-300 hover:text-orange-500">
                                Work During Study
                            </div>
                        </Link>
                    </div>
                </div>
            }
        </nav>
    )
}

export default Navber