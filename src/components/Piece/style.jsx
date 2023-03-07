import styled from 'styled-components'

export const PieceStyle = styled.div`
  width: 100%;
  height: 100%;

  .piece-img {
    width: 100px;
    height: 100px;
    display: block;
  }
  .piece-img:hover {
    cursor: grab;
  }
  .${(props) => props.i} {
    border: 1px solid yellow;
  }
  h1 {
    text-align: center;
    width: 15px;
    height: 15px;
    color: white;
    font-size: 16px;
    background-color: rgba(15, 15, 15, 0.5);
    border-radius: 100%;
    position: relative;
    bottom: 100px;
  }
  .attack {
    position: relative;
    width: 100px;
    height: 100px;
    bottom: 120px;
    display: block;
  }
  img {
    display: none;
  }
`
