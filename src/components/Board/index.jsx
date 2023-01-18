import { StyledBoard } from './style'

const Board = () => {
  return (
    <StyledBoard>
      <div className="container">
        <div className="columnA">
          <div className="home-white a1"></div>
          <div className="home-black a2"></div>
          <div className="home-white a3"></div>
          <div className="home-black a4"></div>
          <div className="home-white a5"></div>
          <div className="home-black a6"></div>
        </div>
        <div className="columnB">
          <div className="home-black b1"></div>
          <div className="home-white b2"></div>
          <div className="home-black b3"></div>
          <div className="home-white b4"></div>
          <div className="home-black b5"></div>
          <div className="home-white b6"></div>
        </div>
        <div className="columnC">
          <div className="home-white c1"></div>
          <div className="home-black c2"></div>
          <div className="home-white c3"></div>
          <div className="home-black c4"></div>
          <div className="home-white c5"></div>
          <div className="home-black c6"></div>
        </div>
        <div className="columnD">
          <div className="home-black d1"></div>
          <div className="home-white d2"></div>
          <div className="home-black d3"></div>
          <div className="home-white d4"></div>
          <div className="home-black d5"></div>
          <div className="home-white d6"></div>
        </div>
        <div className="columnE">
          <div className="home-white e1"></div>
          <div className="home-black e2"></div>
          <div className="home-white e3"></div>
          <div className="home-black e4"></div>
          <div className="home-white e5"></div>
          <div className="home-black e6"></div>
        </div>
        <div className="columnF">
          <div className="home-black f1"></div>
          <div className="home-white f2"></div>
          <div className="home-black f3"></div>
          <div className="home-white f4"></div>
          <div className="home-black f5"></div>
          <div className="home-white f6"></div>
        </div>
      </div>
    </StyledBoard>
  )
}

export default Board
