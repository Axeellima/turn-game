import styled from 'styled-components'
import backgroundBoard2 from '../../assets/imagem/redback2.jpg'
import blueBack from '../../assets/imagem/blueback.jpg'

export const StyledBoard = styled.div`
  display: grid;
  place-content: center;
  height: 100vh;
  width: 80%;
  background-image: url('https://t4.ftcdn.net/jpg/03/05/95/21/360_F_305952154_96qiEvv5kwpdDQ6EVNGSpcNt8IkQWh6W.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: -76px;

  .container {
    box-shadow: 0px 0px 50px 1px white;
    display: flex;
    flex-wrap: wrap;
    height: 620px;
    width: 620px;
    background-color: #8b8c7c;
    border: 10px solid #a9a9a9;
    border-style: groove;
    border-radius: 10px;
  }
  .home-black {
    width: 100px;
    height: 100px;
    background-image: url(${backgroundBoard2});
    background-size: 100%;
  }
  .can-move {
    box-shadow: inset 0px 0px 50px 5px #00ff0f;
  }
  .can-attack {
    box-shadow: inset 0px 0px 50px 5px #ff0000;
  }

  .home-white {
    width: 100px;
    height: 100px;

    background-image: url(${blueBack});
    background-size: 100%;
  }
`
