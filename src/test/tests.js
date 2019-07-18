import {cellar} from '../js/reducer-bottles'
import {addBottle,setVisibilityFilter,setUiMode, showDetail} from  '../js/action-creators'
import * as C from './constants'


const expect = require("expect");


console.log('tests running');

// actions to text
// addBottle(name, colour, detail)
// setVisibilityFilter(filter)
// setUiMode(mode, id)
// showDetail(id)


// state shape

// bottles : array [{        
//   id     : int,
//   name   : string,
//   colour : string,
//   detail : string
// }]
// visibilityFilter : string
// uimode : string 
// detail : string

var stateBefore = {bottles: [], visibilityFilter: "SHOW_ALL", uimode: "LIST", detail: null}
var action = addBottle(0, 'vin rouge', C.RED, 'lovely wine')
var stateAfter = {bottles: [{id:0, name: "Cabernet Shiraz Merlot", colour: "RED", detail: 'lovely wine'}], visibilityFilter: "SHOW_ALL", uimode: "LIST", detail: null}

expect(
  cellar(stateBefore, action)
).toEqual(stateAfter)


console.log('tests passed');