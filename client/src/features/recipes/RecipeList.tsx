import React from "react";
import { useHistory } from "react-router";
import List from "../../components/List/List";
import ListItem from "../../components/ListItem/ListItem";
import { Recipe } from "./types";
import styles from "./RecipeList.module.css";

interface Props {
  data: Recipe[];
}

const RecipeList: React.FC<Props> = ({ data }) => {
  let history = useHistory();
  const handleClick = (item: Recipe) => {
    history.push(`/details/${item.id}`);
  };

  return (
    <div className={styles.container}>
      <List>
        {data.map((item) => (
          <ListItem
            key={item.id}
            onClick={() => handleClick(item)}
            image={item.image}
            title={item.title}
          />
        ))}
      </List>
    </div>
  );
};

export default RecipeList;
