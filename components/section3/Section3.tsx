/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import { v4 } from "uuid";
import styles from "./section3.module.scss";

const arr = ["IMG_4898.JPG", "venlogo.svg", "marsmarislogo.svg", "new.jpg"];

const arr2 = ["Home–3.jpg", "Home–20.jpg", "IMG_3905.JPG", "Web 1920–1.jpg"];

const Section3 = () => {
  return (
    <section className={styles["section3-container"]}>
      <div className={styles["section3"]}>
        <div className={styles["section3-aside"]}>
          <h2>DESIGN</h2>
        </div>
        <div className={styles["slice1"]}>
          <p className={styles["slice1-head"]}>LOGO DESIGN</p>
          {arr.map((item) => {
            return (
              <Image
                width={120}
                height={120}
                layout="fixed"
                className={styles["slice1-image"]}
                key={v4()}
                src={"/logo_jpg_svg/" + item}
              />
            );
          })}
          <Image
            width={350}
            height={90}
            layout="fixed"
            // className={styles["slice1-image"]}
            key={v4()}
            src={"/logo_jpg_svg/IMG_4897.JPG"}
          />
          <Image
            width={320}
            height={50}
            layout="fixed"
            // className={styles["slice1-image"]}
            key={v4()}
            src={"/logo_jpg_svg/Untitled-1.svg"}
          />
        </div>
          <div className={styles["slice2"]}>
            <h2 className={styles["slice2-head"]}>UI/UX</h2>
            {arr2.map((item) => {
              return (
                <Image
                  width={280}
                  height={150}
                  layout="fixed"
                  className={styles["slice2-image"]}
                  key={v4()}
                  src={"/designjpg/" + item}
                />
              );
            })}
          </div>
        </div>
    </section>
  );
};

export default Section3;
