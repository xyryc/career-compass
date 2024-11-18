import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="font-poppins h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 via-white to-gray-100 text-gray-700">
      <div className="text-center">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2748/2748558.png"
          alt="Error Icon"
          className="w-36 mx-auto"
        />
        <h1 className="text-6xl font-extrabold text-red-500 mt-6">404</h1>
        <p className="text-2xl font-semibold mt-4">
          Oops! The page you{"'"}re looking for isn{"'"}t available.
        </p>
        <p className="mt-2 text-gray-500">
          It seems you{"'"}ve stumbled on a missing page or broken link.
        </p>
        <Link to="/">
          <button className="btn btn-neutral mt-6 rounded-md">
            <span className="mr-2">📰</span> Go Back to News
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
