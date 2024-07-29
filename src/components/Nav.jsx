import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logoImage from '/images/nadia-logo.png';
import Hamburger from './Hamburger';

function Nav() {
  const [clock, setClock] = useState('');

  useEffect(() => {
    function updateTime() {
      const now = new Date();
      let hours = now.getHours();
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();
      const ampm = hours >= 12 ? '🌒' : '🌞';

      hours = hours % 12 || 12;

      const clockStr = `${hours.toString()}:${minutes
        .toString()
        .padStart(2, '0')}:${seconds.toString().padStart(2, '0')} ${ampm}`;

      setClock(clockStr);
    }

    updateTime();
    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <header id="home">
      <nav>
        <div className="title-and-logo">
          <Link to="/">
            <img
              src={logoImage}
              alt="Nadia Vespalec Portfolio Logo"
              width="50px"
              className="nadia-logo"
            />
          </Link>
          <p className="clock">{clock}</p>
        </div>
        <div className="menu-nav-header">
          <Hamburger />
        </div>
      </nav>
    </header>
  );
}

export default Nav;
