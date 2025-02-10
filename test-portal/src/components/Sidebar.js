"use client";

export default function Sidebar({ questions, selectedQuestionIndex, onQuestionSelect }) {
    return (
        <aside className="w-1/3 p-4 bg-gray-100 rounded-lg">
            <div className="flex items-center gap-3 p-3 bg-white rounded-lg shadow">
                <div className="w-12 h-12 bg-blue-500 text-white flex justify-center items-center rounded-full text-lg">
                    HG
                </div>
                <h4 className="font-semibold">Harsh Gupta</h4>
            </div>

            <div className="mt-4 p-3 bg-white rounded-lg shadow">
                <ul className="mt-2 space-y-2">
                    <li className="flex items-center gap-2">
                        <span className="w-4 h-4 bg-green-500 rounded-full"></span> Attempted
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="w-4 h-4 bg-blue-500 rounded-full"></span> Marked for Review
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="w-4 h-4 bg-gray-300 rounded-full"></span> Unattempted
                    </li>
                </ul>
            </div>

            <div className="mt-4 grid grid-cols-5 gap-2">
                {questions.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => onQuestionSelect(index)}
                        className={`w-10 h-10 font-bold rounded-md transition-all ${
                            selectedQuestionIndex === index
                                ? "bg-blue-500 text-white"
                                : "bg-gray-300 hover:bg-gray-400"
                        }`}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>

            <button className="mt-4 bg-blue-500 text-white w-full py-2 rounded-md hover:bg-blue-700 transition-all">
                View Summary
            </button>
        </aside>
    );
}
