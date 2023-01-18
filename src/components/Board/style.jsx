import styled from 'styled-components'

export const StyledBoard = styled.div`
  .container {
    position: fixed;
    width: 100%;
    height: 100%;
    align-items: center;
    margin-top: 18px;
  }
  .columnA,
  .columnB,
  .columnC,
  .columnD,
  .columnE,
  .columnF {
    display: flex;
    justify-content: center;
  }
  .home-black {
    background-color: black;
    width: 150px;
    height: 150px;
  }
  .home-white {
    background-color: white;
    width: 150px;
    height: 150px;
  }
`
