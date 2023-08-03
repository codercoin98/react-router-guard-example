import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    localStorage.setItem('token', 'dsadjaskdlasjdlkasjdlkas123');
    navigate('/home');
  };
  return (
    <div className="h-full justify-center items-center">
      <div className="flex flex-col gap-4 w-1/2">
        <input className="p-2 rounded-lg outline" />
        <input className="p-2 rounded-lg outline" />
        <button
          className="p-2 rounded-lg hover:text-purple-500 hover:bg-slate-200"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
};
export default Index;
