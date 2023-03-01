import Piece from '../Piece'
import { StyledBoard } from './style'
import ActionBar from '../ActionBar'
import { useState } from 'react'
import { Rogue } from '../../utils/rogue'
import { Mage } from '../../utils/mage'
import { useEffect } from 'react'
import { game } from '../../game'

export const players = []
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
  useEffect(() => {
    if (select) {
      console.log(select)
      players.push(new Rogue())
      players.push(new Mage())
      game(select)

      return
    }

    return
  }, [select])
  let board = []
  const [actionBarActive, setActionBarActive] = useState(false)
  const [selectedPiece, setSelectedPiece] = useState(null)

  for (let v = verticalAxis.length - 1; v >= 0; v--) {
    for (let h = 0; h < horizontalAxis.length; h++) {
      let image = undefined

      players.forEach((player) => {
        // if (piece.x === h && piece.y === v) {
        //   image = piece.image
        // }

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

      v < 3
        ? board.push(
            <div className="home-white">
              {v < 2 ? (
                <Piece image={image} i={horizontalAxis[v] + verticalAxis[h]} />
              ) : (
                <></>
              )}
            </div>,
          )
        : board.push(
            <div className="home-black">
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
          grab.id ? setSelectedPiece(grab.id) : setSelectedPiece(null)
        }}
      >
        {board}
      </div>
      {actionBarActive && <ActionBar selectedPiece={selectedPiece} />}
    </StyledBoard>
  )
}

export default Board
