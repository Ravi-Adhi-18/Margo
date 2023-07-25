import { NormalButton } from "@/components/Common/Inputs/NormalButton"
import Footer from "@/components/Footer";
import Image from "next/image"
import { useRouter } from "next/router";

export const StartedPage = () =>{
    const router = useRouter();
    return(
        <>
            <div className="mt-4">
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

            <Image
                className="img-fluid"
                src={'/images/startpage_image.png'}
                alt="Margo Logo"
                width={370}
                height={100}
                blurDataURL={'/images/startpage_image.png'}
                placeholder="blur"
            />
            <div className="mb-3">
                <h4>A Laundry Service For Everyone</h4>
            </div>

            <NormalButton
                className="py-4"
                onClick={() => router.push("/user/zipcode")}
                type="submit"
                disabled={false}
            >Get Started  &gt;&gt;&gt;</NormalButton>
            <h6 className="mt-3">Already have an account? <span onClick={()=> router.push("/user/signin")} className="cursor-pointer">Sign-in</span></h6>
            <Footer />
        </>
    )
}