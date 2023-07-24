import { useEffect } from 'react';
import { useAuth } from '@/hooks/auth';
import { LayoutProps } from '@/types/types';
import { useRouter } from 'next/router';
import SideBar from '@/components/SideBar';
import styles from './style.module.scss'

const AuthLayout = ({ children }: LayoutProps) => {
  const router = useRouter();
  const { isAuthenticated, loading } = useAuth();

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      router.push('/login');
    }
  }, [loading, isAuthenticated, router]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
    <div className={styles.AuthLayout}>
      <section>
        <SideBar>
          {children}
        </SideBar>
      </section>
    </div>
      
    </>
  )
};

export default AuthLayout;
