import { Search, Settings, Rocket } from "lucide-react";

const steps = [
  {
    icon: <Search className="w-8 h-8 text-blue-500" />,
    title: "Discover",
    description:
      "We understand your business goals, challenges, and requirements.",
  },
  {
    icon: <Settings className="w-8 h-8 text-blue-500" />,
    title: "Build",
    description:
      "Our team designs and develops scalable solutions tailored to your needs.",
  },
  {
    icon: <Rocket className="w-8 h-8 text-blue-500" />,
    title: "Deliver",
    description:
      "We deploy, test, and support the solution to ensure long-term success.",
  },
];

function HowItWorks() {
  return (
    <section id="how" className="py-20 px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-gray-600">
            Our simple and effective process ensures smooth project delivery.
          </p>
        </div>

        {/* Steps */}
        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={index}
              className="text-center p-8 border rounded-xl hover:shadow-lg transition"
            >
              <div className="flex justify-center mb-4">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
