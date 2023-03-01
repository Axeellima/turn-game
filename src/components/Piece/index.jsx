import { PieceStyle } from './style'

const Piece = ({ image, i }) => {
  return (
    <PieceStyle image={image}>
      {image ? (
        <img src={image} alt='' className='piece-img' id={i} />
      ) : undefined}
    </PieceStyle>
  )
}
export default Piece
