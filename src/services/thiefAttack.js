export const thiefAttack = (
  homes,
  canAttack,
  board,
  team,
  direction,
  currentPosition,
) => {
  if (team === 1) {
    for (let i = 0; i < homes.length; i++) {
      if (homes[i] === currentPosition[0]) {
        const cantAttack = [
          homes[i + 2] + currentPosition.split('')[1],
          homes[i - 2] + currentPosition.split('')[1],
          homes[i] + (Number(currentPosition.split('')[1]) - 2),
          homes[i] + (Number(currentPosition.split('')[1]) + 2),
          homes[i + 2] + (Number(currentPosition.split('')[1]) + 2),
          homes[i + 2] + (Number(currentPosition.split('')[1]) - 2),
          homes[i - 2] + (Number(currentPosition.split('')[1]) + 2),
          homes[i - 2] + (Number(currentPosition.split('')[1]) - 2),
        ]
        const possibleCritAttack = [
          homes[i + 1] + currentPosition.split('')[1],
          homes[i - 1] + currentPosition.split('')[1],
          homes[i] + (Number(currentPosition.split('')[1]) - 1),
          homes[i] + (Number(currentPosition.split('')[1]) + 1),
          homes[i + 1] + (Number(currentPosition.split('')[1]) + 1),
          homes[i + 1] + (Number(currentPosition.split('')[1]) - 1),
          homes[i - 1] + (Number(currentPosition.split('')[1]) + 1),
          homes[i - 1] + (Number(currentPosition.split('')[1]) - 1),

          homes[i + 2] + currentPosition.split('')[1],
          homes[i - 2] + currentPosition.split('')[1],
          homes[i] + (Number(currentPosition.split('')[1]) - 2),
          homes[i] + (Number(currentPosition.split('')[1]) + 2),
          homes[i + 2] + (Number(currentPosition.split('')[1]) + 2),
          homes[i + 2] + (Number(currentPosition.split('')[1]) - 2),
          homes[i - 2] + (Number(currentPosition.split('')[1]) + 2),
          homes[i - 2] + (Number(currentPosition.split('')[1]) - 2),
        ]
        const oneHomeAttack = [
          homes[i + 1] + currentPosition.split('')[1],
          homes[i - 1] + currentPosition.split('')[1],
          homes[i] + (Number(currentPosition.split('')[1]) - 1),
          homes[i] + (Number(currentPosition.split('')[1]) + 1),
          homes[i + 1] + (Number(currentPosition.split('')[1]) + 1),
          homes[i + 1] + (Number(currentPosition.split('')[1]) - 1),
          homes[i - 1] + (Number(currentPosition.split('')[1]) + 1),
          homes[i - 1] + (Number(currentPosition.split('')[1]) - 1),
        ]
        for (let j = 0; j <= possibleCritAttack.length; j++) {
          canAttack.find((home) => {
            if (home.canAttack === true && home.id === possibleCritAttack[j]) {
              board.forEach((home) => {
                if (home.props.id === possibleCritAttack[j]) {
                  const homeWhite = document.getElementsByClassName(
                    'home-black',
                  )
                  const homeBlack = document.getElementsByClassName(
                    'home-white',
                  )
                  const allHome = [...homeWhite, ...homeBlack]
                  for (let i = 0; i < allHome.length; i++) {
                    if (allHome[i].id === possibleCritAttack[j]) {
                      allHome[i].classList.add('can-attack')
                      for (let x = 0; x < oneHomeAttack.length; x++) {
                        if (
                          allHome[i].children[0].children[0]?.id ===
                          oneHomeAttack[x]
                        ) {
                          allHome.forEach((home) => {
                            if (home.id === canAttack[x]) {
                              console.log(home)
                              home.classList.remove('can-attack')
                            }
                          })
                        }
                      }
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
        const possibleAttack = [
          homes[i - 1] + currentPosition.split('')[1],
          homes[i + 1] + currentPosition.split('')[1],
          homes[i] + (Number(currentPosition.split('')[1]) + 1),
          homes[i] + (Number(currentPosition.split('')[1]) - 1),
          homes[i - 1] + (Number(currentPosition.split('')[1]) + 1),
          homes[i - 1] + (Number(currentPosition.split('')[1]) - 1),
          homes[i + 1] + (Number(currentPosition.split('')[1]) + 1),
          homes[i + 1] + (Number(currentPosition.split('')[1]) - 1),
        ]
        const possibleCritAttack = [
          homes[i - 2] + currentPosition.split('')[1],
          homes[i + 2] + currentPosition.split('')[1],
          homes[i] + (Number(currentPosition.split('')[1]) + 2),
          homes[i] + (Number(currentPosition.split('')[1]) - 2),
          homes[i + 2] + (Number(currentPosition.split('')[1]) - 2),
          homes[i + 2] + (Number(currentPosition.split('')[1]) + 2),
          homes[i - 2] + (Number(currentPosition.split('')[1]) - 2),
          homes[i - 2] + (Number(currentPosition.split('')[1]) + 2),
        ]
        for (let j = 0; j < possibleCritAttack.length; j++) {
          canAttack.find((home) => {
            if (home.canAttack === true && home.id === possibleCritAttack[j]) {
              board.forEach((home) => {
                if (home.props.id === possibleCritAttack[j]) {
                  const homeWhite = document.getElementsByClassName(
                    'home-black',
                  )
                  const homeBlack = document.getElementsByClassName(
                    'home-white',
                  )
                  const allHome = [...homeWhite, ...homeBlack]
                  for (let i = 0; i < allHome.length; i++) {
                    if (allHome[i].id === possibleCritAttack[j]) {
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
