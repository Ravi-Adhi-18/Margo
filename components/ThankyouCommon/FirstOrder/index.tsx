import { NormalButton } from "@/components/Common/Inputs/NormalButton"
import Image from "next/image"
import styles from './style.module.scss'
import { useRouter } from "next/router";
export const FirstOrder = () =>{
    const router = useRouter();
    return (
        <>
            <Image
                className="img-fluid"
                src={'/images/Thankyou_page_1.png'}
                alt="Margo Logo"
                width={260}
                height={100}
                blurDataURL={'/images/Thankyou_page_1.png'}
                placeholder="blur"
            />
            <div className={styles.endText}>
                <div className="my-3">
                    <h2>For Your First Order: </h2>
                </div>
                <h3>Please put order in plastic or disposable bag. </h3>
                <h5 className="my-4">(You’ll get an Margo’s laundry bag with delivery.)</h5>
                <h3>We’ll text you when the driver is on their way.</h3>
                <div className="mt-4">
                <NormalButton
                    className="px-5 py-3"
                    onClick={() => router.push("/dashboard/orders")}
                    type="submit"
                    disabled={false}
                >Continue</NormalButton>
                </div>
            </div>
        </>
    )
}