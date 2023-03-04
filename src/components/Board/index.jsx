import Piece from '../Piece'
import { StyledBoard } from './style'
import ActionBar from '../ActionBar'
import { useState } from 'react'
import { useMemo } from 'react'

let activePiece = null
const grabPiece = (e, selectedPiece, players) => {
  if (activePiece && activePiece.classList.contains('piece-img')) {
    activePiece.style.border = 'none'
  }
  activePiece = e.target
  if (activePiece.classList.contains('piece-img')) {
    activePiece.style.border = '1px solid yellow'
    return {
      grab: true,
      id: activePiece.id,
      activePiece,
    }
  } else if (activePiece.parentNode.classList.contains('can-move')) {
    players.forEach((player) => {
      player?.sorcerers?.forEach((sorcerer) => {
        if (sorcerer.initialPosition === selectedPiece.id) {
          sorcerer.switchHome(activePiece.parentNode.id)
          activePiece.parentNode.classList.remove('can-move')
        }
      })
    })
  }
  return false
}

const verticalAxis = ['1', '2', '3', '4', '5', '6']
const horizontalAxis = ['a', 'b', 'c', 'd', 'e', 'f']

const Board = ({ select, players, setPlayers }) => {
  let board = []

  const [actionBarActive, setActionBarActive] = useState(false)
  const [selectedPiece, setSelectedPiece] = useState(null)

  useMemo(() => {
    for (let v = verticalAxis.length - 1; v >= 0; v--) {
      for (let h = 0; h < horizontalAxis.length; h++) {
        let image = undefined
        let id = undefined

        if (players.length > 0) {
          players.forEach((player) => {
            player.thiefs?.forEach((piece) => {
              if (
                piece.currentPosition ===
                `${horizontalAxis[v] + verticalAxis[h]}`
              ) {
                image = piece.img
                id = piece.initialPosition
              }
            })
            player.assassins?.forEach((piece) => {
              if (
                piece.currentPosition ===
                `${horizontalAxis[v] + verticalAxis[h]}`
              ) {
                image = piece.img
                id = piece.initialPosition
              }
            })
            player.guardians?.forEach((piece) => {
              if (
                piece.currentPosition ===
                `${horizontalAxis[v] + verticalAxis[h]}`
              ) {
                image = piece.img
                id = piece.initialPosition
              }
            })
            player.sorcerers?.forEach((piece) => {
              if (
                piece.currentPosition ===
                `${horizontalAxis[v] + verticalAxis[h]}`
              ) {
                image = piece.img
                id = piece.initialPosition
              }
            })
            player.piromancers?.forEach((piece) => {
              if (
                piece.currentPosition ===
                `${horizontalAxis[v] + verticalAxis[h]}`
              ) {
                image = piece.img
                id = piece.initialPosition
              }
            })
            player.king?.forEach((piece) => {
              if (
                piece.currentPosition ===
                `${horizontalAxis[v] + verticalAxis[h]}`
              ) {
                image = piece.img
                id = piece.initialPosition
              }
            })
          })

          v < 3
            ? board.push(
                <div
                  className='home-white'
                  id={horizontalAxis[v] + verticalAxis[h]}
                >
                  <Piece image={image} i={id} />
                </div>
              )
            : board.push(
                <div
                  className='home-black'
                  id={horizontalAxis[v] + verticalAxis[h]}
                >
                  <Piece image={image} i={id} />
                </div>
              )
        }
      }
    }
  }, [board, players])

  return (
    <>
      {board.length > 0 ? (
        <StyledBoard>
          <div
            className='container'
            onMouseDown={(e) => {
              const grab = grabPiece(e, selectedPiece, players)
              grab.grab ? setActionBarActive(true) : setActionBarActive(false)
              if (select === 1) {
                grab.activePiece
                  ? setSelectedPiece(grab.activePiece)
                  : setSelectedPiece(null)
              } else if (select === 2) {
                grab.activePiece
                  ? setSelectedPiece(grab.activePiece)
                  : setSelectedPiece(null)
              }
            }}
          >
            {board}
          </div>
          {actionBarActive && (
            <ActionBar
              players={players}
              setPlayers={setPlayers}
              board={board}
              selectedPiece={selectedPiece}
              select={select}
            />
          )}
        </StyledBoard>
      ) : (
        <StyledBoard></StyledBoard>
      )}
    </>
  )
}

export default Board
