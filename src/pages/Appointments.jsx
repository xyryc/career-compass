import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import SectionTitle from "../components/SectionTitle";
import { Link } from "react-router-dom";

const Appointments = () => {
  const { user } = useContext(AuthContext);
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const storedAppointments =
      JSON.parse(localStorage.getItem("appointments")) || [];

    const userAppointments = storedAppointments.filter(
      (appointment) => appointment.email === user?.email
    );

    const sortedAppointments = userAppointments.sort(
      (a, b) => new Date(a.date) - new Date(b.date)
    );
    setAppointments(sortedAppointments);
  }, [user]);

  return (
    <div className="max-w-4xl mx-auto p-4 bg-white rounded-lg">
      <SectionTitle
        title={"My Appointments"}
        subtitle={"Check out all the appointments you have made"}
      />

      {appointments.length > 0 ? (
        <div className="space-y-4">
          {appointments.map((appointment, index) => (
            <div
              key={index}
              className="p-4 border rounded-lg shadow-md  hover:shadow-lg transition-shadow"
            >
              <h2 className="text-xl font-bold text-gray-800">
                {appointment.serviceName}
              </h2>
              <p className="text-gray-600">
                <span className="font-medium">Date:</span> {appointment.date}
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Email:</span> {appointment.email}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-8">
          <p className="text-gray-500">
            No appointments found for your account.
          </p>
          <Link to="/services" className="btn btn-neutral mt-4">
            Book a Service
          </Link>
        </div>
      )}
    </div>
  );
};

export default Appointments;
