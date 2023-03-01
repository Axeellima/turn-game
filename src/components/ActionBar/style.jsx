import styled from 'styled-components'

export const ActionBarStyle = styled.div`
  width: 350px;
  height: 130px;
  background-color: #f5b371;
  border: 8px solid #a0522d;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  position: absolute;
  left: 50%;
  right: 50%;
  align-items: center;
  text-align: center;
  bottom: 10px;

  h1 {
    width: 100%;
  }
  button {
    color: white;
    font-size: 16px;
    border-radius: 3px;
    width: 100px;
    height: 45px;
    transition: all 0.1s linear;
  }
  button:hover {
    transform: scale(1.1);
    border: 4px solid white;
  }
  .atk {
    background-color: #b22222bf;
  }
  .move {
    background-color: #228b22;
  }
`
