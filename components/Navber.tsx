"use client";
import Image from "next/image";
import logo from "@/public/Logo/Next.js-Logo-Vector.png"
import Link from "next/link";

const Navber = () => {
    return (
        <nav className="w-full h-[65px] bg-['#ffff'] fixed backdrop-blur-sm z-50 px-10">
            <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
                <Link href="/" className="h-auto w-auto flex flex-row items-center">
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
                    <div className=" z-[1] bg-transparent  padding-10 cursor-pointer bg-black hover:bg-[#2E2E2E] rounded-xl  text-white  py-2 px-5">
                        Banner
                    </div>
                    <div className=" z-[1] bg-transparent  padding-10 cursor-pointer bg-black hover:bg-[#2E2E2E] rounded-xl  text-white  py-2 px-5">
                        Contact
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navber