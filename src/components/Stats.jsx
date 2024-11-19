import { FaSmileBeam, FaBriefcase, FaUsers, FaMedal } from "react-icons/fa";
import SectionTitle from "./SectionTitle";

const StatsSection = () => {
  return (
    <section id="stats" className=" py-16">
      <div className="container mx-auto text-center">
        {/* Section Title */}

        <SectionTitle
          title={"Transforming Careers, One Step at a Time"}
          subtitle={
            "Our success speaks for itself. Here's what we've accomplished together."
          }
        />

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
          {/* Stat 1 */}
          <div
            className="p-6 rounded-2xl shadow-xl text-center"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <FaSmileBeam className="text-5xl text-emerald-400 mx-auto mb-4" />
            <h3 className="text-5xl font-bold text-emerald-400">98%</h3>
            <p className="text-gray-700 mt-2">Satisfied Clients</p>
          </div>

          {/* Stat 2 */}
          <div
            className="p-6 rounded-2xl shadow-xl text-center"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <FaBriefcase className="text-5xl text-blue-400 mx-auto mb-4" />
            <h3 className="text-5xl font-bold text-blue-400">120+</h3>
            <p className="text-gray-700 mt-2">Workshops Conducted</p>
          </div>

          {/* Stat 3 */}
          <div
            className="p-6 rounded-2xl shadow-xl text-center"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <FaUsers className="text-5xl text-pink-400 mx-auto mb-4" />
            <h3 className="text-5xl font-bold text-pink-400">15k+</h3>
            <p className="text-gray-700 mt-2">Careers Enhanced</p>
          </div>

          {/* Stat 4 */}
          <div
            className="p-6 rounded-2xl shadow-xl text-center"
            data-aos="zoom-in"
            data-aos-delay="500"
          >
            <FaMedal className="text-5xl text-yellow-400 mx-auto mb-4" />
            <h3 className="text-5xl font-bold text-yellow-400">4.8</h3>
            <p className="text-gray-700 mt-2">Average Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
