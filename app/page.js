import AboutCourse from "./components/AboutCourse";
import Blog from "./components/Blog";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Journey from "./components/Journey";
import TargetAudience from "./components/TargetAudience";
import Testimonials from "./components/Testimonials";
import WhyChooseUs from "./components/WhyChooseUs";

export const metadata = {
  title: "humanITarius - Индивидуальное обучение веб-разработке",
  description:
    "Индивидуальное обучение веб-разработке с нуля — адаптивный курс для детей и взрослых",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <main className="overflow-hidden">
        <Hero />
        <AboutCourse />
        <TargetAudience />
        <Journey />
        <Testimonials />
        <WhyChooseUs />
        <Blog />
        <CallToAction />
      </main>

      <Footer />
    </div>
  );
}
