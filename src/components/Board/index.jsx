import Piece from '../Piece'
import { StyledBoard } from './style'
import ActionBar from '../ActionBar'
import { useState } from 'react'
import { useMemo } from 'react'

let activePiece = null
const grabPiece = (e, players, selectedPiece) => {
  if (activePiece && activePiece.classList.contains('piece-img')) {
    activePiece.style.border = 'none'
  }
  activePiece = e.target
  if (activePiece.classList.contains('piece-img')) {
    activePiece.style.border = '1px solid yellow'
    const canMove = document.getElementsByClassName('can-move')
    while (canMove.length) {
      canMove[0].classList.remove('can-move')
    }

    return {
      grab: true,
      id: activePiece.id,
      activePiece,
    }
  } else if (activePiece.parentNode.classList.contains('can-move')) {
    players?.forEach((player) => {
      player?.assassins?.forEach((assassin) => {
        if (assassin.initialPosition === selectedPiece.id) {
          assassin.switchHome(activePiece.parentNode.id)
          activePiece?.parentNode.classList.remove('can-move')
          const canMove = document.getElementsByClassName('can-move')
          setTimeout(() => {
            while (canMove.length) {
              canMove[0].classList.remove('can-move')
            }
          })
        }
      })
      player?.thiefs?.forEach((thief) => {
        if (thief.initialPosition === selectedPiece.id) {
          thief.switchHome(activePiece.parentNode.id)
          activePiece?.parentNode.classList.remove('can-move')
          const canMove = document.getElementsByClassName('can-move')
          setTimeout(() => {
            while (canMove.length) {
              canMove[0].classList.remove('can-move')
            }
          })
        }
      })
      player?.king?.forEach((king) => {
        if (king.initialPosition === selectedPiece.id) {
          king.switchHome(activePiece.parentNode.id)
          activePiece?.parentNode.classList.remove('can-move')
          const canMove = document.getElementsByClassName('can-move')
          setTimeout(() => {
            while (canMove.length) {
              canMove[0].classList.remove('can-move')
            }
          })
        }
      })
      player?.guardians?.forEach((guardian) => {
        if (guardian.initialPosition === selectedPiece.id) {
          guardian.switchHome(activePiece.parentNode.id)
          activePiece?.parentNode.classList.remove('can-move')
          const canMove = document.getElementsByClassName('can-move')
          setTimeout(() => {
            while (canMove.length) {
              canMove[0].classList.remove('can-move')
            }
          })
        }
      })

      player?.piromancers?.forEach((piromancer) => {
        if (piromancer.initialPosition === selectedPiece.id) {
          piromancer.switchHome(activePiece.parentNode.id)
          activePiece?.parentNode.classList.remove('can-move')
          const canMove = document.getElementsByClassName('can-move')
          setTimeout(() => {
            while (canMove.length) {
              canMove[0].classList.remove('can-move')
            }
          })
        }
      })
      player?.sorcerers?.forEach((sorcerer) => {
        if (sorcerer.initialPosition === selectedPiece.id) {
          sorcerer.switchHome(activePiece.parentNode.id)
          activePiece?.parentNode.classList.remove('can-move')
          const canMove = document.getElementsByClassName('can-move')
          setTimeout(() => {
            while (canMove.length) {
              canMove[0].classList.remove('can-move')
            }
          })
          return
        }
      })
    })
  } else if (!activePiece.parentNode.classList.contains('can-move')) {
    const canMove = document.getElementsByClassName('can-move')
    while (canMove.length) {
      canMove[0].classList.remove('can-move')
    }

    return false
  }

  return false
}

const verticalAxis = ['1', '2', '3', '4', '5', '6']
const horizontalAxis = ['a', 'b', 'c', 'd', 'e', 'f']

const Board = ({ select, players, setPlayers }) => {
  let board = []

  const [actionBarActive, setActionBarActive] = useState(false)
  const [selectedPiece, setSelectedPiece] = useState(null)
  const [onMove, setOnMove] = useState(false)

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
                  key={horizontalAxis[v] + verticalAxis[h]}
                  className="home-white"
                  id={horizontalAxis[v] + verticalAxis[h]}
                >
                  <Piece image={image} i={id} />
                </div>,
              )
            : board.push(
                <div
                  key={horizontalAxis[v] + verticalAxis[h]}
                  className="home-black"
                  id={horizontalAxis[v] + verticalAxis[h]}
                >
                  <Piece image={image} i={id} />
                </div>,
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
            className="container"
            onMouseDown={(e) => {
              const grab = grabPiece(e, players, selectedPiece)
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
              setOnMove={setOnMove}
              onMove={onMove}
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
