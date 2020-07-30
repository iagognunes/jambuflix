import React from 'react';

function FormField({  label, name, onChange, type, value }){
    return(
        <div>
             <label>
                    {label}
                    <input
                        type={type}
                        value={value}
                        name={name}
                        onChange={onChange}
                    />
            </label>
        </div>

    )
}

export default FormField;


{/* <FormField
label="Nome da Categoria:"
name='nome'
type='text'
value={Values.nome}
onChange={handleChange}
/> */}