/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { v4 } from "uuid";
import { setDesign } from "../../redux/reducers/reducer";
import styles from "./section3.module.scss";

const arr = ["IMG_4898.JPG", "venlogo.svg", "marsmarislogo.svg", "new.jpg"];

const arr2 = ["Home–3.jpg", "Home–20.jpg", "IMG_3905.JPG", "Web 1920–1.jpg"];

const Section3 = () => {
  const dispatch = useDispatch();
  const ref: any = useRef();
  useEffect(() => {
    let y: any = ref?.current?.offsetTop;
    dispatch(setDesign(y));
  });
  return (
    <section className={styles["section3-container"]} ref={ref}>
      <div className={styles["section3"]}>
        <div className={styles["section3-aside"]}>
          <h2>DESIGN</h2>
        </div>
        <div className={styles["slice1-wrapper"]}>
          <div className={styles["slice1"]}>
            <div className={styles["slice1-head-wrapper"]}>
              <h3 className={styles["slice1-head"]}>LOGOS</h3>
            </div>
            <div className={styles["slice1-row1"]}>
              <div className={styles["slice1-row1-image-wrapper"]}>
                <Image
                  className={styles["sevan"]}
                  width={131}
                  height={131}
                  src={"/icon2/sevandivers_logo.svg"}
                  alt="image"
                />
              </div>
              <div className={styles["slice1-row1-image-wrapper"]}>
                <Image
                  className={styles["ven"]}
                  width={131}
                  height={131}
                  src={"/icon2/Logo Ven.svg"}
                  alt="image"
                />
              </div>
            </div>
          </div>
          <div className={styles["slice1-row2"]}>
            <div className={styles["slice1-row2-image-wrapper"]}>
              <Image
                className={styles["sevan"]}
                width={131}
                height={131}
                src={"/icon2/marsmaris.svg"}
                alt="image"
              />
            </div>
            <div className={styles["slice1-row2-image-wrapper"]}>
              <Image
                className={styles["ven"]}
                width={131}
                height={131}
                src={"/icon2/Logo wind.svg"}
                alt="image"
              />
            </div>
          </div>
          <div className={styles["slice1-row3"]}>
            <div className={styles["slice1-row3-image-wrapper"]}>
              <Image
                className={styles["ledbox"]}
                width={263}
                height={59}
                src={"/icon2/Logo Ledbox.svg"}
                alt="image"
              />
            </div>
          </div>
          <div className={styles["slice1-row4"]}>
            <div className={styles["slice1-row4-image-wrapper"]}>
              <Image
                className={styles["badBurger"]}
                width={263}
                height={59}
                src={"/icon2/Logo badburger.svg"}
                alt="image"
              />
            </div>
          </div>
        </div>
        <div className={styles["slice2-wrapper"]}>
          <div className={styles["slice2"]}>
            <div className={styles["slice2-head-wrapper"]}>
              <h3 className={styles["slice2-head"]}>MOBILE AND WEB DESIGN</h3>
            </div>
            <div className={styles["slice2-images"]}>
              <Image
                style={{objectFit: 'cover'}}
                width={447}
                height={251}
                src={"/designjpg/Home–3.jpg"}
                alt="image"
              />
              <Image
                style={{objectFit: 'cover'}}
                width={447}
                height={251}
                src={"/designjpg/Home–20.jpg"}
                alt="image"
              />
              <Image
                style={{objectFit: 'cover'}}
                width={447}
                height={251}
                src={"/designjpg/IMG_3905.JPG"}
                alt="image"
              />
              <Image
                style={{objectFit: 'cover'}}
                width={447}
                height={251}
                src={"/designjpg/Web 1920–1.jpg"}
                alt="image"
              />
            </div>
            {/* <div className={styles["slice2-row1"]}>
              <div className={styles["slice2-row1-image-wraper"]}>
                <Image
                  className={styles["sevan"]}
                  width={131}
                  height={131}
                  src={"/designjpg/sevandivers_logo.svg"}
                  alt="image"
                />
              </div>
              <div className={styles["slice2-row1-image-wraper"]}>
                <Image
                  className={styles["sevan"]}
                  width={131}
                  height={131}
                  src={"/designjpg/sevandivers_logo.svg"}
                  alt="image"
                />
              </div>
            </div>
            <div className={styles["slice2-row2"]}>
              <div className={styles["slice2-row2-image-wraper"]}>
                <Image
                  className={styles["sevan"]}
                  width={131}
                  height={131}
                  src={"/designjpg/sevandivers_logo.svg"}
                  alt="image"
                />
              </div>
              <div className={styles["slice2-row2-image-wraper"]}>
                <Image
                  className={styles["sevan"]}
                  width={131}
                  height={131}
                  src={"/designjpg/sevandivers_logo.svg"}
                  alt="image"
                />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
