import styles from './style.module.scss';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { navLinks } from '@/helpers/constant';
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons'
import { LayoutProps } from '@/types/types';
import { useState } from 'react';
import { ternaryCondition } from '@/helpers/utils';

export default function SideBar({ children }: LayoutProps) {
    const Router = useRouter();
    const [expanded, setExpanded] = useState(false);
    const handleNavClick = (link : string) => {
        Router.push(link);
        setExpanded(true);
    };
    const toggleMenu = () => {
        setExpanded(!expanded);
    };
    return (
        <>
            <div className="container-fluid g-0">
                <div className="row g-0">
                    <div className="col-12 col-md-2">
                        <div className={`${styles.sidebar}`}>
                            <div className="p-4">
                                <div className="d-flex ps-md-4">
                                    <Image
                                        src={'/images/logo_white.png'}
                                        alt="Margo Logo"
                                        width={180}
                                        height={100}
                                        blurDataURL={'/images/logo_white.png'}
                                        placeholder="blur"
                                    />
                                    <div className={`${styles.menuIcon} mt-4 ms-auto`}>
                                        <FontAwesomeIcon onClick={toggleMenu} icon={expanded ? faBars : faClose} size={"2x"} />
                                    </div>

                                </div>
                            </div>

                            <div className={`${styles.navbarMenu}  ${expanded ? 'd-none d-md-block' : ''
                                }`}>
                                <Nav className="d-flex flex-column">
                                    {navLinks.map(({ link, title }, index) => (
                                        <Nav.Link
                                            className={`${styles.menu}
                                            ${ternaryCondition(
                                                Router.asPath === link,
                                                styles.active,
                                                ''
                                            )}`}
                                            onClick={() => handleNavClick(link)}
                                            key={index}
                                        >
                                            {title}
                                        </Nav.Link>
                                    ))}
                                </Nav>
                            </div>
                        </div>

                    </div>
                    <div className="col">
                        {children}
                    </div>
                </div>
            </div>
       </>
      );
}


