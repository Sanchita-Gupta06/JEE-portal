import React from "react";

const UpcomingTestCards = () => {
  const upcomingTests = [
    {
      id: "1",
      name: "JEE Mock Test 1",
      date: "Sept 10, 2023",
      subject: "PCM",
      status: "upcoming",
    },
    {
      id: "2",
      name: "JEE Mock Test 2",
      date: "Oct 10, 2023",
      subject: "PCM",
      status: "upcoming",
    },
  ];

  return (
    <div className="mt-6">
      <h3 className="text-xl font-semibold mb-4">Upcoming Tests</h3>
      <div className="flex space-x-4">
        {upcomingTests.map((test) => (
          <div key={test.id} className="bg-white p-4 rounded-lg shadow-md w-64">
            <h4 className="font-bold">{test.name}</h4>
            <p className="text-gray-600">{test.date}</p>
            <p className="text-purple-600">{test.subject}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingTestCards;
