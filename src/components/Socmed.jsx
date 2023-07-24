import { socmed } from "../constants";
import styles from "../style";
import Button from "./Button";

const Socmed = () => (
  <section
    className={`${styles.flexCenter} ${styles.marginY} sm:px-10 px-4 sm:py-12 py-4 sm:flex-col flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
  >
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Social Media</h2>
      <br className="sm:block hidden" />{" "}
    </div>

    <div className={`${styles.flexCenter} sm:ml-0 ml-0 sm:mt-0 mt-10`}>
      {socmed.map((socmed, index) => (
        <Button key={socmed.id} {...socmed} index={index} />
      ))}
    </div>
  </section>
);

export default Socmed;
