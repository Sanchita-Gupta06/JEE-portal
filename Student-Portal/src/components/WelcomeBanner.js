import React from "react";

const WelcomeBanner = () => {
  return (
    <div className="bg-blue-100 p-6 rounded-lg flex items-center justify-between"> {/* Right Panel Background */}
      <div>
        <h2 className="text-2xl font-bold text-blue-800"> {/* Change text color to blue */}
          Welcome back, Harsh!
        </h2>
        <p className="text-blue-600">Always stay updated in your student portal</p>
      </div>
    </div>
  );
};

export default WelcomeBanner;
