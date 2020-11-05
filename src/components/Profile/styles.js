import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  cursor: pointer;

  display: flex;
  align-items: center;
  padding: 5px 10px;

  transition: all 0.3s;

  &:hover{
    background: rgba(0, 0, 0, 0.1);
  }

  div.img{
    width: 35px;
    height: 35px;
    background: url("https://static-cdn.jtvnw.net/jtv_user_pictures/8d7443d6-45cb-4d7b-9dda-3d066c4ea1ba-profile_image-70x70.png");
    background-size: cover;
    border-radius: 50%;
    margin-right: 10px;
  }

  div.names{

    h3{
      font-size: 16px;
    }

    p{
      font-size: 12px;
      color: #404040;
      font-weight: 200;
    }
  }

  div.views{
    margin-left: 15px;
    display: flex;
    align-items: center;

    span{
      font-size: 14px;
    }

    div.redCircle{
      width: 9px;
      height: 9px;
      background: red;
      border-radius: 50%;
      margin-right: 10px;
    }
  }
`;
