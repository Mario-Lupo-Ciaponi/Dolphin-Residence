import Header from "./components/Header/Header";
import AboutUsSection from "./components/sections/AboutUsSection/AboutUsSection";
import OurBungalowsSection from "./components/sections/OurBungalowsSection/OurBungalowsSection";
import Footer from "./components/Footer/Footer";
import ScrollTopButton from "./components/ScrollTopButton/ScrollTopButton";
import "./App.css";

function App() {
  return (
    <>
      <title>Dolphin Residence</title>
      <Header />
      <main className="main">
        <AboutUsSection />
        <OurBungalowsSection />
      </main>
      <Footer />
      <ScrollTopButton />
    </>
  );
}

export default App;
