
import React from 'react';
import { CodeIcon, ShoppingCart, Bot, Headset } from 'lucide-react';

interface ProjectItem {
  title: string;
  period: string;
  technologies: string;
  description: string[];
  icon: React.ReactNode;
}

const projects: ProjectItem[] = [
  {
    title: "LockedIn: A Virtual Reality Experience",
    period: "Dec 2024 – Present",
    technologies: "C#, Unity, OOPs, Blender",
    description: [
      "Developed an immersive VR game in Unity for Meta Quest headsets, cycling through the end-to-end software engineering cycle from HLD to testing, awaiting release in the meta quest app store.",
      "Leveraged several techniques such as low-poly assets, baked lighting, XR interactables, Shader Graphs, and MonoBehaviour Scripting (C#) to ensure a smooth and fulfilling gameplay for the user."
    ],
    icon: <Headset className="text-primary" size={24} />
  },
  {
    title: "TradeOptimizer: Algo Trading Bot",
    period: "Aug 2024 – Present",
    technologies: "PyTorch, LLM, OpenAI, LangChain, LSTM",
    description: [
      "Engineered an autonomous trading bot leveraging technical indicators, sentiment analysis, and advanced algorithms using models like FinBERT, BertTopic and LSTMs to predict market trends and execute trades automatically."
    ],
    icon: <Bot className="text-primary" size={24} />
  },
  {
    title: "UnMasker: UnMasking faces using Deep Learning",
    period: "Jan 2021 – May 2021",
    technologies: "GAN, CNN, OpenCV",
    description: [
      "Designed and developed a generative adversarial network (GAN) to reconstruct missing facial features by removing masks from faces on 32000+ training samples, enabling accurate facial restoration using computer vision openCV"
    ],
    icon: <CodeIcon className="text-primary" size={24} />
  },
  {
    title: "SecureMart: Secure E-commerce Website",
    period: "Aug 2021 – Dec 2021",
    technologies: "React, Stripe, Node, MongoDB, Express",
    description: [
      "Developed a full-stack e-commerce platform with React (frontend), Node.js and Express (backend) and MongoDB (database), implementing REST API and authentication mechanisms using JSON Web Tokens, OAuth2, and SSL.",
      "Leveraged fundamental security concepts including encryption, secure payment gateway, 2FA, ACLS etc."
    ],
    icon: <ShoppingCart className="text-primary" size={24} />
  }
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
            <div 
              key={index} 
              className="card-gradient rounded-xl p-6 shadow-lg border border-white/10 hover:shadow-xl transition-shadow h-full flex flex-col"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  {project.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="text-muted-foreground text-sm">{project.period}</p>
                </div>
              </div>
              
              <div className="flex-grow">
                <div className="mb-3">
                  <span className="text-primary text-sm font-medium">Technologies: </span>
                  <span className="text-muted-foreground text-sm">{project.technologies}</span>
                </div>
                
                <ul className="space-y-2 text-muted-foreground">
                  {project.description.map((item, i) => (
                    <li key={i} className="relative pl-6 before:absolute before:left-0 before:top-2.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-primary">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
