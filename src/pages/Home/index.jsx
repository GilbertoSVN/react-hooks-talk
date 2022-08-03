import { useContext, useEffect, useId, useState } from "react";
import { toast } from "react-toastify";
import { NavLink } from "react-router-dom";
import { AppContext } from "../../context/AppContext";

import styles from "./styles.module.css";

export function Home() {
  const [count, setCount] = useState(0);
  const id = useId();

  const { handleContextCount } = useContext(AppContext);

  function handleCount() {
    //setCount((prev) => prev + 1);
    setCount(count + 1);
  }

  useEffect(() => {
    if (count) {
      toast(count, { position: "bottom-center", autoClose: 500 });
    }
  }, [count]);

  return (
    <div className={styles.base}>
      <div className={styles.container}>
        <header className={styles.header}>React useState + useEffect</header>

        <main className={styles.main}>
          <button className={styles.button} onClick={handleCount}>
            Clicks: {count}
          </button>
        </main>

        <div className={styles.actions}>
          <button
            className={styles.button}
            onClick={() => handleContextCount(count)}
          >
            Save to Context
          </button>
          <NavLink to="/context">
            <button className={styles.button}>Navigate to Context</button>
          </NavLink>
          <NavLink to="/ref">
            <button className={styles.button}>Navigate to Ref</button>
          </NavLink>
          <NavLink to="/custom">
            <button className={styles.button}>Navigate to Custom</button>
          </NavLink>
        </div>
        <span>id: {id}</span>
      </div>
    </div>
  );
}
