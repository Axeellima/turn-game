export const moveAssassin = (
  homes,
  canMove,
  board,
  team,
  direction,
  currentPosition,
) => {
  if (team === 1) {
    for (let i = 0; i < homes.length; i++) {
      if (homes[i] === currentPosition[0]) {
        //  possibleMoves indece 0 move para cima
        //  possibleMoves indece 1 move para baixo
        //  possibleMoves indece 2 move para esquerda
        //  possibleMoves indece 3 move para direita
        //  possibleMoves indece 4 move para direita cima
        //  possibleMoves indece 5 move para direita baixo
        //  possibleMoves indece 6 move para esquerda cima
        //  possibleMoves indece 7 move para esquerda baixo
        const possibleMoves = [
          homes[i + 1] + currentPosition.split('')[1],
          homes[i - 1] + currentPosition.split('')[1],
          homes[i] + (Number(currentPosition.split('')[1]) - 1),
          homes[i] + (Number(currentPosition.split('')[1]) + 1),
          homes[i + 1] + (Number(currentPosition.split('')[1]) + 1),
          homes[i + 1] + (Number(currentPosition.split('')[1]) - 1),
          homes[i - 1] + (Number(currentPosition.split('')[1]) + 1),
          homes[i - 1] + (Number(currentPosition.split('')[1]) - 1),
        ]
        for (let j = 0; j <= possibleMoves.length; j++) {
          canMove.find((home) => {
            if (home.canMove === true && home.id === possibleMoves[j]) {
              board.forEach((home) => {
                if (home.props.id === possibleMoves[j]) {
                  const homeWhite = document.getElementsByClassName(
                    'home-black',
                  )
                  const homeBlack = document.getElementsByClassName(
                    'home-white',
                  )
                  const allHome = [...homeWhite, ...homeBlack]
                  for (let i = 0; i < allHome.length; i++) {
                    if (allHome[i].id === possibleMoves[j]) {
                      allHome[i].classList.add('can-move')
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
        //  possibleMoves indece 0 move para cima
        //  possibleMoves indece 1 move para baixo
        //  possibleMoves indece 2 move para esquerda
        //  possibleMoves indece 3 move para direita
        //  possibleMoves indece 4 move para direita cima
        //  possibleMoves indece 5 move para direita baixo
        //  possibleMoves indece 6 move para esquerda cima
        //  possibleMoves indece 7 move para esquerda baixo
        const possibleMoves = [
          homes[i - 1] + currentPosition.split('')[1],
          homes[i + 1] + currentPosition.split('')[1],
          homes[i] + (Number(currentPosition.split('')[1]) + 1),
          homes[i] + (Number(currentPosition.split('')[1]) - 1),
          homes[i - 1] + (Number(currentPosition.split('')[1]) + 1),
          homes[i - 1] + (Number(currentPosition.split('')[1]) - 1),
          homes[i + 1] + (Number(currentPosition.split('')[1]) + 1),
          homes[i + 1] + (Number(currentPosition.split('')[1]) - 1),
        ]
        for (let j = 0; j < possibleMoves.length; j++) {
          canMove.find((home) => {
            if (home.canMove === true && home.id === possibleMoves[j]) {
              board.forEach((home) => {
                if (home.props.id === possibleMoves[j]) {
                  const homeWhite = document.getElementsByClassName(
                    'home-black',
                  )
                  const homeBlack = document.getElementsByClassName(
                    'home-white',
                  )
                  const allHome = [...homeWhite, ...homeBlack]
                  for (let i = 0; i < allHome.length; i++) {
                    if (allHome[i].id === possibleMoves[j]) {
                      allHome[i].classList.add('can-move')
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
