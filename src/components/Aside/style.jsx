import styled from 'styled-components'
import papiru from '../../assets/imagem/fundoselect.png'

export const StyledAside = styled.aside`
  width: 400px;
  height: 100vh;

  .container {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 35px;
    justify-content: center;
    background-color: #f5b371;
    border: 8px solid #a0522d;
    border-style: groove;
    background-size: 500%;
    background-repeat: no-repeat;
    background-position: center center;
    background-image: url('https://assetstorev1-prd-cdn.unity3d.com/package-screenshot/fb45b511-c02f-4e4f-b19e-da1f61bcd1e5.webp');
  }

  .mainRogue {
    background-image: url('https://i.pinimg.com/originals/6e/84/5a/6e845ab8e8989134c9d4021bc1cc61dd.gif');
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center center;
    width: 320px;
    height: 250px;
    display: flex;
    align-items: center;
    cursor: pointer;
    border: 8px solid #a0522d;
    border-style: groove;
  }

  .mainMage {
    background-image: url('https://cdnb.artstation.com/p/assets/images/images/047/517/381/original/inkpendude-portal-calm.gif?1647794880');
    background-size: 110%;
    background-repeat: no-repeat;
    background-position: center center;
    width: 320px;
    height: 250px;
    display: flex;
    align-items: center;
    cursor: pointer;
    border: 8px solid #a0522d;
    border-style: groove;
  }

  .imgRogue,
  .imgMage {
    width: 200px;
    height: 200px;
    user-select: none;
  }

  .textRogue,
  .textMage {
    margin-left: 10px;
    width: 90px;
    color: white;
    text-align: center;
    user-select: none;
  }

  .titleRogue,
  .titleMage {
    margin-bottom: 10px;
  }

  .rogueAnimation {
    transition: all 0.1s ease-in-out;
    transform: scale(1.1);
  }

  .select:hover {
    color: #868686;
  }

  .select-div {
    height: 53px;
    width: 280px;
    display: flex;
    justify-content: center;
    background-image: url(${papiru});
    background-size: 40%;
    background-repeat: no-repeat;
    background-position: center center;
  }

  .select {
    border-style: none;
    background: none;
  }
`
