import "./App.css";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import HeroSection from "./Component/HeroSection";
import TasksBord from "./Component/TasksBord/TasksBord";

export default function App() {
  return (
    <>
      <Header />
      <div className="flex flex-col justify-center items-center">
        <HeroSection />
        <TasksBord />
      </div>
      <Footer />
    </>
  );
}
