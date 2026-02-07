import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import ProductHero from "@/components/ProductHero";
import ProductSuiteList from "@/components/ProductSuiteList";
import Footer from "@/components/Footer";
import LiveChatWidget from "./LiveChat";

const Products = () => {
  return (
    <div className="min-h-screen">
      <TopBar />
      <Header />
      <main>
        <ProductHero />
        <ProductSuiteList />
      </main>
       <LiveChatWidget />
      <Footer />
    </div>
  );
};

export default Products;
