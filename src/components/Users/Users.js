import styles from "./Users.module.css";
import userPhoto from "../../assets/avatarka.webp";

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
              {p.count}
            </span>
          );
        })}
      </div>
      <div>
        {props.users.map((u) => (
          <div key={u.id}>
            <span>
              <div className={styles.ava}>
                <img
                  src={u.photos.small != null ? u.photos.small : userPhoto}
                  alt=""
                />
              </div>
              <div>
                {u.followed ? (
                  <button
                    onClick={() => {
                      props.unFollow(u.id);
                    }}
                  >
                    unFollow
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      props.follow(u.id);
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
