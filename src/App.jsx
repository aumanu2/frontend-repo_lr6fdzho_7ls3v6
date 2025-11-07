import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TruckEstimator from './components/TruckEstimator';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <TruckEstimator />
        <Features />
      </main>
      <Footer />
    </div>
  );
}

export default App;
