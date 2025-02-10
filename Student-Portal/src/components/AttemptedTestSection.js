import React from "react";

const AttemptedTestSection = () => {
  const attemptedTests = [
    {
      id: "1",
      name: "JEE Mock test",
      date: "Aug 25, 2023",
      subject: "PCM",
      status: "completed",
      score: 85,
      timeTaken: 90,
    },
  ];

  return (
    <div className="mt-6">
      <h3 className="text-xl font-semibold mb-4">Attempted Tests</h3>
      <div className="space-y-4">
        {attemptedTests.map((test) => (
          <div key={test.id} className="bg-white p-4 rounded-lg shadow-md">
            <div className="flex justify-between">
              <div>
                <h4 className="font-bold">{test.name}</h4>
                <p className="text-gray-600">{test.date}</p>
              </div>
              <div className="text-right">
                <p className="text-green-600 font-bold">{test.score}%</p>
                <p className="text-gray-500">{test.timeTaken} mins</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AttemptedTestSection;
