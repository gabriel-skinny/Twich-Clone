import React from 'react';

import Streamer from "../Streamer";
import Games from '../Games';

import { Container, Content } from './styles';

function Videos() {
  return (
    <Container>
      <h1>Canais ao vivo que achamos que vai gostar</h1>
      <Content>
        <Streamer />
        <Streamer />
        <Streamer />
        <Streamer />
      </Content>

      <h2><b>Categorias</b> que achamos que vai gostar</h2>
      <Content>
        <Games />
        <Games />
        <Games />
        <Games />
        <Games />
        <Games />
        <Games />
        <Games />
        <Games />
      </Content>

      <h2>Comunidades maiores recomendadas</h2>
      <Content>
        <Streamer />
        <Streamer />
        <Streamer />
        <Streamer />
      </Content>

      <h2>Canais de <b>Ciência e tecnlogia</b> recomendados</h2>
      <Content>
        <Streamer />
        <Streamer />
        <Streamer />
        <Streamer />
      </Content>
    </Container>
  );
}

export default Videos;