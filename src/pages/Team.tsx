import React from 'react';
import { motion } from 'motion/react';
import { getGroupedSecretariat } from '../constants';
import { ProtectedTeamImage } from '../components/ProtectedTeamImage';
import { TeamMember as TeamMemberType } from '../types';

const POSITION_LABELS: Record<string, string> = {
  'Secretary General': 'Secretary-General',
  'Deputy Secretary General': 'Deputy Secretary-General',
  Secretary: 'Secretary',
  Advisor: 'Advisor',
};

function formatPosition(position: string) {
  const normalized = position.trim();
  if (POSITION_LABELS[normalized]) return POSITION_LABELS[normalized];

  return normalized
    .split('/')
    .map((part) =>
      part
        .trim()
        .replace(/\busg of\b/gi, 'Under-Secretary-General of')
        .replace(/\bconference affaris\b/gi, 'conference affairs')
        .replace(/\busg\b/gi, 'Under-Secretary-General')
        .replace(/\bmember of\b/gi, 'Member of')
        .replace(/\bhead of\b/gi, 'Head of'),
    )
    .join(' / ');
}

function getMemberBio(member: TeamMemberType) {
  if (member.bio) return member.bio;
  if (member.quote.trim()) return member.quote;
  return `${member.name} serves as ${formatPosition(member.position)} for POWIIS MUN 2027, helping shape a thoughtful, well-run conference experience.`;
}

function TeamProfile({ member }: { member: TeamMemberType }) {
  const bio = getMemberBio(member);

  return (
    <article className="team-profile">
      <ProtectedTeamImage
        src={member.image}
        alt={member.name}
        variant="editorial"
        className="team-profile-photo"
        imageClassName="w-full aspect-[4/5] object-cover object-top"
      />

      <div className="mx-auto mt-8 max-w-2xl px-1">
        <p className="team-role-title">{formatPosition(member.position)}</p>
        <h3 className="team-member-name">{member.name}</h3>
        <p className="team-member-bio whitespace-pre-line">{bio}</p>
      </div>
    </article>
  );
}

export default function Team() {
  const sections = getGroupedSecretariat();

  return (
    <div className="min-h-screen bg-[#f8f3e8] pt-28 pb-24 text-brand-navy">
      <div className="mx-auto max-w-4xl px-6 md:px-10">
        <motion.header
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 md:mb-20 text-center"
        >
          <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.34em] text-brand-navy/45">
            POWIIS MUN 2027
          </p>
          <h1 className="font-display text-[clamp(2.5rem,7vw,4.5rem)] italic text-[#6b4a3a] leading-[0.95]">
            The Secretariat
          </h1>
        </motion.header>

        <div className="space-y-20 md:space-y-24">
          {sections.map((section, sectionIndex) => (
            <motion.section
              key={section.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: sectionIndex * 0.03 }}
            >
              <h2 className="team-section-title mb-12 md:mb-14">{section.title}</h2>

              <div>
                {section.members.map((member, memberIndex) => (
                  <React.Fragment key={member.id}>
                    {memberIndex > 0 && <div className="team-profile-divider" aria-hidden />}
                    <TeamProfile member={member} />
                  </React.Fragment>
                ))}
              </div>
            </motion.section>
          ))}
        </div>
      </div>
    </div>
  );
}