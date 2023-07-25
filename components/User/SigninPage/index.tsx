import { NormalButton } from "@/components/Common/Inputs/NormalButton"
import { NormalInput } from "@/components/Common/Inputs/NormalInput";
import Image from "next/image"
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form"
import styles from './style.module.scss'
import { useRouter } from "next/router";
import Footer from "@/components/Footer";
const resetData = () => ({ firstname: '' });
export const SigninPage = () => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const methods = useForm({ defaultValues: { ...resetData() } });
    const onSubmit = (values: any) => {
        console.log('submit', values);
    }
    const router = useRouter();
    return (
        <>
            <div>
                <Image
                    className="img-fluid"
                    src={'/images/signinpage_image_1.png'}
                    alt="Margo Logo"
                    width={280}
                    height={150}
                    blurDataURL={'/images/signinpage_image_1.png'}
                    placeholder="blur"
                />
            </div>
            <div className="d-flex flex-wrap justify-content-around">
                <div  onClick={() => console.log("clicked")} className={`${styles.signupIcons} cursor-pointer my-1`}>
                    <Image 
                        src={'/icons/flat-color-icons_google.svg'}
                        alt="Margo Logo"
                        width={25}
                        height={30}
                        blurDataURL={'/icons/flat-color-icons_google.svg'}
                        placeholder="blur"
                    />
                    <span>Google</span>
                </div>
                <div  onClick={() => console.log("clicked")} className={`${styles.signupIcons} cursor-pointer my-1`}>
                    <Image
                        src={'/icons/logos_facebook.svg'}
                        alt="Margo Logo"
                        width={30}
                        height={30}
                        blurDataURL={'/icons/logos_facebook.svg'}
                        placeholder="blur"
                    />
                    <span> Facebook</span>
                </div>
            </div>
            <h6>OR</h6>
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)}>
                    <NormalInput
                        className="mx-5"
                        name="email"
                        label="Email"
                        type="email"
                        required={true}
                        placeholder="Carolinedutka@yahoo.com"
                    />
                    <NormalInput
                        className="mx-5"
                        name="password"
                        label="Password"
                        type={isPasswordVisible ? 'text' : 'password'}
                        helperIcon={isPasswordVisible}
                        icon={true}
                        isIconClick={() => {
                            setIsPasswordVisible(!isPasswordVisible)
                        }}
                        required={true}
                    />
                    <NormalButton
                        className="px-5 py-3"
                        onClick={() => router.push("/dashboard/profile")}
                        type="submit"
                        disabled={false}
                    >Continue</NormalButton>
                </form>
            </FormProvider>


            <div className="mt-3">
                <h4>By signing in, you agree to our</h4>
                <h6 className="mt-3"><span onClick={() => {}} className="cursor-pointer">Terms & Conditions</span></h6>
            </div>
            <Footer />
        </>
    )
}