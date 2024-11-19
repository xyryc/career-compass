import { Helmet } from "react-helmet-async";
import Services from "../components/Services";
import Slider from "../components/Slider";
import Reviews from "../components/Reviews";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home | Career Compass</title>
      </Helmet>

      <Slider />
      <Services />

      <Reviews/>
    </div>
  );
};

export default Home;
