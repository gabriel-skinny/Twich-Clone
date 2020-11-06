import React from 'react';

import { Container, Description, Profile, Resume, Tags } from './styles';

import livePreview from "../../assets/livePreview2.jpg"
import profileImg from "../../assets/profileImg.png"

function Channel(props) {
  return (
    <Container className={props.position} >
      <img className="game" src={livePreview} alt="livePreview"/>
          <Description className={props.position}>
            <Profile>
              <img  src={profileImg} alt="profile"/>
              <div className="especifications">
                <h3>Oliveira</h3>
                <p>Dead by Daylight</p>
                <p>1.122 espectadores</p>
              </div>
            </Profile>
            
            <Tags>
              <p>Portugues</p>
              <p>Modo:Sobrevivencia</p>
            </Tags>
            
            <Resume>
              <p>
                Olá, meu nome é lucas monano do canal lucas monatno, 
                meu nome é lucas monano do canal lucas monatno,
                Meu nome é lucas monano do canal lucas monatno,
                Meu nome é lucas monano do canal lucas monatno,
              </p>
            </Resume>
          </Description>
    </Container>
  );
}

export default Channel;