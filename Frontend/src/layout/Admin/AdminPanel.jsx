import { LuCircleUser } from 'react-icons/lu';
import { useSelector } from 'react-redux';
import '../../App.css';
import { Link, Outlet } from 'react-router-dom';

const AdminPanel = () => {
  const user = useSelector(state => state?.user?.user);

  return (
    <div className="min-h-[calc(100vh-120px)] flex hidden md:block">
      <aside className="bg-white min-h-full w-full max-w-60 customShadow shadow-md">
        <div className="flex justify-center items-center h-32 pt-8">
          <div className="cursor-pointer text-center">
            {user?.image ? (
              <img
                src={user?.image}
                alt="user"
                className="rounded-full w-20 h-20 border border-orange-600 mt-4"
              />
            ) : (
              <LuCircleUser className="text-6xl text-orange-600" />
            )}
            <p className="text-xl pt-2 font-semibold">
              {user?.name || 'Guest'}
            </p>
            <p className="text-gray-500">{user?.role || 'User'}</p>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="text-start px-4 mt-8">
          <nav>
            <Link
              to="users"
              className="block p-2 hover:text-orange-600 hover:bg-slate-200 rounded-lg pl-2 transition duration-150 ease-in-out"
            >
              All Users
            </Link>
            <Link
              to="all-product"
              className="block p-2 hover:text-orange-600 hover:bg-slate-200 rounded-lg pl-2 transition duration-150 ease-in-out"
            >
              Product
            </Link>
          </nav>
        </div>
      </aside>

      <main className="flex-1 w-full h-full p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminPanel;
