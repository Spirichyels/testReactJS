import React from "react";
import styles from "./Users.module.css";
import axios from "axios";
import userPhoto from "../../assets/avatarka.webp";

class Users extends React.Component {
  componentDidMount() {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  }

  render() {
    let pagesCount = this.props.totalUsersCount / this.props.pageSize;
    let pages = [];
    let x;
    debugger;
    return <div>{this.props.totalUsersCount}</div>;
    debugger;
  }
}

export default Users;

// render() {
//     let pagesCount = this.props.totalUsersCount / this.props.pageSize;

//     let pages = [];
//     let x;
//     for (let i = 1; i <= pagesCount; i++) {
//       x = { id: i, count: i };
//       pages.push(x);
//     }
//     return (
//       <div>
//         <div>
//           {pages.map((p) => {
//             return (
//               <span
//                 key={p.id}
//                 className={(
//                   this.props.currentProps === p.count && styles.selectedPage
//                 ).toString()}
//               >
//                 {p.count}
//               </span>
//             );
//           })}
//           zxc
//         </div>

//         {
//           <div>
//             {this.props.users.map((u) => (
//               <div key={u.id}>
//                 <span>
//                   <div className={styles.ava}>
//                     <img
//                       src={u.photos.small != null ? u.photos.small : userPhoto}
//                       alt=""
//                     />
//                   </div>
//                   <div>
//                     {u.followed ? (
//                       <button
//                         onClick={() => {
//                           this.props.unFollow(u.id);
//                         }}
//                       >
//                         unFollow
//                       </button>
//                     ) : (
//                       <button
//                         onClick={() => {
//                           this.props.follow(u.id);
//                         }}
//                       >
//                         Follow
//                       </button>
//                     )}
//                   </div>
//                 </span>
//                 <span>
//                   <span>
//                     <div>{u.name}</div>
//                     <div>{u.status}</div>
//                   </span>
//                 </span>
//               </div>
//             ))}
//           </div>
//         }
//       </div>
//     );
//   }
