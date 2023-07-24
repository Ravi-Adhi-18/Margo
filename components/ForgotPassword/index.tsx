import { FormProvider, useForm } from "react-hook-form";
import { NormalInput } from "../Common/Inputs/NormalInput";
import { useState } from "react";
const resetData = () => ({ firstname: '' });

export const ForgotPassword = () => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const methods = useForm({ defaultValues: { ...resetData() } });
    const onSubmit= (values : any) =>{
        console.log('submit', values);
    }
    return (
        <div className="col-md-7 col-12">
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)}>
                    <NormalInput
                        name="oldpassword"
                        label="Old Password"
                        type={isPasswordVisible ? 'text' : 'password'}
                        icon={true}
                        helperIcon={isPasswordVisible}
                        isIconClick={() => {
                            setIsPasswordVisible(!isPasswordVisible)
                        }}
                        required={true}
                    />
                    <NormalInput
                        name="newpassword"
                        label="New Password"
                        type={isPasswordVisible ? 'text' : 'password'}
                        helperIcon={isPasswordVisible}
                        icon={true}
                        isIconClick={() =>{
                            setIsPasswordVisible(!isPasswordVisible)
                        }}
                        required={true}
                    />
                    <NormalInput
                        name="confirmpassword"
                        label="Confirm Password"
                        type={isPasswordVisible ? 'text' : 'password'}
                        helperIcon={isPasswordVisible}
                        icon={true}
                        isIconClick={() =>{
                            setIsPasswordVisible(!isPasswordVisible)
                        }}
                        required={true}
                    />
                </form>
            </FormProvider>
        </div>
        
    );
  };
  