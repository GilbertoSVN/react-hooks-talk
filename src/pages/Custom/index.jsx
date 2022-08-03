import { useReducer } from "react";
import { NavLink } from "react-router-dom";
import { useCount } from "../../hooks/useCount";

import styles from "./styles.module.css";

function reducer(state, action) {
  switch (action.type) {
    case 'increase':
      return { count: state.count + 1}
    default:
      throw Error();
  }
}

export function Custom() {
  const { count: countA, addToCount: addToCountA } = useCount(0);
  const { count: countB, addToCount: addToCountB } = useCount(0);
  const [state, dispatch] = useReducer(reducer, { count: 0 })

  return (
    <div className={styles.base}>
      <div className={styles.container}>
        <header className={styles.header}>React Custom Hook & useReducer</header>

        <main className={styles.main}>
          <button className={styles.button} onClick={addToCountA}>
            Clicks A: {countA}
          </button>

          <button className={styles.button} onClick={addToCountB}>
            Clicks B: {countB}
          </button>

          <button className={styles.button} onClick={() => dispatch({ type: 'increase'})}>
            Reducer: {state.count}
          </button>
        </main>

        <div className={styles.actions}>
          <NavLink to="/">
            <button className={styles.button}>Navigate to Home</button>
          </NavLink>
          <NavLink to="/context">
            <button className={styles.button}>Navigate to Context</button>
          </NavLink>
          <NavLink to="/ref">
            <button className={styles.button}>Navigate to Ref</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
