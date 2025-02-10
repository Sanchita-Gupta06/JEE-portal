"use client";
import React from "react";
import { LogOut, ClipboardList, Bell, User, Calendar } from "lucide-react";

const LeftSidebar = () => {
  const menuItems = [
    { icon: <ClipboardList />, label: "Tests" },
    { icon: <Bell />, label: "Announcements" },
    { icon: <User />, label: "Profile" },
    { icon: <Calendar />, label: "Schedule" },
  ];

  return (
    <div className="bg-[rgb(59,130,246)] text-white h-screen w-64 p-4 flex flex-col">
      <div className="flex-grow">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center p-3 hover:bg-purple-700 cursor-pointer"
          >
            {item.icon}
            <span className="ml-3">{item.label}</span>
          </div>
        ))}
      </div>
      <div className="mt-auto">
        <div className="flex items-center p-3 hover:bg-purple-700 cursor-pointer">
          <LogOut />
          <span className="ml-3">Logout</span>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
