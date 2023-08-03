import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Login from './pages/Login';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<Layout />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
