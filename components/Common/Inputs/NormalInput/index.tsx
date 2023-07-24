import { Form, InputGroup } from 'react-bootstrap';
import { ConnectForm } from '@/lib/context';
import { Controller } from 'react-hook-form';
import { getFormErrorMessage } from '@/helpers/utils';
import { FormErrorMessage } from '@/components/ErrorMessage';
import { NormalInputProps } from '@/types/types';
import styles from './style.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

export function NormalInput({
  label,
  type,
  name,
  rules,
  value,
  className = '',
  fieldArrayName,
  isIconClick,
  icon,
  helperIcon,
  required = false,
  ...restProps
}: NormalInputProps) {
  return (
    <ConnectForm>
      {({ errors, control }:any) => (
        <div className={`${styles.customNormalInput} ${className}`}>
          <Form.Group>
            {label && (
              <Form.Label className={styles.form_label} title={label}>
                {label}
                {required ? <span className="text-danger"> *</span> : ''}
              </Form.Label>
            )}
            <Controller
                name={name}
                control={control}
                rules={{ ...rules }}
                render={({ field: { onChange, value: fieldValue, ref, ...props } }) => (
                  <InputGroup>
                    <Form.Control
                      {...props}
                      onChange={onChange}
                      value={fieldValue}
                      ref={ref}
                      type={type}
                      {...restProps}
                    />
                     {icon && (
                      <div
                        className={
                          styles.helper_icon +
                          ' cursor-pointer'
                        }
                        onClick={(event) => isIconClick && isIconClick(event)}
                      >
                        <FontAwesomeIcon style={{color: "#00B2D9"}} icon={helperIcon ? faEye : faEyeSlash}/>
                      </div>
                  )}
                  </InputGroup>
                )}
              />
            <FormErrorMessage
                error={getFormErrorMessage(errors, fieldArrayName, name)}
            />
          </Form.Group>
        </div>
      )}
    </ConnectForm>
  );
}
