import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
const About: React.FC = () => {
  return <section id="about" className="section-padding">
      <div className="space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold">About Me</h2>
          <div className="h-1 w-20 bg-primary rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            <p className="text-muted-foreground leading-relaxed">I'm a Software Development Engineer with 2+ years of experience at Amazon and Microsoft, specializing in cloud technologies, distributed systems, and software engineering. I am passionate about building scalable and efficient solutions that solve real-world problems.</p>
            <p className="text-muted-foreground leading-relaxed">
              Currently pursuing a Master's degree in Computer Science at the University of Wisconsin-Madison, I bring 
              strong professional experience from my time at Amazon where I developed customer-facing features for AWS Lambda 
              and improved system performance.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I enjoy working on challenging problems that require innovative thinking and creative solutions.
            </p>
          </div>
          
          <div className="glass p-6 space-y-4">
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-primary" />
                <a href="mailto:mehrotrapragyan@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                  mehrotrapragyan@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-primary" />
                <a href="tel:+16085157308" className="text-muted-foreground hover:text-primary transition-colors">
                  +1 (608) 515-7308
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={18} className="text-primary" />
                <span className="text-muted-foreground">Madison, WI, USA</span>
              </div>
              <div className="flex items-center space-x-3">
                <Linkedin size={18} className="text-primary" />
                <a href="https://linkedin.com/in/pragyan-m" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  linkedin.com/in/pragyan-m
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Github size={18} className="text-primary" />
                <a href="https://github.com/pragyanmehrotra" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  github.com/pragyanmehrotra
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;