import React from 'react';

import { Container, Detail } from './styles';
import livePreview from "../../assets/livePreview.jpg"
import profileImg from "../../assets/profileImg.png"

function Streamer() {
  return (
    <Container>
      <h3 className="aovivo">AO VIVO</h3>
      <img className="mainImg" src={livePreview} alt="livePreview"/>
      <span>36.900 espectadores</span>
      <Detail>
        <img src={profileImg} alt="profileImg"/>
        <div className="names">
          <h4>UM AMBIENTE DUVIDOSO</h4>
          <p>alanzoka</p>
          <p>Visage</p>
          <h5>Português</h5>
        </div>
      </Detail>
    </Container>
  );
}

export default Streamer;