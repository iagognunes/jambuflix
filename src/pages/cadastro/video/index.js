import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../Components/PageDefault';
import useForm from '../../../hooks/useForm';
import FormField from '../../../Components/FormField';
import Button from '../../../Components/Button';
import videosRepository from '../../../repositories/videos';
import bandasRepository from '../../../repositories/bandas';

function CadastroVideo() {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const { Values, handleChange } = useForm({
    titulo: 'titulo padrao!',
    url: 'https://www.youtube.com/watch?v=Py3J_a1OVFo',
    bandas: 'Noturna',
  });
//parei em 1h de video
  useEffect(() => {
    bandasRepository
      .getAllWithVideos()
      .then((bandasFromServer) => {
        setCategorias(bandasFromServer);
      });
  }, []);

  console.log(categorias);

  return (
    <PageDefault>
      <h1>Cadastro de Video</h1>

      <form onSubmit={(event) => {
        event.preventDefault();
        videosRepository.create({
          titulo: Values.titulo,
          url: Values.url,
          bandaId: 1,
        })
          .then(() => {

          });
        history.push('/');
      }}
      >
        <FormField
          label="Titulo do Video:"
          name="titulo"
          type="text"
          value={Values.titulo}
          onChange={handleChange}
        />

        <FormField
          label="Url do Video:"
          name="url"
          type="text"
          value={Values.url}
          onChange={handleChange}
        />

        <FormField
          label="Banda:"
          name="bandas"
          type="text"
          value={Values.bandas}
          onChange={handleChange}
        />

        <Button type="submit">
          Cadastrar
        </Button>

      </form>

      <Link to="/jambuadmin/cadastroCategoria">
        Cadastrar Categoria
      </Link>
    </PageDefault>
  );
}

export default CadastroVideo;
