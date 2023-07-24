import { NormalButton } from "@/components/Common/Inputs/NormalButton";
// import Image from "next/image";
import styles from './404.module.scss'
import { useRouter } from "next/router";
export default function Custom404() {
    const router = useRouter()
    return (
        <>
        <div className={`${styles.NotFoundPage} container-fluid`}>
            <div className="row justify-content-center fixed-bottom text-center">
                {/* <Image
                    className=""
                    src={'/images/404.png'}
                    alt="Margo Logo"
                    width={100}
                    height={100}
                    sizes="100vw"
                    style={{
                        width: '100%',
                        height: '100vh',
                    }}
                    blurDataURL={'/images/404.png'}
                    placeholder="blur"
                /> */}
                <h2 className="py-3">404 Error</h2>
                <h2 className="py-3">Page Not Found</h2>
                <NormalButton
                    className="col-10 col-md-3 my-4"
                    onClick={() => { router.push("/user/start")}}
                    type="submit"
                    disabled={false}
                >Go To Home Page</NormalButton>
            </div>
        </div>
        </>
    )
}