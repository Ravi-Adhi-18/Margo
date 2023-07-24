import { Form, InputGroup, Stack } from 'react-bootstrap';
import { ConnectForm } from '@/lib/context';

import { Controller } from 'react-hook-form';
import { NormalCheckboxProps } from '@/types/types';
import styles from './style.module.scss'
import { NormalButton } from '../Inputs/NormalButton';
export function CustomRadiobox({
  type,
  name,
  rules,
  value,
  className = '',
  fieldArrayName,
  title = '',
  defaultBtn,
  onChange,
  ...restProps
}: NormalCheckboxProps) {
  return (
    <ConnectForm>
      {({ control } :any) => (
        <div className={`${styles.customRadio} ${className}`}>
<div className="d-flex flex-wrap align-items-center">
<Form.Group>
            <Controller
                name={name}
                control={control}
                rules={...rules}
                render={({ field }) => (
                  <InputGroup>
                    <Form.Check
                      {...restProps}
                      {...field}
                      inline
                      className={styles.RadioStyle}
                      type="radio"
                      label={title}
                    />
                  </InputGroup>
                )}
              />
          </Form.Group>
            {defaultBtn && <NormalButton type="submit" className='' disabled={false} bgColor="greenBtn">Current</NormalButton> }
</div>
          
        </div>
      )}
    </ConnectForm>
  );
}

