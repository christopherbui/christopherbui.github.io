import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="header-bar">
        <Link to="/" className="brand" onClick={close}>
          <img src="/img/monogram.svg" alt="" className="brand-icon" />
          <span className="brand-name">Christopher Bui</span>
        </Link>

        <button
          type="button"
          className={`nav-toggle${open ? ' is-open' : ''}`}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((o) => !o)}
        >
          <span className="nav-toggle-box">
            <span className="nav-toggle-line" />
            <span className="nav-toggle-line" />
            <span className="nav-toggle-line" />
          </span>
        </button>
      </div>

      <nav id="site-nav" className={`site-nav${open ? ' is-open' : ''}`}>
        <div className="nav-inner">
          <NavLink to="/" end onClick={close}>
            About
          </NavLink>
          <NavLink to="/blog" onClick={close}>
            Blog
          </NavLink>
          <NavLink to="/contact" onClick={close}>
            Contact
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
