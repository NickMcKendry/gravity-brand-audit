import { useEffect, useState } from "react";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

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
        <div className="pointer-events-auto flex items-center gap-4">
           <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="32" height="32" fill="white"/>
           </svg>
           <span className="font-semibold text-xl tracking-[0.2em] uppercase mt-1">Gravity</span>
        </div>
        <div className="pointer-events-auto hidden md:flex items-center gap-12 text-[12px] font-semibold tracking-[0.2em] uppercase mt-1">
           <a href="#work" className="hover:opacity-50 transition-opacity duration-300">Work</a>
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
              <img src="/src/assets/hero-bg.jpg" className="w-full h-full object-cover" alt=""/>
           </div>
           
           {/* Top Right */}
           <div 
             className="absolute top-[12%] right-[2%] w-[18vw] max-w-[260px] aspect-[3/2] opacity-[0.25] grayscale transition-transform duration-75 ease-out"
             style={{ transform: `translateY(${scrollY * 0.18}px)` }}
           >
              <img src="/src/assets/ucla.jpg" className="w-full h-full object-cover" alt=""/>
           </div>
           
           {/* Bottom Left Group */}
           <div 
             className="absolute bottom-[2%] left-[-1%] flex gap-[2vw] items-end transition-transform duration-75 ease-out"
             style={{ transform: `translateY(-${scrollY * 0.1}px)` }}
           >
              <div className="w-[18vw] max-w-[240px] aspect-[4/3] opacity-[0.45] grayscale">
                 <img src="/src/assets/montgomery-college.jpg" className="w-full h-full object-cover" alt=""/>
              </div>
              <div className="w-[20vw] max-w-[280px] aspect-[3/4] opacity-[0.35] grayscale">
                 <img src="/src/assets/hero-bg.jpg" className="w-full h-full object-cover" alt=""/>
              </div>
           </div>
           
           {/* Bottom Right Group */}
           <div 
             className="absolute bottom-[8%] right-[1%] flex gap-[2vw] items-start transition-transform duration-75 ease-out"
             style={{ transform: `translateY(-${scrollY * 0.15}px)` }}
           >
              <div className="w-[18vw] max-w-[260px] aspect-[4/3] opacity-[0.35] grayscale">
                 <img src="/src/assets/ucla.jpg" className="w-full h-full object-cover" alt=""/>
              </div>
              <div className="w-[14vw] max-w-[190px] aspect-[3/4] mt-24 opacity-[0.45] grayscale">
                 <img src="/src/assets/montgomery-college.jpg" className="w-full h-full object-cover" alt=""/>
              </div>
           </div>
        </div>

        {/* Center Text */}
        <div className="relative z-10 flex flex-col items-center text-center px-6 w-full max-w-[1200px] mix-blend-difference text-white">
          <h1 className="text-[3.5rem] sm:text-[5rem] md:text-[6.5rem] lg:text-[7.5rem] font-medium leading-[1] tracking-[-0.03em] mb-10 text-white">
            A Strong Institutional Brand<br/>
            is More Than Messaging.<br/>
            <span className="text-white/60">Does Yours Drive Enrollment?</span>
          </h1>
          <p className="text-xl md:text-[1.4rem] text-white/60 max-w-[760px] mb-16 leading-[1.6] font-light">
            Let's shape what's next for your institution. Start with the assessment, explore real college success stories, or grab your chance for a free comprehensive brand audit.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 items-center justify-center w-full">
            <a href="#assessment" className="group flex items-center justify-between gap-12 border border-[#B7E39B] bg-transparent hover:bg-[#B7E39B] text-[#B7E39B] hover:text-[#111] transition-all duration-300 px-10 py-5 text-lg font-medium w-full sm:w-auto min-w-[300px]">
              <span className="tracking-wide">Take the Quiz</span>
              <DiagonalArrow className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </a>
            <a href="#audit" className="group flex items-center justify-between gap-12 border border-white/30 bg-transparent hover:border-white hover:bg-white text-white hover:text-[#111] transition-all duration-300 px-10 py-5 text-lg font-medium w-full sm:w-auto min-w-[300px]">
              <span className="tracking-wide">Win a Free Brand Audit</span>
              <DiagonalArrow className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="bg-[#111111] py-40 lg:py-56 px-6 lg:px-16 relative z-20">
        <div className="max-w-[1400px] mx-auto">
          <p className="text-[13px] font-semibold tracking-[0.25em] uppercase text-[#B7E39B] mb-12">Our Focus on Institutions</p>
          <div className="max-w-[1200px]">
             <h2 className="text-[3rem] md:text-[4.5rem] lg:text-[5.5rem] font-medium leading-[1.05] tracking-[-0.02em] mb-10 text-white">
               From first awareness to active advocacy, <span className="text-white/30">leading institutions are designing experiences that turn students into ambassadors.</span>
             </h2>
             <p className="text-2xl lg:text-[1.75rem] text-white/40 leading-[1.6] font-light max-w-[860px]">
               See how institutions like Montgomery College and UCLA align brand strategy with the student journey.
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
                    <h2 className="text-[3.5rem] md:text-[5rem] lg:text-[6rem] leading-[1] font-medium text-white tracking-[-0.02em]">
                      Showcasing Exceptional Education & Outcomes
                    </h2>
                  </div>
                  <div className="space-y-6 text-white/50 text-xl lg:text-[1.35rem] font-light leading-[1.6]">
                    <p><strong className="text-white/80 font-medium">The Challenge:</strong> Montgomery College set out to reframe its story—shifting perceptions of what a community college can be. The goal was to attract more students, deepen pride among alumni, and unify teams.</p>
                    <p><strong className="text-white/80 font-medium">Our Approach:</strong> Gravity began by engaging deeply with the College community through workshops and learner surveys. These insights informed the development of a new brand platform.</p>
                  </div>
                  <div className="grid grid-cols-2 gap-12 pt-12 border-t border-white/10 mt-6">
                     <div>
                       <div className="text-[4.5rem] lg:text-[5.5rem] font-medium text-white leading-none mb-4 tracking-tighter">100%</div>
                       <div className="text-[12px] text-[#B7E39B] uppercase tracking-[0.2em] font-semibold">Leadership adoption</div>
                     </div>
                     <div>
                       <div className="text-[4.5rem] lg:text-[5.5rem] font-medium text-white leading-none mb-4 tracking-tighter">3</div>
                       <div className="text-[12px] text-[#B7E39B] uppercase tracking-[0.2em] font-semibold">Creative platforms</div>
                     </div>
                  </div>
               </div>

               <div className="w-full aspect-[4/3] lg:aspect-[3/4] max-h-[85vh] relative overflow-hidden bg-[#1a1a1a]">
                  <img src="/src/assets/montgomery-college.jpg" className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-all duration-1000 hover:scale-[1.03] grayscale hover:grayscale-0" alt="Montgomery College" />
               </div>

            </div>
         </div>

         {/* Slide 2: UCLA */}
         <div className="sticky top-0 min-h-screen w-full flex items-center px-6 lg:px-16 bg-[#111111] pt-32 pb-32 border-t border-white/10 shadow-[0_-30px_60px_rgba(0,0,0,0.8)]">
            <div className="max-w-[1500px] mx-auto w-full grid lg:grid-cols-[1fr_1.4fr] gap-16 lg:gap-32 items-center">
               
               <div className="flex flex-col gap-10">
                  <div>
                    <p className="text-[#B7E39B] text-[12px] font-semibold tracking-[0.25em] uppercase mb-8">UCLA</p>
                    <h2 className="text-[3.5rem] md:text-[5rem] lg:text-[6rem] leading-[1] font-medium text-white tracking-[-0.02em]">
                      Research Powers Miracles at UCLA
                    </h2>
                  </div>
                  <div className="space-y-6 text-white/50 text-xl lg:text-[1.35rem] font-light leading-[1.6]">
                    <p><strong className="text-white/80 font-medium">The Challenge:</strong> UCLA wanted a story that wouldn't feel like another "university video." It needed to feel warm and personal, not institutional, while speaking to a wide audience.</p>
                    <p><strong className="text-white/80 font-medium">Our Approach:</strong> Instead of big promises, UCLA had an opportunity to tell a true story only they could tell: research that directly changes a person's life, plus the community that makes those breakthroughs possible.</p>
                  </div>
                  <div className="pt-12 border-t border-white/10 mt-6">
                     <ul className="space-y-6 text-xl lg:text-[1.35rem] font-light">
                       <li className="flex gap-6 items-start"><span className="text-[#B7E39B] font-medium">/</span><span className="text-white/60">Show UCLA's impact beyond campus</span></li>
                       <li className="flex gap-6 items-start"><span className="text-[#B7E39B] font-medium">/</span><span className="text-white/60">Make complex science feel human</span></li>
                       <li className="flex gap-6 items-start"><span className="text-[#B7E39B] font-medium">/</span><span className="text-white/60">Reinforce lifelong connection</span></li>
                     </ul>
                  </div>
               </div>

               <div className="w-full aspect-[4/3] lg:aspect-[3/4] max-h-[85vh] relative overflow-hidden bg-[#1a1a1a]">
                  <img src="/src/assets/ucla.jpg" className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-all duration-1000 hover:scale-[1.03] grayscale hover:grayscale-0" alt="UCLA" />
               </div>

            </div>
         </div>

      </section>

      {/* Assessment CTA */}
      <section id="assessment" className="py-40 lg:py-56 px-6 lg:px-16 bg-[#111111] relative z-20 border-t border-white/10">
        <div className="max-w-[1500px] mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-[4rem] md:text-[5.5rem] lg:text-[7rem] font-medium leading-[1] tracking-[-0.02em] mb-10 text-white">
              The 3-Minute <br/> Enrollment Check
            </h2>
            <p className="text-xl lg:text-[1.5rem] text-white/50 mb-14 font-light leading-[1.6] max-w-[600px]">
              Find out if your institution's brand story reflects its full potential and is driving measurable growth.
            </p>
            <a href="#" className="group inline-flex items-center justify-between gap-12 border border-[#B7E39B] bg-[#B7E39B] hover:bg-transparent text-[#111] hover:text-[#B7E39B] transition-all duration-300 px-10 py-5 font-medium text-lg w-full sm:w-auto min-w-[320px]">
              <span className="tracking-wide">Start Quiz</span>
              <DiagonalArrow className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </a>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="w-[85vw] max-w-[550px] aspect-square border border-white/10 rounded-full flex flex-col items-center justify-center p-16 lg:p-24 text-center relative group overflow-hidden bg-transparent transition-all duration-700 hover:border-[#B7E39B]/40 hover:bg-[#B7E39B]/5 cursor-pointer">
              <h3 className="text-3xl md:text-[2.75rem] font-medium mb-6 relative z-10 text-white group-hover:text-[#B7E39B] transition-colors duration-500 tracking-tight leading-[1.1]">Is Your Brand Driving Growth?</h3>
              <p className="text-white/40 relative z-10 text-lg lg:text-xl font-light leading-[1.6] group-hover:text-white/70 transition-colors duration-500">A 3-minute executive assessment for Presidents, CMOs, and Enrollment Leaders.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Audit Banner */}
      <section id="audit" className="py-40 lg:py-56 px-6 lg:px-16 bg-[#B7E39B] text-[#111111] text-center">
        <div className="max-w-[1400px] mx-auto flex flex-col items-center">
          <h2 className="text-[4.5rem] md:text-[7rem] lg:text-[9rem] font-medium leading-[0.95] tracking-[-0.03em] mb-12">
            Win a Free <br className="hidden md:block"/> Brand Audit
          </h2>
          <p className="text-xl lg:text-[1.75rem] opacity-80 mb-16 font-medium leading-[1.5] max-w-[1000px] mx-auto">
            One institution will receive a complimentary 1:1 Enrollment Acceleration Workshop — a private working session with Gravity experts focused on identifying enrollment friction and mapping growth opportunities.
          </p>
          <a href="#" className="group inline-flex items-center justify-between gap-12 border border-[#111111] bg-transparent hover:bg-[#111111] text-[#111111] hover:text-[#B7E39B] transition-all duration-300 px-12 py-6 font-medium text-xl w-full sm:w-auto min-w-[340px]">
            <span className="tracking-wide">Enter Now</span>
            <DiagonalArrow className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 px-6 lg:px-16 bg-[#111111] border-t border-white/10">
        <div className="max-w-[1500px] mx-auto flex flex-col lg:flex-row justify-between items-center gap-12">
          <div className="flex items-center gap-4">
             <svg width="36" height="36" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="32" height="32" fill="#B7E39B"/>
             </svg>
             <span className="font-semibold text-2xl tracking-[0.2em] uppercase text-white mt-1">Gravity</span>
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
