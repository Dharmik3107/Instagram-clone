import React, { useState } from "react";
import styles from "./body.module.css";

const NewPostIndicator = () => {
  const [isNewPost, setNewPost] = useState(false);
  return (
    <>
      {isNewPost && (
        <div className={styles.postIndicator}>
          <button
            className={styles.indicatorButton}
            onClick={() => setNewPost(false)}
          >
            New Posts
          </button>
        </div>
      )}
    </>
  );
};

export default NewPostIndicator;
