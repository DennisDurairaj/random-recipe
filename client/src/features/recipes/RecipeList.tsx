import React from "react";
import styles from "./RecipeList.module.css";

interface Props {}

const RecipeList = (props: Props) => {
  return (
    <div className={styles.wrapper}>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
      </ul>
    </div>
  );
};

export default RecipeList;
