import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const services = useLoaderData();
  const [showAll, setShowAll] = useState(false); // State to toggle showing all services

  const handleShowAll = () => {
    setShowAll(true); // Set state to true to show all services
  };

  return (
    <div>
      <h2 className="text-3xl font-bold text-center my-6">Our Services</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {services
          .slice(0, showAll ? services.length : 6) // Show all or limit to 6 services
          .map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
      </div>

      {!showAll && (
        <button
          className="btn btn-neutral mt-4"
          onClick={handleShowAll} // Call the handler to update state
        >
          Show All
        </button>
      )}
    </div>
  );
};

export default Services;
