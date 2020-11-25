import React from "react";

import styles from "./styles.module.css";

function TeamCard({ info }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.teamName}>{info.name}</h1>
      <h3 className={styles.teamContact}>{info.contact}</h3>
    </div>
  );
}

export default TeamCard;
