import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight, PlayCircle, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-white selection:text-black font-sans">
      {/* Navigation */}
      <nav className="fixed w-full z-50 top-0 bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/5">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-bold font-display tracking-tight flex items-center gap-2">
            <div className="w-6 h-6 bg-white rounded-sm"></div>
            GRAVITY
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
            <a href="#work" className="hover:text-white transition-colors">Success Stories</a>
            <a href="#assessment" className="hover:text-white transition-colors">Assessment</a>
          </div>
          <Button variant="secondary" className="font-medium bg-white text-black hover:bg-white/90 rounded-full px-6">
            Get in touch
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-52 lg:pb-32 overflow-hidden border-b border-white/5">
        {/* Abstract background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] opacity-20 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-emerald-500 blur-[100px] rounded-full mix-blend-screen"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-[1100px]">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-5xl md:text-7xl lg:text-[85px] font-bold text-white mb-8 leading-[1.05] tracking-tighter"
            >
              A Strong Institutional Brand is More Than Messaging.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white/60 to-white/30 italic font-serif">Does Yours Drive Enrollment?</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-xl md:text-2xl text-white/60 mb-12 max-w-3xl leading-relaxed font-light"
            >
              Let's shape what's next for your institution. Start with the enrollment assessment, explore real college success stories, or enter for a chance to win an Enrollment Acceleration Workshop.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-6 items-center sm:items-start"
            >
              <Button size="lg" className="text-lg px-8 h-16 bg-white text-black hover:bg-white/90 rounded-full w-full sm:w-auto flex items-center gap-3 group">
                Take the Quiz
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 h-16 border-white/20 hover:bg-white/10 rounded-full w-full sm:w-auto">
                Enter to Win a Workshop
              </Button>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="mt-20 grid md:grid-cols-2 gap-8 border-t border-white/10 pt-12"
            >
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-emerald-400 mb-3">The Assessment</p>
                <p className="text-white/80 leading-relaxed pr-8">
                  <strong>Is Your Brand Driving Measurable Enrollment Growth?</strong> A 3-minute executive assessment for Presidents, CMOs, and Enrollment Leaders.
                </p>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-3">The Workshop</p>
                <p className="text-white/80 leading-relaxed">
                  One institution will receive a complimentary 1:1 Enrollment Acceleration Workshop — a private working session with Gravity experts focused on identifying enrollment friction and mapping growth opportunities.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Intro Text */}
      <section className="py-32 bg-[#050505] border-b border-white/5 relative overflow-hidden">
        {/* Grain overlay */}
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-4">
              <h3 className="text-sm font-bold uppercase tracking-widest text-white/40">Our Focus</h3>
            </div>
            <div className="md:col-span-8">
              <h2 className="text-3xl md:text-5xl font-medium text-white mb-8 leading-tight tracking-tight">
                From first awareness to active advocacy, leading institutions are designing experiences that turn students into ambassadors.
              </h2>
              <p className="text-xl text-white/50 leading-relaxed max-w-2xl font-light">
                See how institutions like Montgomery College and UCLA align brand strategy with the student journey to increase engagement, enrollment, and long-term student advocacy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="work" className="py-32 bg-[#0a0a0a]">
        <div className="container mx-auto px-6">
          
          {/* Montgomery College */}
          <div className="mb-40">
            <div className="flex flex-col md:flex-row md:items-center gap-6 mb-16">
              <span className="text-8xl font-light text-white/10 font-serif leading-none">01</span>
              <div className="h-px bg-white/10 flex-grow hidden md:block"></div>
              <h3 className="text-3xl md:text-4xl font-display font-medium text-white">Montgomery College</h3>
            </div>

            <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
              <div className="lg:col-span-6 flex flex-col justify-center">
                <h4 className="text-2xl md:text-3xl text-white mb-10 font-serif italic font-light leading-snug">
                  Showcasing Exceptional Education & Extraordinary Outcomes
                </h4>
                
                <div className="space-y-10 text-white/70 font-light leading-relaxed mb-12 text-lg">
                  <div>
                    <h5 className="text-white font-medium mb-3 uppercase text-xs tracking-wider flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                      The Challenge
                    </h5>
                    <p>Montgomery College set out to reframe its story—shifting perceptions of what a community college can be. Widely recognized as Maryland's top community college and a nationally ranked institution, the College wanted to showcase the transformative outcomes already happening on its campuses and in its community. The goal was to attract more students, deepen pride among alumni and stakeholders, and unify teams around a shared vision.</p>
                    <p className="mt-4">Yet internal silos, inconsistent data practices, and differing perspectives on brand priorities made it challenging to present one clear, compelling story to the world.</p>
                  </div>
                  <div>
                    <h5 className="text-white font-medium mb-3 uppercase text-xs tracking-wider flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                      Our Approach
                    </h5>
                    <p>Gravity began by engaging deeply with the College community through workshops and learner surveys, capturing authentic experiences across students, faculty, staff, and alumni. These insights informed the development of a new brand platform and visual identity anchored by the unifying message, "Exceptional Education. Extraordinary Outcomes."</p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 space-y-12">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-white/5 border border-white/10 relative group">
                   <div className="absolute inset-0 bg-blue-500/20 group-hover:bg-blue-500/0 transition-colors duration-700 z-10 mix-blend-overlay"></div>
                  <img 
                    src="/src/assets/montgomery-college.jpg" 
                    alt="Montgomery College" 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                </div>

                <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
                  <h5 className="text-white font-medium mb-6 uppercase text-xs tracking-wider">Highlights</h5>
                  <ul className="space-y-4">
                    {[
                      "Strong internal adoption and enthusiasm across leadership, faculty, students, and alumni",
                      "Renewed sense of institutional pride and alignment",
                      "Three creative platforms deployed to support distinct priorities: Brand awareness, Student enrollment, Community engagement",
                      "A flexible brand system designed to sustain momentum year-round",
                      "Elevated recognition among peer institutions",
                      "Increased confidence in the institution's promise of transformative outcomes"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-white/80 text-sm leading-relaxed">
                        <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="h-px w-full bg-white/5 mb-40"></div>

          {/* UCLA */}
          <div>
            <div className="flex flex-col md:flex-row md:items-center gap-6 mb-16">
              <span className="text-8xl font-light text-white/10 font-serif leading-none">02</span>
              <div className="h-px bg-white/10 flex-grow hidden md:block"></div>
              <h3 className="text-3xl md:text-4xl font-display font-medium text-white">UCLA</h3>
            </div>

            <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
               <div className="lg:col-span-6 space-y-12 order-2 lg:order-1">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-white/5 border border-white/10 relative group">
                  <div className="absolute inset-0 bg-emerald-500/20 group-hover:bg-emerald-500/0 transition-colors duration-700 z-10 mix-blend-overlay"></div>
                  <img 
                    src="/src/assets/ucla.jpg" 
                    alt="UCLA Research" 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                    <div className="w-20 h-20 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 text-white group-hover:scale-110 transition-transform duration-500">
                      <PlayCircle className="w-8 h-8 ml-1" />
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
                  <h5 className="text-white font-medium mb-6 uppercase text-xs tracking-wider">The Impact</h5>
                  <ul className="space-y-4">
                    {[
                      "Show UCLA's impact beyond campus",
                      "Make complex science and research feel understandable and human",
                      "Reinforce lifelong connection (Bruins supporting Bruins, across generations)",
                      "Stand out from typical institutional storytelling"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-white/80 text-sm leading-relaxed">
                        <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="lg:col-span-6 flex flex-col justify-center order-1 lg:order-2">
                <h4 className="text-2xl md:text-3xl text-white mb-10 font-serif italic font-light leading-snug">
                  Research Powers Miracles at UCLA
                </h4>
                
                <div className="space-y-10 text-white/70 font-light leading-relaxed mb-12 text-lg">
                  <div>
                    <h5 className="text-white font-medium mb-3 uppercase text-xs tracking-wider flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                      The Challenge
                    </h5>
                    <p>UCLA wanted a story that wouldn't feel like another "university video." It needed to feel warm and personal, not institutional, while speaking to a wide audience: donors, alumni, students, faculty, families, and leaders across Los Angeles and beyond.</p>
                    <p className="mt-4">At the same time, UCLA was welcoming a new Chancellor and bringing "UCLA Connects" to life. So, the work needed to reflect connection in a way that invited people into the story.</p>
                  </div>
                  <div>
                    <h5 className="text-white font-medium mb-3 uppercase text-xs tracking-wider flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                      Our Approach
                    </h5>
                    <p>Instead of big, general promises, UCLA had an opportunity to tell a true story only they could tell: research that directly changes a person's life, plus the community that makes those breakthroughs possible. In other words: show the values in action, rather than state them.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Workshop / Quiz CTA Section */}
      <section id="assessment" className="py-32 bg-white text-black relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight font-display">Let's Talk Strategy</h2>
            <p className="text-2xl text-black/60 font-light leading-relaxed">
              Find out if your institution's brand story reflects its full potential and is driving measurable growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-[#f4f4f5] p-12 rounded-[2rem] flex flex-col items-start hover:scale-[1.02] transition-transform duration-500">
              <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center mb-8">
                <span className="font-serif italic text-xl">1</span>
              </div>
              <h3 className="text-3xl font-bold mb-4">The 3-Minute Enrollment Check</h3>
              <p className="text-black/60 mb-10 leading-relaxed text-lg flex-grow">
                Take our quick executive assessment for Presidents, CMOs, and Enrollment Leaders to see if your brand is driving measurable enrollment growth.
              </p>
              <Button size="lg" className="h-14 px-8 bg-black text-white hover:bg-black/90 rounded-full w-full sm:w-auto">
                Start the Quiz
              </Button>
            </div>
            
            <div className="bg-black text-white p-12 rounded-[2rem] flex flex-col items-start hover:scale-[1.02] transition-transform duration-500 shadow-2xl shadow-black/20">
              <div className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center mb-8">
                <span className="font-serif italic text-xl">2</span>
              </div>
              <h3 className="text-3xl font-bold mb-4">Win a Free Acceleration Workshop</h3>
              <p className="text-white/60 mb-10 leading-relaxed text-lg flex-grow">
                Enter for a chance to win a complimentary 1:1 private working session with Gravity experts focused on identifying enrollment friction and mapping growth opportunities.
              </p>
              <Button size="lg" className="h-14 px-8 bg-white text-black hover:bg-white/90 rounded-full w-full sm:w-auto">
                Enter Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-white/10 bg-[#050505]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
            <div className="text-3xl font-bold font-display tracking-tight flex items-center gap-2">
              <div className="w-8 h-8 bg-white rounded-sm"></div>
              GRAVITY
            </div>
            
            <div className="flex gap-8 text-sm text-white/50 font-medium">
              <a href="#" className="hover:text-white transition-colors">Our Work</a>
              <a href="#" className="hover:text-white transition-colors">Assessment</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/10 text-sm text-white/30">
            <div>© {new Date().getFullYear()} Gravity Global. All rights reserved.</div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}