import React from "react";
import { useState } from "react";
import styles from "./Header.module.css";

function Header({ changePage }) {

  const clickHandler = (e) => {
    const btn = e.target;
    const id = btn.id.toString();
    changePage(id);
  };
  
  return (
    <>
      <div className={styles.container}>
        <h1>Tabs Component with React</h1>
        <button id="1" onClick={clickHandler}>
          Tab 1
        </button>
        <button id="2" onClick={clickHandler}>
          Tab 2
        </button>
        <button id="3" onClick={clickHandler}>
          Tab 3
        </button>
        <button id="4" onClick={clickHandler}>
          Tab 4
        </button>
      </div>
    </>
  );
}

export default Header;
