import { FormProvider, useForm } from 'react-hook-form'
import styles from './style.module.scss'
import { NormalInput } from '@/components/Common/Inputs/NormalInput';
import { NormalCheckbox } from '@/components/Common/Inputs/NormalCheckBox';
import { NormalTextArea } from '@/components/Common/Inputs/NormalTextArea';
import { NormalButton } from '@/components/Common/Inputs/NormalButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus, faClose } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
const resetData = () => ({ firstname: '' });
export default function Preferences() {
    const [unitDisplay, setUnitDisplay] = useState(false)
    const methods = useForm({ defaultValues: { ...resetData() } });
    const onSubmit= (values : any) =>{
        console.log('submit', values);
      }
    return (
        <>
        <div className={styles.preferencesPage}>
            <h3 className='py-3'>Pickup from</h3>
            <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
                <div className="d-flex flex-row justify-content-between col-12 col-lg-5 flex-wrap">
                    <NormalCheckbox value="1" type='checkbox' className='p-1' name='pickupfrom' title='Front Door' onChange={() => {}} />
                    <NormalCheckbox  value="2" type='checkbox' className='p-1' name='pickupfrom' title='Back Door' onChange={() => {}}/>
                    <NormalCheckbox  value="3" type='checkbox' className='p-1' name='pickupfrom' title='DoorMan' onChange={() => {}}/>
                </div>
                <h3 className='pt-4'>Pickup Instructions</h3>
                <div className="py-3">
                    <NormalTextArea onChange={() => {}} className="col-12 col-lg-5" name="pickupdetails" required={true} placeholder="Come to front door & buzz 303" />
                </div>
                {unitDisplay ? (
                    <>
                    <div className="d-flex">
                        <NormalInput
                            className='col-12 col-lg-5'
                            name="unitnumber"
                            label="Unit Number"
                            type="input"
                            required={unitDisplay}
                            placeholder="06 "
                        /> 
                        <FontAwesomeIcon onClick={()=>{ setUnitDisplay(false)}} style={{color: "#00B2D9"}} icon={faClose} size='lg' />
                    </div>
                       
                    </>
                    ):
                    <h5 className='py-2 cursor-pointer' onClick={()=>{ setUnitDisplay(true)}}> <FontAwesomeIcon style={{color: "#00B2D9"}} icon={faCirclePlus} size='sm' /> Add Unit Number</h5>
                }
                <div className="pt-4">
                    <NormalButton onClick={()=> console.log("clicked")} type="submit" className='' disabled={false}>Update</NormalButton>
                </div>
            </form>
        </FormProvider>
        </div>
        </>

    )
}