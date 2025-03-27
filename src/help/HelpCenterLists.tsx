import { useState } from "react";
import { ChevronRight } from "lucide-react";

const articles = [
  "What is Instantly?",
  "Quick Start Guide (All-in-One)",
  "Rotating IP's and sending algorithms in the cold email space = high deliverability",
  "Instantly Webinars",
  "Instantly Roadmap",
  "Link Clicks Tracker",
  "Backend Infrastructure v2",
];

export default function HelpCenterLists() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="max-w-3xl mx-auto py-10">
      <nav className="text-sm text-gray-500 mb-4">
        <span>All Collections</span> &gt; <span className="text-black">What is Instantly?</span>
      </nav>
      <h1 className="text-2xl font-bold mb-2">What is</h1>
      <p className="text-gray-500 mb-4">7 articles</p>
      <div className="bg-white border rounded-lg shadow-sm p-2">
        {articles.map((article, index) => (
          <button
            key={index}
            onClick={() => setSelected(index)}
            className={`
              flex justify-between items-center w-full text-left p-3 rounded-lg 
              ${selected === index ? "bg-blue-100 text-blue-600" : "hover:bg-gray-100"}
            `}
          >
            <span>{article}</span>
            <ChevronRight size={16} className="text-gray-400" />
          </button>
        ))}
      </div>
    </div>
  );
}
