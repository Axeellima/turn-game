export const possibleAttack = (
  homes,
  canAttack,
  board,
  team,
  direction,
  currentPosition
) => {
  if (team === 1) {
    for (let i = 0; i < homes.length; i++) {
      if (homes[i] === currentPosition[0]) {
        const possibleAttacks = [
          homes[i + 1] + currentPosition.split('')[1],
          homes[i - 1] + currentPosition.split('')[1],
          homes[i] + (Number(currentPosition.split('')[1]) - 1),
          homes[i] + (Number(currentPosition.split('')[1]) + 1),
          homes[i + 1] + (Number(currentPosition.split('')[1]) + 1),
          homes[i + 1] + (Number(currentPosition.split('')[1]) - 1),
          homes[i - 1] + (Number(currentPosition.split('')[1]) + 1),
          homes[i - 1] + (Number(currentPosition.split('')[1]) - 1),
        ]
        for (let j = 0; j <= possibleAttacks.length; j++) {
          canAttack.find((home) => {
            if (home.canAttack === true && home.id === possibleAttacks[j]) {
              board.forEach((home) => {
                if (home.props.id === possibleAttacks[j]) {
                  const homeWhite =
                    document.getElementsByClassName('home-black')
                  const homeBlack =
                    document.getElementsByClassName('home-white')
                  const allHome = [...homeWhite, ...homeBlack]
                  for (let i = 0; i < allHome.length; i++) {
                    if (allHome[i].id === possibleAttacks[j]) {
                      allHome[i].classList.add('can-attack')
                    }
                  }
                }
              })
            }
            return false
          })
        }
        return
      }
    }
  } else if (team === 2) {
    for (let i = 0; i < homes.length; i++) {
      if (homes[i] === currentPosition[0]) {
        const possibleAttacks = [
          homes[i - 1] + currentPosition.split('')[1],
          homes[i + 1] + currentPosition.split('')[1],
          homes[i] + (Number(currentPosition.split('')[1]) + 1),
          homes[i] + (Number(currentPosition.split('')[1]) - 1),
          homes[i - 1] + (Number(currentPosition.split('')[1]) + 1),
          homes[i - 1] + (Number(currentPosition.split('')[1]) - 1),
          homes[i + 1] + (Number(currentPosition.split('')[1]) + 1),
          homes[i + 1] + (Number(currentPosition.split('')[1]) - 1),
        ]
        for (let j = 0; j < possibleAttacks.length; j++) {
          canAttack.find((home) => {
            if (home.canAttack === true && home.id === possibleAttacks[j]) {
              board.forEach((home) => {
                if (home.props.id === possibleAttacks[j]) {
                  const homeWhite =
                    document.getElementsByClassName('home-black')
                  const homeBlack =
                    document.getElementsByClassName('home-white')
                  const allHome = [...homeWhite, ...homeBlack]
                  for (let i = 0; i < allHome.length; i++) {
                    if (allHome[i].id === possibleAttacks[j]) {
                      allHome[i].classList.add('can-attack')
                      return allHome[i]
                    }
                  }
                }
              })
            }
            return false
          })
        }
        return
      }
    }
  }
}
