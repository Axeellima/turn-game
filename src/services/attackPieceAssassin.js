import assassinAttack from '../assets/attacks/assassinAtk.gif'
export const attackPieceAssassin = (players, setPlayers, piece, damage) => {
  let sideRight = null
  let sideLeft = null
  players.map((player) => {
    player.kingMage?.forEach((king) => {
      if (king.initialPosition === piece) {
        sideRight =
          king.currentPosition.split('')[0] +
          (Number(king.currentPosition.split('')[1]) + 1)
        sideLeft =
          king.currentPosition.split('')[0] +
          (Number(king.currentPosition.split('')[1]) - 1)
      }
    })
    player.guardiansMage?.forEach((guardian) => {
      if (guardian.initialPosition === piece) {
        sideRight =
          guardian.currentPosition.split('')[0] +
          (Number(guardian.currentPosition.split('')[1]) + 1)
        sideLeft =
          guardian.currentPosition.split('')[0] +
          (Number(guardian.currentPosition.split('')[1]) - 1)
      }
    })
    player.piromancers?.forEach((piromancer) => {
      if (piromancer.initialPosition === piece) {
        sideRight =
          piromancer.currentPosition.split('')[0] +
          (Number(piromancer.currentPosition.split('')[1]) + 1)
        sideLeft =
          piromancer.currentPosition.split('')[0] +
          (Number(piromancer.currentPosition.split('')[1]) - 1)
      }
    })
    player.sorcerers?.forEach((sorcerer) => {
      if (sorcerer.initialPosition === piece) {
        sideLeft =
          sorcerer.currentPosition.split('')[0] +
          (Number(sorcerer.currentPosition.split('')[1]) - 1)
        sideRight =
          sorcerer.currentPosition.split('')[0] +
          (Number(sorcerer.currentPosition.split('')[1]) + 1)
      }
    })
    return player
  })
  setTimeout(() => {
    setPlayers((players) => {
      return players.map((player) => {
        player.kingMage?.forEach((king) => {
          if (king.initialPosition === piece) {
            king.health = king.health - damage
            king.attackedPiece = assassinAttack
            if (assassinAttack) {
              let attack = document.getElementsByClassName('attack')
              setTimeout(() => {
                for (let i = -3; i < assassinAttack.length; i++) {
                  attack[0].classList.remove('attack')
                }
              }, 1000)
            }
          }
          if (king.currentPosition === sideRight) {
            king.health = king.health - 1
            king.attackedPiece = assassinAttack
          }
          if (king.currentPosition === sideLeft) {
            king.health = king.health - 1
            king.attackedPiece = assassinAttack
          }
        })
        player.guardiansMage?.forEach((guardian) => {
          if (guardian.initialPosition === piece) {
            guardian.health = guardian.health - damage
            guardian.attackedPiece = assassinAttack
            if (assassinAttack) {
              let attack = document.getElementsByClassName('attack')
              setTimeout(() => {
                for (let i = -3; i < assassinAttack.length; i++) {
                  attack[0].classList.remove('attack')
                }
              }, 1000)
            }
          }
          if (guardian.currentPosition === sideRight) {
            guardian.health = guardian.health - 1
            guardian.attackedPiece = assassinAttack
          }
          if (guardian.currentPosition === sideLeft) {
            guardian.health = guardian.health - 1
            guardian.attackedPiece = assassinAttack
          }
        })
        player.piromancers?.forEach((piromancer) => {
          if (piromancer.initialPosition === piece) {
            piromancer.health = piromancer.health - damage
            piromancer.attackedPiece = assassinAttack
            if (assassinAttack) {
              let attack = document.getElementsByClassName('attack')
              setTimeout(() => {
                for (let i = -3; i < assassinAttack.length; i++) {
                  attack[0].classList.remove('attack')
                }
              }, 1000)
            }
          }
          if (piromancer.currentPosition === sideRight) {
            piromancer.health = piromancer.health - 1
            piromancer.attackedPiece = assassinAttack
          }
          if (piromancer.currentPosition === sideLeft) {
            piromancer.health = piromancer.health - 1
            piromancer.attackedPiece = assassinAttack
          }
        })

        player.sorcerers?.forEach((sorcerer) => {
          if (sorcerer.initialPosition === piece) {
            sorcerer.health = sorcerer.health - damage
            sorcerer.attackedPiece = assassinAttack

            if (assassinAttack) {
              let attack = document.getElementsByClassName('attack')
              setTimeout(() => {
                for (let i = -3; i < assassinAttack.length; i++) {
                  attack[0].classList.remove('attack')
                }
              }, 1000)
            }
          }
          if (sorcerer.currentPosition === sideRight) {
            sorcerer.health = sorcerer.health - 1
            sorcerer.attackedPiece = assassinAttack
          }
          if (sorcerer.currentPosition === sideLeft) {
            sorcerer.health = sorcerer.health - 1
            sorcerer.attackedPiece = assassinAttack
          }
        })
        return player
      })
    })
    return null
  })
}
