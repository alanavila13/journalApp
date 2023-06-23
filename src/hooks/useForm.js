import { useEffect, useState } from "react";

export const useForm = (initialForm = {}, formValidations = {}) => {
  const [formValidation, setFormValidation] = useState({});
  const [formState, setFormState] = useState(initialForm);

  useEffect(() => {
    createValidators()
  }, [formState])
  

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onResetForm = () => {
    setFormState(initialForm);
  };

  const createValidators = () => {
    const formCheckedValues = {}

    for (const formField of Object.keys(formValidations)) {
        const [fn, errorMessage = 'Este campo es requerido'] = formValidations[formField]

        formCheckedValues[`${formField}Valid`] = fn(formState[formField]) ? null : errorMessage
        setFormValidation(formCheckedValues)
    }
  };

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,
    ...formValidation
  };
};