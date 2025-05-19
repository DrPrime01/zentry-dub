import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Navbar from './sections/Navbar.jsx';
import Features from './sections/Features.jsx';
import Story from './sections/Story.jsx';
import Contact from './sections/Contact.jsx';
import Footer from './sections/Footer.jsx';

export default function App() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Story />
      <Contact />
      <Footer />
    </main>
  );
}
