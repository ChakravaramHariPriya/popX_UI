import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";
import "../styles/profile.css";

function Profile() {
  return (
    <motion.div
      className="profile-page"
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="profile-header">
        <h2>Account Settings</h2>
      </div>

      <div className="profile-body">

        <div className="profile-top">

          <div className="avatar-wrapper">
            <img src={profile} alt="profile" className="avatar" />

            <div className="camera-icon">
              📷
            </div>

          </div>

          <div className="profile-details">
            <h3>Chakravaram Hari Priya</h3>
            <p>haripriyach569@gmail.com</p>
          </div>

        </div>

        <p className="bio">
  Passionate about technology and building modern web
  applications. Always eager to learn new skills and create
  user-friendly digital experiences.
</p>

        <hr className="divider" />

      </div>
    </motion.div>
  );
}

export default Profile;