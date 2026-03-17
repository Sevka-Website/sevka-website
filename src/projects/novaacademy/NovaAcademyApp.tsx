import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import NovaNavbar from './components/NovaNavbar';
import NovaFooter from './components/NovaFooter';
import NovaHome from './pages/NovaHome';
import NovaCourses from './pages/NovaCourses';
import NovaAbout from './pages/NovaAbout';
import NovaContact from './pages/NovaContact';

function ScrollTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function NovaAcademyApp() {
  return (
    <div className="min-h-screen flex flex-col"
      style={{ fontFamily: '"DM Sans", sans-serif', backgroundColor: '#ffffff', color: '#0A1628', cursor: 'auto' }}>
      <ScrollTop />
      <NovaNavbar />
      <main className="flex-grow">
        <Routes>
          <Route index element={<NovaHome />} />
          <Route path="courses" element={<NovaCourses />} />
          <Route path="about" element={<NovaAbout />} />
          <Route path="contact" element={<NovaContact />} />
        </Routes>
      </main>
      <NovaFooter />
    </div>
  );
}
