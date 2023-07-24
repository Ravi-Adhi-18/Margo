import { useAuth } from '../hooks/auth';
import { LayoutProps } from '@/types/types';
import Unauthorized from '@/components/Common/unAuthorized';

const ProtectedRoute = ({ children }: LayoutProps) => {
  const { isAuthenticated } = useAuth(); 

  if (!isAuthenticated) {
    return <><Unauthorized /></>
  }

  return <>{children}</>;
};

export default ProtectedRoute;
