import styles from "./Users.module.css";
import userPhoto from "../../assets/images/avatarka.webp";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";

let Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];
  let x;
  for (let i = 1; i <= pagesCount; i++) {
    x = { id: i, count: i };
    pages.push(x);
  }

  return (
    <div>
      <div>
        {pages.map((p) => {
          return (
            <span
              key={p.id}
              className={(
                props.currentPage === p.count && styles.selectedPage
              ).toString()}
              onClick={(e) => {
                props.onPageChanged(p.count);
              }}
            >
              {p.count <= 28
                ? p.count + " "
                : p.count == pagesCount
                ? p.count
                : ""}
            </span>
          );
        })}
      </div>
      <div>
        {props.users.map((u) => (
          <div key={u.id}>
            <span>
              <div className={styles.ava}>
                <NavLink to={"/profile/" + u.id}>
                  <img
                    src={u.photos.small != null ? u.photos.small : userPhoto}
                    alt=""
                  />
                </NavLink>
              </div>
              <div>
                {u.followed ? (
                  <button
                    onClick={() => {
                      axios
                        .delete(
                          `https://social-network.samuraijs.com/api/1.0/unFollow/${u.id}`,
                          {
                            withCredentials: true,
                            headers: {
                              "API-KEY": "2669d671-357b-441a-abdd-53ae2489bfc8",
                            },
                          }
                        )
                        .then((response) => {
                          if (response.data.resultCode == 0) {
                            props.unFollow(u.id);
                          }
                        });
                    }}
                  >
                    unFollow
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      axios
                        .post(
                          `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                          {},
                          {
                            withCredentials: true,
                            headers: {
                              "API-KEY": "2669d671-357b-441a-abdd-53ae2489bfc8",
                            },
                          }
                        )
                        .then((response) => {
                          debugger;
                          if (response.data.resultCode == 0) {
                            props.follow(u.id);
                          }
                        });
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
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
