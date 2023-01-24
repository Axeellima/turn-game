import { PieceStyle } from "./style";

const Piece = ({ image }) => {
  return (
    <PieceStyle className="piece">
      {image ? <img src={image} alt="" /> : undefined}
    </PieceStyle>
  );
};
export default Piece;
