import React from "react";
import styles from "./App.module.css";
import { Navbar, StoryCard, NewPostIndicator, AddPost } from "./lib/library";
import { useSelector } from "react-redux";
function App() {
  const addPostState = useSelector((state) => state.navbar.addpost);
  return (
    <>
      <Navbar></Navbar>
      <NewPostIndicator />
      {addPostState && <AddPost />}
      <section className={styles.bodyGrid}>
        <div className={styles.storyPostCol}>
          <StoryCard />
        </div>
        <div className={styles.profileSuggestedCol}></div>
      </section>
      <div className={styles.scrollBar}></div>
    </>
  );
}

export default App;
