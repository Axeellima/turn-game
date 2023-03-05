import guardian from '../../assets/characters/guardian.png'
import assassin from '../../assets/characters/assassin.png'
import thief from '../../assets/characters/thief.png'
import king from '../../assets/characters/kingassassin.png'
import { moveRogue } from '../../services/moveRogue'
import { canMove } from '../../services/validMove'
import { moveAssassin } from '../../services/moveAssassin'
import { canAttack } from '../../services/validAttack'
import { attackAssassin } from '../../services/attackAssassin'

export class Rogue {
  constructor(side) {
    this.side = side
    if (side === 1) {
      this.thiefs = [
        new Thief('a1'),
        new Thief('a2'),
        new Thief('a3'),
        new Thief('a5'),
        new Thief('a6'),
        new Thief('b3'),
        new Thief('b4'),
      ]
      this.assassins = [new Assassin('b2'), new Assassin('b5')]
      this.guardians = [new Guardian('b1'), new Guardian('b6')]
      this.king = [new KingRogue('a4')]
    } else {
      this.thiefs = [
        new Thief('f1'),
        new Thief('f2'),
        new Thief('f4'),
        new Thief('f5'),
        new Thief('f6'),
        new Thief('e3'),
        new Thief('e4'),
      ]
      this.assassins = [new Assassin('e2'), new Assassin('e5')]
      this.guardians = [new Guardian('e1'), new Guardian('e6')]
      this.king = [new KingRogue('f3')]
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
  constructor(initialPosition) {
    this.initialPosition = initialPosition
    this.currentPosition = initialPosition
    this.typeMove = 3
    this.damage = 1
    this.health = 5
    this.alive = true
    this.img = thief
  }
  move(board, team, direction) {
    let homes = ['a', 'b', 'c', 'd', 'e', 'f']

    let validateMove = canMove(board)

    moveAssassin(
      homes,
      validateMove,
      board,
      team,
      direction,
      this.currentPosition,
    )
  }
  switchHome(newPosition) {
    this.currentPosition = newPosition
  }
  attack(board, team, direction) {
    let homes = ['a', 'b', 'c', 'd', 'e', 'f']

    let validateAttack = canAttack(board)

    attackAssassin(
      homes,
      validateAttack,
      board,
      team,
      direction,
      this.currentPosition,
    )
  }
  attackPiece(newPosition) {
    this.currentPosition = newPosition
  }
}
class Assassin {
  constructor(initialPosition) {
    this.initialPosition = initialPosition
    this.currentPosition = initialPosition
    this.typeMove = 3
    this.damage = 4
    this.health = 5
    this.alive = true
    this.img = assassin
  }
  move(board, team, direction) {
    let homes = ['a', 'b', 'c', 'd', 'e', 'f']

    let validateMove = canMove(board)

    moveAssassin(
      homes,
      validateMove,
      board,
      team,
      direction,
      this.currentPosition,
    )
  }
  switchHome(newPosition) {
    this.currentPosition = newPosition
  }
  attack(board, team, direction) {
    let homes = ['a', 'b', 'c', 'd', 'e', 'f']

    let validateAttack = canAttack(board)

    attackAssassin(
      homes,
      validateAttack,
      board,
      team,
      direction,
      this.currentPosition,
    )
  }
  attackPiece(board, piece) {}
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

    moveRogue(homes, validateMove, board, team, direction, this.currentPosition)
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
class KingRogue {
  constructor(initialPosition) {
    this.initialPosition = initialPosition
    this.currentPosition = initialPosition
    this.typeMove = 1
    this.damage = 3
    this.health = 5
    this.alive = true
    this.img = king
  }
  move(board, team, direction) {
    let homes = ['a', 'b', 'c', 'd', 'e', 'f']

    let validateMove = canMove(board)

    moveRogue(homes, validateMove, board, team, direction, this.currentPosition)
  }
  switchHome(newPosition) {
    this.currentPosition = newPosition
  }
  attack(board, team, direction) {
    let homes = ['a', 'b', 'c', 'd', 'e', 'f']

    let validateAttack = canAttack(board)

    attackAssassin(
      homes,
      validateAttack,
      board,
      team,
      direction,
      this.currentPosition,
    )
  }
  attackPiece(newPosition) {
    this.currentPosition = newPosition
  }
}
