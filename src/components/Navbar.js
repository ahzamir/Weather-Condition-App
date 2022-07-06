import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },
  ];
  return (
    <header>
      <nav className="navBar">
        <ul className="pageLinksSection">
          {links.map((link) => (
            <li key={link.id}>
              <NavLink exact="true" to={link.path}>
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
