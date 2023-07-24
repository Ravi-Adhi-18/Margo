import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { NormalButton } from '../Inputs/NormalButton';
import styles from './style.module.scss'
import { ModalPopupProps } from '@/types/types';

const ModalPopup = ({
  show = false,
  handleClose,
  handleYes,
  title = 'Forget password',
  children,
  buttonTitle
}: ModalPopupProps) => {
  return (
    <Modal
      show={show}
      // onHide={(event: any)=> handleClose(event)}
      className={styles.ModalPopup}
      size="lg"
      centered
    >
      <Modal.Header className={`${styles.ModalHeader}` + " border-bottom-0"}>
        <h3>{title}</h3>
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex flex-column align-items-center justify-content-center">
         {children}
        </div>
      </Modal.Body>
      <Modal.Footer className={`${styles.ModalFooter}`}>
        <NormalButton
          className=""
          bgColor='whiteBtn'
          disabled={false}
          onClick={(event) => handleYes(event)}
        >
          Cancel
        </NormalButton>
        <div className="ms-md-4">
          <NormalButton
            className=""
            disabled={false}
            onClick={handleClose}
          >
            {buttonTitle}
          </NormalButton>
        </div>


      </Modal.Footer>
    </Modal>
  );
};

export default ModalPopup;
