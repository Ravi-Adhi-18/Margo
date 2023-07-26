import { LayoutProps } from '@/types/types';
import Image from 'next/image';
import styles from "./style.module.scss"
const Layout = ({ children }: LayoutProps) => {

  return (
    <>
      <div className={`${styles.Layout} container-fuild g-0`}>
        <div className="row justify-content-center text-center g-0">

          
          <div className={`${styles.centerLayout} col-12 col-md-4`}>
            {children}
          </div>
         
        </div>
      </div>

    </>
  );
};

export default Layout;
