import Image from "next/image";
import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { setAboutMe, setContact } from "../../redux/reducers/reducer";
import Footer from "../footer/Footer";
import styles from "./section5.module.scss";

const Section5 = () => {
  const dispatch = useDispatch()
  const ref:any = useRef()
  useEffect(()=>{
    let y: any = ref?.current?.offsetTop
    dispatch(setContact(y))
  })
  return (
    <section className={styles["section5-container"]} ref={ref}>
      <div className={styles["section5"]}>
        <div className={styles["section5-aside"]}>
          <h2>CONTACT</h2>
        </div>
        <div className={styles["form-wrapper"]}>
          <div className={styles["avatar-wrapper"]}>
            <Image
              src={"/icon2/rafael_photo_contact page.svg"}
              width={100}
              height={100}
              alt="avatar"
              objectFit="cover"
              className={styles["avatar"]}
            />
          </div>
          <p className={styles["name"]}>Rafayel Yeranosyan</p>
          <form action="" className={styles["form"]}>
            <input type="text" placeholder="name" className={styles["input"]} />
            <input
              type="text"
              placeholder="Your Email"
              className={styles["input"]}
            />
            <input
              type="text"
              placeholder="Subject"
              className={styles["input"]}
            />
                        <input
              type="text"
              placeholder="Message"
              style={{height: '194px'}}
              className={styles["input-message"]}
            />
            <button type="submit" className={styles["button-send"]}>
              Send
            </button>
          </form>
        </div>
        <Footer />
      </div>
    </section>
  );
};

export default Section5;
