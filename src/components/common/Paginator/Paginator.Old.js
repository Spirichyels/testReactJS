import styles from "./Paginator.module.css";

let PaginatorOld = ({
  totalUsersCount,
  pageSize,
  onPageChanged,
  currentPage,
}) => {
  let pagesCount = Math.ceil(totalUsersCount / pageSize);

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
              currentPage === p.count && styles.selectedPage
            ).toString()}
            onClick={(e) => {
              onPageChanged(p.count);
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

export default PaginatorOld;
