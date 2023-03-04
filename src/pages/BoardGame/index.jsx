import Board from '../../components/Board'
import Aside from '../../components/Aside'
import Modal from '../../components/Modal'
import { useState } from 'react'
import { Wrapper } from './style'

const BoardGame = () => {
  const [select, setSelect] = useState(null)
  const [players, setPlayers] = useState([])
  const [openModal, setOpenModal] = useState(false)

  const handleOpenModal = () => {
    setOpenModal(!openModal)
  }
  return (
    <>
      {openModal && (
        <Modal openModal={openModal} handleOpenModal={handleOpenModal} />
      )}
      <Wrapper>
        <Aside
          handleOpenModal={handleOpenModal}
          select={select}
          setSelect={setSelect}
          setPlayers={setPlayers}
        />
        <Board
          select={select}
          setSelect={setSelect}
          players={players}
          setPlayers={setPlayers}
        />
      </Wrapper>
    </>
  )
}

export default BoardGame
