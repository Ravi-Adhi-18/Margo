import { Form, InputGroup } from 'react-bootstrap';
import { ConnectForm } from '@/lib/context';
import { Controller } from 'react-hook-form';
import { getFormErrorMessage } from '@/helpers/utils';
import { FormErrorMessage } from '@/components/ErrorMessage';
import { FormTitle } from '../InputTitle';
import styles from "./style.module.scss"
import { NormalTextAreaProps } from '@/types/types';

export function NormalTextArea({
  label,
  name,
  rules,
  value,
  type,
  className = '',
  fieldArrayName,
  placeholder = '',
  required = false,
  onChange,
  ...restProps
}: NormalTextAreaProps) {
  return (
    <ConnectForm>
      {({ errors, control }: any) => (
        <div className={`${className} ${styles.customNormalTextArea}`}>
          <Form.Group>
            {label && 
              <FormTitle label={label} required={required} />
            }
            <Controller
              name={name}
              control={control}
              rules={{ ...rules }}
              render={({
                field: { onChange, value: fieldValue, ref, ...props },
              }) => (
                <InputGroup>
                  <Form.Control
                    className="bg-white"
                    {...props}
                    onChange={onChange}
                    value={fieldValue}
                    ref={ref}
                    placeholder={placeholder}
                    {...restProps}
                    as="textarea"
                    rows={6}
                  />
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


