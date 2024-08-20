import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { ReactNode } from 'react';

interface LayoutProps {
    children: ReactNode;
  }

function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Navbar />
      <main>
        {children}
      </main>
      <Footer/>
    </div>
  );
}

export default Layout;
