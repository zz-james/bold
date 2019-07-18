import uuidv4 from "@bundled-es-modules/uuid/v4.js"
import * as C from './constants'

let nextTodoId = 0; // my build system will not deal with node--uuid package see issue:
export const addBottle = (name, colour, detail) => ({
  type : C.ADD_BOTTLE,
  id   : uuidv4(),
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
