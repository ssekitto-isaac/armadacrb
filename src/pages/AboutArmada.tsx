import React from "react";
import { motion } from "framer-motion";
import { 
  Database, Users, TrendingUp, 
  FileText, Settings, Target, Lightbulb,
  CheckCircle, Mail, ChevronRight
} from "lucide-react";

const AboutPage = () => {
  const features = [
    {
      icon: <Database className="w-8 h-8" />,
      title: "Faster Data Processing",
      gradient: "from-blue-500 to-blue-700"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Automated Service Delivery",
      gradient: "from-emerald-500 to-emerald-700"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Best Insights From Data",
      gradient: "from-blue-600 to-emerald-600"
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

  const services = [
    {
      icon: <FileText className="w-10 h-10" />,
      title: "Credit Information and Risk Reporting",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: <Settings className="w-10 h-10" />,
      title: "Data Science and Decision Analytics",
      gradient: "from-emerald-500 to-emerald-600"
    },
    {
      icon: <Target className="w-10 h-10" />,
      title: "Portfolio Management Solutions",
      gradient: "from-blue-600 to-emerald-600"
    },
    {
      icon: <Lightbulb className="w-10 h-10" />,
      title: "Data Management",
      gradient: "from-emerald-600 to-blue-600"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      

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
                    <span className="text-white font-semibold">About us</span>
                  </div>
      
                  <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
                    About Armada
                  </h1>
                 {} <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
                   
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
      {/* TOP SECTION - Setting The New Standard */}
      <section className="relative py-24 bg-gradient-to-br from-slate-50 via-blue-50/40 to-emerald-50/40 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-blue-500/5 to-emerald-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-emerald-500/5 to-blue-500/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          {/* About us label */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <div className="h-px w-12 bg-slate-400" />
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-slate-600">About us</span>
            <div className="h-px w-12 bg-slate-400" />
          </motion.div>

          {/* Main heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl font-black text-center mb-20 leading-tight"
          >
            <span className="bg-gradient-to-r from-emerald-500 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
              We're Setting The New<br />Standard.
            </span>
          </motion.h1>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="group relative"
              >
                {/* Card */}
                <div className="relative bg-white rounded-2xl p-8 text-center shadow-lg border border-slate-200 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  {/* Icon with gradient background */}
                  <div className="relative inline-block mb-6">
                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity`} />
                    <div className={`relative bg-gradient-to-br ${feature.gradient} text-white p-5 rounded-2xl shadow-xl`}>
                      {feature.icon}
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-black text-slate-800 leading-tight">
                    {feature.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE SECTION - Roger Tchoufa */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left - Quote */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              {/* Large quotation mark decoration */}
              <div className="absolute -top-8 -left-4 text-[120px] font-serif text-blue-100 leading-none select-none">"</div>
              
              <div className="relative bg-gradient-to-br from-slate-50 to-blue-50/50 rounded-3xl p-10 border border-blue-100 shadow-lg">
                <p className="text-lg text-slate-700 leading-relaxed mb-8 relative z-10">
                  "At Armada, we understand the power of data and are here to help you harness that power to your advantage. That is why we combine the power of data science and analytics with service automation to deliver value-creating insights that enable businesses and individuals to make intelligent decisions. In developing our solution, we have applied over four decades of combined experience in credit bureau operations, commercial and retail banking, and technology services to create your most reliable single source of actionable insights. We believe it is a new era for credit information reporting in Uganda."
                </p>
                
                {/* Author */}
                <div className="relative z-10">
                  <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-full mb-4" />
                  <p className="font-black text-xl text-slate-900">Roger Tchoufa</p>
                  <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">President</p>
                </div>
              </div>
            </motion.div>

            {/* Right - Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent z-10" />
                
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" 
                  alt="Data Analytics"
                  className="w-full h-[500px] object-cover"
                />

                {/* Floating badge */}
                <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-xl z-20 border border-blue-100">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-emerald-600" />
                    <div>
                      <p className="text-xs font-bold uppercase text-slate-600">Trusted By</p>
                      <p className="text-lg font-black text-slate-900">1000+ Clients</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* DARK CTA SECTION - We bring you service */}
      <section className="relative py-28 overflow-hidden">
        {/* Background image with overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000"
            alt="Technology background"
            className="w-full h-full object-cover"
          />
          {/* Dark overlay with blue/green gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-blue-900/95 to-slate-900/95" />
          
          {/* Animated gradient orbs */}
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-emerald-600/20 rounded-full blur-3xl animate-pulse" />
        </div>

        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
              We bring you service
            </h2>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              and product automation, advanced analytics, and multi-channel accessibility so that wherever you are and in whatever capacity you serve, you get the best value from partnering with us as your preferred credit reference bureau.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <button className="group relative px-10 py-5 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-teal-600 text-white font-black text-lg rounded-2xl shadow-2xl shadow-emerald-900/50 hover:shadow-emerald-500/50 transition-all duration-500 hover:-translate-y-1 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              <span className="relative z-10 flex items-center gap-3">
                <Mail className="w-5 h-5" />
                Contact us
              </span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* OUR SYSTEM SECTION - Riding on the strength */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-emerald-50/30">
        <div className="container mx-auto px-6 max-w-7xl">
          
          <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
            {/* Left - Section label and heading */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-12 bg-slate-400" />
                <span className="text-sm font-bold uppercase tracking-[0.2em] text-slate-600">Our System</span>
              </div>
              
              <h2 className="text-5xl md:text-6xl font-black leading-tight mb-6">
                <span className="bg-gradient-to-r from-emerald-500 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  Riding on the strength of our robust credit reporting and analytics platform
                </span>
              </h2>
            </motion.div>

            {/* Right - Description */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:pt-20"
            >
              <p className="text-lg text-slate-700 leading-relaxed">
                We offer an advanced suite of products that equip our subscribers with the tools they need to enhance the performance of their credit portfolio and prevent default-related losses. Thereby, helping them to get ahead and stay ahead
              </p>
            </motion.div>
          </div>

          {/* Service Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                {/* Card */}
                <div className="relative bg-white rounded-2xl p-8 text-center h-full shadow-lg border border-slate-200 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden">
                  {/* Hover gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  {/* Icon */}
                  <div className="relative mb-6 inline-block">
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity`} />
                    <div className="relative bg-slate-50 group-hover:bg-white p-6 rounded-2xl border border-slate-200 group-hover:border-transparent transition-all">
                      <div className={`text-slate-700 group-hover:bg-gradient-to-br group-hover:${service.gradient} group-hover:bg-clip-text group-hover:text-transparent transition-all`}>
                        {service.icon}
                      </div>
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-lg font-black text-slate-800 leading-tight relative z-10">
                    {service.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
};

export default AboutPage;