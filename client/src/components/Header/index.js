import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

const Header = () => {
  const logout = event => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <header>
      <section class="candy-stripe1">
        <ul>
          <li class="stripe"></li>
          <li class="stripe"></li>
          <li class="stripe"></li>
          <li class="stripe"></li>
          <li class="stripe"></li>
          <li class="stripe"></li>
          <li class="stripe"></li>
          <li class="stripe"></li>
          <li class="stripe"></li>
          <li class="stripe"></li>
        </ul>
      </section>
      <section id="Nav">
          <div id="title">
            <a href="/"><img id='stamp' src="https://mpng.subpng.com/20180920/tty/kisspng-postage-stamps-portable-network-graphics-mail-adob-postage-stamp-png-images-free-download-5ba43201d2f954.3973495615374873618642.jpg" alt="stamp"></img></a>
          <Link id="passport-extension" to="/">
            <h1>Passport-Extension</h1>
          </Link>
          <p>“Travel is the only thing you buy that makes you richer”<br></br> – Anonymous</p>
            <img id="plane" src="https://www.kindpng.com/picc/m/5-57688_plane-png-image-airplane-clip-art-transparent-background.png" className="image" alt="plane logo" />
        </div>
        <nav className="text-center">
          <Link className="button is-info" to="/donate">Donations</Link>
          {Auth.loggedIn() ? (
            <>
              {/* <Link className="button is-info" to="/profile">My Account</Link> */}
              <a className="button is-info" href="/" onClick={logout}>
                Logout
              </a>
            </>
          ) : (
            <>
              <Link className="button is-info" to="/login">Login</Link>
              <Link className="button is-info" to="/signup">Signup</Link>
            </>
          )}
        </nav>
        <section class="candy-stripe1">
          <ul>
            <li class="stripe"></li>
            <li class="stripe"></li>
            <li class="stripe"></li>
            <li class="stripe"></li>
            <li class="stripe"></li>
            <li class="stripe"></li>
            <li class="stripe"></li>
            <li class="stripe"></li>
            <li class="stripe"></li>
            <li class="stripe"></li>
          </ul>
        </section>
      </section>
    </header>
  );
};

export default Header;