import styled from 'styled-components';

export const Container = styled.div`
  height: 300px;
  width: 160px;
  margin-left: 10px;
  margin-top: 10px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

  img{
    width: 150px;
    height: 200px;
    transition: all 0.3s;

    &:hover{
      box-shadow: -5px 5px 0px 0px  #911cff, 0px 5px 0px 0px #911cff, -5px 0px 0px 0px  #911cff;
      transform: translate(5px, -5px);
    }
  }

  h4{
    font-size: 15px;
  }

  p{
    font-size: 13px;
    margin-top: 5px;
    color:#616161;
  }

  div.tags{
    margin-top: 5px;
    display: flex;
    align-items: center;
    justify-content: space-around;

    h5{
      color: #3b3b3b;
      background: #eaeaeb;
      border-radius: 10px;
      padding: 2px 5px;
    }
  }
`;
