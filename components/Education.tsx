import ResumeCard from "./ui/ResumeCard";
import Link from "next/link";

const Education = () => {

    return (
        <div>
            <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4 lg:px-11">
                <h2 className="text-xl md:text-3xl font-bold">ประวัติการศึกษา</h2>
                <div className="z-[1] mt-[-5px] cursor-pointer text-sm text-orange-500 tracking-[4px] hover:text-white hover:bg-orange-500 hover:p-3 hover:text-center rounded-md hover:shadow-lg max-w-[240px] text-center duration-300">
                    <Link href="https://firebasestorage.googleapis.com/v0/b/project-nextpos-828f7.appspot.com/o/transcript.pdf?alt=media&token=ff334dcd-2d4f-45c3-bdc2-0c391407273e" target="_blank">
                        <p>
                            Download Transcript
                        </p>
                    </Link>
                </div>
            </div>
            <div className="w-full xl:border-l-[6px] border-l-black border-opacity-30 lg:flex lg:flex-col gap-4 lg:gap-10 lg:max-w-[965px] lgl:w-[965px]">
                <ResumeCard
                    title="มหาวิทยาลัยพะเยา"
                    subTitle="University of Phayao"
                    gpa="3.33 GPA"
                    description="คณะเทคโนโลยีสารสนเทศและการสื่อสาร"
                />
                <ResumeCard
                    title="โรงเรียนพิริยาลัยจังหวัดแพร่"
                    subTitle="Piriyalai School Phrae"
                    gpa="ไม่ระบุ"
                    description="แผนศิลป์คอมพิวเตอร์"
                />
            </div>
        </div>
    )
}

export default Education;