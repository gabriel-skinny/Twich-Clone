import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const Carousell = styled.div`
  position: relative;
  width: 1550px;
  height: 400px;
  overflow: hidden;
  margin: auto;

  display: flex;
  align-items: center;
  justify-content: center;

  svg{
    position: absolute;
    top: 180px;
    transition: all 0.3s;

    &:hover{
      background: #ccc
    }
    
    &.left{
      left: 30px;
    }

    &.right{
      right: 60px;
    }
  }
`;


export const Description = styled.div`

`;