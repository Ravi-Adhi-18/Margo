import { NormalButton } from "@/components/Common/Inputs/NormalButton"
import Footer from "@/components/Footer";
import Image from "next/image"
import { useRouter } from "next/router";
import styles from'./style.module.scss';

export const StartedPage = () =>{
    const router = useRouter();
    return(
        <>
            <div className="mt-3">
                <Image
                    className="cursor-pointer"
                    src={'/images/Logo.png'}
                    alt="Margo Logo"
                    width={200}
                    height={100}
                    blurDataURL={'/images/Logo.png'}
                    placeholder="blur"
                    onClick={() => router.push("/user/start")}
                />
            </div>
            <div className="p-3 p-md-5">
                <Image
                    className={styles.responsiveImage}
                    src={'/images/startpage_image.webp'}
                    alt="Margo Logo"
                    width={395}
                    height={535}
                    // layout="responsive"
                    blurDataURL={'/images/startpage_image.webp'}
                    placeholder="blur"
                />
            </div>
          
            <div className={`${styles.startText} mb-4`}>
                <h4>A Laundry Service For Everyone</h4>
            </div>

            <NormalButton
                className="py-4"
                onClick={() => router.push("/user/zipcode")}
                type="submit"
                disabled={false}
            >Get Started  &gt;&gt;&gt;</NormalButton>
            <div className={`${styles.endText}`}>
                <h6 className="mt-4">Already have an account? <span onClick={()=> router.push("/user/signin")} className="cursor-pointer">Sign-in</span></h6>
            </div>
            <Footer />
        </>
    )
}