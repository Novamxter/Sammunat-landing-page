import { CheckCircle } from "lucide-react";

const reasons = [
  "Experienced and skilled team",
  "Client-focused approach",
  "Scalable and future-ready solutions",
  "Transparent communication",
  "Fast delivery with quality assurance",
];

function WhyChooseUs() {
  return (
    <section className="py-20 px-28 bg-gray-50">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left content */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Why Choose Sammunat
          </h2>
          <p className="text-gray-600 mb-6">
            We partner with businesses to deliver reliable, innovative, and
            growth-driven digital solutions.
          </p>

          <ul className="space-y-4 mx-6">
            {reasons.map((reason, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-blue-500 mt-1" />
                <span className="text-gray-700">{reason}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right visual */}
        <div className="flex justify-center">
          <div className="bg-white rounded-2xl shadow-lg p-10 text-center max-w-sm">
            <h3 className="text-4xl font-bold text-blue-500 mb-2">98%</h3>
            <p className="text-gray-600 mb-4">Client Satisfaction</p>

            <h3 className="text-4xl font-bold text-blue-500 mb-2">50+</h3>
            <p className="text-gray-600 mb-4">Projects Delivered</p>

            <h3 className="text-4xl font-bold text-blue-500 mb-2">24/7</h3>
            <p className="text-gray-600">Support Availability</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
