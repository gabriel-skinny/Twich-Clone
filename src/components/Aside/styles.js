import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 60px;
  width: 250px;
  height: 100vh;
  background: #efeff1;
  
  header{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 10px 0;

    h1{
      font-size: 14px;
      margin-left: 10px;
    }

    svg{
      margin-right: 30px;
    }
  }

  main{
    margin-top:15px;
  }

  footer{
    margin: 15px;
    margin-bottom: 30px;

    small{
      color: #911cff;
      font-weight: normal;
      cursor: pointer;
      transition: all 0.2s;

      &:hover{
        text-decoration: underline;
      }
    }
  }

  div.input-footer{
    border-top: 1px solid #ccc;
    position: relative;
    bottom: -120px;
    padding: 10px 10px;

    input{
      width: 230px;
      border: 0;
      background: #d7d7d9;
      padding: 7px 20px;
      border-radius: 5px;
      font-size: 14px;
    }
  }

`;
