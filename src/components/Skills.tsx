
import React from 'react';

interface SkillCategory {
  category: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    category: "Programming Languages",
    skills: ["Java", "Python", "C", "C++", "Rust", "Ruby", "Go", "React", "NodeJS", "JavaScript", "SQL", "Bash", "C#"]
  },
  {
    category: "Frameworks",
    skills: ["TensorFlow", "PyTorch", "AWS", "Azure", "Flask", "Django", "Kubernetes", "Docker", "MySQL", "DynamoDB", "CDK", "Git"]
  },
  {
    category: "Courses",
    skills: ["Deep Learning", "Distributed Systems", "DS & Algorithms", "Database Systems", "Operating Systems", "Networking"]
  },
  {
    category: "Soft Skills",
    skills: ["Problem Solving", "Fast Learner", "Growth Mindset", "Customer Obsession", "Cross-Team Collaboration"]
  }
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold">Skills</h2>
          <div className="h-1 w-20 bg-primary rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="card-gradient rounded-xl p-6 shadow-lg border border-white/10 hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-4">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span 
                    key={i} 
                    className="bg-secondary/50 text-foreground py-1.5 px-3 rounded-full text-sm hover:bg-primary/30 transition-colors"
                  >
                    {skill}
                  </span>
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
