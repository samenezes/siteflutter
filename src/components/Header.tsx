import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white py-6 shadow-md">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold">Flutter Widgets Essenciais</h1>
        <p className="mt-2">Um guia completo para iniciantes com exemplos detalhados</p>
      </div>
    </header>
  );
};

export default Header;
