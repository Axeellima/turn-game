import { StyledAside } from './style'
import { useState } from 'react'
import rogue from '../../assets/imagem/truerogue.png'
import mage from '../../assets/imagem/mage.png'

const Aside = () => {
  const [classNameText, setClassNameText] = useState('textRogue')
  const [classNameImg, setClassNameImg] = useState('imgRogue')
  const [classNameTextMage, setClassNameTextMage] = useState('textMage')
  const [classNameImgMage, setClassNameImgMage] = useState('imgRogue')
  return (
    <StyledAside>
      <div className="container">
        <section
          className="mainRogue"
          onMouseEnter={() => {
            setClassNameText('textRogue rogueAnimation')
            setClassNameImg('imgRogue rogueAnimation')
          }}
          onMouseLeave={() => {
            setClassNameText('textRogue')
            setClassNameImg('imgRogue')
          }}
        >
          <img src={rogue} alt="" className={classNameImg} />
          <div className={classNameText}>
            <h1 className="titleRogue">Ladino</h1>
            <p>Especializado em ataques corpo a corpo e ataques furtivos</p>
          </div>
        </section>
        <div className="select-div">
          <button className="select">Selecionar</button>
        </div>
        <section
          className="mainMage"
          onMouseEnter={() => {
            setClassNameTextMage('textMage rogueAnimation')
            setClassNameImgMage('imgMage rogueAnimation')
          }}
          onMouseLeave={() => {
            setClassNameTextMage('textMage')
            setClassNameImgMage('imgMage')
          }}
        >
          <img src={mage} alt="" className={classNameImgMage} />
          <div className={classNameTextMage}>
            <h1 className="titleMage">Mago</h1>
            <p>Especializado em ataques a distância e ataques em área</p>
          </div>
        </section>
        <div className="select-div">
          <button className="select">Selecionar</button>
        </div>
      </div>
    </StyledAside>
  )
}

export default Aside
