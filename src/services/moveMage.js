export const moveMage = (
  homes,
  canMove,
  board,
  team,
  direction,
  currentPosition
) => {
  if (team === 2) {
    for (let i = 0; i < homes.length; i++) {
      if (homes[i] === currentPosition[0]) {
        if (direction === 'up') {
          let newPosition = homes[i + 1] + currentPosition.split('')[1]

          const validMove = canMove.find((home) => {
            if (home.canMove === true && home.id === newPosition) {
              board.forEach((home) => {
                if (home.props.id === newPosition) {
                  const homeWhite =
                    document.getElementsByClassName('home-black')
                  const homeBlack =
                    document.getElementsByClassName('home-white')
                  const allHome = [...homeWhite, ...homeBlack]
                  for (let i = 0; i < allHome.length; i++) {
                    if (allHome[i].id === newPosition) {
                      allHome[i].classList.add('can-move')
                      return allHome[i]
                    }
                  }
                }
              })
            }
            return false
          })
          if (validMove) {
          }
          return
        }
      }
    }
  } else if (team === 1) {
    for (let i = 0; i < homes.length; i++) {
      if (homes[i] === currentPosition[0]) {
        if (direction === 'up') {
          let newPosition = homes[i - 1] + currentPosition.split('')[1]
          const validMove = canMove.find((home) => {
            if (home.canMove === true && home.id === newPosition) {
              board.forEach((home) => {
                if (home.props.id === newPosition) {
                  const homeWhite =
                    document.getElementsByClassName('home-black')
                  const homeBlack =
                    document.getElementsByClassName('home-white')
                  const allHome = [...homeWhite, ...homeBlack]
                  for (let i = 0; i < allHome.length; i++) {
                    if (allHome[i].id === newPosition) {
                      allHome[i].classList.add('can-move')
                      return allHome[i]
                    }
                  }
                }
              })
            }
            return false
          })
          if (validMove) {
          }
          return
        }
      }
    }
  }
}
