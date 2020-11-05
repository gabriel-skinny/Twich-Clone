import styled from 'styled-components';

export const Container = styled.div`
  height: 350px;
  position: relative;
  margin-top: 20px;
  margin-left: 10px;

  h3.aovivo{
    position: absolute;
    color: #fff;
    left: 15px;
    top: 10px;
    background: red;
    padding: 2px 5px;
    border-radius: 2px;
    font-size: 13px;
  }

  img.mainImg{
    width: 380px;
    height: 200px;
    transition: all 0.3s;

    &:hover{
      box-shadow: -5px 5px 0px 0px  #911cff, 0px 5px 0px 0px #911cff, -5px 0px 0px 0px  #911cff;
      transform: translate(5px, -5px);
    }
  }

  span{
    position: absolute;
    color: #fff;
    bottom: 165px;
    left: 15px;
    font-size: 12px;

    background: rgba(0, 0, 0, 0.5);
    padding: 1px 5px;
    border-radius: 2px;
  }
`;

export const Detail = styled.div`
  display: flex;
  
  img{
    width: 40px;
    height: 40px;
    margin-top: 5px;
  }

  div.names{
    margin-left: 20px;

    h4{
      margin-top: 5px;
      margin-bottom: 5px;
    }

     p{
      font-size: 14px;
      margin-bottom: 3px;
      color:#616161;
    }

    h5{
      color: #3b3b3b;
      background: #eaeaeb;
      width: 75px;
      padding: 5px;
      border-radius: 15px;
      font-size: 13px;
      margin-top: 10px;

      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;