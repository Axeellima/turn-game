import { StyledModal } from './style'
import assassin from '../../assets/video/assassin.json'
import mage from '../../assets/video/mage.json'
import closeIcon from '../../assets/imagem/close-icon-modal.png'
// import birds from '../../assets/video/10115-birds.json'
import Lottie from 'lottie-react'

const Modal = ({ handleOpenModal, openModal }) => {
  //   const [birdAnimation, setBirAnimation] = useState('animation-birds')
  return (
    <StyledModal
      id="modal"
      onClick={(e) => {
        if (openModal && e.target.id === 'modal') {
          console.log(e)
          handleOpenModal()
        }
      }}
    >
      <div className="container-modal">
        <div className="header-modal">
          <h1>Classes</h1>
          <img
            src={closeIcon}
            alt=""
            onClick={() => {
              handleOpenModal()
            }}
          />
        </div>
        <section className="class-modal">
          <Lottie animationData={assassin} className="animation-assassin" />

          <div className="info-class">
            <h1>Ladrão</h1>
            <p>
              Anda uma casa em qualquer direção, para atacar ele pode andar duas
              casas de distância, caso ataque com apenas 1 casa de distância ele
              causa apenas 1 de dano, atacando a duas casas causa 2 de dano.
            </p>
            <h1>Assassino</h1>
            <p>
              Anda uma casa em qualquer direção, causa 4 de dano ao atacar e 1
              de dano as unidades em volta do alvo, caso de um backstab ele
              causa dano critico de 5 de dano e 2 de dano as unidades em volta
              do alvo (o assassino após realizar um ataque, fica 1 turno
              imóvel).
            </p>
            <h1>Guardião</h1>
            <p>
              Pode andar uma casa para frente, para trás e para os lados, ele
              tem 8 de vida, e pode recuperar 1hp por turno (caso não tenha
              recebido nenhum dano no turno anterior).
            </p>
          </div>
        </section>
        <section className="class-modal">
          <Lottie animationData={mage} className="animation-mage" />

          <div className="info-class">
            <h1>Feiticeiro</h1>
            <p>
              O feiticeiro causa 2 de dano por ataque a unidade mais próxima
              independente da distância (só pode ser invocado na linha 2)
            </p>
            <h1>Pirômante</h1>
            <p>
              Só pode ser invocado na linha 1, ele ataca em até 2 casas de
              distância, causando 3 de dano no alvo e 2 nas cartas adjacentes.
            </p>
            <h1>Guardião</h1>
            <p>
              Pode andar uma casa para frente, para trás e para os lados, ele
              tem 8 de vida, e pode recuperar 1hp por turno (caso não tenha
              recebido nenhum dano no turno anterior).
            </p>
          </div>
        </section>
      </div>
    </StyledModal>
  )
}

export default Modal
