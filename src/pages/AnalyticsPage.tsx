import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import analyticsImage from "@/assets/analytics_african_men.png";
import { FaChartLine, FaCheckCircle, FaCogs } from "react-icons/fa";

const AnalyticsPage = () => {
  return (
    <div className="min-h-screen bg-[#F7FAFC]">
      <TopBar />
      <Header />
      {/* Hero Section */}
      <section
        className="relative w-full h-80 flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `url(${analyticsImage})`,
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-[#1A2636]/70" />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            Analytics Dashboard
          </h1>
          <p className="text-lg md:text-xl font-medium">
            Home &nbsp; - &nbsp; Analytics
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex flex-col items-center px-4 py-8 gap-12 bg-[#F7FAFC]">
        <section className="w-full max-w-5xl text-center py-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#91CD95]">
            Gain insights into your credit risk, trends, and performance
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Our comprehensive analytics tools provide actionable insights
            applicable to all lenders and creditors, helping you make informed
            decisions about credit underwriting and customer re-evaluation
            processes.
          </p>
        </section>

        {/* Cards Section - matches ArmadaScorePage pattern */}
        <section className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Analytics Overview */}
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
            <FaChartLine className="text-[#91CD95] text-4xl mb-4" />
            <h3 className="text-xl font-bold mb-2 text-[#0066AB]">Analytics</h3>
            <p className="text-left text-gray-700 text-base">
              At Armada CRB, data is more than numbers—it’s insight,
              intelligence, and opportunity. Our Analytics transform raw credit
              and risk data into actionable insights that help businesses,
              lenders, and individuals make smarter, faster, and more confident
              decisions.
            </p>
          </div>

          {/* Why Our Analytics Stand Out */}
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
            <FaCheckCircle className="text-[#91CD95] text-4xl mb-4" />
            <h3 className="text-xl font-bold mb-2 text-[#0066AB]">
              Why Our Analytics Stand Out
            </h3>
            <ul className="text-left text-gray-700 text-base list-disc list-inside">
              <li>
                Deep Insights: Understand trends, patterns, and behaviors across
                credit portfolios.
              </li>
              <li>
                Predictive Power: Anticipate risks before they occur and seize
                opportunities proactively.
              </li>
              <li>
                Customizable Dashboards: Tailor analytics to your unique
                business needs for maximum clarity.
              </li>
              <li>
                Decision-Ready Reports: Data presented in clear, visual, and
                actionable formats to drive strategy.
              </li>
            </ul>
          </div>

          {/* Outcome / Value */}
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
            <FaCogs className="text-[#91CD95] text-4xl mb-4" />
            <h3 className="text-xl font-bold mb-2 text-[#0066AB]">
              Decision-Ready Intelligence
            </h3>
            <p className="text-left text-gray-700 text-base">
              With Armada CRB Analytics, you’re not just reviewing data—you’re
              unlocking the story behind every score, every transaction, and
              every opportunity, giving you the competitive edge in every
              decision.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AnalyticsPage;
