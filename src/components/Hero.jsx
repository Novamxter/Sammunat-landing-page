function Hero() {
  return (
    <section
      id="home"
      className="bg-linear-to-r from-blue-50 to-white min-h-screen flex items-center"
    >
      <div className="max-w-7xl mx-auto px-20 flex flex-col-reverse md:flex-row items-center justify-between">
        {/* Text content */}
        <div className="w-full md:w-1/2 text-center md:text-left mt-10 md:mt-0">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Empowering Businesses with Smart Solutions
          </h1>
          <p className="text-gray-700 mb-6">
            Sammunat helps startups and enterprises build scalable, AI-driven
            solutions to grow and succeed in the digital world.
          </p>
          <a
            href="#contact"
            className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-600 transition"
          >
            Get Started
          </a>
        </div>

        {/* Image/Illustration */}
        <div className="flex justify-center mt-6">
          <img
            src="./undraw_focused_m9bj.png"
            alt="Illustration"
            className="h-120 object-contain drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
