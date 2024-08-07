const SEND_MESSAGE = "SEND_MESSAGE"
const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY"



const dialogsReducer = (state, action) => {
	
	
	  if (action.type === SEND_MESSAGE) {
		let body = state.newMessageBody;
		state.messages.push({id : 5, message: body});
		state.newMessageBody = ""
	  } 
	  else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
		state.newMessageBody = action.body;
	  }
	return state;
}

export default dialogsReducer;