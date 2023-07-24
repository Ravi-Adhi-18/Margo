import Footer from "@/components/Footer";
import Image from "next/image";
import Lottie from "lottie-react";
import styles from "./style.module.scss"
import LoadingFlower from "./Loding_Animation.json"
import { useEffect } from "react";
import { useRouter } from "next/router";
export const Loading = () => {
    const router = useRouter()
    useEffect(() => {
        const timer = setTimeout(() => {
          router.push("/user/thankyou");
        }, 8000); 
    
        return () => clearTimeout(timer);
      }, []);
    return(
        <>
            <div className={`${styles.Loading}`}>
                {/* <Image
                    className={`img-fluid mt-4 ${styles.rotate}`}
                    src={'/images/Loading_image.png'}
                    alt="Margo Logo"
                    width={350}
                    height={100}
                    blurDataURL={'/images/Loading_image.png'}
                    placeholder="blur"
                /> */}
                <Lottie animationData={LoadingFlower} />;
                <h2 className="pb-2">LOADING...</h2>
            </div>
            <Footer />
        </>
    )
}