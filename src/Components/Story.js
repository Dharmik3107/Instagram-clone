import React from "react";
import profilePic from "../Assets/profile-picture.jpg";
import styles from "../Styles/body.module.css";

const Story = () => {
  return (
    <li className={styles.singleStory}>
      <button className={styles.clickableStory}>
        <img
          className={styles.storyImg}
          src={profilePic}
          alt="someone profile"
        />
      </button>
      <span className={styles.storyName}>someone knows me</span>
    </li>
  );
};

export default Story;
