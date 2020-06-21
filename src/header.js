import React from 'react';

const Header = ({ children }) => {
  return (
    <header className="header">
      <p>
        Discover Trending Github Repositories{' '}
        <span role="img" aria-label="rocket">
          🚀
        </span>
      </p>
      <div className="header__dropdowns">{children}</div>
    </header>
  );
};

export default Header;
