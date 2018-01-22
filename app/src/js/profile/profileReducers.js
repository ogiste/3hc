//profileReducer
//All profile reducer functions

import {
    profileActions as profileActions,
} from './profileActions';


var profileReducer = function(profileState = {},action){

	console.log("profileReducer is active ..");
	//console.log(" profileState: ");
	//console.log(profileState);
	switch(action.type) {
 
	    case "EditFname":
	        profileState.fname = action.payload;//make immutable and stop altering actual state
	       	console.log("EditFname action response..");
	       	console.log("Edited State: ");
	       	console.log(profileState);
	        return Object.assign(profileState, {fname: action.payload});
	        break;
	    case "EditLname":
	    	 console.log("EditLname action response..");
	    	 profileState.lname = action.payload;//make immutable and stop altering actual state
	    	return Object.assign(profileState, {fname: action.payload});
	        break;
	    default:
	    	console.log("default action response..");
	        return profileState;
	};

	
};

export default profileReducer;