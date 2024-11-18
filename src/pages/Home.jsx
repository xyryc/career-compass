import { Helmet } from "react-helmet-async";
import Services from "../components/Services";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home | Career Compass</title>
      </Helmet>

      <Slider />
      <Services />
    </div>
  );
};

export default Home;
