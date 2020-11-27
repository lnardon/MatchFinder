import React from "react";

import styles from "./styles.module.css";
import closeImage from "../../assets/close.svg";
import TeamCard from "../TeamCard";

function Sidebar({ info, close }) {
  return (
    <div className={styles.container}>
      <div className={styles.closeDiv}>
        <img
          src={closeImage}
          alt="Close"
          className={styles.closeBtn}
          onClick={close}
        />
      </div>
      <h1 className={styles.name}>Falcone Quadras Esportivas</h1>
      <div className={styles.teamsDiv}>
        <h2 className={styles.subtitle}>Times:</h2>
        {info.teams.map((team, index) => {
          return <TeamCard info={team} key={index} />;
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
