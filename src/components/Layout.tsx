import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Cursor from './Cursor';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-void text-warm-white selection:bg-gold selection:text-void font-body">
      <Cursor />
      <Navbar />
      <main className="flex-grow pt-24">
        {children}
      </main>
      <Footer />
    </div>
  );
}