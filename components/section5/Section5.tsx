import Image from "next/image";
import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { setAboutMe, setContact } from "../../redux/reducers/reducer";
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
              src={"/image.jpeg"}
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
            {/* <input
              type="text"
              placeholder="Message"
              className={styles["input"]}
            /> */}
            <textarea placeholder="Message" className={styles["input"]} name="w3review" rows={4} cols={50}>
      
            </textarea>
            <button type="submit" className={styles["button-send"]}>
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Section5;
