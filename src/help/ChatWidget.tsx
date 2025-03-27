import React from "react";

const ChatWidget = ({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (open: boolean) => void }) => {
  return (
    <div className="relative">
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-purple-700 transition"
      >
        💬
      </button>

      {/* Chat Widget (Only Show When Open) */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 h-96 bg-white rounded-xl shadow-lg">
          <iframe
            src="https://cdn.botpress.cloud/webchat/v2.2/shareable.html?configUrl=https://files.bpcontent.cloud/2025/03/25/10/20250325101648-OG9OW4OL.json"
            className="w-full h-full border-none"
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;
