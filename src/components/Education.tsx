import React from "react";
import { BookOpen } from "lucide-react";

interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  gpa: string;
  location: string;
}

const educationItems: EducationItem[] = [
  {
    institution: "University of Wisconsin, Madison",
    degree: "Masters of Science in Computer Science",
    period: "Sep 2024 - May 2026", // Matches resume date format
    gpa: "GPA 4.0/4.0",
    location: "Madison, WI, USA",
  },
  {
    institution: "Indraprastha Institute of Information Technology, Delhi",
    degree: "Bachelors of Technology in Computer Science",
    period: "Aug 2018 - May 2022", // Exact match to resume
    gpa: "GPA 3.85/4.0",
    location: "Delhi, India",
  },
];

const Education: React.FC = () => {
  return (
    <section id="education" className="section-padding">
      <div className="space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold">Education</h2>
          <div className="h-1 w-20 bg-primary rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {educationItems.map((edu, index) => (
            <div
              key={index}
              className="rounded-xl p-6 shadow-medium border border-white/10 space-y-4"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex-shrink-0 flex items-center justify-center">
                  <BookOpen className="text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">{edu.institution}</h3>
                  <p className="text-primary">{edu.degree}</p>
                  <div className="text-muted-foreground space-y-1">
                    <div>{edu.period}</div>
                    <div>{edu.gpa}</div>
                    <div>{edu.location}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
