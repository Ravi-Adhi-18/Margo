import { Form } from 'react-bootstrap';
import moment from 'moment';
import { Controller } from 'react-hook-form';

import { ConnectForm } from '@/lib/context';
// import { withDateData } from '@/helpers/DateHOC';

import 'react-datepicker/dist/react-datepicker.css';
import { getFormErrorMessage } from '@/helpers/utils';
import { FormErrorMessage } from '@/components/ErrorMessage';
import ReactDatePicker from 'react-datepicker';

moment.defaultFormat = 'DD / MM / YYYY';
moment.defaultFormatUtc = 'DD / MM / YYYY';


export function CustomDatePicker({
  disabled = false,
  className = '',
  name,
  rules = {},
  label,
  allowFutureDates = true,
  renderCustomHeader,
  fieldArrayName,
  required = false,
  allowPastDates = true,
} : any){
  return (
    <ConnectForm>
      {({ control, errors }: any) => (
        <div className="mb-3 pb-1">
          <div className={`position-relative ${className} w-100`}>
            {label && (
              <Form.Label className="form_label" title={label}>
                {label}
                {required ? ' *' : ''}
              </Form.Label>
            )}
            <Controller
              name={name}
              control={control}
              rules={{ ...rules }}
              render={({
                field: { onChange: fieldOnChange, onBlur, value: fieldValue },
              }) => {
                return (
                  <ReactDatePicker 
                    customInput={<input className="w-100" />}
                    onChange={(val) => {}}
                    selected={
                      fieldValue
                        ? moment(moment(fieldValue, 'DD/MM/YYYY')).toDate()
                        : null
                    }
                    onBlur={onBlur}
                    formatWeekDay={(nameOfDay) => nameOfDay.substr(0, 1)}
                    wrapperClassName="custom-datepicker-wrapper mb-0 custom-outline-input position-relative"
                    className="custom-datepicker"
                    dateFormat="dd/MM/yyyy"
                    renderCustomHeader={renderCustomHeader}
                    disabled={disabled}
                    popperPlacement="bottom-start"
                    placeholderText="Select Date"
                    inline 
                  />
                );
              }}
            />
          </div>
          <FormErrorMessage
            error={getFormErrorMessage(errors, fieldArrayName, name)}
          />
        </div>
      )}
    </ConnectForm>
  );
};


