import Image from "next/image";
import styles from "./section5.module.scss";

const Section5 = () => {
  return (
    <section className={styles["section5-container"]}>
      <div className={styles["section5"]}>
        <div className={styles["section5-aside"]}>
          <h2>CONTACT</h2>
        </div>
        <div className={styles['form-wrapper']}>
            <div className={styles["image"]}/>
        </div>
      </div>
    </section>
  );
};

export default Section5
