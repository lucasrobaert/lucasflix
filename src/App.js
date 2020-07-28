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
      videoDescription={"O que é Front-End? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa!"}
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

<Carousel
      category={dados.categorias[5]}
    />

    <Footer/>

    </div>
  );
}

export default App;
