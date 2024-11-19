import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import ServiceCard from "./ServiceCard";
import SectionTitle from "./SectionTitle";

const Services = () => {
  const services = useLoaderData();
  const [showAll, setShowAll] = useState(false);

  const handleShowAll = () => {
    setShowAll(true);
  };

  return (
    <div>
      <SectionTitle
        title="Our Services"
        subtitle="Explore a wide range of services tailored to help you achieve your professional aspirations."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {services.slice(0, showAll ? services.length : 6).map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>

      {!showAll && (
        <button className="btn btn-neutral mt-4" onClick={handleShowAll}>
          Show All
        </button>
      )}
    </div>
  );
};

export default Services;
