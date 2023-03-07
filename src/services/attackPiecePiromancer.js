import piromancerAttack from '../assets/attacks/piromancer.gif'
export const attackPiecePiromancer = (players, setPlayers, piece, damage) => {
  let sideRight = null
  let sideLeft = null
  players.map((player) => {
    player.kingRogue?.forEach((king) => {
      if (king.initialPosition === piece) {
        sideRight =
          king.currentPosition.split('')[0] +
          (Number(king.currentPosition.split('')[1]) + 1)
        sideLeft =
          king.currentPosition.split('')[0] +
          (Number(king.currentPosition.split('')[1]) - 1)
      }
    })
    player.guardiansRogue?.forEach((guardian) => {
      if (guardian.initialPosition === piece) {
        sideRight =
          guardian.currentPosition.split('')[0] +
          (Number(guardian.currentPosition.split('')[1]) + 1)
        sideLeft =
          guardian.currentPosition.split('')[0] +
          (Number(guardian.currentPosition.split('')[1]) - 1)
      }
    })
    player.assassins?.forEach((assassin) => {
      if (assassin.initialPosition === piece) {
        sideRight =
          assassin.currentPosition.split('')[0] +
          (Number(assassin.currentPosition.split('')[1]) + 1)
        sideLeft =
          assassin.currentPosition.split('')[0] +
          (Number(assassin.currentPosition.split('')[1]) - 1)
      }
    })
    player.thiefs?.forEach((thief) => {
      if (thief.initialPosition === piece) {
        sideLeft =
          thief.currentPosition.split('')[0] +
          (Number(thief.currentPosition.split('')[1]) - 1)
        sideRight =
          thief.currentPosition.split('')[0] +
          (Number(thief.currentPosition.split('')[1]) + 1)
      }
    })
    return player
  })
  setTimeout(() => {
    setPlayers((players) => {
      return players.map((player) => {
        player.kingRogue?.forEach((king) => {
          if (king.initialPosition === piece) {
            king.health = king.health - damage
            king.attackedPiece = piromancerAttack
            if (piromancerAttack) {
              let attack = document.getElementsByClassName('attack')
              setTimeout(() => {
                for (let i = -3; i < piromancerAttack.length; i++) {
                  attack[0].classList.remove('attack')
                }
              }, 1000)
            }
          }
          if (king.currentPosition === sideRight) {
            king.health = king.health - 2
            king.attackedPiece = piromancerAttack
          }
          if (king.currentPosition === sideLeft) {
            king.health = king.health - 2
            king.attackedPiece = piromancerAttack
          }
        })
        player.guardiansRogue?.forEach((guardian) => {
          if (guardian.initialPosition === piece) {
            guardian.health = guardian.health - damage
            guardian.attackedPiece = piromancerAttack
            if (piromancerAttack) {
              let attack = document.getElementsByClassName('attack')
              setTimeout(() => {
                for (let i = -3; i < piromancerAttack.length; i++) {
                  attack[0]?.classList.remove('attack')
                }
              }, 1000)
            }
          }
          if (guardian.currentPosition === sideRight) {
            guardian.health = guardian.health - 2
            guardian.attackedPiece = piromancerAttack
          }
          if (guardian.currentPosition === sideLeft) {
            guardian.health = guardian.health - 2
            guardian.attackedPiece = piromancerAttack
          }
        })
        player.assassins?.forEach((assassin) => {
          if (assassin.initialPosition === piece) {
            assassin.health = assassin.health - damage
            assassin.attackedPiece = piromancerAttack
            if (piromancerAttack) {
              let attack = document.getElementsByClassName('attack')
              setTimeout(() => {
                for (let i = -3; i < piromancerAttack.length; i++) {
                  attack[0]?.classList.remove('attack')
                }
              }, 1000)
            }
          }
          if (assassin.currentPosition === sideRight) {
            assassin.health = assassin.health - 2
            assassin.attackedPiece = piromancerAttack
          }
          if (assassin.currentPosition === sideLeft) {
            assassin.health = assassin.health - 2
            assassin.attackedPiece = piromancerAttack
          }
        })
        player.thiefs?.forEach((thief) => {
          if (thief.initialPosition === piece) {
            thief.health = thief.health - damage
            thief.attackedPiece = piromancerAttack
            if (piromancerAttack) {
              let attack = document.getElementsByClassName('attack')
              setTimeout(() => {
                for (let i = -3; i < piromancerAttack.length; i++) {
                  attack[0]?.classList.remove('attack')
                }
              }, 1000)
            }
          }
          if (thief.currentPosition === sideRight) {
            thief.attackedPiece = piromancerAttack
            thief.health = thief.health - 2
          }
          if (thief.currentPosition === sideLeft) {
            thief.attackedPiece = piromancerAttack
            thief.health = thief.health - 2
          }
        })
        return player
      })
    })
    return null
  })
}
