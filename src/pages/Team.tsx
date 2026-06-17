import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { getGroupedSecretariat } from '../constants';
import { ProtectedTeamImage } from '../components/ProtectedTeamImage';
import { TeamMember as TeamMemberType } from '../types';

interface TeamMemberCardProps {
  member: TeamMemberType;
  onClick: () => void;
  compact?: boolean;
}

const columnClass: Record<2 | 3 | 4, string> = {
  2: 'grid-cols-1 sm:grid-cols-2',
  3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
  4: 'grid-cols-2 sm:grid-cols-2 lg:grid-cols-4',
};

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member, onClick, compact }) => (
  <motion.button
    type="button"
    whileHover={{ y: -6 }}
    className="group w-full text-left"
    onClick={onClick}
  >
    <div
      className={`overflow-hidden rounded-[1.75rem] border border-brand-navy/8 bg-white shadow-sm mb-4 ${
        compact ? 'mx-auto max-w-[220px]' : ''
      }`}
    >
      <ProtectedTeamImage
        src={member.image}
        alt={member.name}
        className="w-full"
        imageClassName={`w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02] ${
          compact ? 'aspect-[3/4]' : 'aspect-[4/5]'
        }`}
      />
    </div>
    <h3 className="font-display text-xl md:text-2xl font-semibold uppercase tracking-tight text-brand-navy mb-1">
      {member.name}
    </h3>
    <p className="text-[11px] uppercase tracking-[0.2em] font-bold text-brand-gold/80">
      {member.position}
    </p>
  </motion.button>
);

export default function Team() {
  const sections = getGroupedSecretariat();
  const [selectedMember, setSelectedMember] = useState<TeamMemberType | null>(null);
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  const openMember = (member: TeamMemberType) => {
    setSelectedMember(member);
    setSelectedPhoto(member.photos?.[0] ?? member.image);
  };

  const closeMember = () => {
    setSelectedMember(null);
    setSelectedPhoto(null);
  };

  return (
    <div className="pt-32 pb-24 px-6 bg-[#f8f3e8] min-h-screen text-brand-navy">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <p className="text-[11px] uppercase tracking-[0.34em] font-bold text-brand-navy/45 mb-5">
            The Leadership
          </p>
          <h1 className="text-5xl md:text-7xl font-display font-semibold uppercase leading-[0.92] mb-5">
            The <span className="text-brand-gold italic font-serif">Secretariat</span>
          </h1>
          <p className="text-[17px] leading-8 text-brand-navy/62 max-w-2xl mx-auto">
            Meet the team behind POWIIS MUN 2027, organised by department.
          </p>
        </motion.div>

        <div className="space-y-20 md:space-y-24">
          {sections.map((section, sectionIndex) => {
            const columns = section.columns ?? 3;
            const isCore = section.id === 'core';

            return (
              <motion.section
                key={section.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: sectionIndex * 0.04 }}
                className="rounded-[2.5rem] border border-brand-navy/8 bg-white/75 px-5 py-10 md:px-10 md:py-14 shadow-sm"
              >
                <div className="text-center mb-10 md:mb-12">
                  <h2 className="font-display text-3xl md:text-5xl font-semibold uppercase tracking-tight text-brand-navy">
                    {section.title}
                  </h2>
                  <div className="mx-auto mt-4 h-1 w-14 rounded-full bg-brand-gold" />
                </div>

                <div
                  className={`grid ${columnClass[columns]} gap-x-8 gap-y-12 ${
                    isCore ? 'max-w-5xl mx-auto' : ''
                  }`}
                >
                  {section.members.map((member, memberIndex) => (
                    <motion.div
                      key={member.id}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: memberIndex * 0.05 }}
                      className={isCore ? 'text-center' : ''}
                    >
                      <TeamMemberCard
                        member={member}
                        onClick={() => openMember(member)}
                        compact={isCore}
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.section>
            );
          })}
        </div>

        <AnimatePresence>
          {selectedMember && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-brand-navy/90 backdrop-blur-sm"
              onClick={closeMember}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                className="bg-white rounded-[3rem] overflow-hidden max-w-4xl w-full shadow-2xl relative flex flex-col md:flex-row"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  type="button"
                  className="absolute top-6 right-6 p-2 bg-brand-navy/5 rounded-full hover:bg-brand-gold transition-colors z-20"
                  onClick={closeMember}
                >
                  <X size={20} />
                </button>

                <div className="md:w-2/5 flex flex-col bg-[#f8f3e8]">
                  <div className="aspect-[3/4] md:aspect-auto md:flex-1 relative">
                    <ProtectedTeamImage
                      src={selectedPhoto ?? selectedMember.image}
                      alt={selectedMember.name}
                      className="w-full h-full"
                      imageClassName="w-full h-full object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 to-transparent" />
                    <div className="absolute bottom-8 left-8">
                      <h3 className="text-3xl font-display font-black text-white uppercase leading-none mb-2">
                        {selectedMember.name}
                      </h3>
                      <p className="text-brand-gold text-xs uppercase tracking-widest font-bold">
                        {selectedMember.position}
                      </p>
                    </div>
                  </div>
                  {selectedMember.photos && selectedMember.photos.length > 1 && (
                    <div className="grid grid-cols-4 gap-2 p-3 border-t border-brand-navy/8">
                      {selectedMember.photos.map((photo) => (
                        <button
                          key={photo}
                          type="button"
                          className={`rounded-xl overflow-hidden border-2 transition-colors ${
                            (selectedPhoto ?? selectedMember.image) === photo
                              ? 'border-brand-gold'
                              : 'border-transparent'
                          }`}
                          onClick={() => setSelectedPhoto(photo)}
                        >
                          <ProtectedTeamImage
                            src={photo}
                            alt={`${selectedMember.name} photo`}
                            imageClassName="w-full aspect-square object-cover object-top"
                          />
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <div className="md:w-3/5 p-12 overflow-y-auto max-h-[80vh]">
                  {selectedMember.quote && (
                    <div className="mb-8">
                      <p className="text-brand-gold font-display font-black text-4xl italic mb-4">
                        &ldquo;{selectedMember.quote}&rdquo;
                      </p>
                      <div className="h-1 w-12 bg-brand-gold" />
                    </div>
                  )}

                  <div className="space-y-6 text-brand-navy/70 leading-relaxed font-serif italic text-lg mb-10">
                    {selectedMember.bio ? (
                      <p>{selectedMember.bio}</p>
                    ) : (
                      <p>
                        Dedicated to fostering a collaborative and academically rigorous environment
                        at POWIIS MUN 2027.
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}