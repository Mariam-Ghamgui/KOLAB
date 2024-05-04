import React from "react";
import { Typography, Avatar } from "@mui/material";
import profileImage from "../img/profile.png"; // Replace with the actual path to your image

const Profile = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        User Profile
      </Typography>
      <Avatar src={profileImage} alt="Profile" sx={{ width: 100, height: 100 }} />
      <Typography variant="h6" gutterBottom>
        John Doe
      </Typography>
      <Typography variant="body1">
        This is your user profile page. You can add more details and content here.
      </Typography>
    </div>
  );
};

export default Profile;
