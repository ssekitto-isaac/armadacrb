import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
// import CreditEducationHero from "@/components/CreditEducationHero";
// import CreditBasicsSection from "@/components/CreditBasicsSection";
// import BuildCreditSection from "@/components/BuildCreditSection";
// import CommonMistakesSection from "@/components/CommonMistakesSection";
// import CreditScoreRangesSection from "@/components/CreditScoreRangesSection";
// import ResourcesSection from "@/components/ResourcesSection";
import Footer from "@/components/Footer";

const CreditEducation = () => {
  return (
    <div className="min-h-screen">
      <TopBar />
      <Header />
      <main>
        <CreditEducationHero />
        <CreditBasicsSection />
        <BuildCreditSection />
        <CreditScoreRangesSection />
        <CommonMistakesSection />
        <ResourcesSection />
      </main>
      <Footer />
    </div>
  );
};

export default CreditEducation;
