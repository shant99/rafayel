import Image from "next/image";
import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { setAboutMe } from "../../redux/reducers/reducer";
import sameStyles from '../../styles/same.module.scss'
import styles from "./section1.module.scss";

const Section1 = () => {
  const dispatch = useDispatch()
  const ref: any = useRef()
  useEffect(()=>{
    let y: any = ref?.current?.offsetTop
    dispatch(setAboutMe(y))
  })
  return (
    <section className={sameStyles["section-container"]} ref={ref}>
      
      <div className={styles["section1"]}>
        <div className={sameStyles["aside"] + ' ' + styles['section1-aside']}>
          <h2>rafayel.am</h2>
        </div>
        <div className={styles["section1-slice1"]}>
          <div className={styles["image"]} />
        </div>
        <div className={styles["section1-slice2"]}>
          <div className={styles["section1-x"]}></div>
          <h2 className={styles["section1-head"]} >
            I am Rafayel Yeranosyan,   
          </h2> <br></br>
          <h2 className={styles["section1-head"]} >
            UI/UX Designer and Photographer   
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Section1;
