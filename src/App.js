import React from 'react';
import Menu from './Components/Menu';
import dados from './data/dados_iniciais.json';
import BannerMain from './Components/BannerMain';
import Carousel from './Components/Carousel';
import Footer from './Components/Footer';

function App() {
  return (
    <div style={{background: "#141414"}}>
      <Menu/>

    <BannerMain 
      videoTitle={dados.categorias[0].videos[0].titulo}
      url={dados.categorias[0].videos[0].url}
      videoDescription={"O que é Front-End?"}
    />

    <Carousel
      ignoreFirstVideo
      category={dados.categorias[0]}
    />
    <Carousel
      category={dados.categorias[1]}
    />
    <Carousel
      category={dados.categorias[2]}
    />
    <Carousel
      category={dados.categorias[3]}
    />

  <Carousel
      category={dados.categorias[4]}
    />

    </div>
  );
}

export default App;