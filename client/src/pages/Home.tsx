import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="bg-[#111111] text-white font-sans selection:bg-[#B7E39B] selection:text-[#111111]">
      
      {/* Navigation */}
      <nav className="fixed w-full z-50 top-0 py-6 px-6 lg:px-12 flex items-center justify-between mix-blend-difference pointer-events-none">
        <div className="pointer-events-auto flex items-center gap-3">
           <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="32" height="32" rx="0" fill="#B7E39B"/>
           </svg>
           <span className="font-semibold text-2xl tracking-tight uppercase">Gravity</span>
        </div>
        <div className="pointer-events-auto hidden md:flex items-center gap-8 text-sm font-medium tracking-wider uppercase">
           <a href="#work" className="hover:text-[#B7E39B] transition-colors">Work</a>
           <a href="#assessment" className="hover:text-[#B7E39B] transition-colors">Assessment</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[100vh] md:min-h-[120vh] w-full flex items-center justify-center bg-[#111] pt-20 overflow-hidden">
        
        {/* Floating Images - 6 images in corners */}
        <div className="absolute inset-0 z-0 pointer-events-none">
           {/* Top Left */}
           <div className="absolute top-[10%] left-[5%] md:left-[8%] w-[200px] md:w-[300px] aspect-[4/3] opacity-60">
              <img src="/src/assets/hero-bg.jpg" className="w-full h-full object-cover" alt=""/>
           </div>
           {/* Top Right */}
           <div className="absolute top-[15%] right-[5%] md:right-[8%] w-[180px] md:w-[250px] aspect-[3/2] opacity-60">
              <img src="/src/assets/ucla.jpg" className="w-full h-full object-cover" alt=""/>
           </div>
           {/* Bottom Left Pair */}
           <div className="absolute bottom-[10%] left-[5%] md:left-[8%] flex gap-4 items-end opacity-60">
              <div className="w-[150px] md:w-[200px] aspect-[4/3]">
                 <img src="/src/assets/montgomery-college.jpg" className="w-full h-full object-cover" alt=""/>
              </div>
              <div className="w-[120px] md:w-[180px] aspect-[3/4]">
                 <img src="/src/assets/hero-bg.jpg" className="w-full h-full object-cover" alt=""/>
              </div>
           </div>
           {/* Bottom Right Pair */}
           <div className="absolute bottom-[5%] right-[5%] md:right-[8%] flex gap-4 items-start opacity-60">
              <div className="w-[180px] md:w-[220px] aspect-[4/3]">
                 <img src="/src/assets/ucla.jpg" className="w-full h-full object-cover" alt=""/>
              </div>
              <div className="w-[140px] md:w-[160px] aspect-[3/4] mt-8 md:mt-12">
                 <img src="/src/assets/montgomery-college.jpg" className="w-full h-full object-cover" alt=""/>
              </div>
           </div>
        </div>

        {/* Center Text */}
        <div className="relative z-10 flex flex-col items-center text-center px-4 w-full max-w-[1000px] mt-8">
          <h1 className="text-[3rem] sm:text-[4rem] md:text-[5rem] lg:text-[6rem] font-medium leading-[1.05] tracking-tight mb-8">
            A Strong Institutional Brand<br/>
            is More Than Messaging.<br/>
            Does Yours Drive Enrollment?
          </h1>
          <p className="text-lg md:text-[1.25rem] text-white/70 max-w-[700px] mb-12 leading-relaxed font-light">
            Let's shape what's next for your institution. Start with the assessment, explore real college success stories, or grab your chance for a free comprehensive brand audit.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 items-center w-full sm:w-auto">
            <a href="#assessment" className="flex items-center gap-6 border border-[#B7E39B] text-[#B7E39B] hover:bg-[#B7E39B] hover:text-[#111] transition-colors duration-300 px-8 py-4 text-lg font-medium w-full sm:w-auto justify-between group rounded-none">
              <span>Take the Quiz</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 66 76" fill="none" className="transform group-hover:translate-x-1 transition-transform">
                <path d="M1 10.6182H65M65 10.6182V74.6182M65 10.6182L1 74.6182" stroke="currentColor" strokeWidth="6"></path>
              </svg>
            </a>
            <a href="#audit" className="flex items-center gap-6 border border-[#B7E39B] text-[#B7E39B] hover:bg-[#B7E39B] hover:text-[#111] transition-colors duration-300 px-8 py-4 text-lg font-medium w-full sm:w-auto justify-between group rounded-none">
              <span>Win a Free Brand Audit</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 66 76" fill="none" className="transform group-hover:translate-x-1 transition-transform">
                <path d="M1 10.6182H65M65 10.6182V74.6182M65 10.6182L1 74.6182" stroke="currentColor" strokeWidth="6"></path>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="bg-[#111] py-32 lg:py-48 px-6 lg:px-12 relative z-20">
        <div className="max-w-[1312px] mx-auto">
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-[#B7E39B] mb-8">Our Focus on Institutions</p>
          <div className="max-w-[1000px]">
             <h2 className="text-[2rem] md:text-[3.5rem] lg:text-[4.5rem] font-medium leading-[1.1] tracking-tight mb-8">
               From first awareness to active advocacy, <span className="text-white/40">leading institutions are designing experiences that turn students into ambassadors.</span>
             </h2>
             <p className="text-xl text-white/50 leading-relaxed font-light">
               See how institutions like Montgomery College and UCLA align brand strategy with the student journey.
             </p>
          </div>
        </div>
      </section>

      {/* CSS Sticky Case Studies */}
      <section id="work" className="relative w-full bg-[#111]">
         
         {/* Slide 1: Montgomery College */}
         <div className="sticky top-0 h-screen w-full flex items-center px-6 lg:px-12 bg-[#111] overflow-hidden pt-20">
            <div className="max-w-[1312px] mx-auto w-full grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-24 items-center">
               
               <div className="flex flex-col gap-8">
                  <div>
                    <p className="text-white/60 mb-4 text-lg">Showcasing Exceptional Education & Extraordinary Outcomes</p>
                    <h2 className="text-[3rem] md:text-[4rem] lg:text-[5rem] leading-[1.05] font-medium text-white mb-6 tracking-tight">
                      Montgomery College
                    </h2>
                    <div className="text-[3rem] font-medium text-[#B7E39B]">01</div>
                  </div>
                  <div className="space-y-6 text-white/70 text-lg font-light leading-relaxed">
                    <p><strong className="text-white font-medium">The Challenge:</strong> Montgomery College set out to reframe its story—shifting perceptions of what a community college can be. The goal was to attract more students, deepen pride among alumni, and unify teams.</p>
                    <p><strong className="text-white font-medium">Our Approach:</strong> Gravity began by engaging deeply with the College community through workshops and learner surveys. These insights informed the development of a new brand platform.</p>
                  </div>
                  <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/10 mt-4">
                     <div>
                       <div className="text-[3rem] font-medium text-[#B7E39B] leading-none mb-2">100%</div>
                       <div className="text-sm opacity-60 uppercase tracking-wider">Leadership adoption</div>
                     </div>
                     <div>
                       <div className="text-[3rem] font-medium text-[#B7E39B] leading-none mb-2">3</div>
                       <div className="text-sm opacity-60 uppercase tracking-wider">Creative platforms</div>
                     </div>
                  </div>
               </div>

               <div className="w-full aspect-[4/3] relative rounded-none overflow-hidden group">
                  <img src="/src/assets/montgomery-college.jpg" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Montgomery College" />
               </div>

            </div>
         </div>

         {/* Slide 2: UCLA */}
         <div className="sticky top-0 h-screen w-full flex items-center px-6 lg:px-12 bg-[#111] border-t border-white/10 overflow-hidden shadow-[0_-20px_50px_rgba(0,0,0,0.5)] pt-20">
            <div className="max-w-[1312px] mx-auto w-full grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-24 items-center">
               
               <div className="flex flex-col gap-8">
                  <div>
                    <p className="text-white/60 mb-4 text-lg">Research Powers Miracles at UCLA</p>
                    <h2 className="text-[3rem] md:text-[4rem] lg:text-[5rem] leading-[1.05] font-medium text-white mb-6 tracking-tight">
                      UCLA
                    </h2>
                    <div className="text-[3rem] font-medium text-[#B7E39B]">02</div>
                  </div>
                  <div className="space-y-6 text-white/70 text-lg font-light leading-relaxed">
                    <p><strong className="text-white font-medium">The Challenge:</strong> UCLA wanted a story that wouldn't feel like another "university video." It needed to feel warm and personal, not institutional, while speaking to a wide audience.</p>
                    <p><strong className="text-white font-medium">Our Approach:</strong> Instead of big promises, UCLA had an opportunity to tell a true story only they could tell: research that directly changes a person's life, plus the community that makes those breakthroughs possible.</p>
                  </div>
                  <div className="pt-8 border-t border-white/10 mt-4">
                     <ul className="space-y-4">
                       <li className="flex gap-4 items-start"><span className="text-[#B7E39B] mt-1">/</span><span className="text-white/80">Show UCLA's impact beyond campus</span></li>
                       <li className="flex gap-4 items-start"><span className="text-[#B7E39B] mt-1">/</span><span className="text-white/80">Make complex science feel human</span></li>
                       <li className="flex gap-4 items-start"><span className="text-[#B7E39B] mt-1">/</span><span className="text-white/80">Reinforce lifelong connection</span></li>
                     </ul>
                  </div>
               </div>

               <div className="w-full aspect-[4/3] relative rounded-none overflow-hidden group">
                  <img src="/src/assets/ucla.jpg" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="UCLA" />
               </div>

            </div>
         </div>

      </section>

      {/* Assessment CTA */}
      <section id="assessment" className="py-32 lg:py-48 px-6 lg:px-12 bg-[#111] relative z-20 border-t border-white/10">
        <div className="max-w-[1312px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-[3rem] md:text-[4.5rem] font-medium leading-[1.05] tracking-tight mb-8">
              The 3-Minute <br/> Enrollment Check
            </h2>
            <p className="text-xl md:text-2xl text-white/60 mb-12 font-light leading-relaxed max-w-lg">
              Find out if your institution's brand story reflects its full potential and is driving measurable growth.
            </p>
            <a href="#" className="inline-flex items-center gap-6 border border-[#B7E39B] text-[#B7E39B] hover:bg-[#B7E39B] hover:text-[#111] transition-colors duration-300 px-8 py-5 font-medium text-lg justify-between group rounded-none w-full sm:w-auto">
              <span>Start Quiz</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 66 76" fill="none" className="transform group-hover:translate-x-1 transition-transform">
                <path d="M1 10.6182H65M65 10.6182V74.6182M65 10.6182L1 74.6182" stroke="currentColor" strokeWidth="6"></path>
              </svg>
            </a>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-[450px] aspect-square border border-[#B7E39B] rounded-full flex flex-col items-center justify-center p-12 text-center relative group overflow-hidden bg-[#111]">
              <div className="absolute inset-0 bg-[#B7E39B]/5 group-hover:bg-[#B7E39B]/10 transition-colors"></div>
              <h3 className="text-2xl font-medium mb-4 relative z-10 text-[#B7E39B]">Is Your Brand Driving Growth?</h3>
              <p className="text-white/60 relative z-10 text-lg">A 3-minute executive assessment for Presidents, CMOs, and Enrollment Leaders.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Audit Banner */}
      <section id="audit" className="py-32 lg:py-48 px-6 lg:px-12 bg-[#B7E39B] text-[#111] text-center">
        <div className="max-w-[1000px] mx-auto">
          <h2 className="text-[3rem] md:text-[5rem] font-medium leading-[1.05] tracking-tight mb-8">
            Win a Free Brand Audit
          </h2>
          <p className="text-xl md:text-2xl opacity-80 mb-12 font-medium leading-relaxed">
            One institution will receive a complimentary 1:1 Enrollment Acceleration Workshop — a private working session with Gravity experts focused on identifying enrollment friction and mapping growth opportunities.
          </p>
          <a href="#" className="inline-flex items-center gap-6 border border-[#111] text-[#111] hover:bg-[#111] hover:text-[#B7E39B] transition-colors duration-300 px-10 py-5 font-medium text-xl justify-between group rounded-none">
            <span>Enter Now</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 66 76" fill="none" className="transform group-hover:translate-x-1 transition-transform">
              <path d="M1 10.6182H65M65 10.6182V74.6182M65 10.6182L1 74.6182" stroke="currentColor" strokeWidth="6"></path>
            </svg>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 lg:px-12 bg-[#111] border-t border-white/10">
        <div className="max-w-[1312px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
             <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="32" height="32" rx="0" fill="#B7E39B"/>
             </svg>
             <span className="font-semibold text-xl tracking-widest uppercase">Gravity</span>
          </div>
          <div className="flex gap-8 text-sm text-white/50 uppercase tracking-widest font-medium">
            <a href="#" className="hover:text-[#B7E39B] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#B7E39B] transition-colors">Terms of Service</a>
          </div>
          <div className="text-sm text-white/30 font-light">
            © {new Date().getFullYear()} Gravity Global. All rights reserved.
          </div>
        </div>
      </footer>

    </div>
  );
}
