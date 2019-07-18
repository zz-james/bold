import uuidv4 from "@bundled-es-modules/uuid/v4.js"

import * as C from './constants'

// drop in something collecting from an API here
export let data = {
  bottles : [
    {
      id     : uuidv4(),
      name   : 'vin rouge',
      colour : C.RED,
      detail : 'lovely vin rouge yum yum'
    },
    {
      id     : uuidv4(),
      name   :'vin blanc',
      colour : C.WHITE,
      detail : 'keep it in the fridge for hot days'
    },
    {
      id     : uuidv4(),
      name   : 'vin rose',
      colour : C.OTHER,
      detail : 'party wine'
    },  
  ]
}
