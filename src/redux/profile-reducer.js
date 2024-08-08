

const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"



let initialState = {
	posts: [
        { id: 1, likesCount: 12, message: "Helloy" },
        { id: 2, likesCount: 5, message: "Hi? Arae You?" },
        { id: 3, likesCount: 0, message: "blabla" },
        { id: 4, likesCount: 9, message: "WtF" },
        { id: 5, likesCount: 11, message: "It`s is my first post!" },
      ],
      newPostText: "it-camasutra",
}



const profileReducer = (state = initialState, action) => {
	
	switch(action.type) {
		case ADD_POST:
			let rand = Math.floor(Math.random()*300);
			let newPost = {
				id: state.posts.length + 1,
				likesCount: rand,
				message: state.newPostText,
				
			}
			return {
				...state,
				posts: [...state.posts, newPost],
				newPostText: "",
			}
		case UPDATE_NEW_POST_TEXT:
			return {
				...state,
				newPostText: action.newTextP,
			}
		default:
			return state;
	}
}


export const  addPostActionCreator =() => ({type: ADD_POST})
export const uppdateNewPostActionCreator =(text) => 
	({type: UPDATE_NEW_POST_TEXT,newTextP: text})

export default profileReducer;