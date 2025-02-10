"use client";
export default function SubjectNav({ sectionNames, selectedSection, onSectionChange }) {
    return (
        <nav className="flex justify-center space-x-4 p-3 border-b-2 bg-gray-100 shadow-sm">
            {sectionNames.map((section) => (
                <button
                    key={section}
                    className={`px-5 py-2 rounded-md font-semibold transition-all ${
                        selectedSection === section
                            ? "bg-blue-600 text-white shadow-md"
                            : "text-gray-700 bg-gray-300 hover:bg-blue-500 hover:text-white"
                    }`}
                    onClick={() => onSectionChange(section)}
                >
                    {section.toUpperCase()}
                </button>
            ))}
        </nav>
    );
}
