function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <h3 className="text-xl font-bold text-white mb-2">
            Sammunat
          </h3>
          <p className="text-sm">
            Building innovative and scalable digital solutions for modern
            businesses.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-semibold text-white mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#home" className="hover:text-white">Home</a></li>
            <li><a href="#services" className="hover:text-white">Services</a></li>
            <li><a href="#how" className="hover:text-white">How It Works</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Note */}
        <div>
          <h4 className="font-semibold text-white mb-3">Note</h4>
          <p className="text-sm">
            This landing page was created as part of an internship assignment
            using React and Tailwind CSS.
          </p>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 mt-8">
        © {new Date().getFullYear()} Sammunat. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
