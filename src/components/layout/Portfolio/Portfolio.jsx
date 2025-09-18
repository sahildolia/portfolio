import  { useState } from "react";
import HeadingwithBar from "../../ui/headingwithBar/HeadingwithBar";
import MyworkCard from "../../ui/myworkCard/myworkCard";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("All");

  const tabs = ["All", "Development", "UI/UX Design"];

  return (
    <div className="portfolio-section py-12 px-4 md:px-8">
      <HeadingwithBar
        subtitle="Showcasing some of my best work"
        title="Portfolio"
        center={true}
      />

      {/* Tabs Navigation */}
      <div className="flex justify-center mb-12 mt-8">
        <div className="flex space-x-1 rounded-full bg-gray-800 p-1">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-colors duration-300 ${
                activeTab === tab
                  ? "bg-[#009e66] text-white"
                  : "text-gray-400 hover:text-white"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <MyworkCard activeTab={activeTab} />
    </div>
  );
};

export default Portfolio;