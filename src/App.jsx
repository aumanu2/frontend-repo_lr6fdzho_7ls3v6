import Navbar from './components/Navbar';
import Hero from './components/Hero';
import EstimateForm from './components/EstimateForm';
import Features from './components/Features';
import DownloadBanner from './components/DownloadBanner';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white text-gray-900">
      <Navbar />
      <Hero />
      <main>
        <EstimateForm />
        <div id="features">
          <Features />
        </div>
        <DownloadBanner />
      </main>
      <Footer />
    </div>
  );
}

export default App;
