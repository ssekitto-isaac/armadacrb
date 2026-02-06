import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { 
  Linkedin, Mail, Award, Globe, 
  ArrowRight, Phone, MessageSquare, ExternalLink 
} from "lucide-react";

// --- REUSABLE 3D TILT WRAPPER ---
const PerspectiveCard = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={`relative perspective-1000 ${className}`}
    >
      {children}
    </motion.div>
  );
};

const TeamPage = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Adebowale Atobatele",
      position: "Ag. Chief Executive/COO",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
      bio: "20+ years in financial services operations."
    },
    {
      id: 2,
      name: "Roger Tchoufa",
      position: "President & CEO",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400",
      bio: "Visionary driving African data science integration."
    },
    {
      id: 3,
      name: "Sarah Namukasa",
      position: "Head of Data Analytics",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
      bio: "Expert in predictive modeling & credit solutions."
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans text-slate-900 overflow-x-hidden">
      
      {/* --- MINIMAL HERO SECTION --- */}
      <section className="relative pt-20 pb-12 bg-white border-b border-slate-100 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-emerald-50/50 to-transparent pointer-events-none" />
        <div className="container mx-auto px-6 max-w-7xl relative">
          <motion.div 
             initial={{ opacity: 0, x: -20 }} 
             animate={{ opacity: 1, x: 0 }}
             className="flex flex-col md:flex-row md:items-end justify-between gap-6"
          >
            <div>
              <div className="flex items-center gap-2 text-emerald-600 font-bold text-xs uppercase tracking-widest mb-4">
                <div className="w-8 h-[2px] bg-emerald-600" />
                Leadership Team
              </div>
              <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
                Global Experts <span className="text-blue-600">&</span> <br/>Local Insights.
              </h1>
            </div>
            
            <div className="flex gap-4 mb-2">
               <div className="flex flex-col">
                  <span className="text-2xl font-bold text-blue-600">40+</span>
                  <span className="text-[10px] uppercase font-bold text-slate-400">Exp Years</span>
               </div>
               <div className="w-[1px] h-10 bg-slate-200" />
               <div className="flex flex-col">
                  <span className="text-2xl font-bold text-emerald-500">10+</span>
                  <span className="text-[10px] uppercase font-bold text-slate-400">Countries</span>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- REFINED TEAM GRID --- */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, i) => (
              <motion.div 
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group relative bg-white rounded-3xl p-4 shadow-sm hover:shadow-xl transition-all duration-500"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl mb-6">
                  <img 
                    src={member.image} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
                    alt={member.name} 
                  />
                  {/* Floating Action Badge */}
                  <div className="absolute top-4 right-4 flex flex-col gap-2 transform translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                    <button className="p-2 bg-white/80 backdrop-blur hover:bg-emerald-500 hover:text-white rounded-full transition-colors shadow-lg">
                      <Linkedin size={16} />
                    </button>
                    <button className="p-2 bg-white/80 backdrop-blur hover:bg-blue-600 hover:text-white rounded-full transition-colors shadow-lg">
                      <Mail size={16} />
                    </button>
                  </div>
                </div>

                <div className="px-2 pb-2">
                  <h3 className="text-xl font-bold text-slate-800 mb-1 leading-tight group-hover:text-blue-600 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-[11px] font-bold text-emerald-600 uppercase tracking-widest mb-3">
                    {member.position}
                  </p>
                  <p className="text-sm text-slate-500 leading-relaxed opacity-80 group-hover:opacity-100 italic transition-opacity">
                    "{member.bio}"
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 3D INTERACTIVE CALL SECTION --- */}
      <section className="py-20 pb-32">
        <div className="container mx-auto px-6 max-w-5xl">
          <PerspectiveCard className="w-full">
            <div className="relative overflow-hidden bg-gradient-to-br from-[#001D3D] via-[#002855] to-[#001D3D] rounded-[3rem] p-8 md:p-16 text-white shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)]">
              
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-64 h-64 bg-emerald-500/10 blur-[80px] rounded-full" />
              <div className="absolute bottom-0 left-0 translate-y-24 -translate-x-12 w-96 h-96 bg-blue-600/10 blur-[100px] rounded-full" />
              
              <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
                <div className="max-w-md">
                  <motion.span 
                    style={{ transform: "translateZ(50px)" }}
                    className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-6 border border-emerald-500/30"
                  >
                    Partner with us
                  </motion.span>
                  <motion.h2 style={{ transform: "translateZ(80px)" }} className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                    Join our expert <br/> <span className="text-emerald-400 font-outline">network.</span>
                  </motion.h2>
                  <p style={{ transform: "translateZ(60px)" }} className="text-slate-300 text-lg mb-8">
                    Elevate your career by collaborating with Africa's leading credit data science firm.
                  </p>
                  
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{ transform: "translateZ(100px)" }}
                    className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white font-bold py-4 px-8 rounded-2xl shadow-xl shadow-emerald-500/20 transition-all uppercase text-sm tracking-widest"
                  >
                    Get in touch <ArrowRight size={18} />
                  </motion.button>
                </div>

                {/* 3D Contact Card Floating element */}
                <div style={{ transform: "translateZ(150px)" }} className="w-full max-w-sm">
                  <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 shadow-2xl">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="relative">
                        <img 
                          src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=80&h=80" 
                          className="w-16 h-16 rounded-2xl object-cover ring-4 ring-white/10" 
                          alt="HR"
                        />
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-[#001D3D]" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-emerald-400 uppercase tracking-widest">Available Now</p>
                        <h4 className="text-lg font-bold">Human Resources</h4>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors group cursor-pointer">
                        <div className="w-10 h-10 rounded-xl bg-blue-600/30 flex items-center justify-center text-blue-400">
                          <Phone size={18} />
                        </div>
                        <div>
                          <p className="text-[10px] text-slate-400 uppercase font-black">Office Line</p>
                          <p className="font-bold text-sm">0800 280 180</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors group cursor-pointer">
                        <div className="w-10 h-10 rounded-xl bg-emerald-500/30 flex items-center justify-center text-emerald-400">
                          <MessageSquare size={18} />
                        </div>
                        <div>
                          <p className="text-[10px] text-slate-400 uppercase font-black">Email Careers</p>
                          <p className="font-bold text-sm">hr@armadacrb.co.ug</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </PerspectiveCard>
        </div>
      </section>

    </div>
  );
};

export default TeamPage;