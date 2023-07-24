import Image from "next/image"
import styles from './style.module.scss'
export const AllOrder = () =>{
    return (
        <>
            <Image
                className="img-fluid"
                src={'/images/Thankyou_page_2.png'}
                alt="Margo Logo"
                width={405}
                height={100}
                blurDataURL={'/images/Thankyou_page_2.png'}
                placeholder="blur"
            />
            <div className={styles.endText}>
                <h4>Please put order in our reusable Margo’s Laundry Bag</h4>
                <h6 className="mt-2">We’ll text you when the driver is on their way.</h6>
            </div>
        </>
    )
}