import React, { useEffect, useState } from 'react';
import Carousel from '../../Components/Carousel';
import BannerMain from '../../Components/BannerMain';
import PageDefault from '../../Components/PageDefault';
import bandasRepository from '../../repositories/bandas';

function Home() {
  const [dadosIniciais, setDadosIniciais] = useState([]);

  useEffect(() => {
    bandasRepository.getAllWithVideos()
      .then((bandasComVideos) => {
        console.log(bandasComVideos);
        setDadosIniciais(bandasComVideos);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <PageDefault paddingAll={0}>
      {dadosIniciais.length === 0 && (<div>Loading...</div>)}

      {dadosIniciais.map((categoria, indice) => {
        if (indice === 0) {
          return (
            <div key={categoria.id}>
              <BannerMain
                videoTitle={dadosIniciais[0].videos[3].titulo}
                url={dadosIniciais[0].videos[3].url}
                videoDescription="Nossa Bossa faz parte do segundo EP, chamado O Lugar Onde Envelhecemos."
              />

              <Carousel
                category={dadosIniciais[0]}
              />
            </div>
          );
        }

        return (
          <Carousel
            key={categoria.id}
            category={categoria}
          />
        );
      })}
    </PageDefault>
  );
}

export default Home;
