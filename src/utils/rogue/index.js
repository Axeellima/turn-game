import guardian from '../../assets/characters/guardian.png'
import assassin from '../../assets/characters/assassin.png'
import thief from '../../assets/characters/thief.png'
import king from '../../assets/characters/kingassassin.png'
import { positionsRogueBlueSide } from './positions'
import { positionsRogueRedSide } from './positions'

export class Rogue {
  constructor(side) {
    this.side = side
    if (side === 1) {
      this.thiefs = [
        new Thief(
          positionsRogueBlueSide.thief1[0],
          positionsRogueBlueSide.thief1[1]
        ),
        new Thief(
          positionsRogueBlueSide.thief2[0],
          positionsRogueBlueSide.thief2[1]
        ),
        new Thief(
          positionsRogueBlueSide.thief3[0],
          positionsRogueBlueSide.thief3[1]
        ),
        new Thief(
          positionsRogueBlueSide.thief4[0],
          positionsRogueBlueSide.thief4[1]
        ),
        new Thief(
          positionsRogueBlueSide.thief5[0],
          positionsRogueBlueSide.thief5[1]
        ),
        new Thief(
          positionsRogueBlueSide.thief6[0],
          positionsRogueBlueSide.thief6[1]
        ),
        new Thief(
          positionsRogueBlueSide.thief7[0],
          positionsRogueBlueSide.thief7[1]
        ),
      ]
      this.assassins = [
        new Assassin(
          positionsRogueBlueSide.assassin1[0],
          positionsRogueBlueSide.assassin1[1]
        ),
        new Assassin(
          positionsRogueBlueSide.assassin2[0],
          positionsRogueBlueSide.assassin2[1]
        ),
      ]
      this.guardians = [
        new Guardian(
          positionsRogueBlueSide.guardian1[0],
          positionsRogueBlueSide.guardian1[1]
        ),
        new Guardian(
          positionsRogueBlueSide.guardian2[0],
          positionsRogueBlueSide.guardian2[1]
        ),
      ]
      this.king = [
        new King(
          positionsRogueBlueSide.kingPosition[0],
          positionsRogueBlueSide.kingPosition[1]
        ),
      ]
    } else {
      this.thiefs = [
        new Thief(
          positionsRogueRedSide.thief1[0],
          positionsRogueRedSide.thief1[1]
        ),
        new Thief(
          positionsRogueRedSide.thief2[0],
          positionsRogueRedSide.thief2[1]
        ),
        new Thief(
          positionsRogueRedSide.thief3[0],
          positionsRogueRedSide.thief3[1]
        ),
        new Thief(
          positionsRogueRedSide.thief4[0],
          positionsRogueRedSide.thief4[1]
        ),
        new Thief(
          positionsRogueRedSide.thief5[0],
          positionsRogueRedSide.thief5[1]
        ),
        new Thief(
          positionsRogueRedSide.thief6[0],
          positionsRogueRedSide.thief6[1]
        ),
        new Thief(
          positionsRogueRedSide.thief7[0],
          positionsRogueRedSide.thief7[1]
        ),
      ]
      this.assassins = [
        new Assassin(
          positionsRogueRedSide.assassin1[0],
          positionsRogueRedSide.assassin1[1]
        ),
        new Assassin(
          positionsRogueRedSide.assassin2[0],
          positionsRogueRedSide.assassin2[1]
        ),
      ]
      this.guardians = [
        new Guardian(
          positionsRogueRedSide.guardian1[0],
          positionsRogueRedSide.guardian1[1]
        ),
        new Guardian(
          positionsRogueRedSide.guardian2[0],
          positionsRogueRedSide.guardian2[1]
        ),
      ]
      this.king = [
        new King(
          positionsRogueRedSide.kingPosition[0],
          positionsRogueRedSide.kingPosition[1]
        ),
      ]
    }
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
