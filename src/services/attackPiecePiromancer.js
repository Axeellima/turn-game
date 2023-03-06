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
          }
          if (king.currentPosition === sideRight) {
            king.health = king.health - 2
          }
          if (king.currentPosition === sideLeft) {
            king.health = king.health - 2
          }
        })
        player.guardiansRogue?.forEach((guardian) => {
          if (guardian.initialPosition === piece) {
            guardian.health = guardian.health - damage
          }
          if (guardian.currentPosition === sideRight) {
            guardian.health = guardian.health - 2
          }
          if (guardian.currentPosition === sideLeft) {
            guardian.health = guardian.health - 2
          }
        })
        player.assassins?.forEach((assassin) => {
          if (assassin.initialPosition === piece) {
            assassin.health = assassin.health - damage
          }
          if (assassin.currentPosition === sideRight) {
            assassin.health = assassin.health - 2
          }
          if (assassin.currentPosition === sideLeft) {
            assassin.health = assassin.health - 2
          }
        })
        player.thiefs?.forEach((thief) => {
          if (thief.initialPosition === piece) {
            thief.health = thief.health - damage
            console.log(thief)
          }
          if (thief.currentPosition === sideRight) {
            thief.health = thief.health - 2
            console.log(thief)
          }
          if (thief.currentPosition === sideLeft) {
            thief.health = thief.health - 2
            console.log(thief)
          }
        })
        return player
      })
    })
    return null
  })
}
