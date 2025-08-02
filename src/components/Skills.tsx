import React from "react";

interface SkillCategory {
  category: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    category: "Programming Languages",
    skills: [
      "Python",
      "Java",
      "C",
      "C++",
      "Rust",
      "Go",
      "JavaScript",
      "SQL",
      "R",
      "Kotlin",
    ],
  },
  {
    category: "Tools",
    skills: [
      "AWS",
      "Azure",
      "Kubernetes",
      "Docker",
      "Git",
      "CDK",
      "Angular",
      "MongoDB",
      "N8N",
      "VectorDB",
      "Redis",
      "Drizzle ORM",
      "Tableau",
      "React",
      "Node.js",
      "MongoDB",
      "Supabase",
      "TiDB",
      "PostgreSQL",
      "FastAPI",
      "Express",
      "LangChain",
      "LangGraph",
      "OpenTelemetry",
      "Prisma",
      "Expo",
      "Stripe",
      "Pinecone",
      "MCP",
    ],
  },
  {
    category: "Soft Skills",
    skills: [
      "Problem Solving",
      "Fast Learner",
      "Growth Mindset",
      "Curious",
      "Cross-Team Collaboration",
      "Agile",
      "Communication",
    ],
  },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold">Skills</h2>
          <div className="h-1 w-20 bg-primary rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className=" rounded-xl p-6 shadow-medium border border-white/10 h-full "
            >
              <h3 className="text-xl font-semibold mb-4">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <div
                    key={i}
                    className="rounded-full bg-background/80 backdrop-blur-sm border border-white/10 shadow-medium "
                    style={{
                      backgroundPosition: `${Math.random() * 100}% ${
                        Math.random() * 100
                      }%`,
                    }}
                  >
                    <span className="relative bg-background/90 backdrop-blur-sm text-foreground py-1.5 px-3 rounded-full text-sm border border-white/10">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
