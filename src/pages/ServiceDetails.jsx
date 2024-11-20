import { useContext, useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { Helmet } from "react-helmet-async";
import defaultUser from "../assets/default_user.png";
import { FaStar } from "react-icons/fa";
import toast from "react-hot-toast";

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
    // tools_provided,
    // followup_support,
    // cancellation_policy,
    testimonial_link,
    booking_deadline,
    tags,
    contact_info,
  } = singleService;
  const { user } = useContext(AuthContext);

  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [isBooked, setIsBooked] = useState(false);

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

  // Check localStorage for existing appointment
  useEffect(() => {
    const existingAppointments =
      JSON.parse(localStorage.getItem("appointments")) || [];

    const alreadyBooked = existingAppointments.some(
      (appointment) =>
        appointment.email === user?.email && appointment.serviceId === id
    );
    setIsBooked(alreadyBooked);
  }, [user, id]);

  const handleAppointment = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const appointmentDate = formData.get("date");

    if (appointmentDate) {
      const newAppointment = {
        serviceId: id,
        serviceName: service_name,
        email: user?.email,
        date: appointmentDate,
      };

      const existingAppointments =
        JSON.parse(localStorage.getItem("appointments")) || [];

      existingAppointments.push(newAppointment);

      localStorage.setItem(
        "appointments",
        JSON.stringify(existingAppointments)
      );

      setIsBooked(true);
      toast.success("Appointment Booked!");

      document.getElementById("my_modal_2").close();
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
        <span
          className={`absolute top-4 right-4 text-white px-3 py-1 rounded-full text-sm ${
            category === "Online"
              ? "bg-accent"
              : "bg-neutral-300 text-neutral-600"
          } `}
        >
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

        {/* Appointment Button */}
        <p className="text-center my-10">
          <button
            className={`btn ${isBooked ? "btn-disabled" : "btn-neutral"}`}
            disabled={isBooked}
            onClick={() => document.getElementById("my_modal_2").showModal()}
          >
            {isBooked ? "Appointment Made" : "Make Appointment"}
          </button>
        </p>

        {/* Modal */}
        <dialog id="my_modal_2" className="modal">
          <form onSubmit={handleAppointment} className="modal-box">
            <h3 className="text-2xl font-semibold mb-4 text-center">
              Confirm Your Appointment
            </h3>

            <div className="mb-4 space-y-2">
              <p className="text-gray-600">
                <span className="font-semibold">Service:</span> {service_name}
              </p>
              <p className="text-gray-600">
                <span className="font-semibold">Counselor:</span> {counselor}
              </p>
              <p className="text-gray-600">
                <span className="font-semibold">Location:</span> {location}
              </p>
              <p className="text-gray-600">
                <span className="font-semibold">Price:</span> ${price}
              </p>
            </div>

            <label className="font-medium">
              Select a Date:
            </label>
            <input
              type="date"
              name="date"
              required
              className="border rounded-md px-4 py-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
            />

            <button
              type="submit"
              className="btn btn-neutral w-full py-2 font-semibold mt-4"
            >
              Confirm Appointment
            </button>
          </form>
          <form method="dialog" className="modal-backdrop">
            <button>Close</button>
          </form>
        </dialog>

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
        {/* <div className="mt-6 space-y-4">
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
        </div> */}

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
