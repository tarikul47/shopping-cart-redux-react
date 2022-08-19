import React from "react";

const Info = ({ title, total }) => {
  return (
    <div className="text-xl font-semibold">
      <p>{title}</p>
      <p className="text-5xl">{total}</p>
    </div>
  );
};

export default Info;
