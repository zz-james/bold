## Installation 

You will need node.js to build the files. 

- ```npm run build``` will build the project (this includes npm run javascript and npm run static)
- ```npm run javascript``` will compile to browser safe ES5 
- ```npm run static``` will copy static assets
- ```npm run tests``` will run the tests 

### Notes

This is a fairly standard idiomatic redux/react architecture, the main reducer (src/js/reducer-bottles.js) consist of 5 smaller reducers which are combined using the combineReducers function from the redux library.

I have extracted action creators as this helps with code-reuse and allows the team to quickly see what actions a component can dispatch by looking to see which action creator was included at the top of the file.

Dummy data can be replaced with an API fetch call, and saving data locally is very easy by subscribing a save method to the reducer. Loading data from local can be easily implemented when the redux store is instantiated, with another asnch call to the api to follow up.

I would like to explore the possibility of using the new react hooks API to manage state, but I have not had time to learn this, just to let you know I am aware of it and will be giving it some time soon.

Run compiled version at /static/ 

**Note:** Styling is with UIKIT library included as a static css file.

**Note:** Did not have time to do the testing but general strategy is to unit test using the actioin/creators making assertions on the state object, react components can be tested with dom snapshots or value tested against React virtual dom objects.