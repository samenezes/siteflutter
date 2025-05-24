import React from 'react';

interface WidgetPageProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

const WidgetPage: React.FC<WidgetPageProps> = ({ title, description, children }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-blue-700 mb-2">{title}</h2>
      <p className="text-gray-700 mb-6">{description}</p>
      <div className="bg-white rounded-lg shadow-md p-6">
        {children}
      </div>
    </div>
  );
};

export default WidgetPage;
