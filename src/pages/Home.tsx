import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Mail, Instagram, MapPin, Calendar, ChevronDown, Users, Award, Globe, Shirt, CreditCard } from 'lucide-react';
import { Logo } from '../components/Logo';
import { COMMITTEES, GALLERY, SCHEDULE, SECRETARIAT } from '../constants';

const Countdown = () => {
  const [timeLeft, setTimeLeft] = React.useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  React.useEffect(() => {
    const targetDateStr = '2027-01-15T09:00:00'; // Keep for logic but we will hide if needed
    const targetDate = new Date(targetDateStr).getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // For now, we will hide the countdown as the date is TBC
  return null;
};

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center p-6 overflow-hidden relative">
        {/* Background Decoration */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-brand-navy/60 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1920&auto=format&fit=crop" 
            alt="Background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative z-20 flex flex-col items-center text-center max-w-5xl"
        >
          <div className="mb-8">
            <Logo size="lg" className="shadow-2xl ring-4 ring-brand-gold/20" />
          </div>
          
          <h1 className="text-5xl md:text-9xl font-display font-black tracking-tighter leading-[0.85] mb-8 uppercase text-white">
            MODEL UNITED <br/>
            <span className="text-brand-gold">NATIONS</span>
          </h1>

          <div className="space-y-2 mb-12">
            <p className="text-brand-gold font-bold tracking-[0.4em] uppercase text-xs md:text-sm">
              Discover the world of diplomacy with
            </p>
            <p className="text-xl md:text-3xl font-serif italic text-brand-cream/90">
              by POWIIS
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-[10px] md:text-xs tracking-[0.3em] uppercase font-bold text-brand-cream/70">
            <div className="flex items-center gap-2">
              <Calendar size={14} className="text-brand-gold" />
              <span>TBC</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={14} className="text-brand-gold" />
              <span>POWIIS Balik Pulau</span>
            </div>
          </div>

          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="mt-16 opacity-40 text-white"
          >
            <ChevronDown size={32} />
          </motion.div>
        </motion.div>
      </section>

      {/* Essential Criteria Section */}
      <section className="py-24 px-6 bg-brand-cream text-brand-navy">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-black uppercase tracking-tight mb-4">
              ESSENTIAL CRITERIA <br className="md:hidden"/>
              <span className="text-brand-gold italic font-serif">FOR PARTICIPATION</span>
            </h2>
            <div className="h-1 w-20 bg-brand-gold mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Eligibility",
                desc: "Open to all high school students (Year 9-13) from across the region who are passionate about global affairs.",
                icon: <Users className="text-brand-gold" size={32} />
              },
              {
                title: "Experience",
                desc: "No prior MUN experience is required. We welcome both beginners and experienced delegates to join our committees.",
                icon: <Globe className="text-brand-gold" size={32} />
              },
              {
                title: "Language",
                desc: "Proficiency in English is essential as all debates, resolutions, and formal procedures are conducted in English.",
                icon: <Award className="text-brand-gold" size={32} />
              },
              {
                title: "Dress Code",
                desc: "Western Business Attire (WBA) is mandatory for all delegates during committee sessions to maintain the formal atmosphere.",
                icon: <Shirt className="text-brand-gold" size={32} />
              },
              {
                title: "Delegate Fee",
                desc: "A registration fee of RM 50 for delegates and RM 30 for chairs covers materials, lunch, and refreshments.",
                icon: <CreditCard className="text-brand-gold" size={32} />
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white p-10 rounded-3xl shadow-xl border border-brand-navy/5 text-center"
              >
                <div className="mb-6 flex justify-center">{item.icon}</div>
                <h3 className="text-xl font-display font-black uppercase mb-4">{item.title}</h3>
                <p className="text-brand-navy/60 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="py-24 px-6 bg-white text-brand-navy relative overflow-hidden">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <h2 className="text-4xl md:text-6xl font-display font-black mb-8 leading-tight uppercase">
              WHY SHOULD YOU JOIN THE <br/>
              <span className="text-brand-gold italic font-serif">MODEL UNITED NATIONS BY POWIIS?</span>
            </h2>
            <div className="space-y-6 text-lg text-brand-navy/70 leading-relaxed">
              <p>
                Powiis MUN is a student-led conference where delegates represent countries and debate global issues, fostering a deeper understanding of international relations and diplomacy.
              </p>
              <p>
                Our mission is to provide a platform for students to develop their public speaking, research, and negotiation skills while engaging in meaningful discussions about the world's most pressing challenges.
              </p>
              <p>
                By participating in POWIIS MUN, delegates gain invaluable experience in consensus-building and critical thinking, preparing them to be the leaders of tomorrow.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?q=80&w=1000&auto=format&fit=crop" 
                alt="Diplomacy" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-brand-navy text-brand-cream p-8 rounded-2xl shadow-xl max-w-[240px]">
              <p className="font-display font-black text-4xl mb-2 text-brand-gold italic">acta non verba</p>
              <p className="uppercase tracking-widest text-[10px] font-bold opacity-60">Deeds, Not Words</p>
            </div>
          </div>
        </div>
      </section>

      {/* Letter from SecGen Section */}
      <section className="py-24 px-6 bg-brand-navy text-brand-cream relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-12 gap-16 items-center">
            <div className="md:col-span-5">
              <div className="relative">
                <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border-4 border-brand-gold/20">
                  <img 
                    src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop" 
                    alt="Secretary General" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-brand-gold text-brand-navy p-6 rounded-2xl shadow-xl">
                  <p className="font-display font-black text-xl uppercase leading-none">Vyncus Lim</p>
                  <p className="text-[10px] uppercase tracking-widest font-bold opacity-60">Secretary General</p>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-7">
              <h2 className="text-3xl md:text-5xl font-display font-black uppercase tracking-tight mb-8">
                LETTER FROM THE <br/>
                <span className="text-brand-gold italic font-serif">SECRETARY GENERAL</span>
              </h2>
              <div className="space-y-6 text-lg text-brand-cream/70 leading-relaxed font-serif italic">
                <p>
                  "It is with great honor that I welcome you to the 2027 edition of POWIIS MUN. Our conference has always been a beacon for student diplomacy, and this year we aim to push the boundaries of academic debate even further."
                </p>
                <p>
                  "In a world that is increasingly complex, the skills of negotiation, empathy, and critical thinking are more vital than ever. POWIIS MUN provides the perfect arena for you to hone these skills and forge lasting connections with fellow delegates."
                </p>
                <p>
                  "I look forward to seeing the innovative solutions you will bring to the table. See you in Penang!"
                </p>
              </div>
              <div className="mt-12">
                <p className="font-display font-black text-2xl text-brand-gold">Vyncus Lim</p>
                <p className="uppercase tracking-[0.3em] text-[10px] font-bold opacity-40">Secretary General, POWIIS MUN 2027</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Sponsors Section */}
      <section className="py-16 px-6 bg-white overflow-hidden border-y border-brand-navy/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-brand-navy/40 mb-4">Supported By</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-30 grayscale hover:grayscale-0 transition-all duration-500">
            {['POWIIS', 'UNICEF', 'UNESCO', 'UNDP', 'WHO'].map((sponsor) => (
              <div key={sponsor} className="font-display font-black text-2xl md:text-4xl tracking-tighter">
                {sponsor}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Conference Section (Event Details Panel) */}
      <section id="details" className="py-24 px-6 bg-brand-navy text-brand-cream scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-black uppercase tracking-tight mb-4">
              UPCOMING MODEL UNITED <br className="md:hidden"/>
              <span className="text-brand-gold italic font-serif">NATIONS CONFERENCES BY POWIIS</span>
            </h2>
            <div className="h-1 w-20 bg-brand-gold mx-auto mb-6" />
          </div>

          <div className="bg-white rounded-[3rem] p-8 md:p-16 text-brand-navy shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/5 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            
            <div className="grid lg:grid-cols-2 gap-16 relative z-10">
              <div className="space-y-10">
                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-brand-gold mb-2">
                      <Calendar size={18} />
                      <span className="text-[10px] uppercase tracking-widest font-black">Date</span>
                    </div>
                    <p className="text-xl font-display font-black uppercase">TBC</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-brand-gold mb-2">
                    <MapPin size={18} />
                    <span className="text-[10px] uppercase tracking-widest font-black">Venue & Address</span>
                  </div>
                  <p className="text-xl font-display font-black uppercase mb-1">Prince of Wales Island International School Balik Pulau</p>
                  <p className="text-sm text-brand-navy/60 leading-relaxed max-w-md">
                    83 Lintang Bayan Lepas, 11900 Bayan Lepas, Pulau Pinang, Malaysia
                  </p>
                </div>

                <div className="pt-8 border-t border-brand-navy/10">
                  <div className="flex items-center gap-2 text-brand-gold mb-4">
                    <CreditCard size={18} />
                    <span className="text-[10px] uppercase tracking-widest font-black">Registration Fee</span>
                  </div>
                  <div className="flex gap-12">
                    <div>
                      <p className="text-3xl font-display font-black text-brand-navy">TBC MYR</p>
                      <p className="text-[10px] uppercase tracking-widest font-bold opacity-40">per participant</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-brand-cream/50 rounded-[2rem] p-10 flex flex-col justify-between border border-brand-navy/5">
                <div>
                  <h4 className="text-xl font-display font-black uppercase mb-6 flex items-center gap-3">
                    <Award className="text-brand-gold" size={24} />
                    Registration Includes
                  </h4>
                  <ul className="space-y-4">
                    {[
                      "Official Conference Materials & Stationery",
                      "Delegate Badge & Certificate of Participation",
                      "Gourmet Lunch for all 3 days",
                      "Morning & Afternoon Refreshments",
                      "Access to all Social Events & Workshops"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-brand-navy/70">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-1.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-12">
                  <p className="text-[10px] uppercase tracking-widest font-black text-brand-navy/40 mb-4">Ready to represent?</p>
                  <a 
                    href="https://forms.gle/your-form-id" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block w-full py-5 bg-brand-navy text-brand-cream text-center rounded-2xl font-display font-black uppercase tracking-[0.2em] hover:bg-brand-gold hover:text-brand-navy transition-all shadow-xl hover:scale-[1.02]"
                  >
                    I want to join!
                  </a>
                  <p className="text-center mt-4 text-[10px] text-brand-navy/40 uppercase tracking-widest font-bold">
                    Limited slots available for 2027
                  </p>
                  <div className="mt-6 text-center">
                    <a href="#contact" className="text-[10px] uppercase tracking-widest font-black text-brand-navy/40 hover:text-brand-gold transition-colors">
                      Questions? Contact Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Committees Section */}
      <section className="py-24 px-6 bg-brand-cream text-brand-navy relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/5 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-black uppercase tracking-tight mb-4">
              ACADEMIC <span className="text-brand-gold italic font-serif">DEBATE</span>
            </h2>
            <p className="text-brand-navy/60 uppercase tracking-[0.3em] text-[10px] font-bold mb-8">At POWIIS MUN 2027</p>
            <p className="text-lg text-brand-navy/70 max-w-3xl mx-auto leading-relaxed font-serif italic">
              "Join high school delegates from across the region to discuss real-world issues through formal Model United Nations procedure."
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {COMMITTEES.slice(0, 3).map((committee, i) => (
              <div key={i} className="group relative overflow-hidden rounded-3xl bg-brand-navy p-10 text-brand-cream transition-all hover:bg-brand-gold hover:text-brand-navy shadow-xl">
                <div className="relative z-10">
                  <h3 className="text-4xl font-display font-black mb-2">{committee.name}</h3>
                  <p className="text-[10px] uppercase tracking-widest font-bold opacity-60 mb-6">{committee.topic}</p>
                </div>
                <div className="absolute -bottom-10 -right-10 text-9xl font-black opacity-5 transition-transform group-hover:scale-110">
                  {committee.name}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/committees" className="inline-flex items-center gap-4 px-10 py-5 border-2 border-brand-navy rounded-2xl font-black uppercase tracking-widest hover:bg-brand-navy hover:text-brand-cream transition-all">
              Explore All Committees
              <span className="text-brand-gold">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-black uppercase tracking-tight mb-4">
              CONFERENCE <span className="text-brand-gold italic font-serif">GALLERY</span>
            </h2>
            <div className="h-1 w-20 bg-brand-gold mx-auto" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {GALLERY.map((img, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.02 }}
                className="aspect-square rounded-2xl overflow-hidden shadow-lg"
              >
                <img 
                  src={img} 
                  alt={`Gallery ${i}`} 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-24 px-6 bg-brand-cream text-brand-navy">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-black uppercase tracking-tight mb-4">
              CONFERENCE <span className="text-brand-gold italic font-serif">SCHEDULE</span>
            </h2>
            <div className="h-1 w-20 bg-brand-gold mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {SCHEDULE.map((day, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-xl border border-brand-navy/5"
              >
                <div className="flex justify-between items-end mb-8">
                  <h3 className="text-3xl font-display font-black uppercase leading-none">{day.day}</h3>
                  <p className="text-[10px] uppercase tracking-widest font-bold opacity-40">{day.date}</p>
                </div>
                <div className="space-y-6">
                  {day.events.map((event, j) => (
                    <div key={j} className="flex gap-4 items-start">
                      <div className="text-[10px] uppercase tracking-widest font-bold text-brand-gold shrink-0 pt-1 w-24">
                        {event.time}
                      </div>
                      <div className="text-sm font-bold uppercase tracking-tight">
                        {event.title}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Parallax Strip */}
      <section className="h-[60vh] relative overflow-hidden parallax flex items-center justify-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1920)' }}>
        <div className="strip-overlay" />
        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-7xl font-display font-black text-brand-cream uppercase leading-none mb-4">
              ACTA <span className="text-brand-gold italic font-serif">NON</span> VERBA
            </h2>
            <p className="text-brand-gold text-lg md:text-2xl font-serif italic tracking-widest uppercase">
              Deeds, Not Words
            </p>
          </motion.div>
        </div>
      </section>

      {/* Secretariat Preview Section */}
      <section className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-black uppercase tracking-tight mb-4">
              THE <span className="text-brand-gold italic font-serif">SECRETARIAT</span>
            </h2>
            <div className="h-1 w-20 bg-brand-gold mx-auto" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {SECRETARIAT.slice(0, 4).map((member, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <div className="aspect-[3/4] rounded-2xl overflow-hidden mb-6 relative shadow-xl">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="text-lg font-display font-black uppercase tracking-tight mb-1">{member.name}</h3>
                <p className="text-brand-gold text-[10px] uppercase tracking-widest font-bold">{member.position}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link 
              to="/team"
              className="inline-block px-10 py-5 bg-brand-navy text-brand-cream rounded-2xl font-display font-black uppercase tracking-widest hover:bg-brand-gold hover:text-brand-navy transition-all"
            >
              Meet the Full Team
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 bg-brand-cream text-brand-navy">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-black uppercase tracking-tight mb-4">
              FREQUENTLY ASKED <span className="text-brand-gold italic font-serif">QUESTIONS</span>
            </h2>
            <div className="h-1 w-20 bg-brand-gold mx-auto" />
          </div>

          <div className="space-y-4">
            {[
              { q: "Who can participate in POWIIS MUN?", a: "POWIIS MUN is open to all secondary school students (Year 7 to Year 13 or equivalent) from any school." },
              { q: "Do I need prior MUN experience?", a: "No! We welcome both beginners and experienced delegates. We provide resources and study guides to help you prepare." },
              { q: "What is the dress code?", a: "The dress code is strictly Western Business Attire (WBA) for all committee sessions." },
              { q: "How do I register?", a: "You can register through the 'Register for 2027' button on our website. Registration is currently open!" },
              { q: "What is included in the delegate fee?", a: "The delegate fee covers your participation in all committee sessions, conference materials, lunch, and tea breaks for all three days." }
            ].map((faq, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-brand-navy/5"
              >
                <h3 className="text-lg font-display font-black uppercase mb-4 text-brand-gold">{faq.q}</h3>
                <p className="text-brand-navy/70 leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-black uppercase tracking-tight mb-4">
              OUR <span className="text-brand-gold italic font-serif">SPONSORS</span>
            </h2>
            <div className="h-1 w-20 bg-brand-gold mx-auto" />
          </div>

          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all">
            {['POWIIS', 'UNICEF', 'UNESCO', 'UNDP', 'WHO'].map((sponsor) => (
              <div key={sponsor} className="font-display font-black text-3xl md:text-5xl tracking-tighter">
                {sponsor}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 bg-white text-brand-navy text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div className="absolute top-0 left-0 text-[20vw] font-black uppercase leading-none">POWIIS</div>
          <div className="absolute bottom-0 right-0 text-[20vw] font-black uppercase leading-none">MUN</div>
        </div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-5xl md:text-8xl font-display font-black mb-8 uppercase leading-tight">
            READY TO <br/>
            <span className="text-brand-gold italic font-serif">REPRESENT</span> <br/>
            YOUR NATION?
          </h2>
          <p className="text-xl text-brand-navy/60 mb-12 max-w-2xl mx-auto">
            Register now to secure your place at POWIIS MUN and take part in high-level academic debate with fellow student delegates.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a 
              href="https://forms.gle/your-form-id" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-12 py-6 bg-brand-navy text-brand-cream rounded-full text-lg font-black uppercase tracking-widest hover:bg-brand-gold hover:text-brand-navy transition-all shadow-2xl hover:scale-105"
            >
              Register Now
            </a>
            <a 
              href="mailto:powiismun@powiis.edu.my"
              className="px-12 py-6 bg-brand-cream text-brand-navy border-2 border-brand-navy rounded-full text-lg font-black uppercase tracking-widest hover:bg-brand-navy hover:text-brand-cream transition-all shadow-xl hover:scale-105"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-brand-cream text-brand-navy scroll-mt-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-display font-black uppercase tracking-tight mb-8">
            GET IN <span className="text-brand-gold italic font-serif">TOUCH</span>
          </h2>
          <p className="text-lg text-brand-navy/60 mb-12">
            Have questions about the conference? We're here to help. Reach out to the secretariat team.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <a 
              href="mailto:powiismun@powiis.edu.my" 
              className="flex flex-col items-center p-10 bg-white rounded-3xl shadow-xl border border-brand-navy/5 hover:scale-105 transition-all group"
            >
              <div className="w-16 h-16 rounded-2xl bg-brand-navy/5 flex items-center justify-center mb-6 group-hover:bg-brand-gold transition-colors">
                <Mail className="text-brand-navy group-hover:text-white" size={32} />
              </div>
              <h4 className="font-display font-black uppercase mb-2">Email Us</h4>
              <p className="text-sm text-brand-navy/60">powiismun@powiis.edu.my</p>
            </a>
            <a 
              href="https://www.instagram.com/powiismun" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-10 bg-white rounded-3xl shadow-xl border border-brand-navy/5 hover:scale-105 transition-all group"
            >
              <div className="w-16 h-16 rounded-2xl bg-brand-navy/5 flex items-center justify-center mb-6 group-hover:bg-brand-gold transition-colors">
                <Instagram className="text-brand-navy group-hover:text-white" size={32} />
              </div>
              <h4 className="font-display font-black uppercase mb-2">Follow Us</h4>
              <p className="text-sm text-brand-navy/60">@powiismun</p>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
