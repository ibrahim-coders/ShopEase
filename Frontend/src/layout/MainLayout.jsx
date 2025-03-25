import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/Shared/Header';
import Footer from '../pages/Home/Footer';
import { useEffect } from 'react';
import useAxiosPublic from '../Api';
import { useDispatch, useSelector } from 'react-redux';
import { setUserDetails } from '../store/userSlice';

const MainLayout = () => {
  const dispatch = useDispatch();
  const axiosPublic = useAxiosPublic();
  const location = useLocation();
  const { user } = useSelector(state => state.user);

  const hiddenHeaderFooter = ['/login', '/register'].includes(
    location.pathname
  );
  // if (loading) {
  //   return <p>loding</p>;
  // }

  const fetchDetails = async () => {
    try {
      const response = await axiosPublic.get('/api/users');
      dispatch(setUserDetails(response.data.data));
    } catch (err) {
      console.error('Error fetching user details:', err);
    }
  };

  useEffect(() => {
    if (!user) fetchDetails();
  }, [axiosPublic, user, dispatch]);

  return (
    <div>
      {!hiddenHeaderFooter && <Header />}
      <div className="max-w-7xl mx-auto">
        <Outlet />
      </div>
      {!hiddenHeaderFooter && <Footer />}
    </div>
  );
};

export default MainLayout;
