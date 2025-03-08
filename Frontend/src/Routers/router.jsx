import { Route, Routes } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import Home from '../pages/Home/Home';
import Login from '../pages/Login';
import ForgetPassWord from '../pages/ForgetPassWord';

const RouterComponent = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forget-password" element={<ForgetPassWord />} />
        </Route>
      </Routes>
    </>
  );
};

export default RouterComponent;
