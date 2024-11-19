/* eslint-disable react/prop-types */
const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="text-center my-6">
      <h2 className="text-3xl font-bold text-center mb-2" data-aos="fade-up">
        {title}
      </h2>
      <p className="mb-12 lg:w-2/5 text-lg mx-auto text-gray-600" data-aos="fade-up"   data-aos-delay="100">{subtitle}</p>
    </div>
  );
};

export default SectionTitle;
