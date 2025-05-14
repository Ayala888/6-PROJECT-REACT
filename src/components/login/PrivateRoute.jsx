import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthProvider';


export default function PrivateRoute({ children }) {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return children;
}
