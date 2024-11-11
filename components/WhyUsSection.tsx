import React from "react";

const WhyUsSection: React.FC = () => {
  return (
    <section className="py-16 text-center relative">
      <div className="mx-auto px-6">
        <h2 className="text-4xl font-bold mb-4">
          Why <span className="text-gold">Us</span>
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          We focus not only on aesthetics but functionality is given the highest priority. We believe in
          timeless and effortless feeling in the final outcome. We believe in सहज.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Card 1 with Animated Notebook Icon */}
          <div className="bg-[#F7F7F7] p-8 rounded-lg shadow-lg transform transition-transform hover:scale-105 duration-300">
            <div className="mb-4 text-gold">
              <svg
                className="w-12 h-12 mx-auto animate-wiggle"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="3" y="2" width="14" height="20" rx="2" fill="currentColor" />
                <line x1="5" y1="3" x2="5" y2="21" stroke="white" strokeWidth="1.5" />
                <line x1="7" y1="3" x2="7" y2="21" stroke="white" strokeWidth="1.5" />
                <line x1="9" y1="3" x2="9" y2="21" stroke="white" strokeWidth="1.5" />
                <rect x="10" y="3" width="10" height="18" rx="2" fill="white" />
                <line x1="13" y1="6" x2="18" y2="6" stroke="gray" strokeWidth="1" />
                <line x1="13" y1="10" x2="18" y2="10" stroke="gray" strokeWidth="1" />
                <line x1="13" y1="14" x2="18" y2="14" stroke="gray" strokeWidth="1" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Qualified & Driven Professionals</h3>
            <p className="text-gray-600">
              The core team at DGA consists of qualified and driven professionals comprising of Architects,
              Interior Designers, and Engineers who create a versatile body of work.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#F7F7F7] p-8 rounded-lg shadow-lg transform transition-transform hover:scale-105 duration-300">
            <div className="mb-4 text-gold">
              <svg className="w-12 h-12 mx-auto" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="3" width="18" height="18" rx="4" stroke="currentColor" strokeWidth="2" />
                <circle cx="12" cy="12" r="3" fill="currentColor" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Timeless Designs</h3>
            <p className="text-gray-600">
              The firm strives to maintain a balance between aesthetics and functionality in all its designs.
              There is a constant search of exploring the uncharted and concluding beyond the conventional.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#F7F7F7] p-8 rounded-lg shadow-lg transform transition-transform hover:scale-105 duration-300">
            <div className="mb-4 text-gold animate-pulse">
              <svg className="w-12 h-12 mx-auto" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 2L15 8h7l-5.5 4L18 20l-6-4.5L6 20l1.5-8L2 8h7L12 2z"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Happy Customers</h3>
            <p className="text-gray-600">
              DGA maintains trusting and a close working relationship between the designer and the client for
              the success and smooth functioning of any undertaken project.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;