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
        <div>
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
