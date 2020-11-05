import React from 'react';

import { Container, Left, Right, Middle } from './styles';
import { FaTwitch, FaCrown, FaBox, FaCommentAlt, FaSearch } from "react-icons/fa"

function Header() {
  return (
    <Container>
      <Left>
        <li>
          <FaTwitch fill="#911cff" size={30}/>
        </li>
        <li>Seguindo</li>
        <li>Procurar</li>
        <li>Esports</li>
        <li>Música</li>
      </Left>

      <Middle>
        <div className="input">
          <input placeholder="Buscar" type="text"/>
          <FaSearch size={30} fill="#ccc"/>
        </div>
      </Middle>

      <Right>
        <li>
          <FaCrown size={30}/>
        </li>
        <li>
          <FaBox size={20}/>
        </li>
        <li>
          <FaCommentAlt size={20}/>
        </li>
        <li>
          <div className="bits">
            <h4>Compra Bits</h4>
          </div>
        </li>
        <li>
          <div className="img"></div>
        </li>
      </Right>
    </Container>
  );
}

export default Header;