import React from 'react';
import Channel from '../Channel';

import { Container, Carousell } from './styles';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"

function Section() {


  return (
    <Container>
      <Carousell >
        <FaChevronLeft className="left"/>
        
        <Channel position={'prev'}/>
        <Channel position={'middle'}/>
        <Channel position={'next'}/>
      
        <FaChevronRight className="right" />
      </Carousell>
    </Container>
  );
}

export default Section;