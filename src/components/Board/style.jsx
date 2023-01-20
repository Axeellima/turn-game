import styled from 'styled-components'

export const StyledBoard = styled.div`
  display: grid;
  place-content: center;
  height: 100vh;
  width: 80%;

  .container {
    display: flex;
    flex-wrap: wrap;
    height: 600px;
    width: 600px;
    background-color: white;
  }
  .home-black {
    background-color: black;
    width: 100px;
    height: 100px;
  }
  .home-white {
    background-color: white;
    width: 100px;
    height: 100px;
  }
`
