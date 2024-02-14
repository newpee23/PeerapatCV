"use client";
import DividerUi from "./ui/DividerUi";
import SkillIcons from "./ui/SkillIcons";

const SkillAndTool = () => {
  return (
    <section id="skillAndTool">
        <div className="flex flex-row items-center justify-center px-10 z-[1] text-white">
            <DividerUi text="Skill & Tool" />
        </div>
        <div className="flex flex-col items-center justify-center text-white">
            <p className="mb-3 text-lg">ภาษาและเครื่องมือ</p>
            <SkillIcons />
        </div>
    </section>
  )
}

export default SkillAndTool;