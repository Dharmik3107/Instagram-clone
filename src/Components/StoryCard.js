import React from "react";
import styles from "../Styles/body.module.css";
import Story from "./Story";

const StoryCard = () => {
  return (
    <div className={styles.storyCenter}>
      <Story/>
    </div>
  );
};

export default StoryCard;
