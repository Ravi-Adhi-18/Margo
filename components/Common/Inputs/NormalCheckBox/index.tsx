import { Form, InputGroup } from 'react-bootstrap';
import { ConnectForm } from '@/lib/context';

import { Controller } from 'react-hook-form';
import { NormalCheckboxProps } from '@/types/types';
import styles from './style.module.scss'
export function NormalCheckbox({
  type,
  name,
  rules,
  value,
  className = '',
  fieldArrayName,
  title = '',
  onChange,
  ...restProps
}: NormalCheckboxProps) {
  return (
    <ConnectForm>
      {({ control } :any) => (
        <div className={`${styles.customRadio} ${className}`}>
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
        </div>
      )}
    </ConnectForm>
  );
}

