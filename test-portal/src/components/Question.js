"use client";
import { useState } from "react";

export default function Question({ question, onNext, onPrev }) {
    const [selectedOption, setSelectedOption] = useState(null);

    if (!question) {
        return <p className="text-center text-red-500 font-bold text-lg">No question available</p>;
    }

    return (
        <section className="flex-1 p-4">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Question - {question.questionNumber}</h3>
                <div className="bg-blue-100 text-blue-600 px-3 py-1 rounded-lg">02:00</div>
            </div>

            <p>{question.questionText}</p>

            <div className="mt-4 space-y-3">
                {question.options.map((option, index) => (
                    <div
                        key={index}
                        onClick={() => setSelectedOption(index)}
                        className={`flex items-center gap-3 p-3 border rounded-lg cursor-pointer transition-all duration-200 ${
                            selectedOption === index ? "bg-blue-100 border-blue-500" : "hover:bg-blue-100"
                        }`}
                    >
                        <span className="bg-blue-500 text-white font-bold px-3 py-2 rounded-full">
                            {String.fromCharCode(65 + index)}
                        </span>
                        <p>{option}</p>
                    </div>
                ))}
            </div>

            <div className="flex justify-between mt-4">
                <button
                    onClick={onPrev}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-all"
                >
                    &lt; Previous
                </button>
                <button
                    onClick={onNext}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-all"
                >
                    Next &gt;
                </button>
            </div>
        </section>
    );
}
