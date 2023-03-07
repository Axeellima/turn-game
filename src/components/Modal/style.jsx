import styled from 'styled-components'

export const StyledModal = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  .container-modal {
    width: 700px;
    box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.5);
    background-color: #222222;
    padding: 0px 30px 10px 30px;
    border: 8px solid #a0522d;
    border-style: groove;
  }
  .class-modal {
    display: flex;
    padding-bottom: 40px;
  }
  .animation-assassin {
    width: 200px;
    background-color: rgba(0, 0, 0, 0.85);
  }
  .info-class {
    padding: 10px;
    background-color: #f5f0ab;
    color: black;

    width: 75%;
  }
  .animation-mage {
    width: 200px;
    height: 200px;
    background-color: rgba(0, 0, 0, 0.85);
  }
  .header-modal {
    margin-bottom: 15px;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 120px;
    color: white;
    align-items: center;
  }
  .header-modal img {
    width: 30px;
    height: 30px;
    position: relative;
    left: 240px;
    top: 5px;
  }

  .header-modal img:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
  .header-modal h1 {
    margin-left: 30px;
  }
`
