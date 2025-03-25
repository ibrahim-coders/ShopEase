import { Route, Routes } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import Home from '../pages/Home/Home';
import Login from '../pages/Login';
import { Signup } from '../pages/Signup';
import ForgetPassWord from '../pages/ForgetPassWord';
import AdminPanel from '../layout/Admin/AdminPanel';
import AllUsers from '../pages/AllUsers';
import AllProducat from '../pages/AllProducat';

const RouterComponent = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Signup />} />
          <Route path="forget-password" element={<ForgetPassWord />} />
          <Route path="deshboard" element={<AdminPanel />}>
            {/* deshboard children */}
            <Route path="users" element={<AllUsers />} />
            <Route path="all-product" element={<AllProducat />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default RouterComponent;
