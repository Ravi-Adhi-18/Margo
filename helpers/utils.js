export const getFormErrorMessage = (errors, fieldArrayError, name) => {
    if (!name || !errors) return null;
  
    if (!fieldArrayError && name) {
      return errors[name];
    }
  
    return (
      !!errors[fieldArrayError.arrayName] &&
      errors[fieldArrayError.arrayName][fieldArrayError.index] &&
      typeof errors[fieldArrayError.arrayName][fieldArrayError.index][
        fieldArrayError.fieldName
      ] !== 'undefined' &&
      errors[fieldArrayError.arrayName][fieldArrayError.index][
        fieldArrayError.fieldName
      ]
    );
};

export const ternaryCondition = (val1, val2 = '', defaultValue = '') => {
  return val1 ? val2 : defaultValue;
};