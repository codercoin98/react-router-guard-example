import { NavLink, useNavigate } from 'react-router-dom';
import Routes from './router';
import { Suspense } from 'react';
const menu = [
  { label: 'Home', path: '/home' },
  { label: 'Dashboard', path: '/dashboard' },
  { label: 'About', path: '/about' },
];
const Layout = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');
  };
  return (
    <div className="container mx-auto">
      <div className="flex gap-4 justify-center items-center py-4">
        {menu.map((item) => (
          <NavLink
            to={item.path}
            key={item.path}
            className={({ isActive }) =>
              isActive ? 'text-purple-500 ' : undefined
            }
          >
            <button className="p-2 rounded-lg hover:bg-slate-200">
              {item.label}
            </button>
          </NavLink>
        ))}
        <button onClick={handleLogout} className="text-red-500">
          {'Logout->>'}
        </button>
      </div>
      <Suspense fallback={'loading....'}>
        <Routes />
      </Suspense>
    </div>
  );
};
export default Layout;
