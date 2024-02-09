import { useEffect } from "react";
import Aos from "aos";

import "./App.css";
import Header from "./components/Headers/Header";
import Footer from "./components/Footers/Footer";
import Hero from "./components/UI/hero";
import Services from "./components/UI/services";
import Portfolio from "./components/UI/portfolio";
import Contact from "./components/UI/contact";
import Academic from "./components/UI/academic";
import Tech from "./components/UI/Tech";
function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Academic />
        <Tech />
        <Services />
        {/* <Portfolio /> */}

        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
