import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Bars3Icon } from '@heroicons/react/24/outline';

export default function Navbar() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > lastScrollY) {
        setShow(false);
      } else {
        setShow(true);
      }
      setLastScrollY(currentScroll);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div className={`navbar bg-base-100 w-full px-4 fixed top-0 z-50 transition-transform duration-300 shadow-sm ${show ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="flex-1">
        <Link to="/" className="text-2xl font-lilex font-medium text-[rgb(86,162,238)] ml-2">{'[Christopher]'}</Link>
      </div>


      <div className="hidden md:flex overflow-x-auto pr-20">
        <ul className="menu menu-horizontal px-1 font-lilex text-xl whitespace-nowrap gap-2">
          <li><Link className="text-[rgb(86,162,238)] hover:bg-[rgb(86,162,238)] hover:text-white hover:rounded-md" to="/">Home</Link></li>
          <li><Link className="text-[rgb(106,188,104)] hover:bg-[rgb(106,188,104)] hover:text-white hover:rounded-md" to="/projects">Projects</Link></li>
          <li><Link className="text-[rgb(181,114,232)] hover:bg-[rgb(181,114,232)] hover:text-white hover:rounded-md" to="/blog">Blog</Link></li>
          <li><Link className="text-[rgb(232,171,28)] hover:bg-[rgb(232,171,28)] hover:text-white hover:rounded-md" to="/resume">Resume</Link></li>
          <li><Link className="text-[rgb(245,118,118)] hover:bg-[rgb(245,118,118)] hover:text-white hover:rounded-md" to="/contact">Contact</Link></li>
        </ul>
      </div>

      <div className="md:hidden">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost">
            <Bars3Icon className="h-6 w-6 text-base-content" />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-lg dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-lilex"
          >
            <li><Link className="text-[rgb(86,162,238)] hover:bg-gray-100" to="/" onClick={() => document.activeElement.blur()}>Home</Link></li>
            <li><Link className="text-[rgb(106,188,104)] hover:bg-gray-100" to="/projects" onClick={() => document.activeElement.blur()}>Projects</Link></li>
            <li><Link className="text-[rgb(181,114,232)] hover:bg-gray-100" to="/blog" onClick={() => document.activeElement.blur()}>Blog</Link></li>
            <li><Link className="text-[rgb(232,171,28)] hover:bg-gray-100" to="/resume" onClick={() => document.activeElement.blur()}>Resume</Link></li>
            <li><Link className="text-[rgb(245,118,118)] hover:bg-gray-100" to="/contact" onClick={() => document.activeElement.blur()}>Contact</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

// rgb(250, 249, 245)
// rgb(245, 245, 245)