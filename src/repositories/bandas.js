import config from '../config';

const URL_BANDAS = `${config.URL_DB}/bandas`;

function getAll() {
  return fetch(`${URL_BANDAS}?`)
    .then(async (respostaDoServidor) => {
      if (respostaDoServidor.ok) {
        const resposta = await respostaDoServidor.json();
        return resposta;
      }
      throw new Error('nao foi possivel pegar os dados do servidor');
    });
}

function getAllWithVideos() {
  return fetch(`${URL_BANDAS}?_embed=videos`)
    .then(async (respostaDoServidor) => {
      if (respostaDoServidor.ok) {
        const resposta = await respostaDoServidor.json();
        return resposta;
      }
      throw new Error('nao foi possivel pegar os dados do servidor');
    });
}

export default {
  getAllWithVideos,
  getAll,
};
