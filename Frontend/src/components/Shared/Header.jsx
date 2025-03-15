import { IoIosSearch } from 'react-icons/io';
import { LuCircleUser } from 'react-icons/lu';
import { FiShoppingCart } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const user = useSelector(state => state?.user?.user);
  console.log(user);
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
              <div className="relative">
                <FiShoppingCart className="text-3xl md:text-4xl text-orange-600" />
                <p className="absolute -top-1 right-1 text-xs md:text-sm font-bold  px-1 md:px-2 rounded-full text-gray-900">
                  0
                </p>
              </div>

              <div>
                {user.image ? (
                  <img
                    src={user?.image}
                    alt="user"
                    className="roundade- rounded-full w-12 h-12"
                  />
                ) : (
                  <LuCircleUser className="text-3xl text-orange-600" />
                )}
              </div>

              <div className="flex items-center ">
                <Link
                  to="/login"
                  className="inline-block rounded-sm bg-orange-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-orange-700 focus:ring-3 focus:outline-hidden"
                >
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
