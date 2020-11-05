import styled from 'styled-components';

export const Container = styled.div`
  height: 250px;
  width:  750px;
  background: #fff;

  display: flex;
  align-items: center;

  &.prev{
    position: absolute;
    z-index: 1;
    left: 200px;  
  }
  &.middle{
    position: absolute;
    z-index: 10;
    box-shadow: 2px 2px 25px #000;
    height: 300px;
  }
  &.next{
    position: absolute;
    z-index: 1;
    right: 200px;

    img.game{
      width: 100%;
    }
  }

  img{
    height: 100%;
    width: 550px;
  }
`;

export const Description = styled.div`
  height: 100%;
  padding: 10px 10px 0 10px;

  &.next{
    display: none;
  }

`;

export const Profile = styled.div`
  display: flex;
  align-items: center;

    img{
      width: 40px;
      margin-right: 10px;
    }

    div.especifications{
      color: #911cff;

      h3{
        font-size: 15px;
      }
      p{
        font-size: 13px;

        &:nth-child(3){
          color: #000;
        }
      }
    }
`;

export const Resume = styled.div`
  width: 190px;
  margin-top: 10px;
  font-size: 13px;
`;

export const Tags = styled.div`
  font-size: 12px;
  font-weight: bold;
  color: #333;
  margin-top: 10px;

  p{
    height: 20px;
    width: 80px;

    padding: 5px 10px;
    margin-top: 5px;
    
    background: #f5f5f5;
    border-radius: 10px;

    display: flex;
    align-items: center;
    justify-content: center;

    &:nth-child(2){
      width: 140px;
    }
  }
`;