import { useEffect, useState } from 'react'
import { ActionBarStyle } from './style'

const ActionBar = ({ selectedPiece, select, board, setPlayers }) => {
  const [name, setName] = useState('Piece')
  useEffect(() => {
    if (select === 2) {
      if (selectedPiece.id === 'e2' || selectedPiece.id === 'e5') {
        setName('Assassin')
        return
      } else if (
        selectedPiece.id === 'f1' ||
        selectedPiece.id === 'f2' ||
        selectedPiece.id === 'f4' ||
        selectedPiece.id === 'f5' ||
        selectedPiece.id === 'f6' ||
        selectedPiece.id === 'e3' ||
        selectedPiece.id === 'e4'
      ) {
        setName('Thief')
        return
      } else if (
        selectedPiece.id === 'e1' ||
        selectedPiece.id === 'e6' ||
        selectedPiece.id === 'b1' ||
        selectedPiece.id === 'b6'
      ) {
        setName('Guardian')
        return
      } else if (selectedPiece.id === 'a2' || selectedPiece.id === 'a5') {
        setName('Piromancer')
        return
      } else if (
        selectedPiece.id === 'a1' ||
        selectedPiece.id === 'a3' ||
        selectedPiece.id === 'a6' ||
        selectedPiece.id === 'b2' ||
        selectedPiece.id === 'b3' ||
        selectedPiece.id === 'b4' ||
        selectedPiece.id === 'b5'
      ) {
        setName('Sorcerer')
        return
      } else if (selectedPiece.id === 'a4') {
        setName('KingMage')
        return
      } else if (selectedPiece.id === 'f3') {
        setName('KingRogue')
        return
      }
    } else if (select === 1) {
      if (selectedPiece.id === 'f2' || selectedPiece.id === 'f5') {
        setName('Pyromancer')
        return
      } else if (
        selectedPiece.id === 'f1' ||
        selectedPiece.id === 'e2' ||
        selectedPiece.id === 'f4' ||
        selectedPiece.id === 'e5' ||
        selectedPiece.id === 'f6' ||
        selectedPiece.id === 'e3' ||
        selectedPiece.id === 'e4'
      ) {
        setName('Sorcerer')
        return
      } else if (
        selectedPiece.id === 'e1' ||
        selectedPiece.id === 'e6' ||
        selectedPiece.id === 'b1' ||
        selectedPiece.id === 'b6'
      ) {
        setName('Guardian')
        return
      } else if (selectedPiece.id === 'b2' || selectedPiece.id === 'b5') {
        setName('Assassin')
        return
      } else if (
        selectedPiece.id === 'a1' ||
        selectedPiece.id === 'a3' ||
        selectedPiece.id === 'a6' ||
        selectedPiece.id === 'a2' ||
        selectedPiece.id === 'b3' ||
        selectedPiece.id === 'b4' ||
        selectedPiece.id === 'a5'
      ) {
        setName('Thief')
        return
      } else if (selectedPiece.id === 'a4') {
        setName('KingRogue')
        return
      } else if (selectedPiece.id === 'f3') {
        setName('KingMage')
        return
      }
    }
  }, [selectedPiece.id, select])
  return (
    <ActionBarStyle>
      <h1>{name}</h1>
      <button
        className='attack'
        onClick={(e) => {
          setPlayers((players) => {
            const pieces = players.map((player) => {
              player?.kingMage?.forEach((king) => {
                if (king.initialPosition === selectedPiece.id) {
                  king.attack(board, select)
                }
              })
              player?.kingRogue?.forEach((king) => {
                if (king.initialPosition === selectedPiece.id) {
                  king.attack(board, select)
                }
              })
              player?.guardiansMage?.forEach((guardian) => {
                if (guardian.initialPosition === selectedPiece.id) {
                  guardian.attack(board, select)
                }
              })
              player?.guardiansRogue?.forEach((guardian) => {
                if (guardian.initialPosition === selectedPiece.id) {
                  guardian.attack(board, select)
                }
              })
              player?.piromancers?.forEach((piromancer) => {
                if (piromancer.initialPosition === selectedPiece.id) {
                  piromancer.attack(board, select)
                }
              })
              player?.sorcerers?.forEach((sorcerer) => {
                if (sorcerer.initialPosition === selectedPiece.id) {
                  sorcerer.attack(board, select)
                }
              })
              player?.thiefs?.forEach((thief) => {
                if (thief.initialPosition === selectedPiece.id) {
                  thief.attack(board, select)
                }
              })
              player?.assassins?.forEach((assassin) => {
                if (assassin.initialPosition === selectedPiece.id) {
                  assassin.attack(board, select)
                }
              })

              return player
            })
            return pieces
          })
        }}
      >
        Ataque
      </button>
      <button
        className='move'
        onClick={(e) => {
          setPlayers((players) => {
            const pieces = players.map((player) => {
              player?.kingMage?.forEach((king) => {
                if (king.initialPosition === selectedPiece.id) {
                  king.move(board, select)
                }
              })
              player?.kingRogue?.forEach((king) => {
                if (king.initialPosition === selectedPiece.id) {
                  king.move(board, select)
                }
              })
              player?.guardiansMage?.forEach((guardian) => {
                if (guardian.initialPosition === selectedPiece.id) {
                  guardian.move(board, select)
                }
              })
              player?.guardiansRogue?.forEach((guardian) => {
                if (guardian.initialPosition === selectedPiece.id) {
                  guardian.move(board, select)
                }
              })
              player?.piromancers?.forEach((piromancer) => {
                if (piromancer.initialPosition === selectedPiece.id) {
                  piromancer.move(board, select)
                }
              })
              player?.sorcerers?.forEach((sorcerer) => {
                if (sorcerer.initialPosition === selectedPiece.id) {
                  sorcerer.move(board, select)
                }
              })
              player?.thiefs?.forEach((thief) => {
                if (thief.initialPosition === selectedPiece.id) {
                  thief.move(board, select)
                }
              })
              player?.assassins?.forEach((assassin) => {
                if (assassin.initialPosition === selectedPiece.id) {
                  assassin.move(board, select)
                }
              })

              return player
            })

            return pieces
          })
        }}
      >
        Mover
      </button>
    </ActionBarStyle>
  )
}
export default ActionBar
