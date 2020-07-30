import React from 'react';
import Menu from '../../Components/Menu'
import Carousel from '../../Components/Carousel'
import Footer from '../../Components/Footer'
import BannerMain from '../../Components/BannerMain'
import dadosIniciais from '../../data/dados_iniciais.json'

function Home() {
  return (
    <div style={{ background: "#141414" }}>
      <Menu />

      <BannerMain 
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"Nossa Bossa faz parte do segundo EP, chamado O Lugar Onde Envelhecemos."}
      />

      <Carousel 
        //ignoreFirstVideo
        category={dadosIniciais.categorias[1]}
      />

      <Carousel 
        category={dadosIniciais.categorias[2]}
      />

      <Carousel 
        category={dadosIniciais.categorias[3]}
      />

      <Carousel 
        category={dadosIniciais.categorias[4]}
      />

      <Carousel 
        category={dadosIniciais.categorias[5]}
      />
      
      <Footer />
    </div>
  );
}

export default Home;
