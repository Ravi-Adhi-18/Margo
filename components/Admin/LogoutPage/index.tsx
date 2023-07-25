import ModalPopup from "@/components/Common/Modal"
import { useRouter } from "next/router";
import { useState } from "react"

export const Logout = () => {
    const router = useRouter();
    const [modal, setModal] = useState(true)
    const handleModalClose = () => {
        setModal(!modal);
        router.push("/")
    }
    const handleModalSumbit = () => {
        console.log("sumbit")
        setModal(false);
        router.push("/dashboard/profile")
    }
    return(
        <>
            <ModalPopup
                handleClose={handleModalClose}
                handleYes={handleModalSumbit}
                title={"Logout"}
                buttonTitle={"Confirm Logout"}
                show={modal}
            > <h5 className="text-center p-4">Are you sure do you want to logout ?</h5></ModalPopup>
        </>
    )
}