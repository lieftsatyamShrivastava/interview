'use client';

import { useState } from "react";

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);

  const handleOpenPopup = () => {
    setShowPopup(true);
  };
  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="relative">
      {/* Main content */}
      <div
        className={`flex flex-col items-center space-y-4 bg-white ${
          showPopup ? "blur-md" : ""
        } transition-all duration-300`}
      >
        {/* Button to open popup */}
        <button
          onClick={handleOpenPopup}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Click Here
        </button>
      </div>

      {/* Popup */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Background overlay */}
          <div
            className="absolute inset-0 bg-white/70 backdrop-blur-md"
            onClick={handleClosePopup} // Close popup when clicking on overlay
          ></div>

          {/* Popup content */}
          <div className="relative border p-4 bg-gray-100 rounded shadow-lg text-black z-10">
            <p>Hello World</p>
            <button
              onClick={handleClosePopup}
              className="text-red-500 underline mt-2"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
