import styled from 'styled-components'
import backgroundOver from '../../assets/imagem/gameover.jpg'

export const StyledGameOver = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${backgroundOver});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  .container {
    margin-bottom: 50px;
  }
  h1 {
    font-size: 50px;
    color: ${(props) => (props.winner === 'Rogue' ? 'green' : 'blue')};
  }
  button {
    margin-top: 15px;
    padding: 15px;
    border-radius: 8px;
    width: 200px;
    font-size: 28px;
    color: ${(props) => (props.winner === 'Rogue' ? 'green' : 'blue')};
  }
  button:hover {
    background-color: #b0c4de;
    transform: scale(1.1);
  }
  .gago {
    margin-top: 30px;
  }
  .contat {
    position: absolute;
    top: 5%;
    left: 5%;
    text-align: center;
    a {
      font-size: 30px;
      text-decoration: none;
      padding: 10px;
    }
    .icon {
      font-size: 25px;
      text-align: center;
    }
  }
`
