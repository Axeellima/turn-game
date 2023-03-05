import guardian from '../../assets/characters/guardian.png'
import king from '../../assets/characters/mage.png'
import pyromante from '../../assets/characters/pyro.png'
import sorcerer from '../../assets/characters/kingmage.png'
import { moveMage } from '../../services/moveMage'
import { canMove } from '../../services/validMove'

export class Mage {
  constructor(side) {
    this.side = side
    if (side === 2) {
      this.sorcerers = [
        new Sorcerer('a1'),
        new Sorcerer('a3'),
        new Sorcerer('a6'),
        new Sorcerer('b2'),
        new Sorcerer('b3'),
        new Sorcerer('b4'),
        new Sorcerer('b5'),
      ]
      this.piromancers = [new Piromancer('a2'), new Piromancer('a5')]
      this.guardians = [new Guardian('b1'), new Guardian('b6')]
      this.king = [new KingMage('a4')]
    } else {
      this.sorcerers = [
        new Sorcerer('f1'),
        new Sorcerer('f4'),
        new Sorcerer('f6'),
        new Sorcerer('e2'),
        new Sorcerer('e3'),
        new Sorcerer('e4'),
        new Sorcerer('e5'),
      ]
      this.piromancers = [new Piromancer('f2'), new Piromancer('f5')]
      this.guardians = [new Guardian('e1'), new Guardian('e6')]
      this.king = [new KingMage('f3')]
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
  constructor(initialPosition) {
    this.initialPosition = initialPosition
    this.currentPosition = initialPosition
    this.typeMove = 1
    this.damage = 1
    this.health = 5
    this.alive = true
    this.img = sorcerer
  }
  move(board, team, direction) {
    let homes = ['a', 'b', 'c', 'd', 'e', 'f']

    let validateMove = canMove(board)

    moveMage(homes, validateMove, board, team, direction, this.currentPosition)
  }
  switchHome(newPosition) {
    this.currentPosition = newPosition
  }
}
class Piromancer {
  constructor(initialPosition) {
    this.initialPosition = initialPosition
    this.currentPosition = initialPosition
    this.typeMove = 1
    this.damage = 2
    this.health = 5
    this.alive = true
    this.img = pyromante
  }
  move(board, team, direction) {
    let homes = ['a', 'b', 'c', 'd', 'e', 'f']

    let validateMove = canMove(board)

    moveMage(homes, validateMove, board, team, direction, this.currentPosition)
  }
  switchHome(newPosition) {
    this.currentPosition = newPosition
  }
}

class Guardian {
  constructor(initialPosition) {
    this.initialPosition = initialPosition
    this.currentPosition = initialPosition
    this.typeMove = 2
    this.damage = 0
    this.health = 8
    this.alive = true
    this.img = guardian
  }
  move(board, team, direction) {
    let homes = ['a', 'b', 'c', 'd', 'e', 'f']

    let validateMove = canMove(board)

    moveMage(homes, validateMove, board, team, direction, this.currentPosition)
  }
  switchHome(newPosition) {
    this.currentPosition = newPosition
  }
  healGuardian() {
    if (this.guardian.health < 8) {
      this.guardian.health = this.guardian.health + 1
    }
  }
}
class KingMage {
  constructor(initialPosition) {
    this.initialPosition = initialPosition
    this.currentPosition = initialPosition
    this.typeMove = 1
    this.damage = 2
    this.health = 5
    this.alive = true
    this.img = king
  }
  move(board, team, direction) {
    let homes = ['a', 'b', 'c', 'd', 'e', 'f']

    let validateMove = canMove(board)

    moveMage(homes, validateMove, board, team, direction, this.currentPosition)
  }
  switchHome(newPosition) {
    this.currentPosition = newPosition
  }
}
