import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AppContext } from "../../context/AppContext";

import styles from "./styles.module.css";

export function Context() {
  const { contextCount } = useContext(AppContext);

  return (
    <div className={styles.base}>
      <div className={styles.container}>
        <header className={styles.header}>React Context</header>

        <main className={styles.main}>
          <span>Clicked: {contextCount}</span>
        </main>

        <div className={styles.actions}>
          <NavLink to="/">
            <button className={styles.button}>Navigate to Home</button>
          </NavLink>
          <NavLink to="/ref">
            <button className={styles.button}>Navigate to Ref</button>
          </NavLink>
          <NavLink to="/custom">
            <button className={styles.button}>Navigate to Custom</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
