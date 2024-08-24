import React from "react";
import styles from "./Tab.module.css"

function Tab4({data4}) {
  if(data4){
    return (
      <div className= {
          styles.container
      }>
        <h2>Content 4</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem excepturi
          itaque, totam laudantium, molestiae voluptates hic debitis aspernatur
          alias non doloribus ipsam unde dolorum vel nihil, iste cumque. Libero,
          reprehenderit!
        </p>
      </div>
    );
  }
}

export default Tab4;