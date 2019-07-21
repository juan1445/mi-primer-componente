import React from "react";

class ProfileAvatar extends React.Component {
  render() {
    return (
      <div className="Profile__section-name">
        <img
          className="Profile__avatar"
          src="https://eafitrequisitos.s3.us-east-2.amazonaws.com/john.png"
          alt="Avatar del usuario"
        />
        <h1>
          Juan <br />
          Zuleta
        </h1>
      </div>
    );
  }
}

export default ProfileAvatar;