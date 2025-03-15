import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/Shared/Header';
import Footer from '../pages/Home/Footer';
import { useEffect, useState } from 'react';
import useAxiosePublic from '../Api';
import AuthContact from '../Context/AuthProvider';
import { useDispatch, useSelector } from 'react-redux';
import { setUserDetails } from '../store/userSlice';

const MainLayout = () => {
  const dispatch = useDispatch();
  const axiosPublic = useAxiosePublic();
  const location = useLocation();
  const { user } = useSelector(state => state.user); // Access user details from Redux state
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const hiddenHedderFooter = ['/login', '/register'].includes(
    location.pathname
  );

  const fetchDetails = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axiosPublic.get('/api/users', {
        withCredentials: true,
      });
      console.log(response.data);
      dispatch(setUserDetails(response.data.data));
      setLoading(false);
    } catch (error) {
      setError('Error fetching user details');
      setLoading(false);
      console.error('Error fetching user details:', error);
    }
  };

  useEffect(() => {
    if (!user) {
      fetchDetails();
    } else {
      setLoading(false);
    }
  }, [axiosPublic, user, dispatch]);

  return (
    <>
      <AuthContact.Provider value={fetchDetails}>
        <div>
          {!hiddenHedderFooter && <Header />}
          <div className="max-w-7xl mx-auto">
            {loading ? <p>Loading...</p> : error ? <p>{error}</p> : <Outlet />}
          </div>
          {!hiddenHedderFooter && <Footer />}
        </div>
      </AuthContact.Provider>
    </>
  );
};

export default MainLayout;
