import { FormTitle } from "@/components/Common/Inputs/InputTitle"
import { NormalButton } from "@/components/Common/Inputs/NormalButton"
import Image from "next/image"

export const HelpContent = () => {
    return(
        <>
            <div className="d-flex justify-content-between align-items-end">
                <Image
                    className="img-fluid"
                    src={'/images/help_customer_img.png'}
                    alt="Margo Logo"
                    width={220}
                    height={200}
                    blurDataURL={'/images/help_customer_img.png'}
                    placeholder="blur"
                />
                <div className="d-flex flex-column">
                    <FormTitle bgColor="blueTxt" label="I’m Mia" required={false} />
                    <FormTitle className="pb-4" bgColor="orangeTxt" label="From the Customer Success team" required={false} />
                    {/* <h5 className="w-100 pb-4">From the Customer Success team</h5> */}
                </div>
            </div>
            <NormalButton
                className="w-100 py-3"
                onClick={() => console.log("clicked")}
                type="submit"
                disabled={false}
                bgColor="greenBtn"
            >I’m here to help you out!</NormalButton>
        </>
    )
}