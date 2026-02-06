import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  User, Mail, Phone, FileText, 
  Shield, Upload, CheckCircle2, 
  ChevronRight, AlertCircle, Info,
  Clock, FileCheck, Send
} from "lucide-react";


 // Background images for marquee
  const backgroundImages = [
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1543286386-713bdd548da4?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop",
  ];

const DisputeResolution = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [fileName, setFileName] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    reportReference: "",
    disputeNature: "",
    attachments: null as File | null,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Reset after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
      setFormData({ ...formData, attachments: e.target.files[0] });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-emerald-50/40">
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
                         <span className="text-white font-semibold">Dispute Resolution Form</span>
                       </div>
           
                       <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
                         Dispute Resolution Form
                       </h1>
                      {} <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
                         If you have noticed erroneous information 
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
     

      {/* --- INTRO SECTION WITH BLUE/GREEN ACCENTS --- */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left side with decorative element */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-emerald-500/10 rounded-full blur-2xl" />
              <div className="relative">
                <div className="inline-flex items-center gap-3 mb-6">
                  <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-full" />
                  <span className="text-xs font-black uppercase tracking-[0.2em] text-blue-700">Integrity Protocol</span>
                </div>
                <h2 className="text-5xl md:text-6xl font-black leading-[1.05] mb-6">
                  <span className="bg-gradient-to-r from-blue-700 via-blue-600 to-emerald-600 bg-clip-text text-transparent">
                    Request a correction
                  </span>
                  <br />
                  <span className="text-slate-800">for your credit data</span>
                </h2>
                
                {/* Decorative badge */}
                <div className="inline-flex items-center gap-3 px-5 py-3 bg-gradient-to-r from-emerald-50 to-blue-50 border-2 border-emerald-200/50 rounded-2xl">
                  <FileCheck className="w-5 h-5 text-emerald-600" />
                  <span className="text-sm font-bold text-slate-700">100% Confidential Process</span>
                </div>
              </div>
            </motion.div>

            {/* Right side content */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6"
            >
              <p className="text-lg leading-relaxed text-slate-600">
                If you have identified inaccuracies in your credit report, please use this authorized 
                channel to lodge a dispute. Our team will coordinate with the relevant data providers 
                to ensure your profile is accurate and up-to-date.
              </p>
              
              {/* Info cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-blue-100 shadow-sm">
                  <Clock className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-bold uppercase text-blue-700 mb-1">Response Time</p>
                    <p className="text-sm text-slate-600 font-medium">5-7 Business Days</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-emerald-100 shadow-sm">
                  <Shield className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-bold uppercase text-emerald-700 mb-1">Data Security</p>
                    <p className="text-sm text-slate-600 font-medium">End-to-End Encrypted</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- DISPUTE FORM WITH BLUE/GREEN THEME --- */}
      <section className="py-24 relative">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-blue-500/5 to-emerald-500/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden"
            >
              {/* Form Header with Blue/Green Gradient */}
              <div className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-emerald-800 p-12 text-white overflow-hidden">
                <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/20 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl" />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                      <FileText className="w-6 h-6 text-emerald-300" />
                    </div>
                    <span className="text-sm font-bold uppercase tracking-widest text-emerald-200">Official Request</span>
                  </div>
                  <h2 className="text-4xl font-black mb-3">Dispute Resolution Request</h2>
                  <p className="text-blue-100 text-lg">Lodge an official query regarding data inaccuracies</p>
                </div>
              </div>

              {/* Success Message with Animation */}
              <AnimatePresence>
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="m-8 p-6 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-2xl shadow-xl">
                      <div className="flex items-center gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                            <CheckCircle2 className="w-7 h-7" />
                          </div>
                        </div>
                        <div className="flex-grow">
                          <p className="font-black text-xl uppercase mb-1">Dispute Registered Successfully!</p>
                          <p className="text-emerald-50 font-medium">Ticket Reference: #DR-{Math.floor(Math.random() * 100000)}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Form Body */}
              <div className="p-12">
                <form onSubmit={handleSubmit} className="space-y-10">
                  
                  {/* Contact Information Section */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-blue-100">
                      <div className="p-2 bg-blue-50 rounded-lg">
                        <User className="w-5 h-5 text-blue-700" />
                      </div>
                      <h3 className="text-xl font-black uppercase tracking-wide text-slate-800">
                        Contact Information
                      </h3>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-black uppercase tracking-wider text-slate-600 flex items-center gap-2">
                          <User className="w-3.5 h-3.5" />
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input 
                          type="text" 
                          name="fullName" 
                          onChange={handleChange}
                          className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl py-4 px-5 text-slate-800 font-medium focus:outline-none focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100 transition-all" 
                          placeholder="John Doe"
                          required 
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-black uppercase tracking-wider text-slate-600 flex items-center gap-2">
                          <Mail className="w-3.5 h-3.5" />
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input 
                          type="email" 
                          name="email" 
                          onChange={handleChange}
                          className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl py-4 px-5 text-slate-800 font-medium focus:outline-none focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100 transition-all" 
                          placeholder="john@example.com"
                          required 
                        />
                      </div>
                      <div className="space-y-2 md:col-span-2">
                        <label className="text-xs font-black uppercase tracking-wider text-slate-600 flex items-center gap-2">
                          <Phone className="w-3.5 h-3.5" />
                          Phone Number <span className="text-red-500">*</span>
                        </label>
                        <input 
                          type="tel" 
                          name="phone" 
                          onChange={handleChange}
                          className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl py-4 px-5 text-slate-800 font-medium focus:outline-none focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-100 transition-all" 
                          placeholder="+256 700 000 000"
                          required 
                        />
                      </div>
                    </div>
                  </motion.div>

                  {/* Dispute Details Section */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-emerald-100">
                      <div className="p-2 bg-emerald-50 rounded-lg">
                        <FileText className="w-5 h-5 text-emerald-700" />
                      </div>
                      <h3 className="text-xl font-black uppercase tracking-wide text-slate-800">
                        Dispute Details
                      </h3>
                    </div>
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <label className="text-xs font-black uppercase tracking-wider text-slate-600 flex items-center gap-2">
                          <Info className="w-3.5 h-3.5" />
                          Credit Report Reference Number <span className="text-red-500">*</span>
                        </label>
                        <input 
                          type="text" 
                          name="reportReference" 
                          onChange={handleChange}
                          placeholder="Ex: CRB-12345678" 
                          className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl py-4 px-5 text-slate-800 font-medium focus:outline-none focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-100 transition-all font-mono" 
                          required 
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-black uppercase tracking-wider text-slate-600 flex items-center gap-2">
                          <AlertCircle className="w-3.5 h-3.5" />
                          Nature of Dispute <span className="text-red-500">*</span>
                        </label>
                        <textarea 
                          name="disputeNature" 
                          rows={6} 
                          onChange={handleChange}
                          className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl py-4 px-5 text-slate-800 font-medium focus:outline-none focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-100 transition-all resize-none" 
                          required 
                          placeholder="Provide detailed information about the inaccurate data in your credit report. Include specific dates, amounts, or account numbers if applicable..."
                        />
                      </div>
                    </div>
                  </motion.div>

                  {/* Attachments Section */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-blue-100">
                      <div className="p-2 bg-blue-50 rounded-lg">
                        <Upload className="w-5 h-5 text-blue-700" />
                      </div>
                      <h3 className="text-xl font-black uppercase tracking-wide text-slate-800">
                        Supporting Documentation
                      </h3>
                    </div>
                    <div className="relative">
                      <input 
                        type="file" 
                        className="hidden" 
                        id="dispute-upload"
                        onChange={handleFileChange}
                        accept=".pdf,.jpg,.jpeg,.png"
                      />
                      <label 
                        htmlFor="dispute-upload"
                        className="flex flex-col items-center justify-center gap-4 w-full bg-gradient-to-br from-blue-50 to-emerald-50 border-2 border-dashed border-blue-300 rounded-2xl py-12 px-6 cursor-pointer hover:border-blue-500 hover:bg-gradient-to-br hover:from-blue-100 hover:to-emerald-100 transition-all group"
                      >
                        <div className="p-4 bg-white rounded-full shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all">
                          <Upload className="w-8 h-8 text-blue-600 group-hover:text-emerald-600 transition-colors" />
                        </div>
                        <div className="text-center">
                          <p className="text-slate-800 font-black uppercase text-base mb-2">
                            {fileName ? fileName : "Upload Evidence / Supporting Letters"}
                          </p>
                          <p className="text-xs text-slate-500 uppercase tracking-wide font-bold">
                            PDF, JPG, PNG up to 5MB
                          </p>
                        </div>
                      </label>
                    </div>
                  </motion.div>

                  {/* Submit Button */}
                  <motion.div 
                    className="pt-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    <button
                      type="submit"
                      className="relative w-full bg-gradient-to-r from-blue-600 via-blue-700 to-emerald-600 hover:from-blue-700 hover:via-emerald-600 hover:to-emerald-700 text-white font-black py-6 rounded-2xl transition-all duration-500 shadow-xl shadow-blue-900/30 hover:shadow-2xl hover:shadow-emerald-900/40 active:scale-[0.98] flex items-center justify-center gap-3 group overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/0 via-white/20 to-emerald-400/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                      <Send className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
                      <span className="text-lg uppercase tracking-[0.15em] relative z-10">Submit Dispute Request</span>
                      <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                    </button>
                  </motion.div>

                </form>
              </div>
            </motion.div>

            {/* Security Notice */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-8"
            >
              <div className="relative bg-gradient-to-br from-slate-900 to-blue-900 text-white rounded-2xl p-6 overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500/10 rounded-full blur-2xl" />
                <div className="relative z-10 flex items-start gap-4">
                  <div className="flex-shrink-0 p-3 bg-emerald-500/20 rounded-xl border border-emerald-400/30">
                    <Shield className="w-6 h-6 text-emerald-300" />
                  </div>
                  <div>
                    <h4 className="font-black mb-2 uppercase text-sm tracking-wider">Regulatory Compliance</h4>
                    <p className="text-sm text-blue-100 leading-relaxed">
                      Every dispute is handled according to the Bank of Uganda guidelines. 
                      Your submission is secure and encrypted under the Data Protection Act.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* --- CALL FOR HELP SECTION --- */}
      <section className="py-24 bg-white border-t border-slate-200">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col lg:flex-row items-center justify-between gap-12 bg-gradient-to-br from-slate-50 to-blue-50/50 rounded-3xl p-12 border border-blue-100"
          >
            <h2 className="text-4xl md:text-5xl font-black max-w-lg leading-tight">
              Still can't find what you are{' '}
              <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                looking for?
              </span>
            </h2>
            
            <div className="flex items-center gap-6 bg-white p-6 rounded-2xl shadow-lg border border-slate-200">
              <div className="relative flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-full blur-lg opacity-20" />
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=100&h=100" 
                  className="relative w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg" 
                  alt="Customer Representative"
                />
              </div>
              <div>
                <h4 className="text-2xl font-black mb-3 text-slate-800">Call for help:</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-blue-600" />
                    <p className="text-slate-600 text-sm font-bold">
                      Toll Free: <span className="text-blue-700 ml-2 text-base">0800280180</span>
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-emerald-600" />
                    <p className="text-slate-600 text-sm font-bold">
                      Office: <span className="text-emerald-700 ml-2 text-base">0326301025</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default DisputeResolution;