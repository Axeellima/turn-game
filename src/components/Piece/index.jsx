import { PieceStyle } from './style'

const Piece = ({ image, i, health }) => {
  return (
    <PieceStyle image={image} id={i}>
      {image ? (
        <>
          <img src={image} alt="" className="piece-img" id={i} />
          <h1>{health}</h1>
        </>
      ) : undefined}
    </PieceStyle>
  )
}
export default Piece
