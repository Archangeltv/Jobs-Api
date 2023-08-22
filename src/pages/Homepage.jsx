import FAQs from "../components/homepage/FAQs";
import Footer from "../components/homepage/Footer";
import Hero from "../components/homepage/Hero";
import HowWeWork from "../components/homepage/HowWeWork";
import MakeItHappen from "../components/homepage/MakeItHappen";
import { Marquee } from "../components/homepage/Marquee";
import NavbarLandingPage from "../components/navbar/Navbar";

const Homepage = () => {
  return (
    <main className=" max-w-screen-2xl">
      <NavbarLandingPage />
      <Hero />
      <Marquee />
      <HowWeWork />
      <section className="padding py-10">
        <MakeItHappen />
      </section>
      <FAQs />
      <Footer />
    </main>
  );
};

export default Homepage;
