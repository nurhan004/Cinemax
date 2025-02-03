import  { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css"; 

const Profile = () => {
  const [user, setUser] = useState(null);
  const [isEditing] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (!savedUser) {
      navigate("/");
    } else {
      setUser(savedUser);
    }
  }, [navigate]);


  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };




  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const updatedUser = { ...user, avatar: reader.result };
        setUser(updatedUser);
        localStorage.setItem("user", JSON.stringify(updatedUser));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="profile-container">
        <div className="divbuth">
      <h1 className="profile-title">Профиль</h1>
          <button onClick={() => document.getElementById("fileInput").click()} className="edit-photo-btn">
            Редактировать фото
          </button>
        </div>

      {user ? (
        <div className="profile-content">
          <img
            src={user.avatar || "https://via.placeholder.com/150"}
            alt="Avatar"
            className="profile-avatar"
          />
          <input
            id="fileInput"
            type="file"
            accept="image/*"
            onChange={handleAvatarChange}
            style={{ display: "none" }}
          />

          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
            disabled={!isEditing}
            className="profile-input"
          />
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            disabled={!isEditing}
            className="profile-input"
          />
        </div>
      ) : (
        <p>Загрузка...</p>
      )}
    </div>
  );
};

export default Profile;
