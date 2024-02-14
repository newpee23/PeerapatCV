import ResumeCard from "./ui/ResumeCard";

const Education = () => {
    return (
        <div>
            <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
                <p className="text-sm text-orange-500 tracking-[4px]">Download Transcript</p>
                <h2 className="text-xl md:text-3xl font-bold">ประวัติการศึกษา</h2>
            </div>
            <div className="w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10 max-w-[965px] lgl:w-[965px]">
                <ResumeCard
                    title="BTech in Information Technology"
                    detail="7.5 CPI"
                    description="DBMS, OOPS, ML, Web Development, AI, DSA, Compiler Design etc."
                />
                <ResumeCard
                    title="BTech in Information Technology"
                    detail="7.5 CPI"
                    description=", DBMS, OOPS, ML, Web Development, AI, DSA, Compiler Design etc."
                />
            </div>
        </div>
    )
}

export default Education;