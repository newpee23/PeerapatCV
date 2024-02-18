import Banner from "@/components/Banner";
import MyResume from "@/components/MyResume";
import PerformanceWork from "@/components/PerformanceWork";
import SkillAndTool from "@/components/SkillAndTool";
import WorkDuringStudy from "@/components/WorkDuringStudy";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-5 lg:gap-20 w-full">
        <Banner />
        <SkillAndTool />
        <MyResume />
        <PerformanceWork />
        <WorkDuringStudy />
      </div>
    </main>
  );
}
