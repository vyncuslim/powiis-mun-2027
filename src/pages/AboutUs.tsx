import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Globe, BookOpen, Target, Heart, Award, Lightbulb } from 'lucide-react';

const ValueCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-brand-gold/30 transition-all">
    <div className="w-12 h-12 rounded-xl bg-brand-gold/10 flex items-center justify-center mb-6">
      <Icon className="text-brand-gold" size={24} />
    </div>
    <h3 className="text-xl font-display font-black uppercase mb-4 tracking-tight">{title}</h3>
    <p className="opacity-60 text-sm leading-relaxed">{description}</p>
  </div>
);

export default function AboutUs() {
  return (
    <div className="pt-32 pb-24 px-6 bg-brand-cream min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* About Section */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="inline-block px-4 py-1 rounded-full border border-brand-gold/30 text-brand-gold text-[10px] uppercase tracking-[0.3em] font-bold mb-6">
              Our Story
            </div>
            <h1 className="text-6xl md:text-8xl font-display font-black mb-8 uppercase leading-none text-brand-navy">
              ABOUT <span className="text-brand-gold italic font-serif">US</span>
            </h1>
            <div className="space-y-6 text-brand-navy/70 leading-relaxed text-lg">
              <p>
                Prince of Wales Island International School Model United Nations (POWIIS MUN) is a student-led conference where delegates represent countries and debate global issues. It offers a unique opportunity for students to develop their public speaking, research, and negotiation skills.
              </p>
              <p>
                Founded on the principles of academic excellence and global citizenship, POWIIS MUN has grown into a premier platform for young leaders in the region.
              </p>
            </div>
          </motion.div>
          <div className="relative">
            <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1000" 
                alt="Conference" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-brand-navy text-brand-cream p-8 rounded-2xl shadow-xl">
              <p className="font-display font-black text-5xl text-brand-gold">2027</p>
              <p className="uppercase tracking-widest text-[10px] font-bold opacity-60">The Next Chapter</p>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-32">
          <div className="p-12 rounded-[3rem] bg-brand-navy text-brand-cream relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/10 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700" />
            <Globe className="text-brand-gold mb-8" size={48} />
            <h2 className="text-4xl font-display font-black mb-6 uppercase">Our Mission</h2>
            <p className="text-brand-cream/70 text-lg leading-relaxed">
              To provide a platform for young leaders to engage in high-level diplomacy and debate, fostering critical thinking and global awareness.
            </p>
          </div>
          <div className="p-12 rounded-[3rem] bg-white text-brand-navy border border-brand-navy/5 shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/10 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700" />
            <Target className="text-brand-gold mb-8" size={48} />
            <h2 className="text-4xl font-display font-black mb-6 uppercase">Our Vision</h2>
            <p className="text-brand-navy/70 text-lg leading-relaxed">
              To foster a community of global citizens who are ready to tackle the world's most pressing issues through collaboration and innovation.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-display font-black mb-4 uppercase text-brand-navy">
              OUR CORE <span className="text-brand-gold italic font-serif">VALUES</span>
            </h2>
            <div className="h-1 w-20 bg-brand-gold mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ValueCard 
              icon={Globe} 
              title="Diplomacy" 
              description="Fostering mutual respect and understanding through constructive dialogue and negotiation."
            />
            <ValueCard 
              icon={Target} 
              title="Integrity" 
              description="Upholding the highest standards of academic honesty and professional conduct in every debate."
            />
            <ValueCard 
              icon={Heart} 
              title="Inclusivity" 
              description="Creating a welcoming environment for delegates of all backgrounds and experience levels."
            />
            <ValueCard 
              icon={Award} 
              title="Leadership" 
              description="Empowering students to take initiative, make decisions, and lead with confidence."
            />
            <ValueCard 
              icon={Lightbulb} 
              title="Critical Thinking" 
              description="Encouraging delegates to analyze complex issues and develop innovative solutions."
            />
            <ValueCard 
              icon={BookOpen} 
              title="Academic Excellence" 
              description="Promoting rigorous research and a deep understanding of global affairs."
            />
          </div>
        </div>

        {/* CTA */}
        <div className="text-center p-20 rounded-[4rem] bg-brand-navy text-brand-cream relative overflow-hidden mb-32">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 left-0 text-[10vw] font-black uppercase leading-none">ACTA</div>
            <div className="absolute bottom-0 right-0 text-[10vw] font-black uppercase leading-none">NON VERBA</div>
          </div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-7xl font-display font-black mb-8 uppercase leading-tight">Ready to <span className="text-brand-gold italic font-serif">Lead?</span></h2>
            <p className="text-xl font-serif italic mb-12 text-brand-gold/80">Join us in Penang for an unforgettable experience.</p>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <button className="px-12 py-6 bg-brand-gold text-brand-navy rounded-2xl font-black uppercase tracking-widest hover:scale-105 transition-all shadow-2xl w-full md:w-auto">
                Register for 2027
              </button>
              <Link 
                to="/team"
                className="px-12 py-6 bg-white/10 text-brand-cream border border-white/20 rounded-2xl font-black uppercase tracking-widest hover:bg-white/20 transition-all w-full md:w-auto"
              >
                Meet the Team
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
