import { useEffect, useState, useRef } from "react";

const ScrollRevealText = ({ text, className = "", startOffset = 0.85, endOffset = 0.3 }: { text: string, className?: string, startOffset?: number, endOffset?: number }) => {
  const containerRef = useRef<HTMLSpanElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const startReveal = windowHeight * startOffset;
      const endReveal = windowHeight * endOffset;
      
      const elementTop = rect.top;
      
      let p = (startReveal - elementTop) / (startReveal - endReveal);
      p = Math.max(0, Math.min(1, p));
      setProgress(p);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Check on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, [startOffset, endOffset]);

  const words = text.split(" ");
  
  return (
    <span ref={containerRef} className={className}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = (i + 1) / words.length;
        let opacity = 0.2;
        
        if (progress > start) {
          const wordProgress = (progress - start) / (end - start);
          opacity = 0.2 + (Math.min(1, wordProgress) * 0.8);
        }
        
        return (
          <span key={i} style={{ opacity, transition: 'opacity 0.2s ease-out' }}>
            {word}{" "}
          </span>
        );
      })}
    </span>
  );
};

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const DiagonalArrow = ({ className = "" }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter" className={className}>
      <line x1="7" y1="17" x2="17" y2="7"></line>
      <polyline points="7 7 17 7 17 17"></polyline>
    </svg>
  );

  return (
    <div className="bg-[#111111] text-white font-sans selection:bg-[#B7E39B] selection:text-[#111111] w-full overflow-x-hidden">
      
      {/* Navigation */}
      <nav className="fixed w-full z-50 top-0 py-8 px-6 lg:px-16 flex items-center justify-between pointer-events-none mix-blend-difference text-white">
        <div className="pointer-events-auto flex items-center">
           <img src="/assets/gravity-logo.png" alt="Gravity Global" className="h-8 md:h-10 w-auto" />
        </div>
        <div className="pointer-events-auto hidden md:flex items-center gap-12 text-[12px] font-semibold tracking-[0.2em] uppercase mt-1">
           <a href="#work" className="hover:opacity-50 transition-opacity duration-300">Work</a>
           <a href="https://www.gravityglobal.com/services/public-sector" target="_blank" rel="noopener noreferrer" className="hover:opacity-50 transition-opacity duration-300">GPS</a>
           <a href="#assessment" className="hover:opacity-50 transition-opacity duration-300">Assessment</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen w-full flex items-center justify-center bg-[#111111] pt-32 pb-32">
        
        {/* Floating Images Parallax */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
           {/* Top Left */}
           <div 
             className="absolute top-[8%] left-[2%] w-[22vw] max-w-[320px] aspect-[4/3] opacity-[0.35] grayscale transition-transform duration-75 ease-out"
             style={{ transform: `translateY(${scrollY * 0.1}px)` }}
           >
              <img src="/assets/hero-bg.jpg" className="w-full h-full object-cover" alt=""/>
           </div>
           
           {/* Top Right */}
           <div 
             className="absolute top-[12%] right-[2%] w-[18vw] max-w-[260px] aspect-[3/2] opacity-[0.25] grayscale transition-transform duration-75 ease-out"
             style={{ transform: `translateY(${scrollY * 0.18}px)` }}
           >
              <img src="/assets/ucla.jpg" className="w-full h-full object-cover" alt=""/>
           </div>
           
           {/* Bottom Left Group */}
           <div 
             className="absolute bottom-[2%] left-[-1%] flex gap-[2vw] items-end transition-transform duration-75 ease-out"
             style={{ transform: `translateY(-${scrollY * 0.1}px)` }}
           >
              <div className="w-[18vw] max-w-[240px] aspect-[4/3] opacity-[0.45] grayscale">
                 <img src="/assets/montgomery-college.jpg" className="w-full h-full object-cover" alt=""/>
              </div>
              <div className="w-[20vw] max-w-[280px] aspect-[3/4] opacity-[0.35] grayscale">
                 <img src="/assets/hero-bg.jpg" className="w-full h-full object-cover" alt=""/>
              </div>
           </div>
           
           {/* Bottom Right Group */}
           <div 
             className="absolute bottom-[8%] right-[1%] flex gap-[2vw] items-start transition-transform duration-75 ease-out"
             style={{ transform: `translateY(-${scrollY * 0.15}px)` }}
           >
              <div className="w-[18vw] max-w-[260px] aspect-[4/3] opacity-[0.35] grayscale">
                 <img src="/assets/ucla.jpg" className="w-full h-full object-cover" alt=""/>
              </div>
              <div className="w-[14vw] max-w-[190px] aspect-[3/4] mt-24 opacity-[0.45] grayscale">
                 <img src="/assets/montgomery-college.jpg" className="w-full h-full object-cover" alt=""/>
              </div>
           </div>
        </div>

        {/* Center Text */}
        <div className="relative z-10 flex flex-col items-center text-center px-6 w-full max-w-[1200px] mix-blend-difference text-white">
          <h1 className="text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5rem] font-medium leading-[1] tracking-[-0.03em] mb-10 text-white">
            <ScrollRevealText text="A Strong Institutional Brand Should Drive Enrollment Growth. Does Yours Measure Up?" startOffset={0.9} endOffset={0.5} />
          </h1>
          <p className="text-xl md:text-[1.4rem] text-white max-w-[760px] mb-16 leading-[1.6] font-light">
            <ScrollRevealText text="Start with the three-minute enrollment assessment. Identify how effectively your brand supports enrollment growth and whether your institution may qualify for a complimentary Enrollment Acceleration Workshop." startOffset={0.9} endOffset={0.6} />
          </p>
          <div className="flex flex-col sm:flex-row gap-6 items-center justify-center w-full">
            <button 
              onClick={() => window.open('https://form.typeform.com/to/f73a9593', '_blank')}
              className="group flex items-center justify-between gap-12 border border-[#B7E39B] bg-transparent hover:bg-[#B7E39B] text-[#B7E39B] hover:text-[#111] transition-all duration-300 px-10 py-5 text-lg font-medium w-full sm:w-auto min-w-[300px]"
            >
              <span className="tracking-wide">Take the Assessment</span>
              <DiagonalArrow className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </button>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="group flex items-center justify-between gap-12 border border-white/30 bg-transparent hover:border-white hover:bg-white text-white hover:text-[#111] transition-all duration-300 px-10 py-5 text-lg font-medium w-full sm:w-auto min-w-[300px]"
            >
              <span className="tracking-wide">Request Enrollment Workshop</span>
              <DiagonalArrow className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </section>

      {/* Logo Garden */}
      <section className="py-12 border-t border-b border-white/10 bg-[#111111] relative z-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16 overflow-hidden">
          <p className="text-center text-white/40 text-[11px] font-semibold tracking-[0.25em] uppercase mb-10">Trusted by Leading Institutions</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-80">
            <img src="/assets/northwestern-logo-new.png" alt="Northwestern University" className="h-10 md:h-12 w-auto brightness-0 invert opacity-50 hover:opacity-100 transition-all duration-300 object-contain" />
            <img src="/assets/ucla-logo.png" alt="UCLA" className="h-10 md:h-12 w-auto brightness-0 invert opacity-50 hover:opacity-100 transition-all duration-300 object-contain" />
            <img src="/assets/washington-logo.png" alt="University of Washington" className="h-10 md:h-12 w-auto brightness-0 invert opacity-50 hover:opacity-100 transition-all duration-300 object-contain" />
            <img src="/assets/houston-logo.png" alt="University of Houston" className="h-12 md:h-16 w-auto brightness-0 invert opacity-50 hover:opacity-100 transition-all duration-300 object-contain" />
            <img src="/assets/montgomery-logo.png" alt="Montgomery College" className="h-10 md:h-12 w-auto brightness-0 invert opacity-50 hover:opacity-100 transition-all duration-300 object-contain" />
            <img src="/assets/incommon-logo.png" alt="InCommon" className="h-10 md:h-12 w-auto brightness-0 invert opacity-50 hover:opacity-100 transition-all duration-300 object-contain" />
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="bg-[#111111] py-40 lg:py-56 px-6 lg:px-16 relative z-20">
        <div className="max-w-[1400px] mx-auto">
          <p className="text-[13px] font-semibold tracking-[0.25em] uppercase text-[#B7E39B] mb-12">
            Brand Clarity That Drives Enrollment
          </p>
          <div className="max-w-[1200px]">
             <h2 className="text-[2.5rem] md:text-[3.5rem] lg:text-[4.5rem] font-medium leading-[1.05] tracking-[-0.02em] mb-10 text-white">
               <ScrollRevealText text="From first awareness to active advocacy, leading institutions are designing experiences that turn students into ambassadors." />
             </h2>
             <p className="text-2xl lg:text-[1.75rem] text-white leading-[1.6] font-light max-w-[860px]">
               <ScrollRevealText text="See how institutions like Montgomery College and UCLA align brand strategy with the student journey to increase engagement, enrollment, and long-term student advocacy." />
             </p>
          </div>
        </div>
      </section>

      {/* Sticky Case Studies */}
      <section id="work" className="relative w-full bg-[#111111]">
         
         {/* Slide 1: Montgomery College */}
         <div className="sticky top-0 min-h-screen w-full flex items-center px-6 lg:px-16 bg-[#111111] pt-32 pb-32 border-t border-white/10">
            <div className="max-w-[1500px] mx-auto w-full grid lg:grid-cols-[1fr_1.4fr] gap-16 lg:gap-32 items-center">
               
               <div className="flex flex-col gap-10">
                  <div>
                    <p className="text-[#B7E39B] text-[12px] font-semibold tracking-[0.25em] uppercase mb-8">Montgomery College</p>
                    <h2 className="text-[2.5rem] md:text-[4rem] lg:text-[5rem] leading-[1] font-medium text-white tracking-[-0.02em]">
                      <ScrollRevealText text="Showcasing Exceptional Education & Extraordinary Outcomes" startOffset={0.9} endOffset={0.5} />
                    </h2>
                  </div>
                  <div className="space-y-6 text-white text-xl lg:text-[1.35rem] font-light leading-[1.6]">
                    <p>
                      <strong className="text-white font-medium">The Challenge:</strong> <br/>
                      <ScrollRevealText text="Montgomery College set out to reframe its story—shifting perceptions of what a community college can be. Widely recognized as Maryland’s top community college and a nationally ranked institution, the College wanted to showcase the transformative outcomes already happening on its campuses and in its community. The goal was to attract more students, deepen pride among alumni and stakeholders, and unify teams around a shared vision. Yet internal silos, inconsistent data practices, and differing perspectives on brand priorities made it challenging to present one clear, compelling story to the world." startOffset={0.9} endOffset={0.6} />
                    </p>
                    <p>
                      <strong className="text-white font-medium">Our Approach:</strong> <br/>
                      <ScrollRevealText text="Gravity began by engaging deeply with the college community through workshops and learner surveys, capturing authentic experiences across students, faculty, staff, and alumni. These insights informed the development of a new brand platform and visual identity anchored by the unifying message, “Exceptional Education. Extraordinary Outcomes.” To support long-term adoption, we helped align internal teams through brand training, organizational process improvements, and a clear brand architecture, enabling Montgomery College to communicate a cohesive and aspirational story across its enrollment and engagement efforts." startOffset={0.9} endOffset={0.6} />
                    </p>
                  </div>
                  <div className="pt-12 border-t border-white/10 mt-6">
                     <ul className="space-y-4 text-lg lg:text-xl font-light text-white">
                       <li className="flex gap-4 items-start">
                         <span className="text-[#B7E39B] font-medium mt-1">/</span>
                         <ScrollRevealText text="Strong internal adoption and enthusiasm across leadership, faculty, students, and alumni" startOffset={0.9} endOffset={0.7} />
                       </li>
                       <li className="flex gap-4 items-start">
                         <span className="text-[#B7E39B] font-medium mt-1">/</span>
                         <ScrollRevealText text="Renewed sense of institutional pride and alignment" startOffset={0.9} endOffset={0.7} />
                       </li>
                       <li className="flex gap-4 items-start">
                         <span className="text-[#B7E39B] font-medium mt-1">/</span>
                         <ScrollRevealText text="Three creative platforms deployed to support distinct priorities: Brand awareness, Student enrollment, Community engagement and reputation" startOffset={0.9} endOffset={0.7} />
                       </li>
                       <li className="flex gap-4 items-start">
                         <span className="text-[#B7E39B] font-medium mt-1">/</span>
                         <ScrollRevealText text="A flexible brand system designed to sustain momentum year-round" startOffset={0.9} endOffset={0.7} />
                       </li>
                       <li className="flex gap-4 items-start">
                         <span className="text-[#B7E39B] font-medium mt-1">/</span>
                         <ScrollRevealText text="Elevated recognition among peer institutions" startOffset={0.9} endOffset={0.7} />
                       </li>
                       <li className="flex gap-4 items-start">
                         <span className="text-[#B7E39B] font-medium mt-1">/</span>
                         <ScrollRevealText text="Reinforced commitment to student success and community impact" startOffset={0.9} endOffset={0.7} />
                       </li>
                       <li className="flex gap-4 items-start">
                         <span className="text-[#B7E39B] font-medium mt-1">/</span>
                         <ScrollRevealText text="Increased confidence in the institution’s promise of transformative outcomes" startOffset={0.9} endOffset={0.7} />
                       </li>
                     </ul>
                  </div>
               </div>

               <div className="w-full aspect-[4/3] lg:aspect-[3/4] max-h-[85vh] relative overflow-hidden bg-[#1a1a1a]">
                  <img src="/assets/montgomery-college.jpg" className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-all duration-1000 hover:scale-[1.03] grayscale hover:grayscale-0" alt="Montgomery College" />
               </div>

            </div>
         </div>

         {/* Slide 2: UCLA */}
         <div className="sticky top-0 min-h-screen w-full flex items-center px-6 lg:px-16 bg-[#111111] pt-32 pb-32 border-t border-white/10 shadow-[0_-30px_60px_rgba(0,0,0,0.8)]">
            <div className="max-w-[1500px] mx-auto w-full grid lg:grid-cols-[1fr_1.4fr] gap-16 lg:gap-32 items-center">
               
               <div className="flex flex-col gap-10">
                  <div>
                    <p className="text-[#B7E39B] text-[12px] font-semibold tracking-[0.25em] uppercase mb-8">UCLA</p>
                    <h2 className="text-[2.5rem] md:text-[4rem] lg:text-[5rem] leading-[1] font-medium text-white tracking-[-0.02em]">
                      <ScrollRevealText text="Research Powers Miracles at UCLA" startOffset={0.9} endOffset={0.5} />
                    </h2>
                  </div>
                  <div className="space-y-6 text-white text-xl lg:text-[1.35rem] font-light leading-[1.6]">
                    <p>
                      <strong className="text-white font-medium">The Challenge:</strong> <br/>
                      <ScrollRevealText text="UCLA wanted a story that wouldn't feel like another 'university video.' It needed to feel warm and personal, not institutional, while speaking to a wide audience: donors, alumni, students, faculty, families, and leaders across Los Angeles and beyond. At the same time, UCLA was welcoming a new Chancellor and bringing 'UCLA Connects' to life. So, the work needed to reflect connection in a way that invited people into the story." startOffset={0.9} endOffset={0.6} />
                    </p>
                    <p>
                      <strong className="text-white font-medium">Our Approach:</strong> <br/>
                      <ScrollRevealText text="Instead of big, general promises, UCLA had an opportunity to tell a true story only they could tell: research that directly changes a person's life, plus the community that makes those breakthroughs possible. By focusing on one real medical innovation and the people connected to it, the piece could:" startOffset={0.9} endOffset={0.6} />
                    </p>
                  </div>
                  <div className="pt-12 border-t border-white/10 mt-6">
                     <ul className="space-y-6 text-xl lg:text-[1.35rem] font-light text-white">
                       <li className="flex gap-6 items-start">
                         <span className="text-[#B7E39B] font-medium">/</span>
                         <ScrollRevealText text="Show UCLA's impact beyond campus" startOffset={0.9} endOffset={0.7} />
                       </li>
                       <li className="flex gap-6 items-start">
                         <span className="text-[#B7E39B] font-medium">/</span>
                         <ScrollRevealText text="Make complex science and research feel understandable and human" startOffset={0.9} endOffset={0.7} />
                       </li>
                       <li className="flex gap-6 items-start">
                         <span className="text-[#B7E39B] font-medium">/</span>
                         <ScrollRevealText text="Reinforce lifelong connection (Bruins supporting Bruins, across generations)" startOffset={0.9} endOffset={0.7} />
                       </li>
                       <li className="flex gap-6 items-start">
                         <span className="text-[#B7E39B] font-medium">/</span>
                         <ScrollRevealText text="Stand out from typical institutional storytelling" startOffset={0.9} endOffset={0.7} />
                       </li>
                     </ul>
                     <p className="text-xl lg:text-[1.35rem] font-light text-[#B7E39B] mt-8 italic">
                       In other words: show the values in action, rather than state them.
                     </p>
                  </div>
               </div>

               <div className="w-full aspect-[4/3] lg:aspect-[3/4] max-h-[85vh] relative overflow-hidden bg-[#1a1a1a]">
                  <img src="/assets/ucla.jpg" className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-all duration-1000 hover:scale-[1.03] grayscale hover:grayscale-0" alt="UCLA" />
               </div>

            </div>
         </div>

      </section>

      {/* Assessment CTA */}
      <section id="assessment" className="py-40 lg:py-56 px-6 lg:px-16 bg-[#111111] relative z-20 border-t border-white/10">
        <div className="max-w-[1500px] mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-[2.5rem] md:text-[3.5rem] lg:text-[4.5rem] font-medium leading-[1] tracking-[-0.02em] mb-10 text-white">
              <ScrollRevealText text="Take the Assessment" />
            </h2>
            <p className="text-xl lg:text-[1.5rem] text-white mb-14 font-light leading-[1.6] max-w-[600px]">
              <ScrollRevealText text="A short executive assessment designed to reveal how well your brand strategy supports enrollment performance." />
            </p>
            <button onClick={() => window.open('https://form.typeform.com/to/f73a9593', '_blank')} className="group inline-flex items-center justify-between gap-12 border border-[#B7E39B] bg-[#B7E39B] hover:bg-transparent text-[#111] hover:text-[#B7E39B] transition-all duration-300 px-10 py-5 font-medium text-lg w-full sm:w-auto min-w-[320px]">
              <span className="tracking-wide">Start Assessment</span>
              <DiagonalArrow className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </button>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div onClick={() => window.open('https://form.typeform.com/to/f73a9593', '_blank')} className="w-[85vw] max-w-[550px] aspect-square border border-white/10 rounded-full flex flex-col items-center justify-center p-16 lg:p-24 text-center relative group overflow-hidden bg-transparent transition-all duration-700 hover:border-[#B7E39B]/40 hover:bg-[#B7E39B]/5 cursor-pointer">
              <h3 className="text-2xl md:text-[2.25rem] font-medium mb-6 relative z-10 text-white group-hover:text-[#B7E39B] transition-colors duration-500 tracking-tight leading-[1.1]">
                 Is Your Brand Driving Measurable Enrollment Growth?
              </h3>
              <p className="text-white/40 relative z-10 text-lg lg:text-xl font-light leading-[1.6] group-hover:text-white/70 transition-colors duration-500">
                 A 3-minute executive assessment for Presidents, CMOs, and Enrollment Leaders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Audit Banner */}
      <section id="audit" className="py-40 lg:py-56 px-6 lg:px-16 bg-[#B7E39B] text-[#111111] text-center">
        <div className="max-w-[1400px] mx-auto flex flex-col items-center">
          <h2 className="text-[2.5rem] md:text-[4.5rem] lg:text-[5.5rem] font-medium leading-[0.95] tracking-[-0.03em] mb-12">
            Request Enrollment <br className="hidden md:block"/> Workshop
          </h2>
          <p className="text-xl lg:text-[1.75rem] opacity-80 mb-16 font-medium leading-[1.5] max-w-[1000px] mx-auto">
            One institution will receive a complimentary 1:1 Enrollment Acceleration Workshop — a private working session with Gravity experts focused on identifying enrollment friction and mapping growth opportunities.
          </p>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="group inline-flex items-center justify-between gap-12 border border-[#111111] bg-transparent hover:bg-[#111111] text-[#111111] hover:text-[#B7E39B] transition-all duration-300 px-12 py-6 font-medium text-xl w-full sm:w-auto min-w-[340px]"
          >
            <span className="tracking-wide">Request Workshop</span>
            <DiagonalArrow className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
          </button>
        </div>
      </section>

      {/* HubSpot Form Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm transition-opacity">
          <div className="relative w-full max-w-[800px] h-[85vh] max-h-[800px] bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col animate-in fade-in zoom-in-95 duration-200">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
              aria-label="Close modal"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <div className="w-full h-full pt-16 pb-4 px-4 bg-white">
              <iframe 
                src="https://share.hsforms.com/29zqVk4T1Rc-xwdJjnC8csw3gji" 
                className="w-full h-full border-none rounded-lg"
                title="Request Enrollment Workshop Form"
              />
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="py-24 px-6 lg:px-16 bg-[#111111] border-t border-white/10">
        <div className="max-w-[1500px] mx-auto flex flex-col lg:flex-row justify-between items-center gap-12">
          <div className="flex items-center">
             <img src="/assets/gravity-logo.png" alt="Gravity Global" className="h-10 w-auto" />
          </div>
          <div className="flex gap-16 text-[12px] text-white/50 uppercase tracking-[0.2em] font-semibold mt-1">
            <a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors duration-300">Terms of Service</a>
          </div>
          <div className="text-[12px] text-white/30 font-light tracking-widest uppercase mt-1">
            © {new Date().getFullYear()} Gravity Global. All rights reserved.
          </div>
        </div>
      </footer>

    </div>
  );
}
