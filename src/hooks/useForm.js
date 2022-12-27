import { useCallback, useState } from "react";

const useForm = (initialState) => {
  const [formValue, setFormValue] = useState(initialState);

  const handleFormValueChange = useCallback((e) => {
    const { name, value } = e.target;

    setFormValue((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }, []);

  return [formValue, setFormValue, handleFormValueChange];
};

export default useForm;
