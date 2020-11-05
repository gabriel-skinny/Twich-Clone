import React from 'react';
import Header from "../../components/Header"
import Aside from "../../components/Aside"
import Section from '../../components/Section';
import Videos from '../../components/Videos';

import { Container, Content, Center } from './styles';


function Main() {
  return (
    <Container>
      <Header />
      <Content>
        <Aside />
        <Center>
          <Section />
          <Videos />
        </Center>
      </Content>
    </Container>
  );
}

export default Main;