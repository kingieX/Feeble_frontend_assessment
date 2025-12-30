import { useEffect } from "react";
import AOS from "aos";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  return (
    <div className="font-sans text-text bg-[#eef6ff] min-h-screen">
      <Navbar />
      <Hero />
    </div>
  );
};

export default App;
