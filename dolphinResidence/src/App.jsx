import Header from "./components/Header/Header";
import AboutUsSection from "./components/sections/AboutUsSection/AboutUsSection";
import "./App.css";

function App() {
  return (
    <>
      <title>Dolphin Residence</title>
      <Header />
      <main className="main">
        <AboutUsSection />
      </main>
    </>
  );
}

export default App;
