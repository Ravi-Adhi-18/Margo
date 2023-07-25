import { FormProvider, useForm } from 'react-hook-form'
import styles from './style.module.scss'
import { NormalButton } from '@/components/Common/Inputs/NormalButton'
import { RadioCard } from '@/components/Common/Card';
import { CustomRadiobox } from '@/components/Common/CustomRadiobox';
import { Header } from '@/components/Header';
import Footer from '@/components/Footer';
import { useRouter } from 'next/router';
const resetData = () => ({ firstname: '' });
export const PlanPage = () => {
    const methods = useForm({ defaultValues: { ...resetData() } });
    const onSubmit= (values : any) =>{
        console.log('submit', values);
    }
    const router = useRouter()
    return(
        <>
            <Header />
            <div className={`${styles.PlanPage} mt-4`}>
                <FormProvider {...methods}>
                    <form onSubmit={methods.handleSubmit(onSubmit)}>
                        <div className="d-flex flex-column">
                            <CustomRadiobox value="1" type='checkbox' className='p-1' name='plan' title='Repeat Previous Order' onChange={() => { }} />
                            <RadioCard bgColor='whiteCard' className={"col-12 col-md-10 ms-md-5"}>
                                <h5 className="card-title">$1.50/lb</h5>
                                <p className="card-text py-3">No Minimums | No Fees | No Tipping</p>
                           </RadioCard>
                           <div className="p-4 mb-3">
                            <h2>Ready for a little more commitment? Try our subscription!</h2>
                           </div>
                            <CustomRadiobox value="2" type='checkbox' className='p-1' name='plan' title='Subscribe & Save' onChange={() => { }} />
                            <RadioCard bgColor='whiteCard' className={"col-12 col-md-10 ms-md-5"}>
                                <h5 className="card-title">$79/month</h5>
                                <h3 className='mt-3'> &bull; 50lbs of laundry<span>(over 20% discount!)</span></h3>
                                <h3>&bull; Recurring weekly pickups</h3>
                                <h3>&bull; 10% discount on any laundry over the monthly 50lbs</h3>
                                <p className="card-text py-3">No Fees | No Tipping | Cancel Anytime</p>
                           </RadioCard>
                        </div>
                        <div className="pt-4">
                        <NormalButton
                            className="px-5 py-3"
                            onClick={() => { router.push("/user/loading")}}
                            type="submit"
                            disabled={false}
                        >Continue</NormalButton>
                        </div>
                    </form>
                </FormProvider>
            </div>
            <Footer />
        </>
    )
}