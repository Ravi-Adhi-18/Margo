import React from 'react';
import { Form } from 'react-bootstrap';
import styles from './style.module.scss';
import { InputTitle } from '@/types/types';

export function FormTitle({ label, className,required = false, bgColor ="" } : InputTitle) {
  let textColorClass = styles.blackTxt;

    if (bgColor === 'blueTxt') {
      textColorClass = styles.blueTxt;
    } else if (bgColor === 'orangeTxt') {
      textColorClass = styles.orangeTxt;
    }
  return (
    <React.Fragment>
      {label && (
        <Form.Label className={`${styles.form_label} ${textColorClass} ${className}`} title={label}>
          {label}
          <span className="text-danger">{required ? ' *' : ''}</span>
        </Form.Label>
      )}
    </React.Fragment>
  );
}

