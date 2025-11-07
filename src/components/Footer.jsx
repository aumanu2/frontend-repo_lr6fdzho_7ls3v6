export default function Footer() {
  return (
    <footer id="contact" className="border-t border-emerald-100 bg-white">
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-600">© {new Date().getFullYear()} SwiftTruck. All rights reserved.</p>
        <div className="text-sm text-gray-600 flex items-center gap-4">
          <a href="#features" className="hover:text-emerald-700">Features</a>
          <a href="#estimate" className="hover:text-emerald-700">Estimate</a>
          <a href="mailto:hello@swifttruck.app" className="hover:text-emerald-700">hello@swifttruck.app</a>
        </div>
      </div>
    </footer>
  );
}
