import React from "react";
import { motion } from "framer-motion";
import {
  SiPython,
  SiRust,
  SiGo,
  SiJavascript,
  SiMysql,
  SiR,
  SiKotlin,
  SiKubernetes,
  SiDocker,
  SiGit,
  SiMongodb,
  SiPostgresql,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiAngular,
  SiPrisma,
  SiExpo,
  SiStripe,
  SiApachekafka,
  SiSimpleicons, // Fallback icon
  SiAwslambda,
  SiTypescript,
  SiTableau,
  SiSupabase,
  SiDrizzle,
  SiLangchain
} from 'react-icons/si';

// Optimized imports based on icon availability
import { FaAws, FaCode } from 'react-icons/fa';
import { DiJava, DiRedis } from 'react-icons/di';
import { RiMicrosoftFill } from 'react-icons/ri';
import {TbBrandCpp} from 'react-icons/tb';

interface SkillCategory {
  category: string;
  skills: string[];
}

const getSkillIcon = (skill: string) => {
  const icons: Record<string, React.FC<React.SVGProps<SVGSVGElement>>> = {
    "Python": SiPython,
    "Java": DiJava,
    "C++": TbBrandCpp,
    "Rust": SiRust,
    "Go": SiGo,
    "JavaScript": SiJavascript,
    "SQL": SiMysql, // MySQL as closest match
    "R": SiR,
    "Kotlin": SiKotlin,
    "AWS": FaAws,
    "Azure": RiMicrosoftFill,
    "Kubernetes": SiKubernetes,
    "Docker": SiDocker,
    "Git": SiGit,
    "CDK": FaAws,
    "MongoDB": SiMongodb,
    "Redis": DiRedis,
    "PostgreSQL": SiPostgresql,
    "React": SiReact,
    "Node.js": SiNodedotjs,
    "Express": SiExpress,
    "Angular": SiAngular,
    "Prisma": SiPrisma,
    "Expo": SiExpo,
    "Stripe": SiStripe,
    "Kafka": SiApachekafka,
    "C": FaCode,
    "Lambda": SiAwslambda,
    "Typescript": SiTypescript,
    "Tableau": SiTableau,
    "Supabase": SiSupabase,
    "Drizzle": SiDrizzle,
    "LangChain": SiLangchain,
    "LangGraph": SiLangchain,
    
  };
  return icons[skill] || SiSimpleicons;
};

const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      category: "Programming Languages",
      skills: ["Python", "Java", "C++", "Rust", "Go", "JavaScript", "SQL", "R", "Kotlin", "C"]
    },
    {
      category: "Cloud Services",
      skills: ["AWS", "Azure", "Kubernetes", "Docker", "Kafka", "CDK", "Lambda"]
    },
    {
      category: "Databases",
      skills: ["MongoDB", "Redis", "PostgreSQL", "Tableau", "Supabase", "Drizzle"]
    },
    {
      category: "Frontend",
      skills: ["React", "Node.js", "Express", "Angular", "Typescript"]
    },
    {
      category: "Other Tools",
      skills: ["Prisma", "Expo", "Stripe", "LangChain", "LangGraph"]
    }
  ];

  const allSkills = skillCategories.flatMap(category => category.skills);

  return (
    <section id="skills" className="section-padding">
      <div className="space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold">Technical Expertise</h2>
          <div className="h-1 w-20 bg-primary rounded-full"></div>
        </div>
        <div className="flex flex-wrap gap-2 p-2 w-full justify-center">
          {allSkills.map((skill) => {
            const Icon = getSkillIcon(skill);
            return (
              <motion.div
                key={skill}
                className="flex items-center gap-2 px-2 py-1 rounded-md border border-white/20 shadow-sm hover:shadow-md transition-transform"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.span
                  className="w-7 h-7 flex items-center justify-center"
                  style={{ color: '#4B5563' }} // Darker gray for better contrast
                >
                  <Icon className="w-6 h-6" /> {/* Maintained original icon size */}
                </motion.span>
                <span className="text-sm font-medium text-white/90 leading-tight">{skill}</span>
              </motion.div>
            );
          })}
{/* <div className="text-sm text-white/60 mt-2">and many more...</div> */}
        </div>
      </div>
    </section>
  );
};

export default Skills;
