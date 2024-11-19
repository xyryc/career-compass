/* eslint-disable react/prop-types */
const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="text-center my-6">
      <h2 className="text-3xl font-bold text-center mb-2">{title}</h2>
      <p className="lg:w-2/5 mx-auto text-gray-600">{subtitle}</p>
    </div>
  );
};

export default SectionTitle;
