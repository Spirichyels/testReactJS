import React from "react";
import s from "./Users.module.css";
import axios from "axios";
import userPhoto from "../../assets/avatarka.webp";

class Users extends React.Component {
  componentDidMount() {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((response) => {
        debugger;
        this.props.setUsers(response.data.items);
      });
  }
  render() {
    return (
      <div>
        <button onClick={this.getUsers}>Get users</button>
        {this.props.users.map((u) => (
          <div key={u.id}>
            <span>
              <div className={s.ava}>
                <img
                  src={u.photos.small != null ? u.photos.small : userPhoto}
                  alt=""
                />
              </div>
              <div>
                {u.followed ? (
                  <button
                    onClick={() => {
                      this.props.unFollow(u.id);
                    }}
                  >
                    unFollow
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      this.props.follow(u.id);
                    }}
                  >
                    Follow
                  </button>
                )}
              </div>
            </span>
            <span>
              <span>
                <div>{u.name}</div>
                <div>{u.status}</div>
              </span>
              {/* <div>{"u.location.country"}</div>
				<div>{"u.location.city"}</div> */}
            </span>
          </div>
        ))}
      </div>
    );
  }
}

export default Users;
