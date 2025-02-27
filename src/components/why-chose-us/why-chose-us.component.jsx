import { FaCheckCircle, FaGlobe, FaUsers } from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <section className="bg-gradient-to-r from-red-700 via-pink-800 to-purple-900 py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Why Choose EMS?
          </h2>
          <p className="text-gray-200 mt-2">
            Trust & Reliability at the heart of every transaction.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Trust */}
          <div className="bg-white p-6 shadow-lg rounded-lg text-center hover:scale-105 transition-transform duration-300">
            <div className="text-red-500 text-5xl mb-4">🛡️</div>
            <h3 className="text-xl font-semibold text-gray-900">Trust</h3>
            <p className="text-gray-600 mt-2">
              We ensure transparency in every transaction.
            </p>
          </div>

          {/* Integrity */}
          <div className="bg-white p-6 shadow-lg rounded-lg text-center hover:scale-105 transition-transform duration-300">
            <div className="text-green-500 text-5xl mb-4">✅</div>
            <h3 className="text-xl font-semibold text-gray-900">Integrity</h3>
            <p className="text-gray-600 mt-2">No hidden costs or scams.</p>
          </div>

          {/* Reliability */}
          <div className="bg-white p-6 shadow-lg rounded-lg text-center hover:scale-105 transition-transform duration-300">
            <div className="text-blue-500 text-5xl mb-4">🚗</div>
            <h3 className="text-xl font-semibold text-gray-900">Reliability</h3>
            <p className="text-gray-600 mt-2">
              10+ years of experience in the industry.
            </p>
          </div>

          {/* Quality Assurance */}
          <div className="bg-white p-6 shadow-lg rounded-lg  flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
            <FaCheckCircle className="text-blue-500 text-5xl mb-4" />
            <h3 className="text-xl font-semibold text-gray-900">
              Quality Assurance
            </h3>
            <p className="text-gray-600 mt-2">
              All vehicles go through rigorous inspections to ensure top
              condition.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-6 shadow-lg rounded-lg  flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
            <FaGlobe className="text-6xl text-green-600" />
            <h3 className="text-xl font-semibold text-gray-800 mt-4">
              Global Sourcing
            </h3>
            <p className="text-gray-600 mt-2">
              We work with top dealers across Europe to bring you the best
              options.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-6 shadow-lg rounded-lg  flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
            <FaUsers className="text-6xl text-yellow-600" />
            <h3 className="text-xl font-semibold text-gray-800 mt-4">
              Customer Support
            </h3>
            <p className="text-gray-600 mt-2">
              Our team assists you at every step, from selection to delivery.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
