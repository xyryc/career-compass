import { useContext, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

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
  } = singleService;
  const { user } = useContext(AuthContext);

  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const handleCommentSubmit = () => {
    if (newComment.trim()) {
      const currentDateTime = new Date().toLocaleString();
      const commentDetails = {
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
      {/* Service Image */}
      <img
        src={image}
        alt={service_name}
        className="w-full h-64 object-cover rounded-lg"
      />

      {/* Service Information */}
      <div className="mt-6">
        <h1 className="text-2xl font-bold">{service_name}</h1>
        <p className="text-gray-500 mt-1">Category: {category}</p>
        <p className="text-gray-700 mt-4">{description}</p>
        <p className="text-blue-500 font-semibold mt-4">Price: ${price}</p>
        <p className="text-gray-500">Duration: {duration}</p>
        <p className="text-gray-500 mt-2">
          Counselor: <span className="font-medium">{counselor}</span>
        </p>
        <p className="text-yellow-500 mt-2">Rating: {rating} ⭐</p>
      </div>

      {/* Comment Section */}
      <div className="mt-8">
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
                className="p-4 bg-gray-100 rounded-lg mt-2 border"
              >
                <p className="text-sm text-gray-500">
                  {comment.username} • {comment.timestamp}
                </p>
                <p className="mt-2">{comment.comment}</p>
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
