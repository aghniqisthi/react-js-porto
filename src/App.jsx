import styles from "./style";
import {
  Experience,
  Socmed,
  Navbar,
  Project,
  Profile,
} from "./components/Index";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Profile />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Experience />
        <Project />
        <Socmed />
      </div>
    </div>
  </div>
);

export default App;
