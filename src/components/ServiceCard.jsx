/* eslint-disable react/prop-types */
import { FaRegStar, FaUserCircle } from "react-icons/fa";
import { MdLanguage } from "react-icons/md";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const {
    id,
    image,
    service_name,
    category,
    description,
    price,
    rating,
    counselor,
    language,
  } = service;

  return (
    <div className="card bg-base-100 border rounded-lg p-4">
      {/* Service Image */}
      <figure>
        <img
          src={image}
          alt={service_name}
          className="w-full h-56 object-cover rounded-t-lg"
        />
      </figure>
      {/* Service Details */}
      <div className="card-body p-4">
        <div className="flex items-center gap-6">
          <div className="flex items-center text-gray-500 text-sm">
            <FaUserCircle className="mr-2" />
            <p>{counselor || "Mr. Stephen Doe"}</p>
          </div>
          <div className="flex items-center text-gray-500 text-sm">
            <p className="badge badge-info badge-outline">
              {category || "Online"}
            </p>
          </div>
        </div>
        <h2 className="card-title text-lg font-bold">{service_name}</h2>
        <p className="text-sm text-gray-600">{description.slice(0, 85)}...</p>

        <div className="border-b-[1px] mt-3"></div>

        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-600 font-medium flex items-center gap-1">
            <MdLanguage />
            {language || "Russian"}
          </p>
          <p className="text-sm"></p>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-600 font-medium">Cost: ${price}</p>
          <p className="text-sm text-gray-600 font-medium flex items-center gap-1">
            <FaRegStar />
            {rating || "4.6"}
          </p>
        </div>

        <Link
          to={`/service-details/${id}`}
          className="btn btn-outline mt-4 w-full"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
