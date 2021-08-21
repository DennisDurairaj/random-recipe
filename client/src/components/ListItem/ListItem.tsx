import React from "react";
import styles from "./ListItem.module.css";

interface Props {
  title: string;
  image?: string;
}

const ListItem: React.FC<Props> = ({ title, image, children }) => {
  return (
    <li className={styles.listItem}>
      {image && <img className={styles.image} src={image} alt="title" />}
      <div className={styles.title}>{title}</div>
    </li>
  );
};

export default ListItem;
