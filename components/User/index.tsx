import { adminSlug } from "@/types/types";
import { StartedPage } from "./StartedPage";
import styles from './user.module.scss'
import { SigninPage } from "./SigninPage";
import { ThankyouPage } from "./ThankyouPage";
import { HelpPage } from "./HelpPage";
import { PlanPage } from "./PlanPage";
import { ZipcodePage } from "./ZipcodePage";
import { Loading } from "./Loading";

export default function User({ slug }: adminSlug) {
    const renderComponent = () => {
        switch (slug) {
            case 'start':
                return <StartedPage />;
            case 'signin':
                return <SigninPage />;
            case 'thankyou':
                return <ThankyouPage />;
            case 'help':
                return <HelpPage />;
            case 'plan':
                return <PlanPage />;
            case 'zipcode':
                return <ZipcodePage />;
            case 'loading':
                return <Loading />;
            default:
                return null;
        }
    };
    return (
        <>
            <div className={styles.userpage}>
                {renderComponent()}
            </div>
        </>
    )
}