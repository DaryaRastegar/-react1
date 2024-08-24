
import React from "react";
import styles from "./Tab.module.css"

function Tab1({data1}) {
 if(data1){
  return (
    <div className= {styles.container}>
      <h2>Content 1</h2>
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

export default Tab1;
