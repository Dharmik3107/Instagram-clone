import React from "react";
import styles from "../Styles/body.module.css";
import { useSelector, useDispatch} from "react-redux";
import { newPost } from "../store/Actions/action";

const NewPostIndicator = () => {
  const isNewPost = useSelector(state=>state.navbar.newpost);
  const dispatch = useDispatch();
  return (
    <>
      {isNewPost && (
        <div className={styles.postIndicator}>
          <button
            className={styles.indicatorButton}
            onClick={() => dispatch(newPost(false))}
          >
            New Posts
          </button>
        </div>
      )}
    </>
  );
};

export default NewPostIndicator;
