
import React from 'react';
import { Briefcase } from 'lucide-react';

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: "Amazon",
    role: "Software Development Engineer",
    period: "Sep 2022 - Sep 2024",
    location: "Dublin, Ireland",
    description: [
      "Developed customer-facing features for AWS Lambda including Advanced Logging Controls using Rust, Java to enhance traceability and monitoring in distributed systems, improving billing efficiency 2x for 92% customers.",
      "Enhanced AWS Lambda's integration testing framework using diverse data structures by introducing parallelization, improving feature validation efficiency for multiple teams and achieving an 8x increase in testing speed.",
      "Spearheaded automation to the canary test infrastructure leveraging TypeScript and AWS CDK, automating workflows across multiple regions and creating zero touch new region builds for Amazon Web Services.",
      "Engineered innovative tools to improve operational efficiency and streamline on-call support, showing leadership and enhancing developer experience and improving system performance during high pressure situations."
    ]
  },
  {
    company: "Microsoft",
    role: "Software Engineer Intern",
    period: "May 2021 – July 2021",
    location: "Bangalore, India",
    description: [
      "Developed an automated tool using Java, Azure DevOps and Kubernetes, for the Azure networking team to parse code files and generate network flow graphs for 5G networks, improving system visibility and analysis efficiency.",
      "Engineered custom error handling testing strategy including unit and integration tests, enhancing the tool's reliability and performance under various use cases, identifying critical bugs in the product before release."
    ]
  },
  {
    company: "Gurugram CyberCell",
    role: "Security Engineer Intern",
    period: "May 2019 – July 2019",
    location: "Delhi, India",
    description: [
      "Designed and developed a weapon detection system using Computer Vision, and AI capable of analyzing videos to identify weapons in real-time with automated alerts to facilitate quick response and crime prevention."
    ]
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold">Professional Experience</h2>
          <div className="h-1 w-20 bg-primary rounded-full"></div>
        </div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="card-gradient rounded-xl p-6 shadow-lg border border-white/10 space-y-4 hover:shadow-xl transition-shadow overflow-hidden group"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4 justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <Briefcase className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{exp.company}</h3>
                    <p className="text-primary">{exp.role}</p>
                  </div>
                </div>
                <div className="text-right text-muted-foreground">
                  <div>{exp.period}</div>
                  <div>{exp.location}</div>
                </div>
              </div>
              
              <ul className="space-y-2 text-muted-foreground">
                {exp.description.map((item, i) => (
                  <li key={i} className="relative pl-6 before:absolute before:left-0 before:top-2.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-primary animate-slide-in" style={{animationDelay: `${i * 100}ms`}}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
