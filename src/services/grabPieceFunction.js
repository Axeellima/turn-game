let activePiece = null
export const grabPieceFunction = (
  e,
  players,
  selectedPiece,
  setPlayers,
  turnGame,
  setTurnGame
) => {
  if (activePiece && activePiece.classList.contains('piece-img')) {
    activePiece.style.border = 'none'
  }
  activePiece = e.target
  if (
    activePiece.classList.contains('piece-img') &&
    !activePiece.parentNode.parentNode.classList.contains('can-attack')
  ) {
    activePiece.style.border = '1px solid yellow'
    const canMove = document.getElementsByClassName('can-move')
    const canAttack = document.getElementsByClassName('can-attack')
    while (canAttack.length) {
      canAttack[0].classList.remove('can-attack')
    }
    while (canMove.length) {
      canMove[0].classList.remove('can-move')
    }

    return {
      grab: true,
      id: activePiece.id,
      activePiece,
    }
  } else if (activePiece.parentNode.classList.contains('can-move')) {
    players?.forEach((player) => {
      player?.assassins?.forEach((assassin) => {
        if (assassin.initialPosition === selectedPiece.id) {
          assassin.switchHome(activePiece.parentNode.id, turnGame)
          activePiece?.parentNode.classList.remove('can-move')
          const canMove = document.getElementsByClassName('can-move')
          setTimeout(() => {
            while (canMove.length) {
              canMove[0].classList.remove('can-move')
            }
            setTurnGame(1)
          })
        }
      })
      player?.thiefs?.forEach((thief) => {
        if (thief.initialPosition === selectedPiece.id) {
          thief.switchHome(activePiece.parentNode.id, turnGame)
          activePiece?.parentNode.classList.remove('can-move')
          const canMove = document.getElementsByClassName('can-move')
          setTimeout(() => {
            while (canMove.length) {
              canMove[0].classList.remove('can-move')
            }
            setTurnGame(1)
          })
        }
      })
      player?.kingRogue?.forEach((king) => {
        if (king.initialPosition === selectedPiece.id) {
          king.switchHome(activePiece.parentNode.id, turnGame)
          activePiece?.parentNode.classList.remove('can-move')
          const canMove = document.getElementsByClassName('can-move')
          setTimeout(() => {
            while (canMove.length) {
              canMove[0].classList.remove('can-move')
            }
            setTurnGame(1)
          })
        }
      })
      player?.kingMage?.forEach((king) => {
        if (king.initialPosition === selectedPiece.id) {
          king.switchHome(activePiece.parentNode.id, turnGame)
          activePiece?.parentNode.classList.remove('can-move')
          const canMove = document.getElementsByClassName('can-move')
          setTimeout(() => {
            while (canMove.length) {
              canMove[0].classList.remove('can-move')
            }
            setTurnGame(0)
          })
        }
      })
      player?.guardiansMage?.forEach((guardian) => {
        if (guardian.initialPosition === selectedPiece.id) {
          guardian.switchHome(activePiece.parentNode.id, turnGame)
          activePiece?.parentNode.classList.remove('can-move')
          const canMove = document.getElementsByClassName('can-move')
          setTimeout(() => {
            while (canMove.length) {
              canMove[0].classList.remove('can-move')
            }
            setTurnGame(0)
          })
        }
      })
      player?.guardiansRogue?.forEach((guardian) => {
        if (guardian.initialPosition === selectedPiece.id) {
          guardian.switchHome(activePiece.parentNode.id, turnGame)
          activePiece?.parentNode.classList.remove('can-move')
          const canMove = document.getElementsByClassName('can-move')
          setTimeout(() => {
            while (canMove.length) {
              canMove[0].classList.remove('can-move')
            }
            setTurnGame(1)
          })
        }
      })

      player?.piromancers?.forEach((piromancer) => {
        if (piromancer.initialPosition === selectedPiece.id) {
          piromancer.switchHome(activePiece.parentNode.id, turnGame)
          activePiece?.parentNode.classList.remove('can-move')
          const canMove = document.getElementsByClassName('can-move')
          setTimeout(() => {
            while (canMove.length) {
              canMove[0].classList.remove('can-move')
            }
            setTurnGame(0)
          })
        }
      })
      player?.sorcerers?.forEach((sorcerer) => {
        if (sorcerer.initialPosition === selectedPiece.id) {
          sorcerer.switchHome(activePiece.parentNode.id, turnGame)
          activePiece?.parentNode.classList.remove('can-move')
          const canMove = document.getElementsByClassName('can-move')
          setTimeout(() => {
            while (canMove.length) {
              canMove[0].classList.remove('can-move')
            }
            setTurnGame(0)
          })

          return
        }
      })
    })
  } else if (
    activePiece.parentNode.parentNode.classList.contains('can-attack')
  ) {
    players.forEach((player) => {
      player?.assassins?.forEach((assassin) => {
        if (assassin.initialPosition === selectedPiece.id) {
          assassin.attackPiece(setPlayers, activePiece.parentNode.id, turnGame)

          activePiece?.parentNode.classList.remove('can-attack')
          const canAttack = document.getElementsByClassName('can-attack')
          setTimeout(() => {
            while (canAttack.length) {
              canAttack[0].classList.remove('can-attack')
            }
            setTurnGame(1)
          })
        }
      })
      player?.thiefs?.forEach((thief) => {
        if (thief.initialPosition === selectedPiece.id) {
          thief.attackPiece(setPlayers, activePiece.parentNode.id, turnGame)
          activePiece?.parentNode.classList.remove('can-attack')
          const canAttack = document.getElementsByClassName('can-attack')
          setTimeout(() => {
            while (canAttack.length) {
              canAttack[0].classList.remove('can-attack')
            }
            console.log('pinto')
            setTurnGame(1)
          })
        }
      })
    })
  } else if (
    !activePiece.parentNode.classList.contains('can-move') ||
    !activePiece.parentNode.classList.contains('can-attack')
  ) {
    const canMove = document.getElementsByClassName('can-move')
    const canAttack = document.getElementsByClassName('can-attack')
    while (canMove.length) {
      canMove[0].classList.remove('can-move')
    }
    while (canAttack.length) {
      canAttack[0].classList.remove('can-attack')
    }

    return false
  }

  return false
}
