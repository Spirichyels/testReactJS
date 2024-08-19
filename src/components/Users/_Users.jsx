// import React from "react";
// import s from "./Users.module.css";
// import axios from "axios";
// import userPhoto from "../../assets/avatarka.webp";

// let Users = (props) => {
//   let getUsers = () => {
//     if (props.users.length === 0) {
//       axios
//         .get("https://social-network.samuraijs.com/api/1.0/users")
//         .then((response) => {
//           debugger;
//           props.setUsers(response.data.items);
//         });
//     }
//   };

//   return (
//     <div>
//       <button onClick={getUsers}>Get users</button>
//       {props.users.map((u) => (
//         <div key={u.id}>
//           <span>
//             <div className={s.ava}>
//               <img
//                 src={u.photos.small != null ? u.photos.small : userPhoto}
//                 alt=""
//               />
//             </div>
//             <div>
//               {u.followed ? (
//                 <button
//                   onClick={() => {
//                     props.unFollow(u.id);
//                   }}
//                 >
//                   unFollow
//                 </button>
//               ) : (
//                 <button
//                   onClick={() => {
//                     props.follow(u.id);
//                   }}
//                 >
//                   Follow
//                 </button>
//               )}
//             </div>
//           </span>
//           <span>
//             <span>
//               <div>{u.name}</div>
//               <div>{u.status}</div>
//             </span>
//             {/* <div>{"u.location.country"}</div>
//             <div>{"u.location.city"}</div> */}
//           </span>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Users;
