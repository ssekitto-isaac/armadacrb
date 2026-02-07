import { useState } from "react";
import {
  FileText,
  Phone,
  Calendar,
  PenTool,
  Upload,
  CheckCircle2,
  AlertCircle,
  ChevronRight,
  Shield,
  Clock,
  User,
  MapPin,
  CreditCard,
} from "lucide-react";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Hero image placeholder (replace with actual asset)
import heroImage from "@/assets/men_armada.jpeg";
import LiveChatWidget from "./LiveChat";

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 6000);
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, idFile: e.target.files[0] });
    }
  };

  const processSteps = [
    {
      icon: FileText,
      title: "Complete Form",
      description: "Fill the Corporate Self Inquiry Request Form below.",
    },
    {
      icon: Phone,
      title: "Book Appointment",
      description: "Toll Free line 0800280180 Office line 0326301025 to book an appointment to collect your report.",
    },
    {
      icon: Calendar,
      title: "Visit Our Office",
      description: "Arrive on time on date of appointment.",
    },
    {
      icon: PenTool,
      title: "Collect Report",
      description: "Collect Self Inquiry Report and sign for collection Note.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Header />

      <main>
        {/* Hero – Spiced up as before */}
        <section className="relative h-[520px] md:h-[640px] overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-[1500ms] scale-105 hover:scale-110"
            style={{ backgroundImage: `url(${heroImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/65 via-primary/75 to-primary/85" />

          <div className="absolute inset-0 pointer-events-none">
            <Shield className="absolute top-[15%] left-[8%] w-16 h-16 md:w-20 md:h-20 text-secondary/40 animate-float-slow" />
            <CheckCircle2 className="absolute bottom-[20%] right-[10%] w-20 h-20 md:w-24 md:h-24 text-accent/30 animate-float" />
          </div>

          <div className="relative z-10 container mx-auto px-6 md:px-28 h-full flex items-center">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 text-primary-foreground/80 text-sm uppercase tracking-wider mb-6">
                <span className="h-px w-10 bg-primary-foreground/50" />
                Self Inquiry
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-6 leading-tight">
                Self  Inquiry
              </h1>
            
              <div className="flex flex-col sm:flex-row gap-5">
                <a
                  href="#form"
                  className="btn-secondary inline-flex items-center gap-3 px-8 py-5 text-lg font-semibold group shadow-md"
                >
                  Start Request Now
                  <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="tel:0800280180"
                  className="inline-flex items-center gap-3 px-6 py-5 bg-primary-foreground/10 backdrop-blur-sm rounded-full text-primary-foreground hover:bg-primary-foreground/20 transition-all"
                >
                  <Phone className="w-5 h-5" />
                  Book via Phone
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Connected Process Steps – Modern arrow/line connections */}
        <section className="py-20 bg-muted -mt-20 relative z-10">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="section-label">Easy 4-Step Process</span>
              <h2 className="section-title-dark mb-6">How to Get Your Report</h2>
              <p className="text-lg text-muted-foreground">
                A simple, secure progression to access your credit information.
              </p>
            </div>

            <div className="relative">
              {/* Connecting line – horizontal gradient on large screens */}
              <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-secondary/30 via-secondary/50 to-secondary/30 transform -translate-y-1/2 z-0 rounded-full" />

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                {processSteps.map((step, index) => (
                  <div
                    key={index}
                    className="relative value-card group text-center transition-all duration-300 hover:-translate-y-2"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* Step number badge */}
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-secondary text-primary-foreground font-bold flex items-center justify-center shadow-md z-10">
                      {index + 1}
                    </div>

                    <div className="pt-8 pb-6 px-6">
                      <div className="w-20 h-20 rounded-2xl bg-secondary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-secondary transition-colors duration-300">
                        <step.icon className="w-10 h-10 text-secondary group-hover:text-secondary-foreground transition-colors" />
                      </div>
                      <h3 className="text-xl font-heading font-bold text-foreground mb-3 group-hover:text-secondary transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    {/* Small connecting arrow on desktop between cards */}
                    {index < processSteps.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 -right-8 w-16 h-0.5 bg-secondary/40 -translate-y-1/2 z-0">
                        <ChevronRight className="absolute right-0 top-1/2 -translate-y-1/2 w-5 h-5 text-secondary/60" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Important Notice */}
        <section className="py-16 bg-background border-y border-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-8 h-8 text-secondary" />
                </div>
                <div>
                  <h3 className="text-2xl font-heading font-bold mb-3">Collection Schedule</h3>
                  <p className="text-lg text-foreground">
                    Appointments: 10:00 AM – 4:00 PM (Monday – Friday)
                  </p>
                </div>
              </div>

              <div className="bg-muted/50 rounded-2xl p-8 border border-muted">
                <div className="flex items-start gap-4">
                  <AlertCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-lg mb-2">Key Information</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Corporate self-inquiry reports will only be issued to the director of the applicant company. Reports will not be issued to proxies. Applicants are advised to come with the same ID for which they have applied for a corporate self-inquiry report. Applicants are advised to bring the originals of all supporting documents for verification. False claims of personal and corporate identity will be reported to the relevant security agency.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section id="form" className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <span className="section-label">Corporate Self Inquiry</span>
                <h2 className="section-title-dark mb-4">Request Your Credit Report</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Provide accurate details for fast processing. Data encrypted & compliant.
                </p>
              </div>

              {isSubmitted && (
                <div className="mb-12 p-8 bg-secondary/10 border border-secondary/30 rounded-2xl flex items-start gap-6">
                  <CheckCircle2 className="w-10 h-10 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-xl text-foreground mb-2">Request Submitted Successfully</h4>
                    <p className="text-muted-foreground">
                      Reference: #SI-{Math.floor(Math.random() * 1000000).toString().padStart(6, '0')}<br />
                      Call 0800 280 180 to book collection appointment.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-12 bg-background rounded-2xl shadow-xl p-10 md:p-12 border border-muted">
                {/* Personal Details */}
                <div>
                  <h3 className="text-xl font-heading font-bold mb-6 flex items-center gap-3">
                    <User className="w-6 h-6 text-secondary" /> Personal Details
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        First Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-4 rounded-xl border border-muted focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all bg-muted/50"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Last Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-4 rounded-xl border border-muted focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all bg-muted/50"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Date of Birth <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="date"
                        name="dateOfBirth"
                        value={formData.dateOfBirth}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-4 rounded-xl border border-muted focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all bg-muted/50"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-4 rounded-xl border border-muted focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all bg-muted/50"
                      />
                    </div>
                  </div>
                </div>

                {/* Address */}
                <div>
                  <h3 className="text-xl font-heading font-bold mb-6 flex items-center gap-3">
                    <MapPin className="w-6 h-6 text-secondary" /> Residential Address
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="md:col-span-2">
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Full Address (No P.O. Box) <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-4 rounded-xl border border-muted focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all bg-muted/50"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">City</label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        className="w-full px-5 py-4 rounded-xl border border-muted focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all bg-muted/50"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Country <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-4 rounded-xl border border-muted focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all bg-muted/50"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-4 rounded-xl border border-muted focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all bg-muted/50"
                      />
                    </div>
                  </div>
                </div>

                {/* Identification */}
                <div>
                  <h3 className="text-xl font-heading font-bold mb-6 flex items-center gap-3">
                    <CreditCard className="w-6 h-6 text-secondary" /> Identification
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        ID Type <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="idType"
                        value={formData.idType}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-4 rounded-xl border border-muted focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all bg-muted/50 appearance-none cursor-pointer"
                      >
                        <option value="">Select ID Type</option>
                        <option value="national-id">National ID</option>
                        <option value="passport">Passport</option>
                        <option value="drivers-license">Driver's License</option>
                        <option value="financial-card">Financial Card</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        ID Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="idNumber"
                        value={formData.idNumber}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-4 rounded-xl border border-muted focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all bg-muted/50"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-semibold text-foreground mb-3">
                        Upload Copy of Valid ID
                      </label>
                      <label
                        htmlFor="id-upload"
                        className="flex flex-col items-center justify-center gap-4 border-2 border-dashed border-muted rounded-xl py-10 px-6 cursor-pointer hover:border-secondary hover:bg-secondary/5 transition-all group"
                      >
                        <Upload className="w-10 h-10 text-muted-foreground group-hover:text-secondary transition-colors" />
                        <div className="text-center">
                          <p className="text-foreground font-semibold group-hover:text-secondary">
                            {formData.idFile ? formData.idFile.name : "Click or drag file here"}
                          </p>
                          <p className="text-sm text-muted-foreground mt-1">
                            PDF, JPG, PNG • Max 5MB
                          </p>
                        </div>
                        <input
                          id="id-upload"
                          type="file"
                          accept=".pdf,.jpg,.jpeg,.png"
                          onChange={handleFileChange}
                          className="hidden"
                        />
                      </label>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-8">
                  <button
                    type="submit"
                    className="w-full bg-secondary text-primary-foreground font-bold py-5 rounded-xl hover:bg-secondary/90 transition-all flex items-center justify-center gap-3 text-lg group shadow-md"
                  >
                    Submit Your Request
                    <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </form>

              {/* Security Note */}
              <div className="mt-12 flex items-center justify-center gap-4 text-muted-foreground text-center text-sm">
                <Shield className="w-6 h-6 text-secondary flex-shrink-0" />
                <p>
                  Encrypted & compliant with Uganda's Data Protection Act – Regulated by Bank of Uganda
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
 <LiveChatWidget />
      <Footer />
    </div>
  );
};

export default SelfInquiry;