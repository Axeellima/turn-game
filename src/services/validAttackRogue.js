export const canAttackRogue = (board) => {
  return board?.map((home) => {
    if (
      home.props.children.props.name === 'sorcerer' ||
      home.props.children.props.name === 'guardianMage' ||
      home.props.children.props.name === 'piromancer' ||
      home.props.children.props.name === 'kingMage'
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
