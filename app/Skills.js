import Icon from "@mdi/react";
import {
  mdiLanguageCss3,
  mdiLanguageHtml5,
  mdiLanguageJavascript,
  mdiLanguageTypescript,
  mdiTailwind,
} from "@mdi/js";
import Image from "next/image";

function SkillItem(props) {
  return (
    <li className="mr-2 border-solid border-md">
      <Icon path={props.iconPath} size={1} />
      {props.value}
    </li>
  );
}

export default function Skills() {
  let skills = [
    { name: "HTML5", iconPath: mdiLanguageHtml5 },
    { name: "CSS3", iconPath: mdiLanguageCss3 },
    { name: "JavaScript", iconPath: mdiLanguageJavascript },
    { name: "TypeScript", iconPath: mdiLanguageTypescript },
    { name: "Next.js", iconPath: "/nextjs-icon-dark-background.png" },
    { name: "Tailwind", iconPath: mdiTailwind },
  ];

  return (
    <>
      <p className="text-black font-semibold dark:text-white">Skills</p>
      <div className="text-gray dark:text-lightGray">
        <ul className="flex">
          {skills.map((skill) => (
            <SkillItem value={skill.name} />
          ))}
        </ul>
      </div>
    </>
  );
}
