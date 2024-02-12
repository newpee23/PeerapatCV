"use client";
import Image from "next/image";
import me from "@/public/me.png";
const Banner = () => {
    return (
        <section id="banner">
            <div className="flex flex-row items-center justify-center px-20 mt-[150px] z-[20] ">
                <div className="flex flex-col  justify-center  text-center">
                    <div className="justify-center flex">
                        <Image
                            className="transition-transform transform hover:scale-110 z-10"
                            priority
                            src={me}
                            height={300}
                            width={300}
                            alt="Peerapat Mueangmo"
                        />
                    </div>
                    <div className="flex flex-col gap-6 mt-6 mdl:mt-10 cursor-pointer animate-bounce tracking-tighter text-3xl mdl:text-5xl font-semibold text-white max-w-[600px] w-auto h-auto">
                        พีรพัฒน์ เหมืองหม้อ
                    </div>
                    <p className="text-2xl font-medium tracking-tighter  text-gray-200 max-w-[600px]">
                        Fullstack Developer {" "}
                        <span className="text-transparent text-orange-400 font-medium">
                            (NextJs,ReactJs,NodeJs)
                        </span>
                    </p>
                    <p className="text-md text-gray-200 my-5 max-w-[600px]">
                        Fullstack Developer ประสบการณ์ 1.8 ปี อายุ 24 ปี โดยประเภทโปรเจคที่รับผิดชอบได้แก่ POS, ERP, CRM, ระบบคลีนิค, เขียน RestApi ให้ Appication ซึ่ง stack ที่ใช้ปัจจุบันมี 2 ตัวได้แก่
                        1. Reactjs + Nodejs 2.php codeigniter3
                    </p>
                    <div className="text-md flex justify-center">
                        <button
                            className="z-[1] padding-20 hover:bg-white rounded-3xl  text-white font-semibold hover:text-black py-3 px-10  border-[0.1px] border-white hover:border-transparent "
                        >
                            Contact Me
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner