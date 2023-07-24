import styles from './style.module.scss'
import { Header} from "@/components/Header"
import Footer from "@/components/Footer"
import { AllOrder } from "@/components/ThankyouCommon/AllOrder"
import { FirstOrder } from "@/components/ThankyouCommon/FirstOrder"
export const ThankyouPage = () => {
    return(
        <>
            <Header />
            <div className={styles.Pagecontent}>
                <div className="my-2">
                    <h3>We’ll see you on <span>MONDAY</span></h3>
                    <h5 className="mt-2">Please have your laundry out by 8am</h5>
                </div>
                {/* <AllOrder /> */}
                <FirstOrder />
            </div>
            <Footer />
        </>
    )
}