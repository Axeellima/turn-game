import guardian from '../../assets/characters/guardian.png'
import king from '../../assets/characters/mage.png'
import pyromante from '../../assets/characters/pyro.png'
import sorcerer from '../../assets/characters/kingmage.png'
// import { positionsMageRedSide } from './positions'
import { positionsMageBlueSide } from './positions'

export function verifyPlayerMage(player) {
  if (player === 1) {
    return true
  } else if (player === 2) {
    return false
  }
}

const {
  sorcerer1,
  sorcerer2,
  sorcerer3,
  sorcerer4,
  sorcerer5,
  sorcerer6,
  sorcerer7,
  pyromant1,
  pyromant2,
  guardian1,
  guardian2,
  kingPosition,
} = positionsMageBlueSide

export class Mage {
  constructor() {
    this.sorcerers = [
      new Sorcerer(sorcerer1[0], sorcerer1[1]),
      new Sorcerer(sorcerer2[0], sorcerer2[1]),
      new Sorcerer(sorcerer3[0], sorcerer3[1]),
      new Sorcerer(sorcerer4[0], sorcerer4[1]),
      new Sorcerer(sorcerer5[0], sorcerer5[1]),
      new Sorcerer(sorcerer6[0], sorcerer6[1]),
      new Sorcerer(sorcerer7[0], sorcerer7[1]),
    ]
    this.piromancers = [
      new Piromancer(pyromant1[0], pyromant1[1]),
      new Piromancer(pyromant2[0], pyromant2[1]),
    ]
    this.guardians = [
      new Guardian(guardian1[0], guardian1[1]),
      new Guardian(guardian2[0], guardian2[1]),
    ]
    this.king = [new King(kingPosition[0], kingPosition[1])]
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
