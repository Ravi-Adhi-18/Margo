import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { FormTitle } from '@/components/Common/Inputs/InputTitle'
import { NormalButton } from '@/components/Common/Inputs/NormalButton'
import { NormalInput } from '@/components/Common/Inputs/NormalInput'
import { FormProvider, useForm } from 'react-hook-form';
import { NormalCheckbox } from '@/components/Common/Inputs/NormalCheckBox'
import ModalPopup from '@/components/Common/Modal'
import { NormalTextArea } from '@/components/Common/Inputs/NormalTextArea'
import { CustomDatePicker } from '@/components/Common/DatePicker'
const inter = Inter({ subsets: ['latin'] })
const resetData = () => ({ name: '' });
export default function Home() {
  const methods = useForm({ defaultValues: { ...resetData() } });

  const onSubmit= (values : any) =>{
    console.log('submit', values);
  }
  return (
    <>
      <Head>
        <title>Margo Laundry</title>
        <meta name="description" content="A Laundry Service For EveryOne" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Image
          src={'/images/logo.png'}
          alt="Margo Logo"
          width={180}
          height={100}
          blurDataURL={'/images/logo.png'}
          placeholder="blur"
        />
        <FormTitle label='FirstName' required={true} />
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <NormalInput
              name="name"
              label="Name"
              type= "input"
              placeholder="Enter here..."
            />
            <NormalTextArea
              name="description"
              label="Message (optional)"
              placeholder="Enter here"
              onChange={()=>{}}
            />
            <NormalCheckbox value="1" type='checkbox' name='terms and condition' title='Term and condtion' onChange={() => {}} />
            <NormalButton
                className=""
                type="submit"
                // variant="primary"
                disabled={false}
              >
                buttonTitle
              </NormalButton>
          </form>
          <CustomDatePicker 
          name="date"
          label="Program date"
          id="date"
          autoComplete="off"
          allowFutureDates={true}
          allowPastDates={false}
        />
        </FormProvider>
        
       
        {/* <ModalPopup  show={true}/> */}
        <NormalButton variant='primary' onClick={()=> console.log("clicked")} type="submit" className='' disabled={false}>Click me</NormalButton>
    </>
  )
}
