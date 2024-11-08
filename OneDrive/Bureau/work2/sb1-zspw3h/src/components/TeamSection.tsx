import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  github?: string;
  linkedin?: string;
  email?: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Samy Samir',
    role: 'Lead Developer',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400',
    github: 'https://github.com/sarahdev',
    linkedin: 'https://linkedin.com/in/sarahdev',
    email: 'Samy@evento.eg'
  },
  {
    name: 'Mahmoud Ramadan',
    role: 'Backend Engineer',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
    github: 'https://github.com/mohameddev',
    linkedin: 'https://linkedin.com/in/mohameddev',
    email: 'mahmoud@evento.eg'
  },
  {
    name: 'Mohamed Sami',
    role: 'Backend Engineer',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400',
    github: 'https://github.com/nourdesign',
    linkedin: 'https://linkedin.com/in/nourdesign',
    email: 'Mosami@evento.eg'
  },
  {
    name: 'Abdelrahman Abdallah',
    role: 'Frontend Developer',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400',
    github: 'https://github.com/karimdev',
    linkedin: 'https://linkedin.com/in/karimdev',
    email: 'abdelrahman@evento.eg'
  },
  {
    name: 'Mohamed Khaled',
    role: 'Frontend Developer',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400',
    github: 'https://github.com/yasminepm',
    linkedin: 'https://linkedin.com/in/yasminepm',
    email: 'mokhaled@evento.eg'
  }
];

function TeamMemberCard({ member }: { member: TeamMember }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative group">
        <img 
          src={member.image} 
          alt={member.name}
          className="w-full h-64 object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
          <div className="flex space-x-4">
            {member.github && (
              <a 
                href={member.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-amber-300 transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
            )}
            {member.linkedin && (
              <a 
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-amber-300 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            )}
            {member.email && (
              <a 
                href={`mailto:${member.email}`}
                className="text-white hover:text-amber-300 transition-colors"
              >
                <Mail className="w-6 h-6" />
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-amber-900 mb-1">{member.name}</h3>
        <p className="text-stone-600">{member.role}</p>
      </div>
    </div>
  );
}

export default function TeamSection() {
  return (
    <section className="py-16 bg-stone-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-amber-900 mb-4">Meet Our Team</h2>
          <p className="text-stone-600 max-w-2xl mx-auto">
            Our dedicated team of professionals works tirelessly to bring you the best events and experiences across Egypt.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.name} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}