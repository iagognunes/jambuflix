import { useState } from 'react';

function useForm(valoresIniciais) {
  const [Values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setValues({
      ...Values,
      [chave]: valor,
    });
  }

  function handleChange(info) {
    setValue(
      info.target.getAttribute('name'),
      info.target.value,
    );
  }

  function clearForm() {
    setValues(valoresIniciais);
  }

  return {
    Values,
    handleChange,
    clearForm,
  };
}

export default useForm;
