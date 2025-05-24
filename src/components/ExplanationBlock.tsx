import React from 'react';

interface ExplanationBlockProps {
  title: string;
  children: React.ReactNode;
}

const ExplanationBlock: React.FC<ExplanationBlockProps> = ({ title, children }) => {
  return (
    <div className="my-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
      <h3 className="text-xl font-semibold text-blue-800 mb-3">{title}</h3>
      <div className="text-gray-800">
        {children}
      </div>
    </div>
  );
};

export default ExplanationBlock;
