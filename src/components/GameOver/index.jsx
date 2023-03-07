import { StyledGameOver } from './style'
import rogue from '../../assets/imagem/truerogue.png'
import mage from '../../assets/imagem/mage.png'
import { AiFillGithub } from 'react-icons/ai'
import rogueWin from '../../assets/music/rogueWin.mp3'
import mageWin from '../../assets/music/mageWin.mp3'

const GameOver = ({ winner }) => {
  return (
    <StyledGameOver winner={winner}>
      <div className="container">
        <audio
          src={winner === 'Rogue' ? rogueWin : mageWin}
          autoPlay
          id="rogue-win"
        />
        <img
          src={winner === 'Rogue' ? rogue : mage}
          alt=""
          width={'200px'}
          height={'200px'}
        />
        <h1>{winner} Wins 🏆</h1>
        <button
          onClick={() => {
            window.location.reload()
          }}
        >
          Play Again
        </button>
      </div>
      <div className="named">
        <h1>Created by:</h1>
        <h2>Matheus Guilherme</h2>
        <h2>Axel Lima</h2>
      </div>
      <div className="gago">
        <h2>Mention for art: Eduardo Fagotti</h2>
      </div>
      <div className="contat">
        <h1>contatc-us</h1>
        <AiFillGithub className="icon" />
        <a
          href="https://github.com/SmartDevs-nwgs"
          target="_blank"
          rel="noreferrer"
        >
          SmartDevs
        </a>
      </div>
    </StyledGameOver>
  )
}

export default GameOver
