/* eslint-disable react/prop-types */
import { BsCurrencyDollar } from "react-icons/bs";
import { FaRegStar, FaUserCircle } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
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

    target_audience,
  } = service;

  return (
    <div className="card bg-base-100 border rounded-lg p-4 hover:scale-105 hover:duration-300 ease-in-out transform transition-transform">
      {/* Service Image */}
      <figure>
        <img
          src={image}
          alt={service_name}
          className="w-full h-56 object-cover rounded-t-lg"
        />
      </figure>
      {/* Service Details */}
      <div className="card-body px-0 py-4 pb-0">
        <div className="flex items-center gap-6">
          <div className="flex items-center text-gray-500 text-sm">
            <FaUserCircle className="mr-2" />
            <p>{counselor || "Mr. Stephen Doe"}</p>
          </div>
          <div className="flex items-center text-gray-500 text-sm">
            <p
              className={`badge badge-outline ${
                category === "Online" && "badge-accent"
              }`}
            >
              {category || "Online"}
            </p>
          </div>
        </div>
        <h2 className="card-title text-xl font-bold">{service_name}</h2>
        <p className="text-sm text-gray-600">{description}</p>

        <div className="border-b-[1px] mt-3"></div>

        <div className="grid grid-cols-3">
          <p className="text-sm text-gray-600 font-medium flex items-center gap-1 col-span-2">
            <FaPeopleGroup /> {target_audience}
          </p>
          <p className="text-sm text-gray-600 font-medium flex items-center gap-1">
            <MdLanguage />
            {language || "Russian"}
          </p>
        </div>

        <div className="grid grid-cols-3">
          <p className="text-sm text-gray-600 font-medium col-span-2 flex items-center">
            <BsCurrencyDollar />
            {price}
          </p>
          <p className="text-sm text-gray-600 font-medium flex items-center gap-1">
            <FaRegStar />
            {rating || "4.6"}
          </p>
        </div>

        <Link
          to={`/service/${id}`}
          className="btn btn-outline btn-info"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
