import { useContext, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { Helmet } from "react-helmet-async";
import defaultUser from "../assets/default_user.png";
import { FaStar } from "react-icons/fa";

const ServiceDetails = () => {
  const { id } = useParams();
  const services = useLoaderData();
  const idInt = parseInt(id);

  const singleService = services.find((service) => service.id === idInt);
  //   console.log(singleService);

  const {
    image,
    service_name,
    category,
    description,
    price,
    duration,
    counselor,
    rating,
    language,
    target_audience,
    location,
    seats_available,
    prerequisites,
    service_format,
    tools_provided,
    followup_support,
    cancellation_policy,
    testimonial_link,
    booking_deadline,
    tags,
    contact_info,
  } = singleService;
  const { user } = useContext(AuthContext);

  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const handleCommentSubmit = () => {
    if (newComment.trim()) {
      const currentDateTime = new Date().toLocaleString();
      const commentDetails = {
        userPhoto: user?.photoURL || defaultUser,
        username: user?.displayName || "Anonymous",
        comment: newComment.trim(),
        timestamp: currentDateTime,
      };
      setComments([...comments, commentDetails]);
      setNewComment("");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 bg-white shadow-md rounded-lg">
      <Helmet>
        <title>Service Details | Career Compass</title>
      </Helmet>

      {/* Service Image */}
      <div className="relative">
        <img
          src={image}
          alt={service_name}
          className="w-full h-80 object-cover rounded-lg"
        />
        <span className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
          {category}
        </span>
      </div>

      {/* Service Information */}
      <div className="mt-6">
        <h1 className="text-3xl font-bold text-gray-800">{service_name}</h1>

        {/* Rating and Price */}
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center text-yellow-500">
            <FaStar />
            <span className="ml-2 text-gray-600">{rating.toFixed(1)} / 5</span>
          </div>
          <p className="text-xl font-semibold text-blue-500">${price}</p>
        </div>

        {/* Description */}
        <p className="mt-4 text-gray-700 leading-relaxed">{description}</p>

        {/* Details Grid */}
        <div className="grid grid-cols-2 gap-6 mt-6">
          <div>
            <h2 className="font-bold text-gray-800">Counselor</h2>
            <p className="text-gray-600">{counselor}</p>
          </div>
          <div>
            <h2 className="font-bold text-gray-800">Duration</h2>
            <p className="text-gray-600">{duration}</p>
          </div>
          <div>
            <h2 className="font-bold text-gray-800">Language</h2>
            <p className="text-gray-600">{language}</p>
          </div>
          <div>
            <h2 className="font-bold text-gray-800">Target Audience</h2>
            <p className="text-gray-600">{target_audience}</p>
          </div>
          <div>
            <h2 className="font-bold text-gray-800">Location</h2>
            <p className="text-gray-600">{location}</p>
          </div>
          <div>
            <h2 className="font-bold text-gray-800">Seats Available</h2>
            <p className="text-gray-600">{seats_available}</p>
          </div>
          <div>
            <h2 className="font-bold text-gray-800">Prerequisites</h2>
            <p className="text-gray-600">{prerequisites}</p>
          </div>
          <div>
            <h2 className="font-bold text-gray-800">Service Format</h2>
            <p className="text-gray-600">{service_format}</p>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-6 space-y-4">
          <div>
            <h2 className="font-bold text-gray-800">Tools Provided</h2>
            <p className="text-gray-600">{tools_provided}</p>
          </div>
          <div>
            <h2 className="font-bold text-gray-800">Follow-Up Support</h2>
            <p className="text-gray-600">{followup_support}</p>
          </div>
          <div>
            <h2 className="font-bold text-gray-800">Cancellation Policy</h2>
            <p className="text-gray-600">{cancellation_policy}</p>
          </div>
        </div>

        {/* Tags */}
        <div className="mt-6 flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="text-gray-600 text-sm px-3 py-1 badge badge-accent badge-outline"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="mt-6 space-y-2">
          <a
            href={testimonial_link}
            className="text-blue-500 underline text-sm"
            rel="noopener noreferrer"
          >
            Read Testimonials
          </a>
          <p className="text-sm text-gray-500">
            Booking Deadline: {booking_deadline}
          </p>
          <p className="text-sm text-gray-500">Contact: {contact_info}</p>
        </div>
      </div>

      {/* Comment Section */}
      <div className="mt-12">
        <h2 className="text-xl font-semibold">Feedback</h2>
        {/* Input Field and Button */}
        <div className="mt-4 flex gap-4">
          <input
            type="text"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Write your feedback here..."
            className="input input-bordered w-full"
          />
          <button onClick={handleCommentSubmit} className="btn btn-neutral">
            Submit
          </button>
        </div>

        {/* Display Comments */}
        <div className="mt-6">
          {comments.length > 0 ? (
            comments.map((comment, index) => (
              <div
                key={index}
                className="p-4 bg-gray-100 rounded-lg mt-2 border flex items-start gap-4"
              >
                <img
                  src={comment.userPhoto}
                  alt={comment.username}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm text-gray-500">
                    <span className="font-medium">{comment.username}</span> •{" "}
                    {comment.timestamp}
                  </p>
                  <p className="mt-2">{comment.comment}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 mt-4">
              No comments yet. Be the first to leave one!
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
