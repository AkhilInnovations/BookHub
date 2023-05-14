import {Link} from 'react-router-dom'

import './index.css'

const Navbar = () => (
  <nav className="nav-header">
    <div className="nav-content">
      <div>
        <Link to="/" class="nav-menu-item">
          <div className="nav-bar-mobile-logo-container">
            <img
              className="website-logo"
              src="https://res.cloudinary.com/deubpbymb/image/upload/v1683976988/logo_xxdayn.png"
              alt="website logo"
            />
            <h1 className="logo-label">BOOKHUB</h1>
          </div>
        </Link>
      </div>
      <div className="nav-bar-large-container">
        <Link to="/" class="nav-menu-item">
          <div className="nav-bar-large-label">
            <img
              className="website-logo"
              src="https://res.cloudinary.com/deubpbymb/image/upload/v1683976988/logo_xxdayn.png"
              alt="website logo"
            />
            <h1 className="logo-label">BOOKHUB</h1>
          </div>
        </Link>
        <ul className="nav-menu">
          <li className="nav-menu-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>

          <li className="nav-menu-item">
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
        </ul>
        <Link to="/addbook" className="nav-link">
          <button type="button" className="logout-desktop-btn">
            Add Book
          </button>
        </Link>
      </div>
    </div>
    <div className="nav-menu-mobile">
      <ul className="nav-menu-list-mobile">
        <li className="nav-menu-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>

        <li className="nav-menu-item">
          <Link to="/about" className="nav-link">
            About
          </Link>
        </li>
        <li className="nav-menu-item">
          <Link to="/addbook" className="nav-link">
            Add Book
          </Link>
        </li>
      </ul>
    </div>
  </nav>
)

export default Navbar
