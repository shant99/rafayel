import Image from "next/image";
import { forwardRef, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import {  setContact, setContactIsVisible } from "../../redux/reducers/reducer";
import Footer from "../footer/Footer";
import styles from "./section5.module.scss";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import sameStyles from "../../styles/same.module.scss";

const Section5 = () => {
  const dispatch = useDispatch();
  const ref: any = useRef();
  const form: any = useRef();
  const [isVisible , setIsVisible ] = useState(false)

  function formSubmitHandler(e: any) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_6fzt612",
        "template_bnoqf6h",
        form.current,
        "D3i6o0jDuU7fCgdKv"
      )
      .then(
        (result: any) => {
          console.log(result.text);
        },
        (error: any) => {
          console.log(error.text);
        }
      );

    e.target.reset();
    toast(`Succes`, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      icon: true,
      type: "success",
    });
  }
  

  const options = {
    root: null ,
    rootMargin: '0px' , 
    thresholds: 1.0
  }
  useEffect(() => {
    let y = ref?.current?.offsetTop
    dispatch(setContact(y));
    const observer = new IntersectionObserver((entries ) => {
      const [entry] = entries
       setIsVisible(entry.isIntersecting)
      // console.log(entry , 'section5')
    }, options)

    if(ref.current)observer.observe(ref.current)
    dispatch(setContactIsVisible(isVisible))
    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      if(ref.current) observer.unobserve(ref.current)
    }
  } );
  return (
    <section className={styles["section5-container"]}
     ref={ref}
     >
      <div className={styles["section5"]}>
        <div className={sameStyles["aside"] + " " + styles["section5-aside"]}>
          <h2>CONTACT</h2>
        </div>
        <div className={styles["form-wrapper"]}>
          <div className={styles["avatar-wrapper"]}>
            <Image
              src={"/icon2/rafael_photo_contact page.svg"}
              width={60}
              height={60}
              alt="avatar"
              objectFit="cover"
              className={styles["avatar"]}
            />
            <h2 className={styles["name"]}>Rafayel Yeranosyan</h2>
          </div>
          <form
            ref={form}
            onSubmit={formSubmitHandler}
            className={styles["form"]}
          >
            <input
              type="text"
              name="name"
              placeholder="Name"
              required={true}
              autoComplete="true"
              minLength={3}
              className={styles["input"]}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required={true}
              autoComplete="true"
              pattern={"[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$"}
              className={styles["input"]}
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required={true}
              autoComplete="true"
              minLength={4}
              className={styles["input"]}
            />
            <textarea
              name="message"
              placeholder="Message"
              style={{ resize: "none" }}
              minLength={5}
              rows={3}
              required={true}
              autoComplete="true"
              className={styles["input"]}
            />
            <button type="submit" className={styles["button-send"]}>
              Send
            </button>
            <ToastContainer
              position="bottom-right"
              autoClose={5000}
              hideProgressBar
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              style={{ zIndex: 10000 }}
            />
          </form>
        </div>
        <Footer />
      </div>
    </section>
  );
};

export default Section5;


