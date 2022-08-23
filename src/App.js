import styles from "./App.module.css";
import {Navbar, StoryCard, NewPostIndicator } from "./lib/library";


function App() {
  return (
    <>
      <Navbar></Navbar>
      <section className={styles.bodyGrid}>
        <NewPostIndicator/>
        <div className={styles.storyPostCol}>
          <StoryCard/>
        </div>
        <div className={styles.profileSuggestedCol}></div>
      </section>
    </>
  );
}

export default App;
