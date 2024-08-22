import preloader from "../../../assets/images/loading.svg";
import React from "react";
import styles from "./Preloader.module.css";

let Preloader = (props) => {
  return (
    <div className={styles.item}>
      <img src={preloader}></img>
    </div>
  );
};

export default Preloader;
