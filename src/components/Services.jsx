import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const services = useLoaderData();
  const [showAll, setShowAll] = useState(false); 

  const handleShowAll = () => {
    setShowAll(true);
  };

  return (
    <div>
      <h2 className="text-3xl font-bold text-center my-6">Our Services</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {services
          .slice(0, showAll ? services.length : 6) 
          .map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
      </div>

      {!showAll && (
        <button
          className="btn btn-neutral mt-4"
          onClick={handleShowAll} 
        >
          Show All
        </button>
      )}
    </div>
  );
};

export default Services;
