import styles from "./App.module.css";
import { Navbar, StoryCard, NewPostIndicator, AddPost } from "./lib/library";

function App() {
  
  return (
    <>
      <Navbar></Navbar>
      <section className={styles.bodyGrid}>
        <NewPostIndicator />
        <AddPost />
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
