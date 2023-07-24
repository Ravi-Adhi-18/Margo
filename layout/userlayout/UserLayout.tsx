import { LayoutProps } from '@/types/types';
import Image from 'next/image';
import styles from "./style.module.scss"
const Layout = ({ children }: LayoutProps) => {

  return (
    <>
      <div className={`${styles.Layout} container-fuild g-0`}>
        <div className="row justify-content-center text-center g-0">

          <div className="col d-none d-md-block">
            <div style={{ position: 'relative', height: '100vh' }}>
              <Image
                className=""
                src={'/images/side_image_1.jpg'}
                alt="Margo Logo"
                fill
                style={{
                  objectFit: 'cover',
                }}
                blurDataURL={'/images/side_image_1.jpg'}
                placeholder="blur"
              />
            </div>
            {/* <Image
          className="img-fluid"
          src={'/images/side_image_1.png'}
          alt="Margo Logo"
          width={480}
          height={100}
          blurDataURL={'/images/side_image_1.png'}
          placeholder="blur"
        /> */}
          </div>
          <div className={`${styles.centerLayout} col`}>
            {children}
          </div>
          <div className="col d-none d-md-block">
            <div style={{ position: 'relative', height: '100vh' }}>
              <Image
                className=""
                src={'/images/side_image_2.jpg'}
                alt="Margo Logo"
                fill
                style={{
                  objectFit: 'cover',
                }}
                blurDataURL={'/images/side_image_2.jpg'}
                placeholder="blur"
              />
            </div>

          </div>
        </div>
      </div>

    </>
  );
};

export default Layout;
