import { useLoaderData } from "react-router-dom";
import SectionTitle from "../components/SectionTitle";
import ServiceCard from "../components/ServiceCard";

const ServicesPage = () => {
  const services = useLoaderData();

  return (
    <div className="container mx-auto px-4 md:px-0">
      <SectionTitle
        title={"Discover Comprehensive Career Solutions"}
        subtitle={
          "Expert-Led Services Designed to Accelerate Your Career Growth"
        }
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
