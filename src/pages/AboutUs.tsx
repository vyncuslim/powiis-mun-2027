import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Globe, Target, Heart, Award, BookOpen, Lightbulb } from 'lucide-react';
import { ProtectedTeamImage } from '../components/ProtectedTeamImage';

const values = [
  {
    icon: Globe,
    title: 'Diplomacy',
    description:
      'We encourage delegates to approach disagreement with clarity, patience, and respect.',
  },
  {
    icon: Target,
    title: 'Integrity',
    description:
      'POWIIS MUN values responsible research, honest debate, and thoughtful leadership.',
  },
  {
    icon: Heart,
    title: 'Inclusivity',
    description:
      'The conference is designed to welcome both first-time delegates and experienced chairs.',
  },
  {
    icon: Award,
    title: 'Leadership',
    description:
      'Students are challenged to take initiative, collaborate confidently, and speak with purpose.',
  },
  {
    icon: Lightbulb,
    title: 'Critical Thinking',
    description:
      'Delegates learn to analyse complex issues and build practical, persuasive solutions.',
  },
  {
    icon: BookOpen,
    title: 'Academic Excellence',
    description:
      'Preparation, research depth, and formal debate procedure are at the heart of the experience.',
  },
];

export default function AboutUs() {
  return (
    <div className="pt-36 pb-24 px-6 bg-[#f8f3e8] min-h-screen text-brand-navy">
      <div className="max-w-6xl mx-auto">
        <section className="grid lg:grid-cols-[1.05fr_0.95fr] gap-14 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-[12px] uppercase tracking-[0.38em] font-bold text-brand-navy/45 mb-5">
              About Us
            </p>
            <h1 className="text-5xl md:text-7xl font-display font-semibold uppercase leading-[0.9] mb-6">
              Student-led,
              <br />
              globally minded,
              <br />
              academically driven
            </h1>
            <p className="text-[17px] leading-8 text-brand-navy/68 max-w-2xl mb-8">
              Prince of Wales Island International School Model United Nations
              is a student-led conference where delegates represent countries,
              debate global issues, and build the habits of thoughtful,
              well-informed leadership.
            </p>
            <p className="text-[17px] leading-8 text-brand-navy/68 max-w-2xl">
              POWIIS MUN is designed to be formal, welcoming, and ambitious.
              Students are invited to speak, research, negotiate, and collaborate
              in a setting that mirrors real diplomatic discussion.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="grid grid-cols-[1.2fr_0.8fr] gap-4"
          >
            <div className="bg-white rounded-[2rem] p-4 border border-brand-navy/8 shadow-sm">
              <ProtectedTeamImage
                src="/team/about-hero.jpeg"
                alt="POWIIS MUN leadership"
                className="rounded-[1.5rem]"
                imageClassName="w-full aspect-[4/5] object-cover rounded-[1.5rem]"
              />
            </div>
            <div className="flex flex-col gap-4">
              <div className="bg-white rounded-[1.75rem] p-5 border border-brand-navy/8 shadow-sm">
                <p className="text-[10px] uppercase tracking-[0.28em] font-bold text-brand-navy/45 mb-2">
                  Our Mission
                </p>
                <p className="font-display font-semibold text-3xl uppercase leading-[0.92]">
                  Build confident global citizens
                </p>
              </div>
              <div className="bg-brand-navy text-white rounded-[1.75rem] p-5 shadow-sm">
                <p className="text-[10px] uppercase tracking-[0.28em] font-bold text-white/55 mb-2">
                  Our Vision
                </p>
                <p className="leading-7 text-white/78">
                  A conference culture where diplomacy, empathy, and academic
                  excellence all matter equally.
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        <section className="grid md:grid-cols-2 gap-6 mb-24">
          <div className="rounded-[2rem] bg-white p-10 border border-brand-navy/8 shadow-sm">
            <p className="text-[11px] uppercase tracking-[0.28em] font-bold text-brand-navy/45 mb-4">
              Our Mission
            </p>
            <h2 className="text-4xl md:text-5xl font-display font-semibold uppercase leading-[0.95] mb-4">
              Debate with purpose
            </h2>
            <p className="text-brand-navy/68 leading-8 text-[17px]">
              We aim to provide students with a serious platform for diplomacy,
              public speaking, and collaborative problem-solving through
              well-structured Model United Nations debate.
            </p>
          </div>
          <div className="rounded-[2rem] bg-[#fffaf0] p-10 border border-brand-navy/8 shadow-sm">
            <p className="text-[11px] uppercase tracking-[0.28em] font-bold text-brand-navy/45 mb-4">
              Our Vision
            </p>
            <h2 className="text-4xl md:text-5xl font-display font-semibold uppercase leading-[0.95] mb-4">
              Lead with clarity
            </h2>
            <p className="text-brand-navy/68 leading-8 text-[17px]">
              POWIIS MUN seeks to grow a community of young leaders who can
              engage with difficult issues thoughtfully, respectfully, and with
              genuine curiosity about the world around them.
            </p>
          </div>
        </section>

        <section className="mb-24">
          <div className="max-w-3xl mb-12">
            <p className="text-[12px] uppercase tracking-[0.38em] font-bold text-brand-navy/45 mb-4">
              Core Values
            </p>
            <h2 className="text-4xl md:text-6xl font-display font-semibold uppercase leading-[0.95] mb-4">
              What shapes the conference
            </h2>
            <p className="text-[17px] leading-8 text-brand-navy/68">
              These values guide the way POWIIS MUN is organised, moderated, and
              experienced by delegates.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                  className="rounded-[2rem] bg-white p-8 border border-brand-navy/8 shadow-sm"
                >
                  <div className="w-11 h-11 rounded-full bg-brand-gold/25 flex items-center justify-center mb-5">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-3xl font-display font-semibold uppercase mb-3">
                    {value.title}
                  </h3>
                  <p className="text-brand-navy/65 leading-7">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </section>

        <section className="rounded-[2.5rem] bg-brand-navy text-white px-8 py-14 md:px-14 md:py-16 shadow-sm">
          <div className="max-w-4xl">
            <p className="text-[11px] uppercase tracking-[0.32em] font-bold text-white/50 mb-4">
              Join POWIIS MUN
            </p>
            <h2 className="text-4xl md:text-6xl font-display font-semibold uppercase leading-[0.95] mb-5">
              Ready to take part?
            </h2>
            <p className="text-white/75 text-[17px] leading-8 mb-8 max-w-2xl">
              Explore the conference team, discover the committees, and register
              your interest for the next POWIIS MUN edition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://forms.gle/your-form-id"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-brand-gold text-brand-navy text-xs font-bold uppercase tracking-[0.2em]"
              >
                Register now
              </a>
              <Link
                to="/team"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-white/20 text-xs font-bold uppercase tracking-[0.2em] text-white"
              >
                Meet the team
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
