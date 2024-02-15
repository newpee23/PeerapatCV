interface Prop {
    title: string;
    subTitle: string;
    gpa: string;
    description?: string
    descriptionArr?: string[]
}

const ResumeCard = ({ title, subTitle, gpa, description, descriptionArr }: Prop) => {
    return (
        <div className="w-full h-1/3 group flex z-[1]">
            <div className="w-10 h-[6px] bgOpacity mt-16 relative">
                <span className="absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-black bg-opacity-60">
                    <span className="w-3 h-3 rounded-full bg-bodyColor inline-flex bg-orange-500"></span>
                </span>
            </div>
            <div className="w-full bg-black bg-opacity-20  rounded-lg p-4 lgl:px-10 flex flex-col justify-center gap-6 lgl:gap-10 shadow-shadowOne">
                <div className="flex flex-col lgl:flex-row justify-between gap-4 lgl:gap-0 lgl:items-center">
                    <div>
                        <h3 className="text-xl md:text-2xl font-semibold">
                            {title}
                        </h3>
                        <p className="text-base mt-2 text-gray-400 group-hover:text-white duration-300">
                            {subTitle}
                        </p>
                    </div>
                    <div>
                        <p className="px-4 py-2 text-orange-500 bg-black bg-opacity-25 rounded-lg flex justify-center items-center shadow-shadowOne text-sm font-medium">
                            {gpa}
                        </p>
                    </div>
                </div>
                <div className="text-sm md:text-base text-gray-400 group-hover:text-gray-300 duration-300">
                    {(descriptionArr && descriptionArr.length > 0) ?
                        <div>
                            <div className="font-medium">หน้าที่ที่รับผิดชอบ</div>
                            {descriptionArr.map((v, index) => (
                                <div key={index}><span>- {v}</span></div>
                            ))}
                        </div>
                        :
                        description ? description : null
                    }
                </div>
            </div>
        </div>
    );
}

export default ResumeCard