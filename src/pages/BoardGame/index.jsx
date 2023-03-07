import Board from '../../components/Board'
import Aside from '../../components/Aside'
import Modal from '../../components/Modal'
import GameOver from '../../components/GameOver'
import { useState } from 'react'
import { Wrapper } from './style'

const BoardGame = () => {
  const [select, setSelect] = useState(null)
  const [players, setPlayers] = useState([])
  const [openModal, setOpenModal] = useState(false)
  const [turnGame, setTurnGame] = useState(0)
  const [winner, setWinner] = useState('')
  const [gameOver, setGameOver] = useState(false)

  const handleOpenModal = () => {
    setOpenModal(!openModal)
  }
  return (
    <>
      {openModal && (
        <Modal openModal={openModal} handleOpenModal={handleOpenModal} />
      )}
      <Wrapper>
        {!gameOver ? (
          <>
            <Aside
              handleOpenModal={handleOpenModal}
              select={select}
              setSelect={setSelect}
              setPlayers={setPlayers}
            />

            <Board
              setGameOver={setGameOver}
              setWinner={setWinner}
              select={select}
              setSelect={setSelect}
              players={players}
              setPlayers={setPlayers}
              turnGame={turnGame}
              setTurnGame={setTurnGame}
            />
          </>
        ) : (
          <GameOver
            winner={winner}
            setGameOver={setGameOver}
            gameOver={gameOver}
          />
        )}
      </Wrapper>
    </>
  )
}

export default BoardGame
