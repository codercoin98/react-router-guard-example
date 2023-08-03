import { Navigate } from 'react-router-dom';

interface Props {
  auth?: boolean;
  children: React.ReactNode;
}
const AuthRouter = (props: Props) => {
  const { auth = false, children } = props;
  if (auth) {
    console.log(1);

    //Protected Route, check Authentication of user
    const token = localStorage.getItem('token');
    if (token === null || token === '') {
      return <Navigate to="/login" replace />;
    }
    return <>{children}</>;
  }
  return <>{children}</>;
};
export default AuthRouter;
