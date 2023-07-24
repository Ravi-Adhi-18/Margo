import { adminSlug } from "@/types/types";
import styles from './admin.module.scss';
import Profile from "./Profile";
import Preferences from "./Preferences";
import { Orders } from "./Orders";
import { Subscribe } from "./Subscribe";
import { Help } from "./Help";
import { Logout } from "./LogoutPage";
import { useEffect, useState } from "react";

export default function Admin({ slug  }: adminSlug) {
    const [pageTitle, setPageTitle] = useState("Welcome");
    useEffect(() => {
        switch (slug) {
          case 'profile':
            setPageTitle(" Welcome Profile");
            break;
          case 'preferences':
            setPageTitle("Update Your Preferences");
            break;
          case 'subscribe':
            setPageTitle("Subscribe & Save");
            break;
          case 'orders':
            setPageTitle("Orders");
            break;
          case 'help':
            setPageTitle("Contact Us");
            break;
          case 'logout':
            setPageTitle("Logout");
            break;
          default:
            setPageTitle("Welcome");
        }
    }, [slug]);

    const renderComponent = () => {
        switch (slug) {
            case 'profile':
                return <Profile />;
            case 'preferences':
                return <Preferences />;
            case 'subscribe':
                return <Subscribe />;
            case 'orders':
                return <Orders />;
            case 'help':
                return <Help />;
            case 'logout':
                return <Logout />;
            default:
                return null;
        }
    };
    return (
        <>
        <div className={styles.adminPage}>
            <div className="p-sm-1 p-md-5 ms-md-5 ms-lg-2">
                <div className="pb-2">
                    <h2 className="mt-4 mt-md-0">{pageTitle}</h2>
                </div> 
                <hr />
                {renderComponent()}
            </div>
        </div>
        </>

    )
}