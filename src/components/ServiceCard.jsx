/* eslint-disable react/prop-types */
import { FaUserAlt } from "react-icons/fa";

const ServiceCard = ({ service }) => {
  const { image, service_name, category, price, counselor } = service;

  return (
    <div className="card bg-base-100 shadow-xl border rounded-lg p-4">
      {/* Service Image */}
      <figure>
        <img
          src={image}
          alt={service_name}
          className="w-full h-48 object-cover rounded-t-lg"
        />
      </figure>
      {/* Service Details */}
      <div className="card-body p-4">
        <h2 className="card-title text-lg font-bold">{service_name}</h2>
        <p className="text-sm text-gray-500">Category: {category}</p>
        <p className="text-sm text-gray-500">Price: ${price}</p>
        <div className="flex items-center mt-2">
          <FaUserAlt className="text-blue-500 mr-2" />
          <p className="text-sm text-gray-500">{counselor}</p>
        </div>
        <button className="btn btn-outline mt-4 w-full">Learn More</button>
      </div>
    </div>
  );
};

export default ServiceCard;
