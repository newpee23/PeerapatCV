import ResumeCard from "./ui/ResumeCard";

const Education = () => {

    const handleDownloadPDF = () => {
        const pdfUrl = '/transcript.pdf';
        const a = document.createElement('a');
        a.href = pdfUrl;
        a.download = 'transcript.pdf';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    };

    return (
        <div>
            <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
                <h2 className="text-xl md:text-3xl font-bold">ประวัติการศึกษา</h2>
                <p className="z-[1] mt-[-5px] cursor-pointer text-sm text-orange-500 tracking-[4px] hover:text-white hover:bg-orange-500 hover:p-3 hover:text-center rounded-md hover:shadow-lg max-w-[230px] duration-300" onClick={handleDownloadPDF}>Download Transcript</p>
            </div>
            <div className="w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10 max-w-[965px] lgl:w-[965px]">
                <ResumeCard
                    title="มหาวิทยาลัยพะเยา"
                    subTitle="University of Phayao"
                    detail="3.33 GPA"
                    description="คณะเทคโนโลยีสารสนเทศและการสื่อสาร"
                />
                <ResumeCard
                    title="โรงเรียนพิริยาลัยจังหวัดแพร่"
                    subTitle="Piriyalai School Phrae"
                    detail="ไม่ระบุ"
                    description="แผนศิลป์คอมพิวเตอร์"
                />
            </div>
        </div>
    )
}

export default Education;