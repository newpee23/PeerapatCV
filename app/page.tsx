import Banner from "@/components/Banner";
import SkillAndTool from "@/components/SkillAndTool";

export default function Home() {
  return (
    <main className="h-full w-full bg-no-repeat">
      <div className="flex flex-col gap-5">
        <Banner />
        <SkillAndTool />
      </div>
    </main>
  );
}
