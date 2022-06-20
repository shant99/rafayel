import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAboutMe, setHomeIsVisible } from "../../redux/reducers/reducer";
import sameStyles from "../../styles/same.module.scss";
import styles from "./section1.module.scss";

const Section1 = () => {
  const dispatch = useDispatch();
  const ref: any = useRef();
  const [isVisible, setIsVisible] = useState(false);

  const options = {
    root: null,
    rootMargin: "0px",
    thresholds: 1.0,
  };
  useEffect(() => {
    let y: any = ref?.current?.offsetTop;
    dispatch(setAboutMe(y));

    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      setIsVisible(entry.isIntersecting);
    }, options);

    if (ref.current) observer.observe(ref.current);
    dispatch(setHomeIsVisible(isVisible));
    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      if (ref.current) observer.unobserve(ref.current);
    };
  });
  return (
    <section className={sameStyles["section-container"]} ref={ref}>
      <div className={styles["section1"]}>
        <div className={sameStyles["aside"] + " " + styles["section1-aside"]}>
          <h2>rafayel.am</h2>
        </div>
        <div className={styles["section1-slice1"]}>
          <div className={styles["image"]} />
        </div>
        <div className={styles["section1-slice2"]}>
          <div className={styles["section1-x"]}></div>
          <h2 className={styles["section1-head"]}>
            I am Rafayel Yeranosyan,
          </h2>{" "}
          <br></br>
          <h2 className={styles["section1-head"]}>
            UI/UX Designer and Photographer
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Section1;
