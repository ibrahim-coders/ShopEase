import { IoIosSearch } from 'react-icons/io';
import { LuCircleUser } from 'react-icons/lu';
import { FiShoppingCart } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import useAxiosePublic from '../../Api';
import { toast } from 'react-hot-toast';
import { setUserDetails } from '../../store/userSlice';
import { useState } from 'react';
const Header = () => {
  const user = useSelector(state => state?.user?.user);
  const dispatch = useDispatch();

  const axiosPublic = useAxiosePublic();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const handleLogout = async () => {
    try {
      const data = await axiosPublic.get('/api/logout');
      console.log(data);
      dispatch(setUserDetails(null));
      toast.success('logout successfully');
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  return (
    <header className="bg-white shadow-lg">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex md:flex md:items-center md:gap-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#009689]">
              Shop<span className="text-orange-600">Ease</span>
            </h2>
          </div>

          <div className="hidden md:flex items-center w-full justify-between max-w-sm">
            <input
              type="text"
              placeholder="Search Products here..."
              className="w-full rounded-l-full border border-orange-600 p-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-transparent"
            />
            <div className="text-lg min-w-[50px] h-11 bg-orange-500 text-white flex items-center justify-center rounded-r-full mr-4">
              <IoIosSearch className="size-6" />
            </div>
          </div>

          <div className="md:flex md:items-center md:gap-4">
            <div className="flex gap-4">
              <div class="relative inline-flex items-center justify-center w-10 h-10  rounded-full text-orange-500">
                <FiShoppingCart className="text-2xl sm:text-3xl text-orange-500 " />
                <span class="absolute -top-1 -right-2 inline-flex items-center justify-center gap-1 rounded-full border-2 border-orange-500 bg-white px-1 text-xs text-orange-600">
                  7
                </span>
              </div>

              <div className="relative group flex justify-center ">
                <div
                  onClick={() => setMenuOpen(!isMenuOpen)}
                  className="cursor-pointer"
                >
                  {user?.image ? (
                    <img
                      src={user?.image}
                      alt="user"
                      className="roundade- rounded-full w-12 h-12"
                    />
                  ) : (
                    <LuCircleUser className="text-3xl text-orange-600" />
                  )}
                </div>
                {isMenuOpen && (
                  <div className="absolute bg-white  bottom-0 top-11 h-fit shadow-lg rounded-lg hidden md:block">
                    <nav>
                      <Link
                        to="/deshboard"
                        className="whitespace-nowrap hover:bg-slate-100 p-2 hidden group-hover:block cursor-pointer"
                      >
                        DeshBoard
                      </Link>
                    </nav>
                  </div>
                )}
              </div>

              <div className="flex items-center ">
                {user?._id ? (
                  <button
                    onClick={handleLogout}
                    className="inline-block rounded-sm bg-orange-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-orange-700 focus:ring-3 focus:outline-hidden cursor-pointer"
                  >
                    Logout
                  </button>
                ) : (
                  <Link
                    to="/login"
                    className="inline-block rounded-sm bg-orange-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-orange-700 focus:ring-3 focus:outline-hidden cursor-pointer"
                  >
                    Login
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
