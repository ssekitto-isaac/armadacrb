import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, FileText, BarChart3, Shield, Database, ChevronRight } from "lucide-react";

const products = [
  {
    id: "credit-reports",
    icon: FileText,
    title: "Credit Information & Risk Reports",
    description: "Credit information and risk reports are an important source of actionable insights",
    link: "#credit-reports",
    layer: "01"
  },
  {
    id: "analytics",
    icon: BarChart3,
    title: "Decision and Data Analytics",
    description: "Data speaks. We know its voice help you to understand the language",
    link: "#analytics",
    layer: "02"
  },
  {
    id: "portfolio",
    icon: Shield,
    title: "Portfolio & Risk Management",
    description: "Risk is ubiquitous. You need a partner that works hand-in-glove with you to manage",
    link: "#portfolio",
    layer: "03"
  },
  {
    id: "data-management",
    icon: Database,
    title: "Data Management",
    description: "Data is a valuable source of actionable insight. Organizations that win",
    link: "#data-management",
    layer: "04"
  },
];

const ProductSuite = () => {
  return (
    <section id="products" className="py-24 bg-slate-50 relative overflow-hidden">
      
      {/* Background Tech Label */}
      <div className="absolute bottom-10 left-10 opacity-[0.03] pointer-events-none rotate-90 origin-left">
        <div className="text-[120px] font-black text-slate-900 uppercase">OFFERINGS</div>
      </div>

      <div className="container mx-auto px-6">
        
        {/* HEADER AREA - WORDS PRESERVED */}
        <div className="flex flex-col lg:flex-row items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-[2px] bg-emerald-500" />
              <span className="text-[11px] font-black text-emerald-600 uppercase tracking-[0.3em]">
                What We Offer
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 leading-[0.85] tracking-tighter uppercase italic">
              Product <br/>
              <span className="text-blue-700 not-italic">Suite.</span>
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-xs text-slate-500 font-black uppercase tracking-widest leading-relaxed border-l-2 border-emerald-500 pl-6">
              Armada Credit Bureau has an advanced suite of credit bureau and analytics
              products and services that will help you achieve your business objectives.
            </p>
          </div>
        </div>

        {/* PRODUCTS GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative h-full"
            >
              <div className="h-full bg-white border border-slate-200/80 p-8 rounded-[2.5rem] shadow-[0_15px_40px_rgba(0,0,0,0.02)] hover:shadow-[0_40px_80px_rgba(16,185,129,0.12)] hover:border-emerald-500/40 transition-all duration-500 flex flex-col">
                
                {/* CARD METADATA HEADER */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-2">
                    <span className="text-[9px] font-black text-emerald-600 font-mono tracking-tighter">
                      CAPABILITY_LAYER_{product.layer}
                    </span>
                    <div className="w-8 h-[0.5px] bg-slate-200 group-hover:bg-emerald-200" />
                  </div>
                  <div className="bg-slate-50 px-2.5 py-1 rounded-full border border-slate-100">
                     <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest">System_Node</span>
                  </div>
                </div>

                {/* ICON HUB */}
                <div className="w-16 h-16 rounded-2xl bg-blue-900 group-hover:bg-emerald-500 text-white flex items-center justify-center transition-all duration-500 mb-6 shadow-xl relative overflow-hidden">
                  <product.icon className="w-7 h-7 relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
                </div>

                {/* CONTENT - WORDS PRESERVED */}
                <div className="flex-grow">
                  <h3 className="text-xl font-black uppercase italic text-slate-900 leading-tight mb-3 group-hover:text-emerald-700 transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-[11px] text-slate-500 font-bold uppercase tracking-tight leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* ACTION FOOTER - WORDS PRESERVED */}
                <a 
                  href={product.link}
                  className="mt-8 pt-6 border-t border-slate-50 flex items-center justify-between group/btn cursor-pointer"
                >
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 group-hover/btn:text-emerald-600 transition-colors">
                    Read More
                  </span>
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center group-hover/btn:bg-emerald-500 group-hover/btn:text-white transition-all">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* STATUS BAR FOOTER */}
        <div className="mt-20 flex items-center justify-center gap-8 text-[10px] font-mono text-slate-400">
           <div className="flex items-center gap-2">
             <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
             <span>ENGINE_READY</span>
           </div>
           <div className="w-[1px] h-4 bg-slate-200" />
           <span>VER: 4.8.0_ALPHA</span>
           <div className="w-[1px] h-4 bg-slate-200" />
           <span>REGION: UG_CORE</span>ss
        </div>
      </div>
    </section>
  );
};

export default ProductSuite;