import guardian from '../../assets/characters/guardian.png'
import assassin from '../../assets/characters/assassin.png'
import thief from '../../assets/characters/thief.png'
import king from '../../assets/characters/kingassassin.png'
// import { positionsRogueBlueSide } from './positions'
import { positionsRogueRedSide } from './positions'

export function verifyPlayerRogue(player) {
  if (player === 2) {
    return true
  } else if (player === 1) {
    return false
  }
}

const {
  thief1,
  thief2,
  thief3,
  thief4,
  thief5,
  thief6,
  thief7,
  assassin1,
  assassin2,
  guardian1,
  guardian2,
  kingPosition,
} = positionsRogueRedSide

export class Rogue {
  constructor() {
    this.thiefs = [
      new Thief(thief1[0], thief1[1]),
      new Thief(thief2[0], thief2[1]),
      new Thief(thief3[0], thief3[1]),
      new Thief(thief4[0], thief4[1]),
      new Thief(thief5[0], thief5[1]),
      new Thief(thief6[0], thief6[1]),
      new Thief(thief7[0], thief7[1]),
    ]
    this.assassins = [
      new Assassin(assassin1[0], assassin1[1]),
      new Assassin(assassin2[0], assassin2[1]),
    ]
    this.guardians = [
      new Guardian(guardian1[0], guardian1[1]),
      new Guardian(guardian2[0], guardian2[1]),
    ]
    this.king = [new King(kingPosition[0], kingPosition[1])]
  }
  quantityPieces() {
    if (this.thiefs.length > 7) {
      this.thiefs = this.thiefs.slice(0, 7)
    }
    if (this.assassins.length > 2) {
      this.assassins = this.assassins.slice(0, 2)
    }
    if (this.guardians.length > 2) {
      this.guardians = this.guardians.slice(0, 2)
    }
    if (this.king.length > 1) {
      this.king = this.king.slice(0, 1)
    }
  }
}

class Thief {
  constructor(x, y) {
    this.x = x
    this.y = y
    this.typeMove = 3
    this.damage = 1
    this.health = 5
    this.alive = true
    this.img = thief
  }
}
class Assassin {
  constructor(x, y) {
    this.x = x
    this.y = y
    this.typeMove = 3
    this.damage = 4
    this.health = 5
    this.alive = true
    this.img = assassin
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
    this.damage = 3
    this.health = 5
    this.alive = true
    this.img = king
  }
}
