import React from "react";

const LoadingIndicator = () => {
  return (
    <div className="flex justify-center items-center p-40">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-50"></div>
    </div>
  );
};

export default LoadingIndicator;
