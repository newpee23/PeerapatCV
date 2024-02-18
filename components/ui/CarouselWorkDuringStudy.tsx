import React, { useState } from "react";
import { dataWorkDuring1, dataWorkDuring2, dataWorkDuring3 } from "../data/dataWorkDuring";
import ImageWorkDS from "./ImageWorkDS";

const CarouselWorkDuringStudy: React.FC = () => {
    const [dotActive, setDotActive] = useState({
        btn1: true,
        btn2: false,
        btn3: false
    });

    const handleDotClick = (btn: string) => {
        setDotActive({
            btn1: btn === 'btn1',
            btn2: btn === 'btn2',
            btn3: btn === 'btn3'
        });
    };

    return (
        <div>
            <div className="text-white py-8">
                <div className={`${dotActive.btn1 ? 'grid' : 'hidden'} gap-5 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 lg:px-20 m-auto  w-full duration-1000`}>
                    {dataWorkDuring1.map((items) => (
                        <ImageWorkDS key={items.id} image={items} />
                    ))}
                </div>
                <div className={`${dotActive.btn2 ? 'grid' : 'hidden'} gap-5 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 lg:px-20 m-auto  w-full duration-1000`}>
                    {dataWorkDuring2.map((items) => (
                        <ImageWorkDS key={items.id} image={items} />
                    ))}
                </div>
                <div className={`${dotActive.btn3 ? 'grid' : 'hidden'} gap-5 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 lg:px-20 m-auto  w-full duration-1000`}>
                    {dataWorkDuring3.map((items) => (
                        <ImageWorkDS key={items.id} image={items} />
                    ))}
                </div>
            </div>
            <ul className="flex items-center justify-center">
                <div
                    className={`${dotActive.btn1 ? 'bg-orange-500' : 'bg-gray-500'} w-3 h-3 cursor-pointer z-[1] ransition-transform transform hover:scale-150 rounded-full duration-500 shadow-boxShadow`}
                    onClick={() => handleDotClick('btn1')}
                ></div>
                <div
                    className={`${dotActive.btn2 ? 'bg-orange-500' : 'bg-gray-500'} mx-3 w-3 h-3 cursor-pointer z-[1] ransition-transform transform hover:scale-150 rounded-full duration-500 shadow-boxShadow`}
                    onClick={() => handleDotClick('btn2')}
                ></div>
                <div
                    className={`${dotActive.btn3 ? 'bg-orange-500' : 'bg-gray-500'} w-3 h-3 cursor-pointer z-[1] ransition-transform transform hover:scale-150 rounded-full duration-500 shadow-boxShadow`}
                    onClick={() => handleDotClick('btn3')}
                ></div>
            </ul>
        </div>
    );
};

export default CarouselWorkDuringStudy;
