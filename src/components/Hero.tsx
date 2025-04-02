import React from 'react';
import { ArrowDown } from 'lucide-react';
const Hero: React.FC = () => {
  return <section id="hero" className="min-h-screen flex flex-col justify-center items-center relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full blur-[80px] bg-primary/10"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full blur-[80px] bg-primary/10"></div>
      </div>
      
      <div className="text-center z-10 px-4 max-w-3xl mx-auto space-y-6 animate-fade-in">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          <span className="text-gradient">Pragyan Mehrotra</span>
        </h1>
        <h2 className="text-xl md:text-2xl text-muted-foreground">Software Development Engineer</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Building scalable solutions for complex problems with expertise in cloud computing, distributed systems, software engineering, and full-stack development.</p>
        <div className="flex space-x-4 justify-center pt-4">
          <a href="#about" className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-medium transition-all">
            Learn More
          </a>
          <a href="#contact" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-6 py-3 rounded-lg font-medium transition-all">
            Contact Me
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors">
          <span className="mb-2 text-sm">Scroll Down</span>
          <ArrowDown size={20} />
        </a>
      </div>
    </section>;
};
export default Hero;