import { verifyPlayerMage } from '../utils/mage'
import { verifyPlayerRogue } from '../utils/rogue'

export const game = (player) => {
  console.log(verifyPlayerMage(player))
  console.log(verifyPlayerRogue(player))
}
