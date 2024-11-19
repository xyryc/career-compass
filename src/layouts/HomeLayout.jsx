import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Loading from "../components/Loading";
import { AuthContext } from "../provider/AuthProvider";
import { useContext } from "react";

const HomeLayout = () => {
  const { loading } = useContext(AuthContext);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="">
          <Navbar />

          <div className="min-h-[calc(100vh-300px)] container mx-auto px-4 md:px-0 font-poppins">
            <Outlet />
          </div>

          <Footer />
        </div>
      )}
    </>
  );
};

export default HomeLayout;
