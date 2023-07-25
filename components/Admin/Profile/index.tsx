import { FormProvider, useForm } from 'react-hook-form';
import styles from './profile.module.scss';
import { NormalInput } from '@/components/Common/Inputs/NormalInput';
import { FormTitle } from '@/components/Common/Inputs/InputTitle';
import { NormalButton } from '@/components/Common/Inputs/NormalButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import ModalPopup from '@/components/Common/Modal';
import { ForgotPassword } from '@/components/ForgotPassword';
import { useState } from 'react';
import { AddCard } from '@/components/AddCard';
const resetData = () => ({ firstname: '' });
export default function Profile() {
    const methods = useForm({ defaultValues: { ...resetData() } });
    const [modal, setModal] = useState(false)
    const [ModalTemplate, setModalTemplate] = useState("Card")
    const handleModalClose = () => {
        setModal(!modal);
    }
    const handleModalOpen = (template : string) =>{
        setModalTemplate(template)
        setModal(true)
    }
    const handleModalSumbit = () => {
        console.log("sumbit")
        setModal(false);
    }
    const onSubmit = (values: any) => {
        console.log('submit', values);
    }
    return (
        <>
            <div className={styles.profilePage}>
                <h3 className='pb-2'>Profile</h3>
                <div className="container-fuild g-0">
                    <FormProvider {...methods}>
                        <form onSubmit={methods.handleSubmit(onSubmit)}>
                            <div className="row g-0">
                                <div className="col-lg-5 col-md-6 col-12">
                                    <NormalInput
                                        name="firstname"
                                        label="First Name"
                                        type="input"
                                        required={true}
                                        placeholder="Caroline "
                                    />
                                </div>
                                <div className="ms-lg-5 col-lg-5 col-md-6 col-12">
                                    <NormalInput
                                        name="lastname"
                                        label="Last Name"
                                        type="input"
                                        required={true}
                                        placeholder="Dutka "
                                    />
                                </div>

                            </div>
                            <div className="row g-0">
                                <div className="col-lg-5 col-md-6 col-12">
                                    <NormalInput
                                        name="email"
                                        label="Email"
                                        type="email"
                                        required={true}
                                        placeholder="Carolinedutka@yahoo.com"
                                    />
                                </div>
                                <div className="ms-lg-5 col-lg-5 col-md-6 col-12">
                                    <NormalInput
                                        name="phone"
                                        label="Phone"
                                        type="tel"
                                        required={true}
                                        placeholder="(815) 922-1762"
                                    />
                                </div>

                            </div>
                        </form>
                        <div className={styles.payment}>
                            <h3 className='pb-1'>Payment</h3>
                            <FormTitle label="Credit Card" required={false} />
                            <div className="d-flex flex-wrap">
                                <div className='p-3 ps-0'>
                                    <h5>xxxx-xxxx-xxxx-####</h5>
                                </div>
                                <div className="p-3">
                                    <h5>MO/YR</h5>
                                </div>
                                <div className="p-3">
                                    <h6>primary</h6>
                                </div>
                                <div className="p-3">
                                    <FontAwesomeIcon 
                                        className='cursor-pointer' 
                                        onClick={() => { alert("hi") }} 
                                        icon={faTrashCan} 
                                        size="xl" 
                                        style={{ color: "#00B2D9" }} 
                                    />
                                </div>
                            </div>
                            <h4 className='py-2' onClick={() => handleModalOpen("Card")}>
                                <FontAwesomeIcon 
                                    icon={faCirclePlus} 
                                    size='lg' 
                                /> Add Cards
                            </h4>
                            <ModalPopup 
                                handleClose={handleModalClose} 
                                handleYes={handleModalSumbit} 
                                // children={
                                //     ModalTemplate == "Card" 
                                //     ? <AddCard /> :<ForgotPassword 
                                // />} 
                                title={
                                    ModalTemplate == "Card" 
                                    ? "Add Card" : "Change Password"}  
                                buttonTitle={"Save " + ModalTemplate} 
                                show={modal} 
                            >{ ModalTemplate == "Card" ? <AddCard /> : <ForgotPassword /> }</ModalPopup>
                            <div className="py-2">
                                <NormalButton  
                                    onClick={() => console.log("clicked")} 
                                    type="submit" 
                                    disabled={false}
                                >Update</NormalButton>
                            </div>
                        </div>
                        <div className={styles.password}>
                            <h3 className='py-2'>Password</h3>
                            <FormTitle 
                                label="To update your password, click the link below." 
                                required={false} 
                            />
                            <h4 className='pt-2' 
                                onClick={() => handleModalOpen("Password")}
                            >Change Password &#62;&#62;</h4>
                        </div>
                    </FormProvider>
                </div>

            </div>
        </>

    )
}