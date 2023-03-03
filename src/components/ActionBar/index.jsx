import { useEffect, useState } from 'react'
import { ActionBarStyle } from './style'

const ActionBar = ({ selectedPiece, select }) => {
  const [name, setName] = useState('Piece')
  useEffect(() => {
    console.log(select)
    if (select === 2) {
      if (selectedPiece === 'e2' || selectedPiece === 'e5') {
        setName('Assassin')
        return
      } else if (
        selectedPiece === 'f1' ||
        selectedPiece === 'f2' ||
        selectedPiece === 'f4' ||
        selectedPiece === 'f5' ||
        selectedPiece === 'f6' ||
        selectedPiece === 'e3' ||
        selectedPiece === 'e4'
      ) {
        setName('Thief')
        return
      } else if (
        selectedPiece === 'e1' ||
        selectedPiece === 'e6' ||
        selectedPiece === 'b1' ||
        selectedPiece === 'b6'
      ) {
        setName('Guardian')
        return
      } else if (selectedPiece === 'a2' || selectedPiece === 'a5') {
        setName('Piromancer')
        return
      } else if (
        selectedPiece === 'a1' ||
        selectedPiece === 'a3' ||
        selectedPiece === 'a6' ||
        selectedPiece === 'b2' ||
        selectedPiece === 'b3' ||
        selectedPiece === 'b4' ||
        selectedPiece === 'b5'
      ) {
        setName('Sorcerer')
        return
      } else if (selectedPiece === 'a4' || selectedPiece === 'f3') {
        setName('King')
        return
      }
    } else if (select === 1) {
      if (selectedPiece === 'f2' || selectedPiece === 'f5') {
        setName('Pyromancer')
        return
      } else if (
        selectedPiece === 'f1' ||
        selectedPiece === 'e2' ||
        selectedPiece === 'f4' ||
        selectedPiece === 'e5' ||
        selectedPiece === 'f6' ||
        selectedPiece === 'e3' ||
        selectedPiece === 'e4'
      ) {
        setName('Sorcerer')
        return
      } else if (
        selectedPiece === 'e1' ||
        selectedPiece === 'e6' ||
        selectedPiece === 'b1' ||
        selectedPiece === 'b6'
      ) {
        setName('Guardian')
        return
      } else if (selectedPiece === 'b2' || selectedPiece === 'b5') {
        setName('Assassin')
        return
      } else if (
        selectedPiece === 'a1' ||
        selectedPiece === 'a3' ||
        selectedPiece === 'a6' ||
        selectedPiece === 'a2' ||
        selectedPiece === 'b3' ||
        selectedPiece === 'b4' ||
        selectedPiece === 'a5'
      ) {
        setName('Thief')
        return
      } else if (selectedPiece === 'a4' || selectedPiece === 'f3') {
        setName('King')
        return
      }
    }
  }, [selectedPiece])
  return (
    <ActionBarStyle>
      <h1>{name}</h1>
      <button className='atk'>Ataque</button>
      <button className='move'>Mover</button>
    </ActionBarStyle>
  )
}
export default ActionBar
