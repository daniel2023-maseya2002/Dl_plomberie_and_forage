import { Navigate, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import { useHashScroll } from './lib/useHashScroll';
import APropos from './pages/APropos';
import Blog from './pages/Blog';
import Home from './pages/Home';
import Members from './pages/Members';
import ProjectDetail from './pages/ProjectDetail';
import Realisations from './pages/Realisations';
import TestimonialDetail from './pages/TestimonialDetail';

export default function App() {
  useHashScroll();

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/a-propos" element={<APropos />} />
        <Route path="/realisations" element={<Realisations />} />
        <Route path="/realisations/:slug" element={<ProjectDetail />} />
        <Route path="/membres" element={<Members />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<TestimonialDetail />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}