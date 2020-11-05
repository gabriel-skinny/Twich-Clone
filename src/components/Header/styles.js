import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  z-index: 9999;
  height: 60px;
  width: 100%;
  border-bottom: 1px solid #ccc;
  background: #fff;
  box-shadow: 2px 0 5px #ccc;

  display: flex;
  align-items: center;
  justify-content: space-between;

  li{
    transition: all 0.3s;
    cursor: pointer;

    &:hover{
    color: #911cff;
  }
  }
`;

export const Left = styled.ul`
  width: 530px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  li{
    font-size: 18px;
    font-weight: bold;
    
    svg{
      margin-top: 10px;
    }
  }
`;

export const Middle = styled.div`
  div.input{
    width: 500px;
    padding: 10px 15px;
    background: #f5f5f5;
    border: 0;
    border-radius: 10px;
    
    display: flex;
    align-items: center;
    justify-content: space-between;

    input{
      width: 400px;
      background: transparent;
      border: 0;
  }
  }
`;

export const Right = styled.ul`
  width: 350px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  div.bits{
    background: #f5f5f5;
    padding: 10px 30px;
    border-radius: 10px;
  }

  div.img{
    position: relative;
    background: url("https://static-cdn.jtvnw.net/user-default-pictures-uv/cdd517fe-def4-11e9-948e-784f43822e80-profile_image-70x70.png");
    background-size: cover;
    border-radius: 50%;
    height: 30px;
    width: 30px;
    
    &:after{
      content: "";
      position: absolute;
      bottom: -2px;
      right: -2px;
      width: 8px;
      height: 8px;
      border: 2px solid #fff;
      background: #33ff7a;
      border-radius: 50%;
    }
  }
`;

