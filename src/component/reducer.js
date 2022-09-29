const reducer = (state, action) => {
  const { type, payload } = action
  switch (type) {
    case 'ADD_ITEM':
      console.log('state before add', state)
      return [...state, payload]
    case 'REMOVE_ITEM':
      console.log('remove item')
      return
    default:
      console.log('case not matched')
      return
  }
}
export default reducer
