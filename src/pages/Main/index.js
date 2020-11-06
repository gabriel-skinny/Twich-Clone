import React from 'react';
import Header from "../../components/Header"
import Aside from "../../components/Aside"
import Section from '../../components/Section';
import StreamersSection from '../../components/Streamers-Section';

import { Container, Content, Center } from './styles';


function Main() {
  return (
    <Container>
      <Header />
      <Content>
        <Aside />
        <Center>
          <Section />
          <StreamersSection />
        </Center>
      </Content>
    </Container>
  );
}

export default Main;