"use client";
import Image from "next/image";
import ContactIcon from "./ui/contactIcon";
// images
import me from "@/public/me.png";

const Banner = () => {
    return (
        <section id="banner">
            <div className="flex flex-row items-center justify-center px-20 mt-[150px] z-[20]">
                <div className="flex flex-col justify-center text-center">
                    <div className="justify-center flex">
                        <Image
                            className="transition-transform transform hover:scale-110 z-10 duration-300"
                            priority
                            src={me}
                            height={300}
                            width={300}
                            alt="Peerapat Mueangmo"
                        />
                    </div>
                    <div className="flex flex-col gap-6 mt-6 mdl:mt-14 cursor-pointer animate-bounce tracking-tighter text-3xl mdl:text-5xl font-semibold text-white max-w-[600px] w-auto h-auto">
                        พีรพัฒน์ เหมืองหม้อ
                    </div>
                    <p className="text-2xl font-medium tracking-tighter  text-gray-200 max-w-[600px]">
                        Fullstack Developer {" "}
                        <span className="text-orange-400 font-medium tracking-tighter">
                            (NextJs,ReactJs,NodeJs)
                        </span>
                    </p>
                    <div className="text-justify">
                        <p className="text-indent-2 text-base text-gray-200 my-3 max-w-[600px]">
                            Fullstack Developer ประสบการณ์ 1.8 ปี อายุ 24 ปี โดยประเภทโปรเจคที่รับผิดชอบ ได้แก่ POS, ERP, CRM, ระบบคลีนิค, เขียน RestApi ให้ Mobile Appication ซึ่ง stack ที่ใช้ปัจจุบัน
                            มี 2 ตัว ได้แก่ 1). Reactjs + Nodejs 2).php codeigniter3 เคยดูแลโปรเจคพร้อมกันสูงสุด
                            4 โปรเจคและดูแล developer ใหม่ 2 คน
                        </p>
                    </div>
                    <div className="text-md justify-center my-5">
                        <p className="text-gray-200 max-w-[600px] text-xl">
                            การติดต่อ
                        </p>
                        <div className="max-w-[600px] w-full flex justify-center mt-5">
                            <ContactIcon iconsName="phone"/>
                            <ContactIcon iconsName="line"/>
                            <ContactIcon iconsName="github"/>
                            <ContactIcon iconsName="mail"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner