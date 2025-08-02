import React from "react";
import { CodeIcon, ShoppingCart, Bot, Headset } from "lucide-react";

interface ProjectItem {
  title: string;
  period: string;
  technologies: string;
  description: string[];
  icon: React.ReactElement<{ className?: string }>;
  link: string;
}

const projects: ProjectItem[] = [
  {
    title: "Recipal: AI Meal Planner App",
    period: "Jun 2025 – Jul 2025",
    technologies: "Expo, LLM, RAG, NodeJS, Supabase, Stripe, Pinecone",
    description: [
      "Built a full-stack cross-platform iOS & Android app using React Native (Expo), Node.js/Express, and Supabase, featuring AI-powered meal planning and recipe browsing",
      "Developed a personalized 'For You' page using a two-tower recommendation system to boost user engagement",
      "Implemented secure JWT authentication with 2FA and integrated Stripe billing for premium subscriptions",
    ],
    icon: <CodeIcon className="text-primary" size={24} />,
    link: "https://github.com/pragyanmehrotra/meal-planner-app",
  },
  {
    title: "MailJS MCP Server",
    period: "May 2025 – Jun 2025",
    technologies: "MCP, NodeJS, NPM, Open Source, GenAI",
    description: [
      "Developed a plug-and-play MCP server enabling LLMs to automate temporary email account creation and message retrieval",
      "Open-sourced and published on npm, achieving 200+ downloads in the first few weeks",
    ],
    icon: <Bot className="text-primary" size={24} />,
    link: "https://www.npmjs.com/package/@pragyanm/temp-mail-mcp-server",
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold">Projects</h2>
          <div className="h-1 w-20 bg-primary rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl p-6 shadow-medium border border-white/10 h-full flex flex-col hover:border-primary/50 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-colors">
                  {React.cloneElement(project.icon, {
                    className: `${project.icon.props.className} group-hover:scale-110 transition-transform`
                  })}
                </div>
                <div>
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-muted-foreground text-sm group-hover:text-primary/80 transition-colors">
                    {project.period}
                  </p>
                </div>
              </div>

              <div className="flex-grow">
                <div className="mb-3">
                  <span className="text-primary text-sm font-medium">
                    Technologies:{" "}
                  </span>
                  <span className="text-muted-foreground text-sm">
                    {project.technologies}
                  </span>

                <ul className="space-y-2 text-muted-foreground">
                  {project.description.map((item, i) => (
                    <li
                      key={i}
                      className="relative pl-6 before:absolute before:left-0 before:top-2.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-primary"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
