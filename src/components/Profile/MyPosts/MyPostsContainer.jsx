import React from "react";
import { addPostActionCreator, uppdateNewPostActionCreator } from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts.jsx";
import StoreContext from "../../../StoreContext.js";





const MyPostsContainer = () => {

  return (
	<StoreContext.Consumer>
		{(store) => {
			let state = store.getState();
  			let addPost = () => {
    			store.dispatch(addPostActionCreator());
  			};

  			let onPostChange = (text) => {
    		let action = uppdateNewPostActionCreator(text);
    		store.dispatch(action)
  			};


			return <MyPosts updateNewPostText={onPostChange} 
			newPostText={state.profilePage.newPostText}
			addPost={addPost} 
			posts={state.profilePage.posts}/>
		}
		
		}
	</StoreContext.Consumer>
	
	)
}

export default MyPostsContainer;
