import { Route, Routes } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import Home from '../pages/Home/Home';
import Login from '../pages/Login';
import { Signup } from '../pages/Signup';
import ForgetPassWord from '../pages/ForgetPassWord';

const RouterComponent = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/forget-password" element={<ForgetPassWord />} />
        </Route>
      </Routes>
    </>
  );
};

export default RouterComponent;
