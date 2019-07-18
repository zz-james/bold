// import {counter} from '../js/reducer'
// import {addCounter, removeCounter, incrementCounter, toggleTodo} from  '../js/addCounter'
// import {todoApp} from '../js/todos'

// const expect = require("expect");


// console.log('tests running');

// expect(
//   counter(0, {type: 'INCREMENT'})
// ).toEqual(1);

// expect(
//   counter(1, {type: 'INCREMENT'})
// ).toEqual(2);

// expect(
//   counter(2, {type: 'DECREMENT'})
// ).toEqual(1);

// expect(
//   counter(1, {type:'SOMETHING ELSE'})
// ).toEqual(1);

// expect(
//   counter(undefined, {})
// ).toEqual(0);

// expect(addCounter([])).toEqual([0]);

// expect(
//   removeCounter([0,10,20],1)
// ).toEqual([0,20])

// const listBefore = [0,10,20];
// const listAfter = [0,11,20];

// expect(
//   incrementCounter(listBefore,1)
// ).toEqual(listAfter);

// const todoBefore = {
//   id:0,
//   text:'Learn Redux',
//   completed: false
// };
// const todoAfter = {
//   id:0,
//   text:'Learn Redux',
//   completed: true
// };

// expect(
//   toggleTodo(todoBefore)
// ).toEqual(todoAfter);



// var stateBefore = []
// var action = {
//   type: 'ADD_TODO',
//   id: 0,
//   text: 'Learn Redux'
// };
// var stateAfter = [
//   {
//     id: 0,
//     text: 'Learn Redux',
//     completed: false
//   }
// ]

// expect(
//   todos(stateBefore, action)
// ).toEqual(stateAfter)

// var stateBefore = [
//   {
//     id: 0,
//     text: 'Learn Redux',
//     completed: false
//   },
//   {
//     id: 1,
//     text: 'Go Shopping',
//     completed: false
//   }
// ];

// var action = {
//   type: 'TOGGLE_TODO',
//   id: 1
// }

// var stateAfter = [
//   {
//     id: 0,
//     text: 'Learn Redux',
//     completed: false
//   },
//   {
//     id: 1,
//     text: 'Go Shopping',
//     completed: true
//   }
// ];

// expect(
//   todos(stateBefore, action)
// ).toEqual(stateAfter)

// console.log('tests passed');