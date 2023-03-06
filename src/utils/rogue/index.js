import guardian from '../../assets/characters/guardian.png'
import assassin from '../../assets/characters/assassin.png'
import thief from '../../assets/characters/thief.png'
import king from '../../assets/characters/kingassassin.png'
import { moveRogue } from '../../services/moveRogue'
import { canMove } from '../../services/validMove'
import { moveAssassin } from '../../services/moveAssassin'
import { canAttackRogue } from '../../services/validAttackRogue'
import { possibleAttack } from '../../services/possibleAttack'
import { attackPieceAssassin } from '../../services/attackPieceAssassin'

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
      this.guardiansRogue = [new Guardian('b1'), new Guardian('b6')]
      this.kingRogue = [new KingRogue('a4')]
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
      this.guardiansRogue = [new Guardian('e1'), new Guardian('e6')]
      this.kingRogue = [new KingRogue('f3')]
    }
  }
  s
}

class Thief {
  constructor(initialPosition) {
    this.initialPosition = initialPosition
    this.currentPosition = initialPosition
    this.typeMove = 3
    this.damage = 2
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
  switchHome(newPosition, turn, setTurnGame) {
    if (turn === 0) {
      this.currentPosition = newPosition
      return
    }
  }
  attack(board, team, direction) {
    let homes = ['a', 'b', 'c', 'd', 'e', 'f']

    let validateAttack = canAttackRogue(board)

    possibleAttack(
      homes,
      validateAttack,
      board,
      team,
      direction,
      this.currentPosition,
    )
  }
  async attackPiece(setPlayers, piece, turn) {
    if (turn === 0) {
      setTimeout(() => {
        setPlayers((players) => {
          return players.map((player) => {
            player.kingMage?.forEach((king) => {
              if (king.initialPosition === piece) {
                king.health = king.health - this.damage
              }
            })
            player.guardiansMage?.forEach((guardian) => {
              if (guardian.initialPosition === piece) {
                guardian.health = guardian.health - this.damage
              }
            })
            player.piromancers?.forEach((piromancer) => {
              if (piromancer.initialPosition === piece) {
                piromancer.health = piromancer.health - this.damage
              }
            })
            player.sorcerers?.forEach((sorcerer) => {
              if (sorcerer.initialPosition === piece) {
                sorcerer.health = sorcerer.health - this.damage
                console.log(sorcerer.health)
              }
            })

            return player
          })
        })
      })
    }
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
  switchHome(newPosition, turn, setTurnGame) {
    if (turn === 0) {
      this.currentPosition = newPosition
      return
    }
  }
  attack(board, team, direction) {
    let homes = ['a', 'b', 'c', 'd', 'e', 'f']

    let validateAttack = canAttackRogue(board)

    possibleAttack(
      homes,
      validateAttack,
      board,
      team,
      direction,
      this.currentPosition,
    )
  }
  attackPiece(setPlayers, piece, turn, players) {
    if (turn === 0) {
      attackPieceAssassin(players, setPlayers, piece, this.damage)
    }
    return
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

    moveRogue(homes, validateMove, board, team, direction, this.currentPosition)
  }
  switchHome(newPosition, turn, setTurnGame) {
    if (turn === 0) {
      this.currentPosition = newPosition
      return
    }
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
  switchHome(newPosition, turn, setTurnGame) {
    if (turn === 0) {
      this.currentPosition = newPosition
      return
    }
  }
  attack(board, team, direction) {
    let homes = ['a', 'b', 'c', 'd', 'e', 'f']

    let validateAttack = canAttackRogue(board)

    possibleAttack(
      homes,
      validateAttack,
      board,
      team,
      direction,
      this.currentPosition,
    )
  }
  attackPiece(setPlayers, piece, turn) {
    if (turn === 0) {
      setTimeout(() => {
        setPlayers((players) => {
          return players.map((player) => {
            player.kingMage?.forEach((king) => {
              if (king.initialPosition === piece) {
                king.health = king.health - this.damage
              }
            })
            player.guardiansMage?.forEach((guardian) => {
              if (guardian.initialPosition === piece) {
                guardian.health = guardian.health - this.damage
              }
            })
            player.piromancers?.forEach((piromancer) => {
              if (piromancer.initialPosition === piece) {
                piromancer.health = piromancer.health - this.damage
              }
            })
            player.sorcerers?.forEach((sorcerer) => {
              if (sorcerer.initialPosition === piece) {
                sorcerer.health = sorcerer.health - this.damage
              }
            })

            return player
          })
        })
        return null
      })
    }
    return
  }
}
