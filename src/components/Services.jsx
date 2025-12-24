import { Code, BarChart, Brain, Shield } from "lucide-react";

const services = [
  {
    icon: <Code className="w-8 h-8 text-blue-500" />,
    title: "Custom Development",
    description:
      "We build scalable web and software solutions tailored to your business needs.",
  },
  {
    icon: <Brain className="w-8 h-8 text-blue-500" />,
    title: "AI & Automation",
    description:
      "Leverage AI-powered tools to automate processes and improve efficiency.",
  },
  {
    icon: <BarChart className="w-8 h-8 text-blue-500" />,
    title: "Data & Analytics",
    description:
      "Turn data into actionable insights with modern analytics solutions.",
  },
  {
    icon: <Shield className="w-8 h-8 text-blue-500" />,
    title: "Security & Compliance",
    description:
      "Ensure your systems are secure, compliant, and future-ready.",
  },
];

function Services() {
  return (
    <section id="services" className="py-20 px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-gray-600">
            We offer end-to-end digital solutions to help businesses grow.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="border rounded-xl p-6 hover:shadow-lg transition"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-lg font-semibold mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
