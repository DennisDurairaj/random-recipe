import React from "react";
import List from "../../components/List/List";
import ListItem from "../../components/ListItem/ListItem";
import { Recipe } from "./types";
import styles from "./RecipeList.module.css";

interface Props {
  data: Recipe[];
}

const RecipeList: React.FC<Props> = ({ data }) => {
  return (
    <div className={styles.container}>
      <List>
        {data.map((item) => (
          <ListItem image={item.image} title={item.title} />
        ))}
      </List>
    </div>
  );
};

export default RecipeList;
