import { useEffect, useState } from 'react'
import { ActionBarStyle } from './style'

const ActionBar = ({ selectedPiece, select, board, players }) => {
  const [name, setName] = useState('Piece')
  useEffect(() => {
    console.log(select)
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
      } else if (selectedPiece.id === 'a4' || selectedPiece.id === 'f3') {
        setName('King')
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
      } else if (selectedPiece.id === 'a4' || selectedPiece.id === 'f3') {
        setName('King')
        return
      }
    }
  }, [selectedPiece.id, select])
  return (
    <ActionBarStyle>
      <h1>{name}</h1>
      <button className="atk">Ataque</button>
      <button
        className="move"
        onClick={() => {
          if (select === 1) {
            players.forEach((player) => {
              player.thiefs?.forEach((thief) => {})
            })
          } else if (select === 2) {
            players.forEach((player) => {
              player.sorcerers?.forEach((sorcerer) => {
                if (sorcerer.currentPosition === selectedPiece.id) {
                  sorcerer.move()
                  console.log(sorcerer.currentPosition)
                  board.forEach((element) => {
                    if (element.props.i === sorcerer.currentPosition) {
                      console.log(element)
                    }
                  })
                }
              })
            })
          }
        }}
      >
        Mover
      </button>
    </ActionBarStyle>
  )
}
export default ActionBar
