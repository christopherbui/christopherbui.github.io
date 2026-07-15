import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

export default function Layout() {
  const { pathname } = useLocation();
  // Individual blog posts get a wider container so the content isn't scrunched.
  const isPost = /^\/blog\/.+/.test(pathname);

  return (
    <div className={`page${isPost ? ' page--wide' : ''}`}>
      <Header />
      <main className="content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
