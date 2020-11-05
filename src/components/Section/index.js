import React from 'react';
import Channel from '../Channel';

import { Container, Carousell } from './styles';

function Section() {
  return (
    <Container>
      <Carousell>
        <Channel position={'prev'}/>
        <Channel position={'middle'}/>
        <Channel position={'next'}/>
      </Carousell>
    </Container>
  );
}

export default Section;