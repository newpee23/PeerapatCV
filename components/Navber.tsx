"use client";
import Image from "next/image";
import ThaiFlag from '@/public/thai.svg';
import EnglishFlag from '@/public/english.svg';
import Link from "next/link";
import { HiMenu } from "react-icons/hi";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";

const Navber = () => {
    const language = localStorage.getItem("myLanguage") || "";
    const [showMenu, setShowMenu] = useState(false);
    
    const handleClickEnglish = () => {
        localStorage.setItem('myLanguage', 'EN'); // เก็บค่าลงใน LocalStorage
        window.location.reload();
    };

    const handleClickThai = () => {
        localStorage.setItem('myLanguage', 'TH'); // เก็บค่าลงใน LocalStorage
        window.location.reload();
    };  
    
    return (
        <nav className="w-full h-[65px] bg-['#ffff'] fixed backdrop-blur-sm z-50 lg:px-10">
            <div className="w-full h-full flex flex-row items-center justify-between m-auto px-10">
                <div className="z-[1] bg-transparent bg-black rounded-xl px-4 flex items-center">
                    <span className={`ml-3 ${language == "EN" ? 'text-orange-500' : 'text-white'}`}>EN</span>
                    <Image
                        onClick={handleClickEnglish}
                        src={EnglishFlag}
                        alt="logo"
                        width={80}
                        height={80}
                        sizes="100vw"
                        className="w-[23px] mx-1 h-auto transition-transform transform hover:scale-150 z-10 duration-300 cursor-pointer"
                        priority={true}
                    />

                    <span className={`ml-3 ${language == "TH" ? 'text-orange-500' : 'text-white'}`}>TH</span>
                    <Image
                        onClick={handleClickThai}
                        src={ThaiFlag}
                        alt="logo"
                        width={80}
                        height={80}
                        sizes="100vw"
                        className="w-[30px] h-auto transition-transform transform hover:scale-150 z-10 duration-300 cursor-pointer"
                        priority={true}
                    />
                </div>
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