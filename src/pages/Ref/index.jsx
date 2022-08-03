import { useRef, useState } from "react";
import { NavLink } from "react-router-dom";

import styles from "./styles.module.css";

export function Ref() {
  const [count, setCount] = useState(0);
  const [inputText, setInputText] = useState("");

  const countRef = useRef(0);
  const inputRef = useRef();

  function handleCount() {
    const value = countRef.current;

    countRef.current = value + 1;
  }

  function updateCount() {
    setCount(countRef.current);
  }

  return (
    <div className={styles.base}>
      <div className={styles.container}>
        <header className={styles.header}>React useRef</header>

        <main className={styles.main}>
          <div className={styles.content}>
            <button className={styles.button} onClick={handleCount}>
              Clicks: {count}
            </button>
            <button className={styles.button} onClick={updateCount}>
              Update
            </button>
          </div>

          <div className={styles.inputRef}>
            <span>Input Text: {inputText || ''}</span>
            <input type="text" ref={inputRef} />
            <button className={styles.button} onClick={() => setInputText(inputRef.current.value)}>
              Save Input Ref
            </button>
          </div>
        </main>

        <div className={styles.actions}>
          <NavLink to="/">
            <button className={styles.button}>Navigate to Home</button>
          </NavLink>
          <NavLink to="/context">
            <button className={styles.button}>Navigate to Context</button>
          </NavLink>
          <NavLink to="/custom">
            <button className={styles.button}>Navigate to Custom</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}