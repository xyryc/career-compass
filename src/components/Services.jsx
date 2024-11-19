import { Link, useLoaderData } from "react-router-dom";
import ServiceCard from "./ServiceCard";
import SectionTitle from "./SectionTitle";

const Services = () => {
  const services = useLoaderData();

  return (
    <div>
      <SectionTitle
        title="Featured Services"
        subtitle="Explore a wide range of services tailored to help you achieve your professional aspirations."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {services.slice(0, 6).map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>

        <p className="text-center">
        <Link to="/services" className="btn btn-neutral my-6">
        Show All
      </Link>
        </p>
    </div>
  );
};

export default Services;
