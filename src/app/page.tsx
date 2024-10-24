import Header from "@/components/UI/Header";
import Footer from "@/components/UI/Footer";
import ProductPage from "@/components/UI/ProductPage";

export default function Home() {
  return (
    <div className="sm:mx-[12px] md:mx-[12px] lg:mx-0">
      <Header />
      <main>
        <ProductPage />
      </main>
      <Footer />
    </div>
  );
}
