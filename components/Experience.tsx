import ResumeCard from "./ui/ResumeCard";

interface desArrType {
    insersite: string[];
    vgenz: string[];
}

const Experience = () => {

    const desArr: desArrType = {
        insersite: ["พัฒนา WebApplication ประเภท E-commerce","รับผิดชอบส่วนของ Frontend โดยใช้ Reactjs แบบ Javascript", "แก้ไขการแสดงผลเว็บไซต์ให้รองรับ Responsive Web Design ที่มีขนาดหน้าจอตั้งแต่มือถือเป็นต้นไป"],
        vgenz: ["พัฒนาโดยใช้ Php Codeigniter3 (1.9 ปี) , Reactjs & Nodejs (9 เดือน)","ระบบที่พัฒนาเกี่ยวกับระบบ POS , ERP , CRM , ระบบงานภาครัฐ , และเขียน Rest Api ให้กับ Mobile Appication", "พัฒนา WebApplication ให้รองรับ Responsive Web Design" , "ดูแล Developer ใหม่ 2 คนในช่วงทดลองงาน" , "ดูแลและพัฒนาพร้อมกันสูงสุด 4 โปรเจค" , "ทำงานโดยใช้หลัก Development Methodologies Agile Methodology"]
    };

    const handleDownloadResume = () => {
        console.log("handleDownloadResume");
    }

    return (
        <div>
            <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4 lg:px-11">
                <h2 className="text-xl md:text-3xl font-bold">ประสบการณ์ทำงาน</h2>
                <p className="z-[1] mt-[-5px] cursor-pointer text-sm text-orange-500 tracking-[4px] hover:text-white hover:bg-orange-500 hover:p-3 hover:text-center rounded-md hover:shadow-lg max-w-[240px] text-center duration-300" onClick={handleDownloadResume}>Download Resume</p>
            </div>
            <div className="w-full xl:border-l-[6px] border-l-black border-opacity-30 lg:flex lg:flex-col gap-4 lg:gap-10 lg:max-w-[965px] lgl:w-[965px]">
                <ResumeCard
                    title="บริษัท วีเจ้นซ์ จำกัด (1.9 ปี)"
                    subTitle="ตำแหน่ง Fullstack Developer (Php Codeigniter3 & Reactjs , Nodejs)"
                    gpa="ก.ค. 2565 - เม.ย. 2567"
                    descriptionArr={desArr.vgenz}
                />
                <ResumeCard
                    title="บริษัท อินเตอร์ไซต์ (ประเทศไทย) จำกัด (4 เดือน)"
                    subTitle="ตำแหน่ง Frontend Developer (Reactjs)"
                    gpa="พ.ย. 2564 - มี.ค. 2565"
                    descriptionArr={desArr.insersite}
                />
            </div>
        </div>
    )
}

export default Experience;