import * as C from './constants'

export const addBottle = (id, name, colour, detail) => ({
  type : C.ADD_BOTTLE,
  id   : id,
  name,
  colour,
  detail
})


export const setVisibilityFilter = (filter) => ({
  type: C.SET_VISIBILITY_FILTER,
  filter
})

export const setUiMode = (mode, id) => ({
  type: C.SET_UI_MODE,
  mode
})

export const showDetail = (id) => ({
  type: C.SHOW_DETAIL,
  id
})
