import styles from "./Users.module.css";
import userPhoto from "../../assets/images/avatarka.webp";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

let Paginator = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];
  let x;
  for (let i = 1; i <= pagesCount; i++) {
    x = { id: i, count: i };
    pages.push(x);
  }

  return (
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
  );
};

export default Paginator;
