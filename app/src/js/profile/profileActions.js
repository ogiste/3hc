
const GET_USER_FNAME = "GET_USER_FNAME";
const EDIT_USER_FNAME = "EDIT_USER_FNAME";

export var getUserFname = function(user_id = 1){
	return {
		type:GET_USER_FNAME,
		fname:"Alfred"

	};
};

export var editUserName = function(user_id = 1){
	return {
		type: EDIT_USER_FNAME,
		fname:"OGi"
	};
};

var profileActions= [getUserFname,editUserName];

export default profileActions;
