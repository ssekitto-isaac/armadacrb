import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronRight, Phone, MessageSquare, Zap } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What Are Credit Reference Bureaus?",
      answer: "Credit Reference Bureaus (CRBs) are primarily data aggregators. They collate, research and analyze the data sourced from multiple data providers and use the data to produce credit information reports about the credit history, borrowing pattern and repayment behaviors of business and individuals.\n\nCRBs are primarily known to produce and sell credit information reports which lenders or creditors across all sectors use in assessing the creditworthiness of their customers."
    },
    {
      question: "What is a Credit Report?",
      answer: "Credit reports contain data on the past and current credit-related activities of an individual or a business. In addition, a credit report contains data on the demographic details of an individual or the registration and ownership details of a business."
    },
    {
      question: "What is a Credit Score?",
      answer: "A credit score is a numeric indicator of a borrower’s creditworthiness or propensity to repay. You can think of it as a number that indicates the level of risk associated with granting credit to a customer. The data used in calculating a credit score is sourced from the credit report."
    },
    {
      question: "From where do CRBs Get Data?",
      answer: "Depending on the legal and regulatory framework that guides the operations of a CRB, its sources data may include banks, telcos, microfinance companies, credit unions, saving and cooperative societies (SACOOS), retailers, utility companies, public registries and any other source of relevant data."
    },
    {
      question: "Can I Get a Copy of My Credit Information Report?",
      answer: "Yes, you can! Every individual is entitled to one free copy of their credit information report every twelve (12) calendar months. However, subsequent copies will be at a cost. You can get a copy of your personal credit report by completing and submitting the Self Inquiry Form."
    },
    {
      question: "Is My Data Safe at Armada CRB?",
      answer: "Yes. Your data is safe with us. As Uganda’s leading CRB, we consider it part of our fiduciary responsibility to preserve and protect the integrity all types of data in our repository. Access is granted on need-to-know basis."
    }
  ];

  // Background images for marquee
  const backgroundImages = [
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1543286386-713bdd548da4?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop",
  ];

  return (
    <div className="bg-white text-slate-900">
      
      {/* SECTION HEADER - Classic & Professional */}
       {/* HERO SECTION */}
            <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
              {/* Animated Background Marquee */}
              <div className="absolute inset-0 opacity-5 overflow-hidden">
                <div className="marquee-container flex gap-8">
                  <div className="marquee-content flex gap-8 animate-marquee">
                    {backgroundImages.map((img, i) => (
                      <div key={i} className="flex-shrink-0 w-80 h-60 rounded-2xl overflow-hidden">
                        <img src={img} alt="" className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                  <div className="marquee-content flex gap-8 animate-marquee" aria-hidden="true">
                    {backgroundImages.map((img, i) => (
                      <div key={i} className="flex-shrink-0 w-80 h-60 rounded-2xl overflow-hidden">
                        <img src={img} alt="" className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
      
              {/* Animated Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 left-20 w-72 h-72 bg-emerald-500 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500 rounded-full blur-[120px] animate-pulse animation-delay-2000" />
              </div>
      
              <div className="container mx-auto px-6 relative z-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-center"
                >
                  {/* Breadcrumb */}
                  <div className="flex items-center justify-center gap-2 text-sm text-emerald-300 mb-8">
                    <span className="hover:text-white transition-colors cursor-pointer">Home</span>
                    <ChevronRight className="w-4 h-4" />
                    <span className="text-white font-semibold">FAQ</span>
                  </div>
      
                  <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
                    FAQ
                  </h1>
                 {} <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
                    This section are our most frequently asked questions. 
                  </p>
                </motion.div>
              </div>
      
              {/* Bottom Wave - Blue wave with green fill */}
              <div className="absolute bottom-0 left-0 right-0">
                <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
                  {/* Green bottom fill */}
                 { <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="#ffffff"/>}
                  
                </svg>
              </div>
            </section>

      {/* FAQ GRID - Two columns, independent heights */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          {/* 
            'items-start' is critical here: it prevents the neighboring box 
            from stretching when its partner on the same line opens.
          */}
          <div className="grid md:grid-cols-2 gap-6 items-start">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className={`relative rounded-[2.5rem] border transition-all duration-500 overflow-hidden ${
                  openIndex === index 
                    ? 'bg-slate-900 border-slate-800 shadow-2xl' 
                    : 'bg-white border-slate-200 hover:border-emerald-500/30'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full p-8 text-left flex items-start justify-between group"
                >
                  <div className="flex flex-col gap-3">
                    <span className={`text-[9px] font-mono font-bold tracking-tighter ${openIndex === index ? 'text-emerald-400' : 'text-slate-400'}`}>
                      QUERY_NODE_0{index + 1}
                    </span>
                    <h3 className={`text-lg font-black uppercase leading-tight transition-colors ${openIndex === index ? 'text-white' : 'text-slate-900'}`}>
                      {faq.question}
                    </h3>
                  </div>
                  <div className={`mt-5 min-w-[32px] h-8 rounded-full flex items-center justify-center transition-all duration-500 ${
                    openIndex === index ? 'bg-emerald-500 text-white rotate-180' : 'bg-slate-100 text-slate-400'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-8 pb-8"
                    >
                      <div className="h-[1px] w-12 bg-emerald-500 mb-6" />
                      <p className="text-[11px] font-bold uppercase tracking-tight leading-relaxed text-slate-400">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT BANNER */}
      <section className="pb-24">
        <div className="container mx-auto px-6">
          <div className="bg-slate-900 rounded-[3rem] p-8 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 border border-slate-800">
            <div className="max-w-xl">
               <div className="flex items-center gap-3 mb-4">
                 <Zap className="w-4 h-4 text-emerald-400 fill-emerald-400" />
                 <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">Support Protocol</span>
               </div>
               <h3 className="text-3xl font-black text-white uppercase mb-4">
                Can't find your answer?
               </h3>
               <div className="flex flex-wrap gap-6">
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-slate-500" />
                    <span className="text-sm font-bold text-white uppercase font-mono">0800 280 180</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MessageSquare className="w-4 h-4 text-slate-500" />
                    <span className="text-sm font-bold text-white uppercase font-mono">info@armadacrb.co.ug</span>
                  </div>
               </div>
            </div>
            <button className="bg-white text-slate-900 px-10 py-4 rounded-full font-black uppercase text-xs tracking-widest hover:bg-emerald-500 hover:text-white transition-all shadow-xl">
              Contact Us
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default FAQ;