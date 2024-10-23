// components/avatar.js
import React from "react";

const Avatar = ({ src, square }) => {
  return (
    <img
      src={src}
      alt="Avatar"
      className={`h-8 w-8 rounded-${square ? "none" : "full"}`}
    />
  );
};

export default Avatar;
