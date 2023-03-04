import Piece from '../Piece'
import { StyledBoard } from './style'
import ActionBar from '../ActionBar'
import { useState } from 'react'
import { Rogue } from '../../utils/rogue'
import { Mage } from '../../utils/mage'

export let players = []
let activePiece = null
const grabPiece = (e) => {
  if (activePiece && activePiece.classList.contains('piece-img')) {
    activePiece.style.border = 'none'
  }
  activePiece = e.target
  if (activePiece.classList.contains('piece-img')) {
    activePiece.style.border = '1px solid yellow'
    return {
      grab: true,
      id: activePiece.id,
    }
  }
  return false
}

const verticalAxis = ['1', '2', '3', '4', '5', '6']
const horizontalAxis = ['a', 'b', 'c', 'd', 'e', 'f']

const Board = ({ select }) => {
  let board = []

  const [actionBarActive, setActionBarActive] = useState(false)
  const [selectedPiece, setSelectedPiece] = useState(null)

  if (select === 1) {
    players = []
    players.push(new Rogue(1))
    players.push(new Mage(1))
  }
  if (select === 2) {
    players = []

    players.push(new Rogue(2))
    players.push(new Mage(2))
  }

  for (let v = verticalAxis.length - 1; v >= 0; v--) {
    for (let h = 0; h < horizontalAxis.length; h++) {
      let image = undefined

      if (players.length > 0) {
        players.forEach((player) => {
          player.thiefs?.forEach((piece) => {
            if (piece.x === h && piece.y === v) {
              image = piece.img
            }
          })
          player.assassins?.forEach((piece) => {
            if (piece.x === h && piece.y === v) {
              image = piece.img
            }
          })
          player.guardians?.forEach((piece) => {
            if (piece.x === h && piece.y === v) {
              image = piece.img
            }
          })
          player.sorcerers?.forEach((piece) => {
            if (piece.x === h && piece.y === v) {
              image = piece.img
            }
          })
          player.piromancers?.forEach((piece) => {
            if (piece.x === h && piece.y === v) {
              image = piece.img
            }
          })
          player.king?.forEach((piece) => {
            if (piece.x === h && piece.y === v) {
              image = piece.img
            }
          })
        })
      }

      v < 3
        ? board.push(
            <div className="home-white" i={horizontalAxis[v] + verticalAxis[h]}>
              {v < 2 ? (
                <Piece image={image} i={horizontalAxis[v] + verticalAxis[h]} />
              ) : (
                <></>
              )}
            </div>,
          )
        : board.push(
            <div className="home-black" i={horizontalAxis[v] + verticalAxis[h]}>
              {v > 3 ? (
                <Piece image={image} i={horizontalAxis[v] + verticalAxis[h]} />
              ) : (
                <></>
              )}
            </div>,
          )
    }
  }
  return (
    <StyledBoard>
      <div
        className="container"
        onMouseDown={(e) => {
          const grab = grabPiece(e)
          grab.grab ? setActionBarActive(true) : setActionBarActive(false)
          if (select === 1) {
            grab.id ? setSelectedPiece(grab.id) : setSelectedPiece(null)
          } else if (select === 2) {
            grab.id ? setSelectedPiece(grab.id) : setSelectedPiece(null)
          }
        }}
      >
        {board}
      </div>
      {actionBarActive && (
        <ActionBar selectedPiece={selectedPiece} select={select} />
      )}
    </StyledBoard>
  )
}

export default Board
