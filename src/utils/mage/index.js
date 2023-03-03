import guardian from '../../assets/characters/guardian.png'
import king from '../../assets/characters/mage.png'
import pyromante from '../../assets/characters/pyro.png'
import sorcerer from '../../assets/characters/kingmage.png'
import { positionsMageBlueSide, positionsMageRedSide } from './positions'

export class Mage {
  constructor(side) {
    this.side = side
    if (side === 2) {
      this.sorcerers = [
        new Sorcerer(
          positionsMageBlueSide.sorcerer1[0],
          positionsMageBlueSide.sorcerer1[1]
        ),
        new Sorcerer(
          positionsMageBlueSide.sorcerer2[0],
          positionsMageBlueSide.sorcerer2[1]
        ),
        new Sorcerer(
          positionsMageBlueSide.sorcerer3[0],
          positionsMageBlueSide.sorcerer3[1]
        ),
        new Sorcerer(
          positionsMageBlueSide.sorcerer4[0],
          positionsMageBlueSide.sorcerer4[1]
        ),
        new Sorcerer(
          positionsMageBlueSide.sorcerer5[0],
          positionsMageBlueSide.sorcerer5[1]
        ),
        new Sorcerer(
          positionsMageBlueSide.sorcerer6[0],
          positionsMageBlueSide.sorcerer6[1]
        ),
        new Sorcerer(
          positionsMageBlueSide.sorcerer7[0],
          positionsMageBlueSide.sorcerer7[1]
        ),
      ]
      this.piromancers = [
        new Piromancer(
          positionsMageBlueSide.pyromant1[0],
          positionsMageBlueSide.pyromant1[1]
        ),
        new Piromancer(
          positionsMageBlueSide.pyromant2[0],
          positionsMageBlueSide.pyromant2[1]
        ),
      ]
      this.guardians = [
        new Guardian(
          positionsMageBlueSide.guardian1[0],
          positionsMageBlueSide.guardian1[1]
        ),
        new Guardian(
          positionsMageBlueSide.guardian2[0],
          positionsMageBlueSide.guardian2[1]
        ),
      ]
      this.king = [
        new King(
          positionsMageBlueSide.kingPosition[0],
          positionsMageBlueSide.kingPosition[1]
        ),
      ]
    } else {
      this.sorcerers = [
        new Sorcerer(
          positionsMageRedSide.sorcerer1[0],
          positionsMageRedSide.sorcerer1[1]
        ),
        new Sorcerer(
          positionsMageRedSide.sorcerer2[0],
          positionsMageRedSide.sorcerer2[1]
        ),
        new Sorcerer(
          positionsMageRedSide.sorcerer3[0],
          positionsMageRedSide.sorcerer3[1]
        ),
        new Sorcerer(
          positionsMageRedSide.sorcerer4[0],
          positionsMageRedSide.sorcerer4[1]
        ),
        new Sorcerer(
          positionsMageRedSide.sorcerer5[0],
          positionsMageRedSide.sorcerer5[1]
        ),
        new Sorcerer(
          positionsMageRedSide.sorcerer6[0],
          positionsMageRedSide.sorcerer6[1]
        ),
        new Sorcerer(
          positionsMageRedSide.sorcerer7[0],
          positionsMageRedSide.sorcerer7[1]
        ),
      ]
      this.piromancers = [
        new Piromancer(
          positionsMageRedSide.pyromant1[0],
          positionsMageRedSide.pyromant1[1]
        ),
        new Piromancer(
          positionsMageRedSide.pyromant2[0],
          positionsMageRedSide.pyromant2[1]
        ),
      ]
      this.guardians = [
        new Guardian(
          positionsMageRedSide.guardian1[0],
          positionsMageRedSide.guardian1[1]
        ),
        new Guardian(
          positionsMageRedSide.guardian2[0],
          positionsMageRedSide.guardian2[1]
        ),
      ]
      this.king = [
        new King(
          positionsMageRedSide.kingPosition[0],
          positionsMageRedSide.kingPosition[1]
        ),
      ]
    }
  }
  quantityPieces() {
    if (this.sorcerers.length > 7) {
      this.sorcerers = this.sorcerers.slice(0, 7)
    }
    if (this.piromancers.length > 2) {
      this.piromancers = this.piromancers.slice(0, 2)
    }
    if (this.guardians.length > 2) {
      this.guardians = this.guardians.slice(0, 2)
    }
    if (this.king.length > 1) {
      this.king = this.king.slice(0, 1)
    }
  }
}

class Sorcerer {
  constructor(x, y) {
    this.x = x
    this.y = y
    this.typeMove = 1
    this.damage = 1
    this.health = 5
    this.alive = true
    this.img = sorcerer
  }
}
class Piromancer {
  constructor(x, y) {
    this.x = x
    this.y = y
    this.typeMove = 1
    this.damage = 2
    this.health = 5
    this.alive = true
    this.img = pyromante
  }
}

class Guardian {
  constructor(x, y) {
    this.x = x
    this.y = y
    this.typeMove = 2
    this.damage = 0
    this.health = 8
    this.alive = true
    this.img = guardian
  }
  healGuardian() {
    if (this.guardian.health < 8) {
      this.guardian.health = this.guardian.health + 1
    }
  }
}
class King {
  constructor(x, y) {
    this.x = x
    this.y = y
    this.typeMove = 1
    this.damage = 2
    this.health = 5
    this.alive = true
    this.img = king
  }
}
