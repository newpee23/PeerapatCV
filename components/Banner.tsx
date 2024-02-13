"use client";
import Image from "next/image";

// images
import me from "@/public/me.png";
import ContactIcon from "./ui/contactIcon";


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
                        <span className="text-orange-400 font-medium">
                            (NextJs,ReactJs,NodeJs)
                        </span>
                    </p>
                    <div className="text-justify">
                        <p className="text-indent-2 text-base text-gray-200 my-3 max-w-[600px]">
                            Fullstack Developer ประสบการณ์ 1.8 ปี อายุ 24 ปี โดยประเภทโปรเจคที่รับผิดชอบ ได้แก่ POS, ERP, CRM, ระบบคลีนิค, เขียน RestApi ให้ Appication ซึ่ง stack ที่ใช้ปัจจุบัน
                            มี 2 ตัว ได้แก่ 1). Reactjs + Nodejs 2).php codeigniter3 เคยดูแลโปรเจคพร้อมกันสูงสุด
                            4 โปรเจคและดูแล developer ใหม่ 2 คน
                        </p>
                    </div>
                    <div className="text-md justify-center my-3">
                        <p className="text-gray-200 max-w-[600px] text-xl">
                            การติดต่อ
                        </p>
                        <div className="max-w-[600px] w-full flex justify-center mt-3">
                            <ContactIcon iconsName="phone"/>
                            <ContactIcon iconsName="line"/>
                            <ContactIcon iconsName="github"/>
                            <ContactIcon iconsName="mail"/>
                        </div>
                        {/* <button className="z-[1] padding-20 hover:bg-white rounded-3xl  text-white font-semibold hover:text-black py-3 px-10  border-[0.1px] border-white hover:border-transparent">
                            Contact Me
                        </button> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner