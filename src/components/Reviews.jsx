import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import Review from "./Review";
import SectionTitle from "./SectionTitle";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div className="py-16">
      <SectionTitle
        title="What Our Clients Say"
        subtitle="Hear from those who've transformed their careers with our guidance!"
      />
      <Marquee speed={30}>
        {reviews.map((review) => (
          <Review key={review.id} review={review} />
        ))}
      </Marquee>
    </div>
  );
};

export default Reviews;
