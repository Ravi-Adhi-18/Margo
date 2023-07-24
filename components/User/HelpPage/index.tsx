import { HelpContent } from "@/components/HelpCommon/HelpContent"
import { HelpForm } from "@/components/HelpCommon/HelpForm"
import styles from './style.module.scss'
export const HelpPage = () => {
    return(
        <>
             <div className={styles.HelpPage}>
                <div className={styles.helpHeader}>
                    <h2>Need Assistance?</h2>
                    <h5 className="mt-2">We are here to help. Please ﬁll out the form below and our customer care team will reach out. </h5>
                </div>
              
                <div className="d-flex flex-column-reverse flex-wrap flex-column align-items-center">
                    <div className={`${styles.helpForm} col-10 mt-3`}>
                        <HelpForm className={"col-12"}/>
                    </div>
                   
                    <div className="col-10">
                        <HelpContent />
                    </div>
                   
                </div>
               
            </div>
        </>
    )
}