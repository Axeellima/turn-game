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
      id='modal'
      onClick={(e) => {
        if (openModal && e.target.id === 'modal') {
          console.log(e)
          handleOpenModal()
        }
      }}
    >
      <div className='container-modal'>
        <div className='header-modal'>
          <h1>Classes</h1>
          <img
            className='close-modal'
            src={closeIcon}
            alt=''
            onClick={() => {
              handleOpenModal()
            }}
          />
        </div>
        <section className='class-modal'>
          <Lottie animationData={assassin} className='animation-assassin' />

          <div className='info-class'>
            <h1>Ladrão</h1>
            <p>
              Anda uma casa em qualquer direção, ao atacar causa 2 de dano na
              unidade atacada.
            </p>
            <h1>Assassino</h1>
            <p>
              Anda uma casa em qualquer direção, causa 4 de dano ao atacar e 1
              de dano as unidades ao lado do alvo.
            </p>
            <h1>Guardião</h1>
            <p>
              O guardião se move em cruz ele tem 8 de vida e não possui ataque.
            </p>
          </div>
        </section>
        <section className='class-modal'>
          <Lottie animationData={mage} className='animation-mage' />

          <div className='info-class'>
            <h1>Feiticeiro</h1>
            <p>
              O feiticeiro se move em cruz e causa 2 de dano a peça atacada e
              ataca a 2 casas de distância em cru.
            </p>
            <h1>Pirômante</h1>
            <p>
              O piromante se move em cruz e ataca em qualquer direção causa 2 de
              dano a peça atacada e as peças ao lado.
            </p>
            <h1>Guardião</h1>
            <p>
              O guardião se move em cruz ele tem 8 de vida e não possui ataque.
            </p>
          </div>
        </section>
      </div>
    </StyledModal>
  )
}

export default Modal
