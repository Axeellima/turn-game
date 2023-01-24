import { StyledBoard } from './style'

const verticalAxis = ['1', '2', '3', '4', '5', '6']
const horizontalAxis = ['a', 'b', 'c', 'd', 'e', 'f']

const Board = () => {
  let board = []
  for (let v = verticalAxis.length - 1; v >= 0; v--) {
    for (let h = 0; h < horizontalAxis.length; h++) {
      v < 3
        ? board.push(<div className="home-white"></div>)
        : board.push(<div className="home-black"></div>)
    }
  }
  return (
    <StyledBoard>
      <div className="container">{board}</div>
    </StyledBoard>
  )
}

export default Board
