import { FormProvider, useForm } from "react-hook-form";
import { NormalInput } from "../Common/Inputs/NormalInput";
import Image from "next/image";
const resetData = () => ({ firstname: '' });

export const AddCard = () => {
    const methods = useForm({ defaultValues: { ...resetData() } });
    const onSubmit= (values : any) =>{
        console.log('submit', values);
    }
    return (
        <div className="col-md-8 col-12">
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)}>
                    <NormalInput
                        name="addcard"
                        label="Card Information"
                        type="input"
                        required={true}
                        placeholder="xxxx-xxxx-xxxx-####"
                    />
                </form>
            </FormProvider>
            <div className="card my-5">
                <div className="card-body">
                    <div className="d-flex flex-wrap justify-content-between">
                        <Image
                         className="my-2 img-fluid"
                            src={'/images/stripe-safe.png'}
                            alt="Margo Logo"
                            width={300}
                            height={30}
                            blurDataURL={'/images/stripe-safe.png'}
                            placeholder="blur"
                        />
                        <Image
                        className="my-2 img-fluid"
                        src={'/images/stripe-button.png'}
                        alt="Margo Logo"
                        width={100}
                        height={40}
                        blurDataURL={'/images/stripe-button.png'}
                        placeholder="blur"
                    />
                        
                    </div>
                    <hr />
                    <Image
                        src={'/images/payment-icons.png'}
                        alt="Margo Logo"
                        width={480}
                        height={48}
                        blurDataURL={'/images/payment-icons.png'}
                        placeholder="blur"
                        layout="responsive"
                    />
                </div>
            </div>
        </div>
        
    );
  };
  