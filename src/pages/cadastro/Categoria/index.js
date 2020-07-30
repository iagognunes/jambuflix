import React, { useState } from 'react';
import PageDefault from '../../../Components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../Components/FormField';

function CadastroCategoria() {
    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: '',
    }

    const [categorias, setCategorias] = useState([]);
    const [Values, setValues] = useState(valoresIniciais);

    function setValue(chave, valor) {
        setValues({
            ...Values,
            [chave]: valor,
        })
    }

    function handleChange(info) {
        setValue(
            info.target.getAttribute('name'),
            info.target.value
        );
    }

    return (
        <PageDefault>
            <h1>Cadastro de Categoria: {Values.nome}</h1>

            <form onSubmit={function handleSubmit(info) {
                info.preventDefault();
                setCategorias([
                    ...categorias,
                    Values
                ]);

                setValues(valoresIniciais);
            }}>

                <FormField
                    label="Nome da Categoria:"
                    name='nome'
                    type='text'
                    value={Values.nome}
                    onChange={handleChange}
                />

                <div>
                    <label>
                        Descrição:
            <textarea
                            type="text"
                            name="descricao"
                            value={Values.descricao}
                            onChange={handleChange}
                        />
                    </label>
                </div>

                <div>
                    <label>
                        Cor:
            <input
                            type="color"
                            name="cor"
                            value={Values.cor}
                            onChange={handleChange}
                        />
                    </label>
                </div>

                <button>
                    Cadastrar
          </button>
            </form>

            <ul>
                {categorias.map((categoria, indice) => {
                    return (
                        <li key={`${categoria}${indice}`}>
                            {categoria.nome}
                        </li>
                    )
                })}
            </ul>


            <Link to="/">
                Ir para home
        </Link>
        </PageDefault>
    )
}

export default CadastroCategoria;