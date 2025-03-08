import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/Shared/Header';
import Footer from '../pages/Home/Footer';

const MainLayout = () => {
  const location = useLocation();
  const hiddenHedderFooter = ['/login', '/register'].includes(
    location.pathname
  );
  return (
    <>
      <div>
        {!hiddenHedderFooter && <Header />}
        <div className="max-w-7xl mx-auto">
          <Outlet />
        </div>
        {!hiddenHedderFooter && <Footer />}
      </div>
    </>
  );
};

export default MainLayout;
