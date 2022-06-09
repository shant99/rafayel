import Image from "next/image";
import styles from "./section1.module.scss";

const Section1 = () => {
  return (
    <section className={styles["section1-container"]}>
      <div className={styles["section1"]}>
        <div className={styles["section1-aside"]}> <h3>rafayel.am</h3>  </div>
        <div className={styles["image-wrapper"]}>
            <div  className={styles["image"]} />
        </div>
        <h1 className={styles["section1-head"]}>Im Rafayel Yeranosyan, UI/UX Designer and Photographer</h1>
      </div>
    </section>
  );
};

export default Section1;
