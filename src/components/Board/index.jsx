import Piece from '../Piece'
import { StyledBoard } from './style'
import guardian from '../../assets/characters/guardian.png'
import assassin from '../../assets/characters/assassin.png'
import kingmage from '../../assets/characters/mage.png'
import pyro from '../../assets/characters/pyro.png'
import mage from '../../assets/characters/kingmage.png'
import thief from '../../assets/characters/thief.png'
import kingassassin from '../../assets/characters/kingassassin.png'

const pieces = []

//red pieces
pieces.push({ image: guardian, x: 0, y: 1 })
pieces.push({ image: guardian, x: 5, y: 1 })

pieces.push({ image: assassin, x: 1, y: 4 })
pieces.push({ image: assassin, x: 4, y: 4 })

pieces.push({ image: thief, x: 2, y: 4 })
pieces.push({ image: thief, x: 3, y: 4 })

for (let i = 0; i <= 5; i++) {
  if (i !== 2) pieces.push({ image: thief, x: i, y: 5 })
}

pieces.push({ image: kingassassin, x: 2, y: 5 })

//blue pieces
pieces.push({ image: guardian, x: 0, y: 4 })
pieces.push({ image: guardian, x: 5, y: 4 })

for (let i = 1; i <= 4; i++) {
  pieces.push({ image: mage, x: i, y: 1 })
}
pieces.push({ image: mage, x: 0, y: 0 })
pieces.push({ image: mage, x: 2, y: 0 })
pieces.push({ image: mage, x: 5, y: 0 })
pieces.push({ image: pyro, x: 1, y: 0 })
pieces.push({ image: pyro, x: 4, y: 0 })
pieces.push({ image: kingmage, x: 3, y: 0 })

const verticalAxis = ['1', '2', '3', '4', '5', '6']
const horizontalAxis = ['a', 'b', 'c', 'd', 'e', 'f']

const Board = () => {
  let board = []

  for (let v = verticalAxis.length - 1; v >= 0; v--) {
    for (let h = 0; h < horizontalAxis.length; h++) {
      let image = undefined

      pieces.forEach((piece) => {
        if (piece.x === h && piece.y === v) {
          image = piece.image
        }
      })

      v < 3
        ? board.push(
            <div className='home-white border'>
              {v < 2 ? (
                <Piece image={image} i={horizontalAxis[v] + verticalAxis[h]} />
              ) : (
                <></>
              )}
            </div>
          )
        : board.push(
            <div className='home-black border'>
              {v > 3 ? (
                <Piece image={image} i={horizontalAxis[v] + verticalAxis[h]} />
              ) : (
                <></>
              )}
            </div>
          )
    }
  }
  return (
    <StyledBoard>
      <div className='container'>{board}</div>
    </StyledBoard>
  )
}

export default Board
