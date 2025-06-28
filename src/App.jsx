import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // AOS CSS import
import Navbar from './components/Navbar';
import IntroCard from './components/Intro';
import Skill from './components/skill';
import Contact from './components/contact';
import Footer from './components/footer';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800, // animation duration in ms
      once: true,    // only animate once per scroll
    });
  }, []);

  return (
    <>
      <Navbar/>
      <IntroCard />
      <Skill/>
      <Contact/>
      <Footer/>
      {/* other sections */}
    </>
  );
}

export default App;
