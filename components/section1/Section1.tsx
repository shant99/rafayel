import Image from "next/image";
import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { setAboutMe } from "../../redux/reducers/reducer";
import styles from "./section1.module.scss";

const Section1 = () => {
  const dispatch = useDispatch()
  const ref: any = useRef()
  useEffect(()=>{
    let y: any = ref?.current?.offsetTop
    dispatch(setAboutMe(y))
  })
  return (
    <section className={styles["section1-container"]} ref={ref}>
      <div className={styles["section1"]}>
        <div className={styles["section1-aside"]}>
          {" "}
          <h3>rafayel.am</h3>{" "}
        </div>
        <div className={styles["section1-slice1"]}>
          <div className={styles["image"]} />
        </div>
        <div className={styles["section1-slice2"]}>
          <div className={styles["section1-x"]}></div>
          <h1 className={styles["section1-head"]}>
            Im Rafayel Yeranosyan, UI/UX Designer and Photographer
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Section1;
