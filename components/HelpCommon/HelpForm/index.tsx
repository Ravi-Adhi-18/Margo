import { FormProvider, useForm } from "react-hook-form"
import { NormalInput } from "@/components/Common/Inputs/NormalInput"
import { NormalTextArea } from "@/components/Common/Inputs/NormalTextArea";
import { FormTitle } from "@/components/Common/Inputs/InputTitle";
import { NormalButton } from "@/components/Common/Inputs/NormalButton";
import { HelpFormProps } from "@/types/types";

const resetData = () => ({ firstname: '' });

export const HelpForm = ({ className} :HelpFormProps) => {
    const methods = useForm({ defaultValues: { ...resetData() } });
    const onSubmit = (values: any) => {
        console.log('submit', values);
    }
    return(
        <>
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)}>
                    <FormTitle bgColor="orangeTxt" className="py-1" label="How Can We Help" required={false} /> <span className="h3" style={{ color: "#F27507" }}>&#63;</span>
                    <NormalInput
                        className={className}
                        name="subject"
                        label=""
                        type="text"
                        required={true}
                        placeholder="Enter Your Subject"
                    />
                    <FormTitle bgColor="orangeTxt" className="py-1" label="Enter Your Email" required={false} />
                    <NormalInput
                        className={className}
                        name="email"
                        label=""
                        type="email"
                        required={true}
                        placeholder="Carolinedutka@yahoo.com"
                    />
                    <FormTitle bgColor="orangeTxt" className="py-1" label="Description" required={false} />
                    <NormalTextArea onChange={() => { }} className={className} name="requestdetails" required={true} placeholder="Enter Here" />

                    <div className="py-3 text-center">
                        <NormalButton
                            onClick={() => console.log("clicked")}
                            type="submit"
                            disabled={false}
                        >Submit</NormalButton>
                    </div>
                </form>
            </FormProvider>
        </>
    )
}