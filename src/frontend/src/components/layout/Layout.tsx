import { Outlet } from '@tanstack/react-router';
import Header from './Header';
import Footer from './Footer';
import FloatingActions from './FloatingActions';

export default function Layout() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
