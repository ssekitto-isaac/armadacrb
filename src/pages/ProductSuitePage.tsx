import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import ProductHero from "@/components/ProductHero";
import ProductSuiteList from "@/components/ProductSuiteList";
import Footer from "@/components/Footer";
import LiveChatWidget from "./LiveChat";

const ProductSuitePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <Header />
      <main className="flex-1">
        <ProductHero title="Product Suites" subtitle="Home - Product Suites" />
        <ProductSuiteList />
      </main>
       <LiveChatWidget />
      <Footer />
    </div>
  );
};

export default ProductSuitePage;
