import styled from 'styled-components'

export const PieceStyle = styled.div`
  width: 100%;
  height: 100%;

  .piece-img {
    width: 100px;
    height: 100px;
  }
  .piece-img:hover {
    cursor: grab;
  }
  .${(props) => props.i} {
    border: 1px solid yellow;
  }
`
