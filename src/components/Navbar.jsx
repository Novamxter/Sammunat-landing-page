import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-10 py-4 flex justify-between items-center">
        <div className="text-4xl font-bold text-gray-900 font-logo -mb-1">Sammunat</div>
        {/* Menu links */}
        <div className="hidden md:flex space-x-6 items-center">
          <a href="#home" className="hover:text-blue-500">Home</a>
          <a href="#services" className="hover:text-blue-500">Services</a>
          <a href="#how" className="hover:text-blue-500">How It Works</a>
          <a href="#testimonials" className="hover:text-blue-500">Testimonials</a>
          <a href="#contact" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Get Started</a>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden px-6 py-4 flex flex-col space-y-3">
          <a href="#home" className="hover:text-blue-500">Home</a>
          <a href="#services" className="hover:text-blue-500">Services</a>
          <a href="#how" className="hover:text-blue-500">How It Works</a>
          <a href="#testimonials" className="hover:text-blue-500">Testimonials</a>
          <a href="#contact" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Get Started</a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
