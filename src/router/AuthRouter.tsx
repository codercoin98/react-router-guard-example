import { Navigate } from 'react-router-dom';

interface Props {
  auth?: boolean;
  children: React.ReactNode;
}
const AuthRouter = (props: Props) => {
  const { auth = false, children } = props;
  if (auth) {
    // Protected Route, check Authentication of user
    // 1. Check both role and token of user.
    // 2. Invalid authentication, the component will be redirected to the login page.
    // 3. Valid Authentication , the component will return the content of the router.
    const token = localStorage.getItem('token');
    // if(checkRoleAuth(user.role)){......}
    if (token === null || token === '') {
      return <Navigate to="/login" replace />;
    }
    return <>{children}</>;
  }
  return <>{children}</>;
};
export default AuthRouter;
