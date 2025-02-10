"use client";
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Question from "@/components/Question";
import SubjectNav from "@/components/SubjectNav";

async function fetchTestData() {
    try {
        const res = await fetch("http://localhost:3001/api/questions", { cache: "no-store" });
        if (!res.ok) throw new Error("Failed to fetch test data");
        const data = await res.json();
        console.log("📌 Data received in page.js:", JSON.stringify(data, null, 2)); // Debugging
        return data;
    } catch (error) {
        console.error("❌ Error fetching test data:", error);
        return null;
    }
}

export default function Home() {
    const [testData, setTestData] = useState(null);
    const [selectedSection, setSelectedSection] = useState("physics"); // Default section
    const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(0);

    useEffect(() => {
        async function loadData() {
            const data = await fetchTestData();
            setTestData(data);
        }
        loadData();
    }, []);

    if (!testData) {
        return <p className="text-center text-blue-500 font-bold text-lg">Loading...</p>;
    }

    const sections = testData.sections.reduce((acc, section) => {
        acc[section.sectionName.toLowerCase()] = section.questions;
        return acc;
    }, {});

    const sectionNames = Object.keys(sections);
    const selectedQuestions = sections[selectedSection] || [];
    const currentQuestion = selectedQuestions[selectedQuestionIndex] || null;

    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            {}
            <Header testName={testData.testName} testDuration={testData.duration} />

            {}
            <SubjectNav
                sectionNames={sectionNames}
                selectedSection={selectedSection}
                onSectionChange={(newSection) => {
                    setSelectedSection(newSection);
                    setSelectedQuestionIndex(0);
                }}
            />

            <div className="flex flex-grow p-4">
                {}
                <Question
                    question={currentQuestion}
                    onNext={() => setSelectedQuestionIndex((prev) => Math.min(prev + 1, selectedQuestions.length - 1))}
                    onPrev={() => setSelectedQuestionIndex((prev) => Math.max(prev - 1, 0))}
                />

                {}
                <Sidebar
                    questions={selectedQuestions}
                    selectedQuestionIndex={selectedQuestionIndex}
                    onQuestionSelect={setSelectedQuestionIndex}
                />
            </div>
        </div>
    );
}
