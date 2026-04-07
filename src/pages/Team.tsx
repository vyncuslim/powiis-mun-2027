import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Linkedin, Instagram, Globe } from 'lucide-react';
import { SECRETARIAT } from '../constants';
import { TeamMember as TeamMemberType } from '../types';

interface TeamMemberCardProps {
  member: TeamMemberType;
  onClick: () => void;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member, onClick }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="group cursor-pointer"
    onClick={onClick}
  >
    <div className="aspect-[3/4] rounded-2xl overflow-hidden mb-6 relative shadow-xl">
      <img 
        src={member.image} 
        alt={member.name} 
        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
        <p className="text-brand-gold text-xs font-bold uppercase tracking-widest">View Profile</p>
      </div>
    </div>
    <h3 className="text-xl font-display font-black uppercase tracking-tight mb-1">{member.name}</h3>
    <p className="text-brand-gold/60 text-sm uppercase tracking-widest font-bold">{member.position}</p>
  </motion.div>
);

export default function Team() {
  const [selectedMember, setSelectedMember] = useState<TeamMemberType | null>(null);

  return (
    <div className="pt-32 pb-24 px-6 bg-brand-cream min-h-screen">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <div className="inline-block px-4 py-1 rounded-full border border-brand-gold/30 text-brand-gold text-[10px] uppercase tracking-[0.3em] font-bold mb-6">
            The Leadership
          </div>
          <h1 className="text-6xl md:text-8xl font-display font-black mb-6 uppercase text-brand-navy">
            THE <span className="text-brand-gold italic font-serif">SECRETARIAT</span>
          </h1>
          <p className="text-xl font-serif italic text-brand-navy/60 max-w-2xl mx-auto">
            Meet the dedicated team behind POWIIS MUN 2027, working tirelessly to ensure an unforgettable diplomatic experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {SECRETARIAT.map((member) => (
            <TeamMemberCard 
              key={member.id} 
              member={member}
              onClick={() => setSelectedMember(member)}
            />
          ))}
        </div>

        <AnimatePresence>
          {selectedMember && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-brand-navy/90 backdrop-blur-sm"
              onClick={() => setSelectedMember(null)}
            >
              <motion.div 
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                className="bg-white rounded-[3rem] overflow-hidden max-w-4xl w-full shadow-2xl relative flex flex-col md:flex-row"
                onClick={(e) => e.stopPropagation()}
              >
                <button 
                  className="absolute top-6 right-6 p-2 bg-brand-navy/5 rounded-full hover:bg-brand-gold transition-colors z-20"
                  onClick={() => setSelectedMember(null)}
                >
                  <X size={20} />
                </button>

                <div className="md:w-2/5 aspect-[3/4] md:aspect-auto relative">
                  <img 
                    src={selectedMember.image} 
                    alt={selectedMember.name} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 to-transparent" />
                  <div className="absolute bottom-8 left-8">
                    <h3 className="text-3xl font-display font-black text-white uppercase leading-none mb-2">{selectedMember.name}</h3>
                    <p className="text-brand-gold text-xs uppercase tracking-widest font-bold">{selectedMember.position}</p>
                  </div>
                </div>

                <div className="md:w-3/5 p-12 overflow-y-auto max-h-[80vh]">
                  <div className="mb-8">
                    <p className="text-brand-gold font-display font-black text-4xl italic mb-4">"{selectedMember.quote}"</p>
                    <div className="h-1 w-12 bg-brand-gold" />
                  </div>
                  
                  <div className="space-y-6 text-brand-navy/70 leading-relaxed font-serif italic text-lg mb-10">
                    {selectedMember.bio ? (
                      <p>{selectedMember.bio}</p>
                    ) : (
                      <p>Dedicated to fostering a collaborative and academically rigorous environment at POWIIS MUN 2027. With a focus on diplomacy and critical thinking, our team works to ensure every delegate has a meaningful experience.</p>
                    )}
                  </div>

                  <div className="flex gap-6">
                    {selectedMember.linkedin && (
                      <a href={selectedMember.linkedin} target="_blank" rel="noopener noreferrer" className="text-brand-navy/40 hover:text-brand-gold transition-colors">
                        <Linkedin size={24} />
                      </a>
                    )}
                    {selectedMember.instagram && (
                      <a href={selectedMember.instagram} target="_blank" rel="noopener noreferrer" className="text-brand-navy/40 hover:text-brand-gold transition-colors">
                        <Instagram size={24} />
                      </a>
                    )}
                    {selectedMember.website && (
                      <a href={selectedMember.website} target="_blank" rel="noopener noreferrer" className="text-brand-navy/40 hover:text-brand-gold transition-colors">
                        <Globe size={24} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-32 p-12 rounded-[3rem] bg-brand-navy text-brand-cream text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-display font-black mb-6 uppercase">Join the Team</h2>
            <p className="opacity-60 mb-10 max-w-xl mx-auto text-lg">
              We are currently looking for passionate student chairs and press members. Applications open soon.
            </p>
            <a 
              href="mailto:secretariat@powiismun.com"
              className="inline-block px-10 py-5 bg-brand-gold text-brand-navy rounded-2xl font-black uppercase tracking-widest hover:scale-105 transition-all shadow-2xl"
            >
              Apply Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
