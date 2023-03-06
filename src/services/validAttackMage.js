export const canAttackMage = (board) => {
  return board?.map((home) => {
    if (
      home.props.children.props.name === 'thief' ||
      home.props.children.props.name === 'guardianRogue' ||
      home.props.children.props.name === 'assassin' ||
      home.props.children.props.name === 'kingRogue'
    ) {
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
