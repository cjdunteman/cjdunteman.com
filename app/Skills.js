import Icon from "@mdi/react";
import {
  mdiLanguageCss3,
  mdiLanguageHtml5,
  mdiLanguageJavascript,
  mdiLanguageTypescript,
  mdiTailwind,
} from "@mdi/js";
import Image from "next/image";

export default function Skills() {
  let nextjs =
    "M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c1.8 0 3.4-.5 4.8-1.2L9.6 10.6v5.7H8.5V8.5h1.1l7.9 11.8c2.7-1.8 4.5-4.9 4.5-8.4C22 6.5 17.5 2 12 2zm3.5 13.2-1.2-1.8V8.5h1.2v6.7z";
  let skills = [
    { name: "HTML5", iconPath: mdiLanguageHtml5 },
    { name: "CSS3", iconPath: mdiLanguageCss3 },
    { name: "JavaScript", iconPath: mdiLanguageJavascript },
    { name: "TypeScript", iconPath: mdiLanguageTypescript },
    { name: "Next.js", iconPath: nextjs },
    { name: "Tailwind", iconPath: mdiTailwind },
  ];

  return (
    <div>
      <p className="text-black font-semibold dark:text-white pb-1">Skills</p>
      <div className="text-black dark:text-white flex flex-wrap">
        {skills.map((skill, index) => {
          return (
            <li
              key={index}
              className={`list-none flex p-1 mt-2 mr-6 border border-solid rounded-full border-${skill.color}`}
            >
              <Icon path={skill.iconPath} size={1} />
              {skill.name}
            </li>
          );
        })}
      </div>
    </div>
  );
}
