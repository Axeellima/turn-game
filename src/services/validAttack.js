export const canAttack = (board) => {
  return board?.map((home) => {
    if (home.props.children.props.image !== undefined) {
      return {
        home: home,
        id: home.props.id,
        canAttack: true,
      }
    }
    return {
      home: home,
      id: home.props.id,
      canAttack: false,
    }
  })
}
