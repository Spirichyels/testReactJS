import profileReducer, {
  addPostActionCreator,
  deletePost,
} from "./profile-reducer";

let state = {
  posts: [
    { id: 1, likesCount: 12, message: "Helloy" },
    { id: 2, likesCount: 5, message: "Hi? Arae You?" },
    { id: 3, likesCount: 0, message: "blabla" },
    { id: 4, likesCount: 9, message: "WtF" },
    { id: 5, likesCount: 11, message: "It`s is my first post!" },
  ],
};

// test("length of post should be incremented", () => {
//   //1. test data
//   let action = addPostActionCreator("it-camasutra.com");
//   // 2. action
//   let newState = profileReducer(state, action);

//   //3. expectation
//   expect(newState.posts.length).toBe(6);
// });

// test("message of new post should be correct", () => {
//   //1. test data
//   let action = addPostActionCreator("it-camasutra.com");
//   // 2. action
//   let newState = profileReducer(state, action);
//   //3. expectation
//   expect(newState.posts[5].message).toBe("it-camasutra.com");
// });

// test("delete post", () => {
//   //1. test data
//   let action = deletePost(1);
//   // 2. action
//   let newState = profileReducer(state, action);
//   //3. expectation
//   expect(newState.posts.length).toBe(4);
// });
