"use client";
import { useState, useEffect } from "react";

export default function Header({ testName, testDuration }) {
    const [timeLeft, setTimeLeft] = useState(testDuration * 60); // Convert minutes to seconds

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${minutes.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
    };

    return (
        <header className="flex justify-between items-center p-4 border-b-2 border-gray-300">
            <h2 className="text-xl font-bold">{testName}</h2>
            <div className="text-red-500 font-bold text-lg">Time Left: <span>{formatTime(timeLeft)}</span></div>
        </header>
    );
}
