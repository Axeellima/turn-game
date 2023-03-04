import guardian from '../../assets/characters/guardian.png'
import king from '../../assets/characters/mage.png'
import pyromante from '../../assets/characters/pyro.png'
import sorcerer from '../../assets/characters/kingmage.png'

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
      this.king = [new King('a4')]
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
      this.king = [new King('f3')]
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
  move() {
    let homes = ['a', 'b', 'c', 'd', 'e', 'f']
    let newPosition = this.currentPosition.split('')[0]
    for (let i = 0; i < homes.length; i++) {
      if (homes[i] === newPosition) {
        this.currentPosition = homes[i + 1] + this.currentPosition.split('')[1]
        return
      }
    }
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
  healGuardian() {
    if (this.guardian.health < 8) {
      this.guardian.health = this.guardian.health + 1
    }
  }
}
class King {
  constructor(initialPosition) {
    this.initialPosition = initialPosition
    this.currentPosition = initialPosition
    this.typeMove = 1
    this.damage = 2
    this.health = 5
    this.alive = true
    this.img = king
  }
}
