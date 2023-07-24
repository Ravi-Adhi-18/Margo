import { FormProvider, useForm } from 'react-hook-form'
import styles from './style.module.scss'
import { NormalButton } from '@/components/Common/Inputs/NormalButton'
import { RadioCard } from '@/components/Common/Card';
import { CustomRadiobox } from '@/components/Common/CustomRadiobox';
const resetData = () => ({ firstname: '' });
export const Subscribe = () => {
    const methods = useForm({ defaultValues: { ...resetData() } });
    const onSubmit= (values : any) =>{
        console.log('submit', values);
    }
    return(
        <>
            <div className={styles.PlanPage}>
                <FormProvider {...methods}>
                    <form onSubmit={methods.handleSubmit(onSubmit)}>
                        <div className="d-flex flex-column">
                            <CustomRadiobox defaultBtn={true} value="1" type='checkbox' className='p-1' name='plan' title='One Time Laundry Service' onChange={() => { }} />
                            <RadioCard bgColor='orangeCard' className={"col-12 col-md-6 col-lg-4"}>
                                <h5 className="card-title">$ 1.50/lb</h5>
                                <p className="card-text">No Minimums | No Fees | No Tipping</p>
                           </RadioCard>
                            <CustomRadiobox value="2" type='checkbox' className='p-1' name='plan' title='Weekly Subscription' onChange={() => { }} />
                            <RadioCard bgColor='blueCard' className={"col-12 col-md-6 col-lg-4"}>
                                <h5 className="card-title">$ 70/month</h5>
                                <p className="card-text">Fill our reusable laundry bag with your laundry. No need to schedule orders, we’ll pickup every week.</p>
                                <p className="card-text">No Fees | No Tipping | Cancel Anytime</p>
                           </RadioCard>
                        </div>
                        <div className="pt-4">
                            <NormalButton type="submit" className='' disabled={true}>Update</NormalButton>
                        </div>
                    </form>
                </FormProvider>
            </div>
        </>
    )
}