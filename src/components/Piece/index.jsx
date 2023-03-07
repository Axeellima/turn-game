import { PieceStyle } from './style'

const Piece = ({ image, i, health, attackedPiece }) => {
  return (
    <PieceStyle image={image} id={i}>
      {image ? (
        <>
          <img src={image} alt="" className="piece-img" id={i} />
          <h1>{health}</h1>
          <img
            className={attackedPiece ? 'attack' : null}
            src={attackedPiece}
            alt=""
          />
        </>
      ) : undefined}
    </PieceStyle>
  )
}
export default Piece
