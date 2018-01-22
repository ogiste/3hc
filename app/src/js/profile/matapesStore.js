import {combineReducers,applyMiddleware,createStore } from 'redux';
import thunk from "redux-thunk";
const util = require('util');
import profileReducer from './profileReducers';
//const setTimeoutPromise = util.promisify(setTimeout);


var initialTrip = {//Initial Trip Store Object
	"Fname":"name",
	ArtistName: "OGi",
	AudioTitle: "Panari Hotel",
	TripTitle: " Mwanzo",
	TripDescription: " Something great coming soon",
	AudioUrl: "http://notyethere.chill"

};

var initialUser = {fname:'Alfred',lname:'Opon', username:'lakesidetrip' };

//const middleware = ;



const matapes_store = createStore(profileReducer,initialUser,applyMiddleware(thunk));

/*matapes_store.subscribe = (()=>{
	console.log("State changed: ");
	console.log( matapes_store.getState());
}); */

//matapes_store.dispatch({type:"EditFname",payload:"OGiste"});

// 6 seconds pass...
// result = 3