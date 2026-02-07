import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  FaChartLine,
  FaCheckCircle,
  FaWallet,
  FaListUl,
  FaArrowUp,
  FaEye,
} from "react-icons/fa";
import coupleImage from "@/assets/lady and the guy.png";

const ArmadaScorePage = () => {
  return (
    <div className="min-h-screen bg-[#F7FAFC]">
      <TopBar />
      <Header />
      {/* Hero Section */}
      <section
        className="relative w-full h-80 flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `url(${coupleImage})`,
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-[#1A2636]/70" />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            ArmadaScore® Dashboard
          </h1>
          <p className="text-lg md:text-xl font-medium">
            Home &nbsp; - &nbsp; ArmadaScore
          </p>
        </div>
      </section>
      {/* Main Content */}
      <main className="flex flex-col items-center px-4 py-8 gap-12">
        {/* Intro Section */}
        <section className="w-full max-w-5xl text-center py-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#91CD95]">
            Your Armada Score isn’t just a set of numbers. It’s a powerful
            reflection of your financial health.
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            It shows lenders at a glance how responsibly you manage credit. Your
            credit score is your “financial resume” that follows you through
            every phase of your adult life.
          </p>
        </section>
        {/* Cards Section */}
        <section className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Why Your Armada Score Matters */}
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
            <FaCheckCircle className="text-[#91CD95] text-4xl mb-4" />
            <h3 className="text-xl font-bold mb-2 text-[#0066AB]">
              Why Your Armada Score Matters
            </h3>
            <ul className="text-left text-gray-700 text-base list-disc list-inside">
              <li>
                Lower Interest Rates – Save money over the life of your loans.
              </li>
              <li>
                Higher Credit Limits – Access more purchasing power when you
                need it most.
              </li>
              <li>Faster Approvals – Get your “Yes” in minutes, not days.</li>
              <li>
                Better Terms – Negotiate improved deals on mortgages, mobile
                contracts, and more.
              </li>
            </ul>
          </div>
          {/* What Makes Up Your Score */}
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
            <FaListUl className="text-[#91CD95] text-4xl mb-4" />
            <h3 className="text-xl font-bold mb-2 text-[#0066AB]">
              What Makes Up Your Score
            </h3>
            <ul className="text-left text-gray-700 text-base list-disc list-inside">
              <li>
                Payment History: Have you consistently paid your bills on time?
              </li>
              <li>
                Credit Utilization: How much of your available credit are you
                using?
              </li>
              <li>
                Credit History Length: How long have you been managing credit
                responsibly?
              </li>
              <li>
                Account Diversity: What mix of loans and credit lines do you
                hold?
              </li>
            </ul>
          </div>
          {/* How to Improve Your Armada Score */}
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
            <FaArrowUp className="text-[#91CD95] text-4xl mb-4" />
            <h3 className="text-xl font-bold mb-2 text-[#0066AB]">
              How to Improve Your Armada Score
            </h3>
            <ul className="text-left text-gray-700 text-base list-disc list-inside">
              <li>
                Paying on time, every time: Even small delays can impact your
                score.
              </li>
              <li>
                Reducing outstanding debt: Keep credit usage below 30% of your
                limit.
              </li>
              <li>
                Checking your report regularly: Ensure there are no errors or
                unauthorized activities.
              </li>
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ArmadaScorePage;
