function CTA() {
  return (
    <section
      id="contact"
      className="py-20 bg-blue-600 text-white text-center"
    >
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Build Something Great?
        </h2>
        <p className="mb-8 text-blue-100">
          Partner with Sammunat to create scalable and innovative digital
          solutions for your business.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#"
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition"
          >
            Get in Touch
          </a>
          <a
            href="#"
            className="border border-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}

export default CTA;
