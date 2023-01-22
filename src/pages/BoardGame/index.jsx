import Board from '../../components/Board'
import Aside from '../../components/Aside'
import Modal from '../../components/Modal'
import { useState } from 'react'
import { Wrapper } from './style'

const BoardGame = () => {
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
        <Aside handleOpenModal={handleOpenModal} />
        <Board />
      </Wrapper>
    </>
  )
}

export default BoardGame
