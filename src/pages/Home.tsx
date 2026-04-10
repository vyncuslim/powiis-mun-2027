import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import {
  Calendar,
  Check,
  Mail,
  MapPin,
  ExternalLink,
  Instagram,
  Globe,
} from 'lucide-react';
import { Logo } from '../components/Logo';
import { ProtectedTeamImage } from '../components/ProtectedTeamImage';
import { COMMITTEES } from '../constants';

const criteria = [
  {
    title: 'Who can join',
    description:
      'POWIIS MUN welcomes secondary school students who are curious about current affairs, diplomacy, and structured debate.',
  },
  {
    title: 'What they gain',
    description:
      'Delegates strengthen public speaking, negotiation, research, and confidence in formal academic discussion.',
  },
  {
    title: 'How to prepare',
    description:
      'Read your topic background, understand the rules of procedure, and practise building practical, well-researched arguments.',
  },
];

const benefits = [
  'Public speaking and persuasion',
  'Research and policy analysis',
  'Collaboration under pressure',
  'Confidence in formal debate',
];

export default function Home() {
  return (
    <>
      <section className="pt-32 pb-16 px-6 bg-[#f8f3e8] text-brand-navy">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <div className="rounded-[1.85rem] border border-brand-navy/8 bg-white px-8 py-6 shadow-sm">
              <p className="text-[10px] uppercase tracking-[0.28em] font-bold text-brand-navy/45 mb-3">
                2027
              </p>
              <p className="text-brand-navy/62 text-lg">
                Official dates to be announced
              </p>
            </div>
            <div className="rounded-[1.85rem] border border-brand-navy/8 bg-white px-8 py-6 shadow-sm">
              <p className="text-[10px] uppercase tracking-[0.28em] font-bold text-brand-navy/45 mb-3">
                POWIIS
              </p>
              <p className="text-brand-navy/62 text-lg">
                Prince of Wales Island International School
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-[1.08fr_0.92fr] gap-10 items-start">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-[11px] uppercase tracking-[0.36em] font-bold text-brand-navy/45 mb-6">
                Discover the world of diplomacy with
              </p>
              <h1 className="font-display text-[clamp(4.2rem,10vw,8.6rem)] leading-[0.9] uppercase tracking-tight text-brand-navy mb-4">
                Model United
                <br />
                Nations
              </h1>
              <p className="font-display italic text-3xl md:text-4xl text-brand-navy/68 mb-10">
                by POWIIS
              </p>
              <p className="max-w-3xl text-[19px] leading-9 text-brand-navy/68 mb-10">
                POWIIS MUN is a student-led conference where delegates represent
                countries and debate global issues through formal, thoughtful,
                academically grounded discussion.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://forms.gle/your-form-id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-brand-navy px-8 py-4 text-xs font-bold uppercase tracking-[0.22em] text-white hover:bg-brand-gold hover:text-brand-navy transition-colors"
                >
                  I want to join!
                </a>
                <Link
                  to="/committees"
                  className="inline-flex items-center justify-center rounded-full border border-brand-navy/12 bg-white px-8 py-4 text-xs font-bold uppercase tracking-[0.22em] text-brand-navy hover:border-brand-gold hover:text-brand-gold transition-colors"
                >
                  View committees
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08 }}
              className="grid grid-cols-[1.05fr_0.95fr] gap-4"
            >
              <div className="rounded-[2.1rem] border border-brand-navy/8 bg-white p-5 shadow-sm">
                <ProtectedTeamImage
                  src="/team/afzan-azmin.jpeg"
                  alt="Lea Tan"
                  className="rounded-[1.6rem]"
                  imageClassName="w-full aspect-[4/5] object-cover object-top rounded-[1.6rem]"
                />
                <div className="mt-4 rounded-[1.3rem] bg-[#f7f0de] px-5 py-4">
                  <p className="text-[10px] uppercase tracking-[0.24em] font-bold text-brand-navy/45 mb-2">
                    Student-led conference
                  </p>
                  <p className="font-display text-3xl uppercase leading-none">
                    Academic
                    <br />
                    debate
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="rounded-[1.85rem] border border-brand-navy/8 bg-white px-6 py-7 shadow-sm">
                  <p className="text-[10px] uppercase tracking-[0.28em] font-bold text-brand-navy/45 mb-3">
                    Our mission
                  </p>
                  <p className="font-display text-[clamp(2rem,4vw,3.3rem)] leading-[0.92] uppercase text-brand-navy">
                    Build
                    <br />
                    confident
                    <br />
                    global
                    <br />
                    citizens
                  </p>
                </div>

                <div className="rounded-[1.85rem] bg-brand-navy px-6 py-7 text-white shadow-sm">
                  <p className="text-[10px] uppercase tracking-[0.28em] font-bold text-white/55 mb-3">
                    Our vision
                  </p>
                  <p className="text-[18px] leading-10 text-white/82">
                    A conference culture where diplomacy, empathy, and academic
                    excellence all matter equally.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-8 bg-[#f8f3e8]">
        <div className="max-w-7xl mx-auto rounded-[1.9rem] border border-brand-navy/8 bg-white px-6 py-5 shadow-sm">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-brand-navy/46">
            <p className="text-[10px] uppercase tracking-[0.28em] font-bold">
              Supported by
            </p>
            <div className="inline-flex items-center gap-3">
              <Logo size="sm" />
              <span className="font-display text-3xl uppercase text-brand-navy/78">
                POWIIS
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white text-brand-navy">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mb-12">
            <p className="text-[11px] uppercase tracking-[0.34em] font-bold text-brand-navy/45 mb-5">
              Essential criteria for participation
            </p>
            <h2 className="font-display text-[clamp(2.9rem,6vw,5.3rem)] leading-[0.94] uppercase mb-6">
              Why should you join the model united nations by POWIIS?
            </h2>
            <p className="max-w-4xl text-[19px] leading-9 text-brand-navy/66">
              Whether you are completely new to MUN or already experienced in
              committee debate, the conference is designed to be welcoming,
              formal, and academically rewarding.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {criteria.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.07 }}
                className="rounded-[2rem] border border-brand-navy/8 bg-[#faf7ef] p-8 shadow-sm"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-brand-gold/20">
                  <Check size={18} />
                </div>
                <h3 className="font-display text-3xl uppercase leading-none mb-4">
                  {item.title}
                </h3>
                <p className="text-brand-navy/66 leading-8">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-[#f8f3e8] text-brand-navy">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_0.95fr] gap-8 items-start">
          <div>
            <p className="text-[11px] uppercase tracking-[0.34em] font-bold text-brand-navy/45 mb-5">
              Upcoming model united nations conferences by POWIIS
            </p>
            <h2 className="font-display text-[clamp(2.8rem,5.8vw,5rem)] leading-[0.94] uppercase mb-6">
              Experience academic debate at POWIIS MUN
            </h2>
            <p className="text-[18px] leading-9 text-brand-navy/66 mb-8 max-w-3xl">
              Join high school delegates from across the region to discuss
              real-world issues through formal Model United Nations procedure.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="rounded-[1.4rem] border border-brand-navy/8 bg-white px-5 py-4 shadow-sm"
                >
                  <p className="text-brand-navy/74 font-semibold">{benefit}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2.1rem] border border-brand-navy/8 bg-white p-8 shadow-sm">
            <p className="text-[10px] uppercase tracking-[0.28em] font-bold text-brand-navy/45 mb-5">
              Event details
            </p>
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 text-brand-gold mb-2">
                  <Calendar size={16} />
                  <span className="text-[10px] uppercase tracking-[0.24em] font-bold text-brand-navy/45">
                    Date
                  </span>
                </div>
                <p className="font-display text-3xl uppercase">To be confirmed</p>
              </div>
              <div>
                <div className="flex items-center gap-2 text-brand-gold mb-2">
                  <MapPin size={16} />
                  <span className="text-[10px] uppercase tracking-[0.24em] font-bold text-brand-navy/45">
                    Venue
                  </span>
                </div>
                <p className="font-display text-3xl uppercase leading-[1.05]">
                  Prince of Wales Island International School
                </p>
                <p className="text-brand-navy/62 leading-8 mt-3">
                  83 Lintang Bayan Lepas, 11900 Bayan Lepas, Pulau Pinang,
                  Malaysia
                </p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.24em] font-bold text-brand-navy/45 mb-2">
                  Registration fee
                </p>
                <p className="text-brand-navy/62 leading-8">
                  Delegates and chairs details will be announced closer to
                  launch. Registration usually includes conference materials,
                  lunch, and light refreshments.
                </p>
              </div>
              <a
                href="https://forms.gle/your-form-id"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full bg-brand-navy px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] text-white hover:bg-brand-gold hover:text-brand-navy transition-colors"
              >
                Register now
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white text-brand-navy">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mb-12">
            <p className="text-[11px] uppercase tracking-[0.34em] font-bold text-brand-navy/45 mb-5">
              Example committees
            </p>
            <h2 className="font-display text-[clamp(2.7rem,5.6vw,4.7rem)] leading-[0.94] uppercase mb-5">
              Real-world issues, formal debate, serious discussion
            </h2>
            <p className="text-[18px] leading-9 text-brand-navy/66">
              Example committees may include UNHRC, UNSC, and other academic
              bodies focused on human rights, international security, and global
              policy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mb-10">
            {COMMITTEES.map((committee) => (
              <div
                key={committee.id}
                className="rounded-[2rem] border border-brand-navy/8 bg-[#faf7ef] p-7 shadow-sm"
              >
                <p className="text-[11px] uppercase tracking-[0.24em] font-bold text-brand-gold mb-3">
                  {committee.name}
                </p>
                <h3 className="font-display text-3xl uppercase leading-[1] mb-4">
                  {committee.topic}
                </h3>
                <p className="text-brand-navy/66 leading-8">
                  {committee.description}
                </p>
              </div>
            ))}
          </div>

          <Link
            to="/committees"
            className="inline-flex items-center justify-center rounded-full border border-brand-navy/12 px-7 py-3 text-xs font-bold uppercase tracking-[0.2em] hover:border-brand-gold hover:text-brand-gold transition-colors"
          >
            View full committees page
          </Link>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 bg-[#f8f3e8] text-brand-navy">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-[2.5rem] bg-brand-navy text-white px-8 py-14 md:px-14 md:py-16 shadow-sm">
            <div className="max-w-4xl">
              <p className="text-[11px] uppercase tracking-[0.32em] font-bold text-white/52 mb-4">
                Contact us
              </p>
              <h2 className="font-display text-[clamp(2.9rem,6vw,5.2rem)] leading-[0.94] uppercase mb-6">
                Ready to represent your nation?
              </h2>
              <p className="max-w-3xl text-[18px] leading-9 text-white/76 mb-8">
                Register your interest, contact the secretariat, and stay
                updated on the next POWIIS MUN conference announcement.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <a
                  href="https://forms.gle/your-form-id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-brand-gold px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-brand-navy"
                >
                  Register now
                </a>
                <a
                  href="mailto:powiismun@powiis.edu.my"
                  className="inline-flex items-center justify-center rounded-full border border-white/18 px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-white"
                >
                  Contact us
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-5 text-white/74">
                <a href="mailto:powiismun@powiis.edu.my" className="inline-flex items-center gap-2 hover:text-brand-gold transition-colors">
                  <Mail size={18} />
                  <span>powiismun@powiis.edu.my</span>
                </a>
                <a
                  href="https://www.instagram.com/powiismunc27?igsh=MTVmMDJpMjcxYThhdQ%3D%3D&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-brand-gold transition-colors"
                >
                  <Instagram size={18} />
                  <span>@powiismunc27</span>
                </a>
                <a
                  href="https://www.powiis.edu.my"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-brand-gold transition-colors"
                >
                  <Globe size={18} />
                  <span>POWIIS official site</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
