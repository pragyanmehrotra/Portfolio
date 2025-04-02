
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-card/50 border-t border-white/10 py-6">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-muted-foreground text-sm">
            © {currentYear} Pragyan Mehrotra. All Rights Reserved.
          </div>
          
          <ul className="flex space-x-6">
            <li>
              <a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="#experience" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Experience
              </a>
            </li>
            <li>
              <a href="#projects" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
