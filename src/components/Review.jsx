/* eslint-disable react/prop-types */
const Review = ({ review }) => {
  const { image, review: userReview, name, profession } = review;

  return (
    <div className="flex flex-col w-72 text-center items-center mx-10">
      <img
        className="w-20 h-20 rounded-full object-cover"
        src={image}
        alt="Reviewer"
      />
      <h3 className="font-bold text-lg">{name}</h3>
      <p className="font-light text-gray-700">{profession}</p>
      <p className="mt-3 text-gray-800">&quot; {userReview} &quot;</p>
    </div>
  );
};

export default Review;
