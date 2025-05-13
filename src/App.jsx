import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import AllProjects from './pages/AllProjects';
import Blog from './pages/Blog';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import MarkdownPage from './pages/MarkdownPage';

function App() {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="pt-20 px-4 flex-grow">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
            <Route path="/projects" element={<PageWrapper><Projects /></PageWrapper>} />
            <Route path="/all-projects" element={<PageWrapper><AllProjects /></PageWrapper>} />
            <Route path="/blog" element={<PageWrapper><Blog /></PageWrapper>} />
            <Route path="/resume" element={<PageWrapper><Resume /></PageWrapper>} />
            <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
            <Route path="/projects/details/:slug" element={<PageWrapper><MarkdownPage /></PageWrapper>} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

function PageWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  );
}

export default App;
