const testimonials = [
  {
    name: "Alex Johnson",
    role: "Startup Founder",
    feedback:
      "Sammunat delivered exactly what we needed. Their approach was professional, fast, and reliable.",
  },
  {
    name: "Priya Sharma",
    role: "Product Manager",
    feedback:
      "Great experience working with the team. Communication was clear and the solution scaled well.",
  },
  {
    name: "Michael Lee",
    role: "CTO",
    feedback:
      "The team understood our requirements quickly and delivered a high-quality product.",
  },
];

function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-12">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-600">
            Feedback from people who have worked with us.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <p className="text-gray-700 mb-6 text-sm leading-relaxed">
                “{item.feedback}”
              </p>
              <div>
                <h4 className="font-semibold text-gray-900">
                  {item.name}
                </h4>
                <p className="text-gray-500 text-sm">
                  {item.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
