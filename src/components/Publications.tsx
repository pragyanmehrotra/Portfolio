
import React from 'react';
import { FileText } from 'lucide-react';

interface Publication {
  title: string;
  venue: string;
  year: string;
}

const publications: Publication[] = [
  {
    title: "M. Agrawal, P. Mehrotra et al, \"GANTouch: An Attack-Resiliyesnt Framework for Touch-Based Continuous Authentication System,\"",
    venue: "IEEE Transactions on Biometrics, Behavior, and Identity Science",
    year: "Oct. 2022"
  },
  {
    title: "M. Agrawal, P. Mehrotra et al, \"Defending Touch-based Continuous Authentication Systems from Active Adversaries Using Generative Adversarial Networks,\"",
    venue: "IEEE International Joint Conference on Biometrics (IJCB)",
    year: "2021"
  }
];

const Publications: React.FC = () => {
  return (
    <section id="publications" className="section-padding">
      <div className="space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold">Publications</h2>
          <div className="h-1 w-20 bg-primary rounded-full"></div>
        </div>
        
        <div className="space-y-6">
          {publications.map((pub, index) => (
            <div 
              key={index} 
              className="card-gradient rounded-xl p-6 shadow-lg border border-white/10 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <FileText className="text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">{pub.title}</h3>
                  <div className="text-muted-foreground">
                    <div>{pub.venue}</div>
                    <div>{pub.year}</div>
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

export default Publications;
