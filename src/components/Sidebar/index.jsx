import React from "react";

import styles from "./styles.module.css";
import TeamCard from "../TeamCard";

function Sidebar({ info }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.name}>Falcone Quadras Esportivas</h1>
      <div className={styles.teamsDiv}>
        <h2 className={styles.subtitle}>Times:</h2>
        {info.teams.map((team) => {
          return <TeamCard info={team} />;
        })}
      </div>
      <button
        className={styles.addBtn}
        onClick={() => {
          let name = prompt("Digite o nome do time");
          alert(`Time ${name} adicionado a base (Em desenvolvimento)`);
        }}
      >
        ADD TEAM
      </button>
    </div>
  );
}

export default Sidebar;
