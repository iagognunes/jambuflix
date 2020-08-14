import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../Components/PageDefault';
import FormField from '../../../Components/FormField';
import Button from '../../../Components/Button';
import useForm from '../../../hooks/useForm';

//parei em 17:30 do ultimo video

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const { handleChange, Values, clearForm } = useForm(valoresIniciais);

  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const URL_DB = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/bandas'
      : 'https://jambuflix.herokuapp.com/bandas';
    fetch(URL_DB)
      .then(async (respostaDoServidor) => {
        const resposta = await respostaDoServidor.json();
        setCategorias([
          ...resposta,
        ]);
      });
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro da Banda:
        {Values.nome}
      </h1>

      <form onSubmit={function handleSubmit(info) {
        info.preventDefault();
        setCategorias([
          ...categorias,
          Values,
        ]);

        clearForm();
      }}
      >

        <FormField
          label="Nome da Banda:"
          name="nome"
          type="text"
          value={Values.nome}
          onChange={handleChange}
        />

        <FormField
          label="Descrição:"
          name="descricao"
          type="textarea"
          value={Values.descricao}
          onChange={handleChange}
        />

        <FormField
          label="Cor:"
          name="cor"
          type="color"
          value={Values.cor}
          onChange={handleChange}
        />

        <Button>
          Cadastrar
        </Button>
      </form>

      {categorias.length === 0 && (
        <div>
          Loading...
        </div>
      )}

      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria.titulo}`}>
            {categoria.titulo}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
