import React, { useState, useEffect } from 'react';
import '../assets/styles/profile.css'; // Import the CSS file
import { Link, useNavigate } from 'react-router-dom';
const Profile = () => {
  const [profilePic, setProfilePic] = useState('');
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  // Handle profile picture upload
  const handleProfilePictureUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfilePic(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Remove profile picture
  const removeProfilePicture = () => {
    setProfilePic('');
  };

  // Toggle theme
  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    document.body.classList.toggle('dark-theme');
    localStorage.setItem('dark-theme', !isDarkTheme);
  };

  // Check for saved theme preference on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('dark-theme') === 'true';
    setIsDarkTheme(savedTheme);
    if (savedTheme) {
      document.body.classList.add('dark-theme');
    }
  }, []);

  return (
    <div>
      {/* Navigation Bar */}
      <header className="gradient-bg shadow-lg">
        <nav>
          <a href="#" className="logo">Crime Portal</a>
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li>
              <button className="theme-toggle" onClick={toggleTheme}>🌓</button>
            </li>
            <li>
            <Link to="/profile">Profile</Link>
            </li>
          </ul>
        </nav>
      </header>
      <div className='empty'></div>
      
      {/* Profile Page Content */}
      <div className="container">
        <h2>Profile</h2>

        {/* Profile Image with Camera Icon */}
        <div
          className="profile-image"
          onClick={() => document.getElementById('upload-pic').click()}
        >
          {profilePic ? (
            <img id="profile-pic" src={profilePic} alt="Profile" />
          ) : (
            <img
              id="camera-icon"
              className="camera-icon"
              src="https://cdn3.iconfinder.com/data/icons/linecons-free-vector-icons-pack/32/camera-512.png"
              alt="Camera Icon"
            />
          )}
        </div>

        {/* Remove Profile Picture Button */}
        {profilePic && (
          <div style={{ textAlign: 'center' }}>
            <button
              id="remove-button"
              className="remove-button"
              onClick={removeProfilePicture}
            >
              Remove Profile Picture
            </button>
          </div>
        )}

        {/* Hidden File Input for Uploading Profile Picture */}
        <div className="file-input">
          <input
            type="file"
            id="upload-pic"
            accept="image/*"
            onChange={handleProfilePictureUpload}
          />
        </div>

        {/* Profile Actions (Edit Profile and Change Password) */}
        <div className="profile-actions">
          <button onClick={() => alert('Edit Profile feature is not implemented yet.')}>
            Edit Profile
          </button>
          <button onClick={() => alert('Change Password feature is not implemented yet.')}>
            Change Password
          </button>
        </div>

        {/* Profile Details */}
        <div className="profile-details">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" value="your_username" readOnly />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value="your_email@example.com" readOnly />

          <label htmlFor="dob">Date of Birth:</label>
          <input type="text" id="dob" name="dob" value="22/08/2000" readOnly />

          <label htmlFor="mobile">Mobile Number:</label>
          <input type="tel" id="mobile" name="mobile" value="9876543210" readOnly />

          <label htmlFor="address">Address:</label>
          <textarea
            id="address"
            name="address"
            rows="4"
            readOnly
          >
            Mumbai
          </textarea>
        </div>
      </div>

      {/* Footer */}
      <footer className="gradient-bg shadow-lg">
        <p>&copy; 2023 Crime Portal. All rights reserved.</p>
        <ul>
          <li><a href="#">Terms of Service</a></li>
          <li><a href="#">Privacy Policy</a></li>
        </ul>
      </footer>
    </div>
  );
};

export default Profile;