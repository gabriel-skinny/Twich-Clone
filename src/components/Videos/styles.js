import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 40px;
  
  h1{
    font-size: 20px;
    margin-left: 40px;
  }

  h2{
    margin-top: 40px;
    margin-left: 40px;
    font-size: 20px;
    
    b{
      color: #911cff;
    }
  }
`;

export const Content = styled.main`
  display: flex;
  padding: 0 30px;
  border-bottom: 1px solid #ddd;

  &:last-child{
    margin-bottom: 100px;
  }

  p{
    transition: all 0.3s;
    cursor: pointer;
    
    &:hover{
      color: #911cff !important;
    }
  }

  h4{
    transition: all 0.3s;
    cursor: pointer;
    
    &:hover{
      color: #911cff;
    }
  }

  h5{
    transition: all 0.3s;
    cursor: pointer;
    
    &:hover{
      background: #ccc !important;;
    }
  }
`