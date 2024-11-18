import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";

const Profile = () => {
  const { user, setUser, updateUserProfile } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");

  const handleSave = () => {
    if (!name || !photoURL) {
      toast.error("Name and Photo URL are required!");
      return;
    }

    updateUserProfile({ displayName: name, photoURL: photoURL })
      .then(() => {
        setUser({ ...user, displayName: name, photoURL: photoURL });
        toast.success("Profile updated successfully!");
      })
      .catch((error) => {
        console.error("Error updating profile:", error);
        toast.error("Failed to update profile.");
      });
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded">
      <Helmet>
        <title>Profile | Career Compass</title>
      </Helmet>

      <h2 className="text-xl font-bold text-center mb-4">My Profile</h2>

      {/* User Info */}
      <div className="text-center mb-4">
        <img
          src={user?.photoURL || "https://via.placeholder.com/100"}
          alt="User"
          className="w-24 h-24 rounded-full mx-auto mb-2 object-cover"
        />
        <h3 className="font-semibold">{user?.displayName || "No Name"}</h3>
        <p className="text-sm text-gray-600">{user?.email}</p>
      </div>

      {/* Update Form */}
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Photo URL</label>
          <input
            type="text"
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
            className="input input-bordered w-full"
          />
        </div>
        <button className="btn btn-neutral w-full" onClick={handleSave}>
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default Profile;
