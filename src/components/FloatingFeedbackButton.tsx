import React, { useState } from 'react';

interface FloatingFeedbackButtonProps {
  onClick?: () => void;
  className?: string;
}

const FloatingFeedbackButton: React.FC<FloatingFeedbackButtonProps> = ({
  onClick,
  className = ""
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`fixed bottom-4 right-4 z-50 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-lg p-3 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 ${className}`}
      style={{
        width: '70px',
        height: '70px'
      }}
    >
      <div className="text-center">
        <svg 
          className="w-6 h-6 mx-auto" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" 
          />
        </svg>
        <span className="text-[10px] mt-1 block font-medium leading-tight -ml-0.5">Feedback?</span>
      </div>
      
      {/* Tooltip */}
      {isHovered && (
        <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg shadow-lg whitespace-nowrap">
          Give us feedback!
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
        </div>
      )}
    </button>
  );
};

export default FloatingFeedbackButton; 