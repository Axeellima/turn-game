import guardian from '../../assets/characters/guardian.png'
import king from '../../assets/characters/mage.png'
import pyromante from '../../assets/characters/pyro.png'
import sorcerer from '../../assets/characters/kingmage.gif'
import { moveMage } from '../../services/moveMage'
import { canMove } from '../../services/validMove'
import { possibleSorcererAttack } from '../../services/possibleSorcererAttack'
import { canAttackMage } from '../../services/validAttackMage'
import { possiblePiromancerAttack } from '../../services/possiblePiromancerAttack'
import { possibleKingMageAttack } from '../../services/possibleKingMageAttack'
import { attackPiecePiromancer } from '../../services/attackPiecePiromancer'

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
      this.guardiansMage = [new Guardian('b1'), new Guardian('b6')]
      this.kingMage = [new KingMage('a4')]
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
      this.guardiansMage = [new Guardian('e1'), new Guardian('e6')]
      this.kingMage = [new KingMage('f3')]
    }
  }
}

class Sorcerer {
  constructor(initialPosition) {
    this.initialPosition = initialPosition
    this.currentPosition = initialPosition
    this.typeMove = 1
    this.damage = 1.5
    this.health = 5
    this.alive = true
    this.img = sorcerer
  }
  move(board, team, direction) {
    let homes = ['a', 'b', 'c', 'd', 'e', 'f']

    let validateMove = canMove(board)

    moveMage(homes, validateMove, board, team, direction, this.currentPosition)
  }
  switchHome(newPosition, turn, setTurnGame) {
    if (turn === 1) {
      this.currentPosition = newPosition
      return
    }
  }
  attack(board, team, direction) {
    let homes = ['a', 'b', 'c', 'd', 'e', 'f']

    let validateAttack = canAttackMage(board)

    possibleSorcererAttack(
      homes,
      validateAttack,
      board,
      team,
      direction,
      this.currentPosition,
    )
  }
  attackPiece(setPlayers, piece, turn) {
    if (turn === 1) {
      setTimeout(() => {
        setPlayers((players) => {
          return players.map((player) => {
            player.kingRogue?.forEach((king) => {
              if (king.initialPosition === piece) {
                king.health = king.health - this.damage
              }
            })
            player.guardiansRogue?.forEach((guardian) => {
              if (guardian.initialPosition === piece) {
                guardian.health = guardian.health - this.damage
              }
            })
            player.assassins?.forEach((assassin) => {
              if (assassin.initialPosition === piece) {
                assassin.health = assassin.health - this.damage
              }
            })
            player.thiefs?.forEach((thief) => {
              if (thief.initialPosition === piece) {
                thief.health = thief.health - this.damage
                console.log(thief.health)
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
class Piromancer {
  constructor(initialPosition) {
    this.initialPosition = initialPosition
    this.currentPosition = initialPosition
    this.typeMove = 1
    this.damage = 3
    this.health = 5
    this.alive = true
    this.img = pyromante
  }
  move(board, team, direction) {
    let homes = ['a', 'b', 'c', 'd', 'e', 'f']

    let validateMove = canMove(board)

    moveMage(homes, validateMove, board, team, direction, this.currentPosition)
  }
  switchHome(newPosition, turn, setTurnGame) {
    if (turn === 1) {
      this.currentPosition = newPosition
      return
    }
  }
  attack(board, team, direction) {
    let homes = ['a', 'b', 'c', 'd', 'e', 'f']

    let validateAttack = canAttackMage(board)

    possiblePiromancerAttack(
      homes,
      validateAttack,
      board,
      team,
      direction,
      this.currentPosition,
    )
  }
  attackPiece(setPlayers, piece, turn, players) {
    if (turn === 1) {
      attackPiecePiromancer(players, setPlayers, piece, this.damage)
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

    moveMage(homes, validateMove, board, team, direction, this.currentPosition)
  }
  switchHome(newPosition, turn, setTurnGame) {
    if (turn === 1) {
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
class KingMage {
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

    moveMage(homes, validateMove, board, team, direction, this.currentPosition)
  }
  switchHome(newPosition, turn, setTurnGame) {
    if (turn === 1) {
      this.currentPosition = newPosition
      return
    }
  }
  attack(board, team, direction) {
    let homes = ['a', 'b', 'c', 'd', 'e', 'f']

    let validateAttack = canAttackMage(board)

    possibleKingMageAttack(
      homes,
      validateAttack,
      board,
      team,
      direction,
      this.currentPosition,
    )
  }
  attackPiece(setPlayers, piece, turn) {
    if (turn === 1) {
      setTimeout(() => {
        setPlayers((players) => {
          return players.map((player) => {
            player.kingRogue?.forEach((king) => {
              if (king.initialPosition === piece) {
                king.health = king.health - this.damage
              }
            })
            player.guardiansRogue?.forEach((guardian) => {
              if (guardian.initialPosition === piece) {
                guardian.health = guardian.health - this.damage
              }
            })
            player.assassins?.forEach((assassin) => {
              if (assassin.initialPosition === piece) {
                assassin.health = assassin.health - this.damage
              }
            })
            player.thiefs?.forEach((thief) => {
              if (thief.initialPosition === piece) {
                thief.health = thief.health - this.damage
                console.log(thief.health)
                console.log('dmg')
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
