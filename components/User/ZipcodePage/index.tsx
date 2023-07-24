import Footer from "@/components/Footer"
import styles from './style.module.scss'
import Image from "next/image"
import {  planOffers } from "@/helpers/constant"
import { NormalInput } from "@/components/Common/Inputs/NormalInput"
import { FormProvider, useForm } from "react-hook-form"
import { NormalButton } from "@/components/Common/Inputs/NormalButton"
import { useRouter } from "next/router"
const resetData = () => ({ firstname: '' });
export const ZipcodePage = () => {
    const methods = useForm({ defaultValues: { ...resetData() } });
    const onSubmit = (values: any) => {
        console.log('submit', values);
    }
    const router = useRouter();
    return(
        <>
        <div className={styles.zipPage}>
            <h2 className="my-2">Laundry professionally washed, dried, and folded</h2>
                {planOffers.map((offer, index) => (
                    <div key={index} className={`${styles.offerContent} d-flex flex-row justify-content-start align-items-center ms-md-5`}>
                        <Image
                            className="me-3"
                            src={'/images/point_flower.png'}
                            alt="Margo Logo"
                            width={40}
                            height={40}
                            blurDataURL={'/images/point_flower.png'}
                            placeholder="blur"
                        />
                        <h3>{offer}</h3>
                    </div>
                ))}
                <h1 className="my-5">$1.50/lb</h1>
                <h2 className="my-3">Enter your zip code to schedule your pickup</h2>
                <FormProvider {...methods}>
                    <form onSubmit={methods.handleSubmit(onSubmit)}>
                        <NormalInput
                           className="mx-5"
                            name="zipcode"
                            type="number"
                            required={true}
                            placeholder="Zipcode "
                        />
                    </form>
                    <NormalButton
                        className="px-5 py-3"
                        onClick={() => router.push("/user/thankyou")}
                        type="submit"
                        disabled={false}
                    >Continue</NormalButton>
                </FormProvider>
        </div>
            <Footer />
        </>
    )
}