import React from 'react';

import { Container } from './styles';

import scientImg from "../../assets/ScienteImg.jpg"

function Games() {
  return (
    <Container>
      <img src={scientImg} alt="sciensimg"/>
      <h4>Ciencia e tecnologia</h4>
      <p>2.834 espectadores</p>
      <div className="tags">
        <h5>Vida real</h5>
        <h5>Creative</h5>
      </div>
    </Container>
  );
}

export default Games;