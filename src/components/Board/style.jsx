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
    filter: invert(48%) sepia(13%) saturate(3207%) hue-rotate(130deg)
      brightness(95%) contrast(80%);
  }
  .can-attack {
    filter: grayscale(55%) sepia(100%) brightness(34%) hue-rotate(290deg)
      saturate(1000%) contrast(1000%);
  }

  .home-white {
    width: 100px;
    height: 100px;

    background-image: url(${blueBack});
    background-size: 100%;
  }
`
