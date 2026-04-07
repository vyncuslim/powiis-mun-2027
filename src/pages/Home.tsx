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
} from 'lucide-react';
import { Logo } from '../components/Logo';
import { ProtectedTeamImage } from '../components/ProtectedTeamImage';
import { COMMITTEES, SECRETARIAT } from '../constants';

const criteria = [
  {
    title: 'Who Can Join',
    description:
      'POWIIS MUN welcomes secondary school students who are curious about current affairs, diplomacy, and structured debate.',
  },
  {
    title: 'Language',
    description:
      'All sessions are conducted in English, including speeches, moderated caucuses, and written resolutions.',
  },
  {
    title: 'Dress Code',
    description:
      'Delegates are expected to attend in formal Western Business Attire to maintain a professional committee atmosphere.',
  },
];

const benefits = [
  'Public speaking and persuasion',
  'Research and policy analysis',
  'Collaboration under pressure',
  'Confidence in formal debate',
];

export default function Home() {
  const featuredTeam = SECRETARIAT.slice(0, 4);

  return (
    <>
      <section className="pt-36 pb-24 px-6 bg-[#f8f3e8] text-brand-navy">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.05fr_0.95fr] gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white border border-brand-navy/10 shadow-sm mb-8">
              <Logo size="sm" />
              <span className="text-[11px] uppercase tracking-[0.28em] font-bold text-brand-navy/60">
                Model United Nations by POWIIS
              </span>
            </div>

            <p className="text-[12px] uppercase tracking-[0.38em] font-bold text-brand-navy/45 mb-5">
              Discover the world of diplomacy with
            </p>
            <h1 className="text-6xl md:text-8xl font-display font-semibold uppercase leading-[0.88] tracking-tight mb-5">
              Model United
              <br />
              Nations
            </h1>
            <p className="text-2xl md:text-3xl font-display italic text-brand-navy/70 mb-8 normal-case">
              by POWIIS
            </p>
            <p className="max-w-2xl text-[17px] leading-8 text-brand-navy/68 mb-12">
              Join a student-led conference where delegates represent nations,
              debate global issues, and build the confidence to speak with
              clarity, empathy, and purpose.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="https://forms.gle/your-form-id"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-brand-navy text-white font-bold uppercase tracking-[0.2em] text-xs hover:bg-brand-gold hover:text-brand-navy transition-colors"
              >
                I want to join!
              </a>
              <Link
                to="/committees"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-brand-navy/20 bg-white text-brand-navy font-bold uppercase tracking-[0.2em] text-xs hover:border-brand-gold hover:text-brand-gold transition-colors"
              >
                View committees
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-white rounded-[1.75rem] p-6 border border-brand-navy/8 shadow-sm">
                <div className="flex items-center gap-2 text-brand-gold mb-2">
                  <Calendar size={18} />
                  <span className="text-[10px] font-bold uppercase tracking-[0.25em]">
                    Date
                  </span>
                </div>
                <p className="font-display font-black text-2xl uppercase">2027</p>
                <p className="text-sm text-brand-navy/55">Official dates to be announced</p>
              </div>
              <div className="bg-white rounded-[1.75rem] p-6 border border-brand-navy/8 shadow-sm">
                <div className="flex items-center gap-2 text-brand-gold mb-2">
                  <MapPin size={18} />
                  <span className="text-[10px] font-bold uppercase tracking-[0.25em]">
                    Venue
                  </span>
                </div>
                <p className="font-display font-black text-2xl uppercase">POWIIS</p>
                <p className="text-sm text-brand-navy/55">
                  Prince of Wales Island International School
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative"
          >
            <div className="absolute -top-6 -left-6 w-28 h-28 rounded-full bg-brand-gold/25 blur-2xl" />
            <div className="grid grid-cols-[1.2fr_0.8fr] gap-4 items-stretch">
              <div className="bg-white rounded-[2rem] p-5 shadow-xl border border-brand-navy/8 relative">
                <ProtectedTeamImage
                  src="/team/vyncus-lim.jpeg"
                  alt="POWIIS MUN student leader"
                  className="rounded-[1.5rem]"
                  imageClassName="w-full aspect-[4/5] object-cover rounded-[1.5rem]"
                />
                <div className="grid grid-cols-2 gap-3 mt-4">
                  <div className="rounded-2xl bg-[#fff8df] px-4 py-3">
                    <p className="text-[10px] uppercase tracking-[0.25em] font-bold text-brand-navy/45 mb-1">
                      Student-Led
                    </p>
                    <p className="font-display font-black text-xl uppercase">
                      Academic Debate
                    </p>
                  </div>
                  <div className="rounded-2xl bg-[#eef3fb] px-4 py-3">
                    <p className="text-[10px] uppercase tracking-[0.25em] font-bold text-brand-navy/45 mb-1">
                      Contact
                    </p>
                    <p className="font-bold text-sm break-all">powiismun@powiis.edu.my</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="rounded-[1.75rem] overflow-hidden border border-brand-navy/8 shadow-sm bg-white p-3">
                  <ProtectedTeamImage
                    src="/team/lee-jia-en.jpeg"
                    alt="POWIIS MUN delegate portrait"
                    className="rounded-[1.25rem]"
                    imageClassName="w-full aspect-[4/5] object-cover rounded-[1.25rem]"
                  />
                </div>
                <div className="rounded-[1.75rem] bg-brand-navy text-white p-6 shadow-sm">
                  <p className="text-[10px] uppercase tracking-[0.28em] font-bold text-white/55 mb-2">
                    Supported by
                  </p>
                  <div className="space-y-2 font-display font-semibold text-2xl uppercase leading-none">
                    <p>POWIIS</p>
                    <p className="text-brand-gold">Student Leadership</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-8 px-6 bg-white border-y border-brand-navy/8">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-brand-navy/38">
          <p className="text-[11px] uppercase tracking-[0.3em] font-bold">Supported by</p>
          {['POWIIS', 'Student Council', 'Academic Excellence', 'Leadership'].map((item) => (
            <span key={item} className="font-display text-2xl uppercase">
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="py-24 px-6 bg-white text-brand-navy">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-12">
            <p className="text-sm uppercase tracking-[0.32em] font-bold text-brand-navy/45 mb-4">
              Essential Criteria For Participation
            </p>
            <h2 className="text-4xl md:text-5xl font-display font-black uppercase leading-tight mb-4">
              Who should join POWIIS MUN?
            </h2>
            <p className="text-lg text-brand-navy/65 leading-relaxed">
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
                transition={{ delay: index * 0.08 }}
                className="rounded-[2rem] border border-brand-navy/8 bg-[#faf6ee] p-9 shadow-sm"
              >
                <div className="w-10 h-10 rounded-full bg-brand-gold/25 flex items-center justify-center mb-5">
                  <Check size={18} className="text-brand-navy" />
                </div>
                <h3 className="text-2xl font-display font-black uppercase mb-3">
                  {item.title}
                </h3>
                <p className="text-brand-navy/65 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-[#f8f3e8] text-brand-navy">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_0.9fr] gap-12 items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.32em] font-bold text-brand-navy/45 mb-4">
              Why Should You Join?
            </p>
            <h2 className="text-4xl md:text-6xl font-display font-semibold uppercase leading-[0.95] mb-6">
              Experience academic debate at POWIIS MUN
            </h2>
            <p className="text-lg text-brand-navy/65 leading-relaxed mb-6">
              POWIIS MUN is a student-led conference where delegates represent
              countries and discuss real-world international issues through
              formal parliamentary procedure.
            </p>
            <p className="text-lg text-brand-navy/65 leading-relaxed mb-8">
              Delegates leave with stronger research habits, more confidence in
              public speaking, and a better understanding of collaboration,
              negotiation, and global politics.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-center gap-3 rounded-2xl bg-white px-5 py-4 border border-brand-navy/8"
                >
                  <div className="w-8 h-8 rounded-full bg-brand-gold/25 flex items-center justify-center shrink-0">
                    <Check size={16} />
                  </div>
                  <p className="font-semibold text-brand-navy/75">{benefit}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] bg-white p-10 border border-brand-navy/8 shadow-sm">
            <p className="text-sm uppercase tracking-[0.32em] font-bold text-brand-navy/45 mb-5">
              Upcoming POWIIS MUN Conference
            </p>
            <div className="space-y-7">
              <div>
                <p className="text-[11px] uppercase tracking-[0.25em] font-bold text-brand-navy/45 mb-2">
                  Date
                </p>
                <p className="font-display font-black text-2xl uppercase">To Be Confirmed</p>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.25em] font-bold text-brand-navy/45 mb-2">
                  Venue
                </p>
                <p className="font-display font-black text-2xl uppercase">
                  Prince of Wales Island International School
                </p>
                <p className="text-brand-navy/65 mt-2">
                  83 Lintang Bayan Lepas, 11900 Bayan Lepas, Pulau Pinang, Malaysia
                </p>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.25em] font-bold text-brand-navy/45 mb-2">
                  Registration Fee
                </p>
                <p className="text-brand-navy/70">Details will be announced closer to launch.</p>
              </div>
              <div className="pt-4 border-t border-brand-navy/10">
                <p className="text-sm text-brand-navy/65 mb-4">
                  Registration usually includes conference materials, lunch, and
                  light refreshments.
                </p>
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
        </div>
      </section>

      <section className="py-24 px-6 bg-white text-brand-navy">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-[0.32em] font-bold text-brand-navy/45 mb-4">
              Example Committees
            </p>
            <h2 className="text-4xl md:text-6xl font-display font-semibold uppercase leading-[0.95] mb-4">
              Committees at a glance
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-brand-navy/65 leading-relaxed">
              Topics may evolve, but the conference is built around meaningful
              international issues that challenge delegates to think critically
              and negotiate responsibly.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mb-10">
            {COMMITTEES.map((committee) => (
              <div
                key={committee.id}
                className="rounded-[2rem] border border-brand-navy/8 bg-[#faf6ee] p-7 shadow-sm"
              >
                <p className="text-[11px] uppercase tracking-[0.25em] font-bold text-brand-gold mb-3">
                  {committee.name}
                </p>
                <h3 className="text-2xl font-display font-black uppercase leading-tight mb-3">
                  {committee.topic}
                </h3>
                <p className="text-brand-navy/65 leading-relaxed">
                  {committee.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/committees"
              className="inline-flex items-center justify-center rounded-full border border-brand-navy/20 px-7 py-3 text-xs font-bold uppercase tracking-[0.2em] hover:border-brand-gold hover:text-brand-gold transition-colors"
            >
              View Full Committees Page
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-[#f8f3e8] text-brand-navy">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-[0.32em] font-bold text-brand-navy/45 mb-4">
              Secretariat
            </p>
            <h2 className="text-4xl md:text-6xl font-display font-semibold uppercase leading-[0.95] mb-4">
              Meet the student team behind the conference
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
            {featuredTeam.map((member) => (
              <div key={member.id} className="rounded-[2rem] bg-white p-4 border border-brand-navy/8 shadow-sm">
                <ProtectedTeamImage
                  src={member.image}
                  alt={member.name}
                  className="rounded-[1.5rem] mb-4"
                  imageClassName="w-full aspect-[3/4] object-cover rounded-[1.5rem]"
                />
                <h3 className="font-display font-black uppercase text-lg leading-tight">
                  {member.name}
                </h3>
                <p className="text-[11px] uppercase tracking-[0.2em] font-bold text-brand-navy/45 mt-1">
                  {member.position}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/team"
              className="inline-flex items-center justify-center rounded-full bg-brand-navy px-7 py-3 text-xs font-bold uppercase tracking-[0.2em] text-white hover:bg-brand-gold hover:text-brand-navy transition-colors"
            >
              View Secretariat
            </Link>
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 px-6 bg-white text-brand-navy">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-sm uppercase tracking-[0.32em] font-bold text-brand-navy/45 mb-4">
            Contact Us
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-black uppercase leading-tight mb-4">
            Ready to represent your nation?
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-brand-navy/65 leading-relaxed mb-12">
            Register your interest, contact the secretariat, and stay updated on
            the next POWIIS MUN conference announcement.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <a
              href="mailto:powiismun@powiis.edu.my"
              className="rounded-[2rem] border border-brand-navy/8 bg-[#faf6ee] p-8 shadow-sm hover:border-brand-gold transition-colors"
            >
              <Mail className="mx-auto mb-4 text-brand-gold" size={28} />
              <h3 className="font-display font-black uppercase text-2xl mb-2">Email</h3>
              <p className="text-brand-navy/65 break-all">powiismun@powiis.edu.my</p>
            </a>
            <a
                href="https://www.instagram.com/powiismunc27?igsh=MTVmMDJpMjcxYThhdQ%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-[2rem] border border-brand-navy/8 bg-[#faf6ee] p-8 shadow-sm hover:border-brand-gold transition-colors"
            >
              <Instagram className="mx-auto mb-4 text-brand-gold" size={28} />
              <h3 className="font-display font-black uppercase text-2xl mb-2">Instagram</h3>
              <p className="text-brand-navy/65">@powiismun</p>
            </a>
            <a
              href="https://forms.gle/your-form-id"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-[2rem] border border-brand-navy/8 bg-[#faf6ee] p-8 shadow-sm hover:border-brand-gold transition-colors"
            >
              <Calendar className="mx-auto mb-4 text-brand-gold" size={28} />
              <h3 className="font-display font-black uppercase text-2xl mb-2">Register</h3>
              <p className="text-brand-navy/65">Submit your interest form</p>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
