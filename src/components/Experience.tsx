import React from "react";
import { Briefcase } from "lucide-react";

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: "Zof AI",
    role: "AI Engineer Intern",
    period: "Jun 2025 - Aug 2025",
    location: "Remote",
    description: [
      "Built several context-aware AI agents that convert natural language test cases into executable Python for REST/GraphQL APIs using LangGraph and LangChain, processing 500+ cases/day at 95% accuracy",
      "Designed and deployed AWS-based CI/CD infrastructure (CodePipeline, ECS, CloudFormation), automating releases directly from GitHub to production environment",
      "Standardized development workflows across 30+ microservices with FastAPI, Docker, and MCP, reducing onboarding time and boosting delivery speed by 40%",
    ],
  },
  {
    company: "Amazon (AWS)",
    role: "Software Development Engineer",
    period: "Sep 2022 - Sep 2024",
    location: "Dublin, Ireland",
    description: [
      "Led development of Advanced Logging Controls in Rust/Java, enabling dynamic log filtering for AWS Lambda; adopted by 92% of users and cut CloudWatch costs by 50%",
      "Built scalable telemetry pipelines for OpenTelemetry support in Lambda's Fluxpump service, enabling 3rd-party integrations (Datadog, New Relic, Splunk) for 1M+ users",
      "Reduced integration test runtime from 90 to 10 minutes by redesigning Python-based test infra with concurrency and modular OOP patterns",
      "Automated global canary deployments with AWS CDK, generating region-specific configs automatically",
    ],
  },
  {
    company: "Microsoft",
    role: "Software Engineer Intern",
    period: "May 2021 - Jul 2021",
    location: "Bangalore, India",
    description: [
      "Developed automated tool using Java, Azure DevOps and Kubernetes to parse code files and generate network flow graphs for 5G networks",
      "Engineered custom error handling testing strategy with unit/integration tests, identifying critical bugs before release",
    ],
  },
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
              className="rounded-xl p-6 shadow-medium border border-white/10 space-y-4 overflow-hidden"
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
                  <li
                    key={i}
                    className="relative pl-6 before:absolute before:left-0 before:top-2.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-primary animate-slide-in"
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
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
