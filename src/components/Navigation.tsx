import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavItemProps {
  title: string;
  href: string;
}

const NavItem: React.FC<NavItemProps> = ({ title, href }) => {
  const location = useLocation();
  const isActive = location.pathname === href;
  
  return (
    <li>
      <Link 
        to={href} 
        className={`block py-2 px-4 rounded transition-colors ${
          isActive 
            ? 'bg-blue-700 text-white' 
            : 'hover:bg-blue-100 hover:text-blue-700'
        }`}
      >
        {title}
      </Link>
    </li>
  );
};

const Navigation: React.FC = () => {
  return (
    <nav className="bg-white shadow-md py-2 sticky top-0 z-10">
      <div className="container mx-auto px-4">
        <ul className="flex flex-wrap gap-2">
          <NavItem title="Início" href="/" />
          <NavItem title="Scaffold/AppBar" href="/scaffold-appbar" />
          <NavItem title="Text/RichText" href="/text-richtext" />
          <NavItem title="Container" href="/container" />
          <NavItem title="Row/Column" href="/row-column" />
          <NavItem title="Image" href="/image" />
          <NavItem title="Icon" href="/icon" />
          <NavItem title="ElevatedButton" href="/elevated-button" />
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
