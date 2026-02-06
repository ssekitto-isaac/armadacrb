import { ArrowRight, FileText, BarChart3, Shield, Database } from "lucide-react";

const products = [
  {
    id: "credit-reports",
    icon: FileText,
    title: "Credit Information & Risk Reports",
    description: "Credit information and risk reports are an important source of actionable insights",
    link: "#credit-reports",
  },
  {
    id: "analytics",
    icon: BarChart3,
    title: "Decision and Data Analytics",
    description: "Data speaks. We know its voice help you to understand the language",
    link: "#analytics",
  },
  {
    id: "portfolio",
    icon: Shield,
    title: "Portfolio & Risk Management",
    description: "Risk is ubiquitous. You need a partner that works hand-in-glove with you to manage",
    link: "#portfolio",
  },
  {
    id: "data-management",
    icon: Database,
    title: "Data Management",
    description: "Data is a valuable source of actionable insight. Organizations that win",
    link: "#data-management",
  },
];

const ProductSuite = () => {
  return (
    <section id="products" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="section-label">What We Offer</span>
          <h2 className="section-title-dark mb-4">Product Suite</h2>
          <p className="text-lg text-muted-foreground">
            Armada Credit Bureau has an advanced suite of credit bureau and analytics
            products and services that will help you achieve your business objectives.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              id={product.id}
              key={product.title}
              className="product-card group scroll-mt-24"
              style={{ animationDelay: `${index * 0.1}s` }}
              aria-label={product.title}
            >
              {/* Icon Header */}
              <div className="bg-primary p-8 flex justify-center">
                <div className="w-20 h-20 rounded-full border-2 border-primary-foreground/30 flex items-center justify-center group-hover:border-secondary group-hover:bg-secondary/10 transition-all duration-300">
                  <product.icon className="w-10 h-10 text-primary-foreground" />
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-heading font-bold text-foreground mb-3 line-clamp-2">
                  {product.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>
                <a
                  href={product.link}
                  className="inline-flex items-center gap-2 text-secondary font-semibold text-sm hover:gap-3 transition-all"
                >
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSuite;
