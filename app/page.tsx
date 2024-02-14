import Banner from "@/components/Banner";
import MyResume from "@/components/MyResume";
import SkillAndTool from "@/components/SkillAndTool";

export default function Home() {
  return (
    <main className="h-full w-full bg-no-repeat">
      <div className="flex flex-col gap-20">
        <Banner />
        <SkillAndTool />
        <MyResume />
      </div>
    </main>
  );
}
