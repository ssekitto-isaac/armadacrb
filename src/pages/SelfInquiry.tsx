import { useState } from "react";
import { FileText, Phone, Calendar, PenTool, Upload, CheckCircle2, AlertCircle, ChevronDown, Shield, Clock, User, Mail, MapPin, CreditCard, ChevronRight } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SelfInquiry = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    email: "",
    address: "",
    city: "",
    country: "",
    phone: "",
    idType: "",
    idNumber: "",
    idFile: null as File | null,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  /**
   * 3D TILT CARD FOR PROCESS STEPS
   */
  const ProcessStepCard = ({ step, index }: { step: any; index: number }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);
    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);

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
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.15 }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateY, rotateX, transformStyle: "preserve-3d" }}
        className="relative"
      >
        <div
          style={{ transform: "translateZ(0px)", transformStyle: "preserve-3d" }}
          className="group relative bg-white rounded-[2rem] p-8 border border-slate-200 hover:border-emerald-200 shadow-lg hover:shadow-2xl transition-all duration-500"
        >
          {/* Connecting Line */}
          {index < 3 && (
            <div className="hidden lg:block absolute top-1/2 -right-8 w-16 h-0.5 bg-gradient-to-r from-emerald-300 to-blue-300 -translate-y-1/2 z-0" />
          )}

          {/* Icon */}
          <div
            style={{ transform: "translateZ(50px)" }}
            className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-blue-50 to-emerald-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-md"
          >
            <div className="text-blue-900 group-hover:text-emerald-600 transition-colors">
              {step.icon}
            </div>
          </div>

          {/* Step Number */}
          <div
            style={{ transform: "translateZ(40px)" }}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-emerald-500 text-white text-sm font-bold flex items-center justify-center shadow-lg"
          >
            {index + 1}
          </div>

          {/* Content */}
          <div style={{ transform: "translateZ(30px)" }} className="text-center">
            <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
            <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
          </div>

          {/* Hover Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-emerald-500/0 group-hover:from-blue-500/5 group-hover:to-emerald-500/5 rounded-[2rem] transition-colors duration-700 pointer-events-none" />
        </div>
      </motion.div>
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      email: "",
      address: "",
      city: "",
      country: "",
      phone: "",
      idType: "",
      idNumber: "",
      idFile: null,
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, idFile: e.target.files[0] });
    }
  };

  const processSteps = [
    {
      icon: <FileText className="w-10 h-10" />,
      title: "Complete Form",
      description: "Fill the Corporate Self Inquiry Request Form below",
    },
    {
      icon: <Phone className="w-10 h-10" />,
      title: "Book Appointment",
      description: "Call 0800280180 or 0326301025 to schedule your collection",
    },
    {
      icon: <Calendar className="w-10 h-10" />,
      title: "Visit Our Office",
      description: "Arrive on time with original documents for verification",
    },
    {
      icon: <PenTool className="w-10 h-10" />,
      title: "Collect Report",
      description: "Receive your Self Inquiry Report and sign collection note",
    },
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
    <div className="min-h-screen bg-[#f8fafc] font-sans text-slate-900">
      <TopBar />
      <Header />

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
              <span className="text-white font-semibold">Self Inquiry</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
              Self Inquiry
            </h1>
           {} <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
              Access your comprehensive credit report with our secure self-service portal
            </p>
          </motion.div>
        </div>

        {/* Bottom Wave - Blue wave with green fill */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            {/* Green bottom fill */}
           { <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="#e4eeeb"/>}
            {/* Blue wave on top */}
            <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V0H1380C1320 0 1200 0 1080 0C960 0 840 0 720 0C600 0 480 0 360 0C240 0 120 0 60 0H0V0Z" fill="#240687" opacity="0.8"/>
          </svg>
        </div>
      </section>

      {/* PROCESS STEPS */}
      <section className="py-20 -mt-10 relative z-10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Steps to getting your report
            </h2>
            <p className="text-lg text-slate-600">A simple 4-step process to access your credit information</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 relative">
            {processSteps.map((step, index) => (
              <ProcessStepCard key={index} step={step} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* IMPORTANT INFO BANNER */}
      <section className="py-12 bg-gradient-to-r from-blue-50 to-emerald-50 border-y border-blue-100">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-blue-900 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Collection Hours</h3>
                  <p className="text-lg text-slate-700 font-semibold">
                    Appointments: 10am - 4pm (Mon - Fri)
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/80 shadow-lg"
            >
              <div className="flex items-start gap-3 mb-3">
                <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <h4 className="font-bold text-slate-900">Important Notice</h4>
              </div>
              <p className="text-sm text-slate-700 leading-relaxed">
                Corporate self-inquiry reports will only be issued to the director of the applicant company. 
                Reports will not be issued to proxies. Bring original documents for verification. 
                False identity claims will be reported to security agencies.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MAIN FORM SECTION */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-[3rem] shadow-2xl border border-slate-100 overflow-hidden"
            >
              {/* Form Header */}
              <div className="bg-gradient-to-br from-slate-900 to-blue-900 p-10 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl" />
                <div className="relative z-10">
                  <h2 className="text-3xl font-bold mb-2">Corporate Self Inquiry Request</h2>
                  <p className="text-blue-100">Please provide accurate information for faster processing</p>
                </div>
              </div>

              {/* Success Message */}
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="m-8 p-6 bg-emerald-500 text-white rounded-2xl flex items-center gap-4"
                >
                  <CheckCircle2 className="w-8 h-8 flex-shrink-0" />
                  <div>
                    <p className="font-bold text-lg">Application Submitted Successfully!</p>
                    <p className="text-sm text-emerald-50">Reference: #SI-{Math.floor(Math.random() * 100000)}</p>
                    <p className="text-sm text-emerald-50 mt-1">Please call to book your collection appointment.</p>
                  </div>
                </motion.div>
              )}

              {/* Form Body */}
              <div className="p-10">
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Personal Information */}
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                      <User className="w-5 h-5 text-blue-600" />
                      Personal Information
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                          First Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl py-3 px-4 focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                          Last Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl py-3 px-4 focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                          Date of Birth <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="date"
                          name="dateOfBirth"
                          value={formData.dateOfBirth}
                          onChange={handleChange}
                          className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl py-3 px-4 focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl py-3 px-4 focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Address Information */}
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-emerald-600" />
                      Address Information
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2 md:col-span-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                          Full Residential Address (not P.O. B.O.X)
                        </label>
                        <input
                          type="text"
                          name="address"
                          value={formData.address}
                          onChange={handleChange}
                          className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl py-3 px-4 focus:outline-none focus:border-emerald-500 focus:bg-white transition-all"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-500">City</label>
                        <input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl py-3 px-4 focus:outline-none focus:border-emerald-500 focus:bg-white transition-all"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                          Country <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="country"
                          value={formData.country}
                          onChange={handleChange}
                          className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl py-3 px-4 focus:outline-none focus:border-emerald-500 focus:bg-white transition-all"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                          Phone Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl py-3 px-4 focus:outline-none focus:border-emerald-500 focus:bg-white transition-all"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* ID Information */}
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                      <CreditCard className="w-5 h-5 text-blue-600" />
                      Identification
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                          Type of ID <span className="text-red-500">*</span>
                        </label>
                        <select
                          name="idType"
                          value={formData.idType}
                          onChange={handleChange}
                          className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl py-3 px-4 focus:outline-none focus:border-blue-500 appearance-none cursor-pointer transition-all"
                          required
                        >
                          <option value="">Select Type of ID</option>
                          <option value="national-id">National ID</option>
                          <option value="passport">Passport</option>
                          <option value="drivers-license">Driver's License</option>
                          <option value="financial-card">Financial Card</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                          ID Number (as shown on ID) <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="idNumber"
                          value={formData.idNumber}
                          onChange={handleChange}
                          className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl py-3 px-4 focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
                          required
                        />
                      </div>
                      <div className="space-y-2 md:col-span-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                          Upload Copy of Valid ID
                        </label>
                        <div className="relative">
                          <input
                            type="file"
                            onChange={handleFileChange}
                            accept=".pdf,.jpg,.jpeg,.png"
                            className="hidden"
                            id="id-upload"
                          />
                          <label
                            htmlFor="id-upload"
                            className="flex items-center justify-center gap-3 w-full bg-slate-50 border-2 border-dashed border-slate-300 rounded-xl py-8 px-4 cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition-all group"
                          >
                            <Upload className="w-6 h-6 text-slate-400 group-hover:text-blue-600 transition-colors" />
                            <div className="text-center">
                              <p className="text-slate-700 font-semibold group-hover:text-blue-900">
                                {formData.idFile ? formData.idFile.name : "Click to upload or drag and drop"}
                              </p>
                              <p className="text-xs text-slate-500 mt-1">PDF, JPG, PNG up to 1 file</p>
                            </div>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-6">
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-900 to-blue-800 hover:from-emerald-600 hover:to-emerald-500 text-white font-bold py-5 rounded-2xl transition-all duration-500 shadow-xl shadow-blue-900/20 hover:shadow-emerald-500/20 active:scale-[0.98] flex items-center justify-center gap-3 group"
                    >
                      <span className="text-lg">Submit Application</span>
                      <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>

            {/* Security Notice */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-8 flex items-start gap-4 bg-slate-900 text-white rounded-2xl p-6"
            >
              <Shield className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold mb-2">Your Data is Secure</h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  All information submitted is encrypted and handled in compliance with Uganda's Data Protection 
                  and Privacy Act. We are regulated by the Bank of Uganda and maintain ISO 27001 certification.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Animation Styles */}
      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        /* Marquee Animation */
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .marquee-container {
          display: flex;
        }
      `}</style>
    </div>
  );
};

export default SelfInquiry;