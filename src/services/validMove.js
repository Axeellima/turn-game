export const canMove = (board) => {
  return board?.map((home) => {
    if (home.props.children.props.image !== undefined) {
      return {
        home: home,
        id: home.props.id,
        canMove: false,
      }
    }
    return {
      home: home,
      id: home.props.id,
      canMove: true,
    }
  })
}
