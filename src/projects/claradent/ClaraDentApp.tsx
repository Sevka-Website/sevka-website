import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import ClaraDentNavbar from './components/ClaraDentNavbar';
import ClaraDentFooter from './components/ClaraDentFooter';
import ClaraDentHome from './pages/ClaraDentHome';
import ClaraDentServices from './pages/ClaraDentServices';
import ClaraDentAbout from './pages/ClaraDentAbout';
import ClaraDentContact from './pages/ClaraDentContact';

function ClaraDentScrollTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function ClaraDentApp() {
  return (
    <div className="min-h-screen flex flex-col" style={{ fontFamily: '"DM Sans", sans-serif', backgroundColor: '#ffffff', color: '#0D1B2A', cursor: 'auto' }}>
      <ClaraDentScrollTop />
      {/* Independent navbar — NO Sevka navbar */}
      <ClaraDentNavbar />
      <main className="flex-grow">
        <Routes>
          <Route index element={<ClaraDentHome />} />
          <Route path="services" element={<ClaraDentServices />} />
          <Route path="about" element={<ClaraDentAbout />} />
          <Route path="contact" element={<ClaraDentContact />} />
        </Routes>
      </main>
      <ClaraDentFooter />
    </div>
  );
}
