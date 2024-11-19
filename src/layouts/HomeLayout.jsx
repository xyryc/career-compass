import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Loading from "../components/Loading";
import { AuthContext } from "../provider/AuthProvider";
import { useContext, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const HomeLayout = () => {
  const { loading } = useContext(AuthContext);
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 100,
    });
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="font-poppins">
          <Navbar />

          <div className="min-h-[calc(100vh-300px)]">
            <Outlet />
          </div>

          <Footer />
        </div>
      )}
    </>
  );
};

export default HomeLayout;
