import { NormalButton } from '@/types/types';
import BootstrapButton from 'react-bootstrap/Button';
import styles from './style.module.scss'

export function NormalButton({
    disabled,
    children,
    className,
    onClick,
    bgColor="blueBtn",
    type = "button",
    ...restProps
  } : NormalButton) {
    let buttonColorClass = styles.customBtn;

    if (bgColor === 'blueBtn') {
      buttonColorClass = styles.blueBtn;
    } else if (bgColor === 'whiteBtn') {
      buttonColorClass = styles.whiteBtn;
    }else if (bgColor === 'greenBtn') {
      buttonColorClass = styles.greenBtn;
    }
    if (disabled) {
      buttonColorClass = styles.disableBtn;
    } 

    return (
    <button
      disabled={disabled}
      className={`${buttonColorClass}` + ` ${className}`}
      type={type}
      onClick={onClick}
      {...restProps}
    >
      {children}
    </button>
    )
}