
import React from 'react';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold">Contact Me</h2>
          <div className="h-1 w-20 bg-primary rounded-full"></div>
        </div>
        
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <p className="text-lg text-muted-foreground">
            Feel free to reach out to me through any of the following channels. I'm always open to discussing new projects, 
            opportunities, or just having a chat about technology.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6 mt-8">
            <a 
              href="mailto:mehrotrapragyan@gmail.com" 
              className="glass flex items-center justify-center gap-3 p-4 hover:bg-card/50 transition-colors"
            >
              <Mail className="text-primary" />
              <span className="text-muted-foreground">Email</span>
            </a>
            
            <a 
              href="tel:+16085157308" 
              className="glass flex items-center justify-center gap-3 p-4 hover:bg-card/50 transition-colors"
            >
              <Phone className="text-primary" />
              <span className="text-muted-foreground">Call</span>
            </a>
            
            <a 
              href="https://linkedin.com/in/pragyan-m" 
              target="_blank" 
              rel="noopener noreferrer"
              className="glass flex items-center justify-center gap-3 p-4 hover:bg-card/50 transition-colors"
            >
              <Linkedin className="text-primary" />
              <span className="text-muted-foreground">LinkedIn</span>
            </a>
            
            <a 
              href="https://github.com/pragyanmehrotra" 
              target="_blank" 
              rel="noopener noreferrer"
              className="glass flex items-center justify-center gap-3 p-4 hover:bg-card/50 transition-colors"
            >
              <Github className="text-primary" />
              <span className="text-muted-foreground">Github</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
