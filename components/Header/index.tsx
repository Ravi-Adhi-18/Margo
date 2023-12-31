import Image from "next/image";
import { NormalButton } from "../Common/Inputs/NormalButton";
import { useRouter } from "next/router";
import styles from "./style.module.scss"
export const Header = () => {
    const router = useRouter();
    return(
        <>
            <div className="my-3 d-flex flex-wrap flex-md-nowrap justify-content-md-end justify-content-center flex-row">
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
                <div className={`${styles.HeaderPage} p-3`}>
                    <NormalButton onClick={()=> router.push("/user/help")} type="submit" className='' disabled={false} bgColor="greenBtn">Help</NormalButton>
                </div>
            </div>
        </>
    )
}