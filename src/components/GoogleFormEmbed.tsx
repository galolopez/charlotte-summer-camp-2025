import React from 'react';

interface GoogleFormEmbedProps {
  formUrl: string;
  title?: string;
  height?: string;
  className?: string;
}

const GoogleFormEmbed: React.FC<GoogleFormEmbedProps> = ({
  formUrl,
  title = "Google Form",
  height = "800px",
  className = ""
}) => {
  return (
    <div className={`w-full max-w-4xl mx-auto p-4 ${className}`}>
      <iframe
        src={formUrl}
        width="100%"
        height={height}
        frameBorder="0"
        marginHeight={0}
        marginWidth={0}
        title={title}
        className="rounded-lg shadow-lg"
      >
        Loading…
      </iframe>
    </div>
  );
};

export default GoogleFormEmbed; 