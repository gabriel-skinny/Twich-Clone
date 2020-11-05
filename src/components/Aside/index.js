import React from 'react';
import { Container } from './styles';
import { FaArrowLeft } from "react-icons/fa"
import Profile from '../Profile';

function Aside() {
  return (
    <Container>
      <header>
        <h1>CANAIS SEGUIDOS</h1>
        <FaArrowLeft />
      </header>
      <main>
        <Profile />
        <Profile />
        <Profile />
        <Profile />
      </main>
      <footer>
        <small>Mostrar Mais</small>
      </footer>

      <header>
        <h1>CANAIS RECOMENDADOS</h1>
      </header>
      <main>
        <Profile />
        <Profile />
        <Profile />
        <Profile />
        <Profile />
        <Profile />
        <Profile />
      </main>
      <footer>
        <small>Mostrar Mais</small>
      </footer>

      <div className="input-footer">
        <input placeholder="Buscar amigos" type="text"/>
      </div>
    </Container>
  );
}

export default Aside;