import styles from "./header.module.scss";
import { v4 } from "uuid";
import { SetStateAction, useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const arr: string[] = ["Home", "About Me", "Design", "Photography", "Contact"];

const Header: React.FC = () => {
  const [buttonIndex, setButtonIndex] = useState<number>(0);
  const [hamburger, setHamburger] = useState(false);
  const { home, aboutMe, design, photography, contact } = useSelector(
    (state: any) => state.reducer
  );
  const dispatch = useDispatch();
  const [obs, setObs] = useState({});
  const [scroll, setScroll] = useState(0);

  const navButtonClickHandler = (
    index: SetStateAction<number>,
    item: string
  ): void => {
    console.log(scroll , aboutMe.height , 'scroll , aboutME')
    setButtonIndex(index);
    setHamburger(false)
    let itemValue = item.toLowerCase().replace(/\s/g, "");
    if (home.name === itemValue) {
      setScroll(home.height)
      window.scroll({
        behavior: "smooth",
        top: home.height,
      });
    } else if (aboutMe.name === itemValue) {
      setScroll(aboutMe.height - 60)
      window.scroll({
        behavior: "smooth",
        top: aboutMe.height ,
      });
    } else if (design.name === itemValue) {
      window.scroll({
        behavior: "smooth",
        top: design.height - 60 ,
      });
    } else if (photography.name === itemValue) {
      window.scroll({
        behavior: "smooth",
        top: photography.height ,
      });
    } else if (contact.name === itemValue) {
      window.scroll({
        behavior: "smooth",
        top: contact.height ,
      });
    }
  };

  const hamburgerHandler = (e: any) => {
    setHamburger((prev) => !prev);
  };

  const hamburgerActive = hamburger
    ? styles["menu-button-wrapper-active"]
    : styles[""];

  const menuActive = hamburger ? styles["menu-active"] : styles[""];
  if (typeof window !== "undefined") {
    // window.addEventListener("scroll", (e) => {
    //   setScroll(window.scrollY);
    // });
  }
  useEffect(() => {
    // if (scroll <= aboutMe.height) {
    //   setButtonIndex(0);
    // } else if (scroll >= (aboutMe.height ) && scroll <= design.height) {
    //   setButtonIndex(1);
    //  } else if(scroll >= (design.height )&& scroll <= photography.height){
    //  setButtonIndex(2)
    // }else if(scroll >= photography.height && scroll <= contact.height){
    //   setButtonIndex(3)
    // }else if(scroll >= contact.height){
    //   setButtonIndex(4)
    // }
  }, [aboutMe.height, contact.height, design.height, photography.height, scroll]);

  return (
    <div className={styles["header-container"]}>
      <div className={styles["header"]}>
        <div
          className={styles["menu-button-wrapper"] + " " + hamburgerActive}
          onClick={hamburgerHandler}
        >
          <span className={styles["menu-button"]}></span>
        </div>
        <div className={styles["header-nav-buttons"] + " " + menuActive}>
          <ul>
            {arr.map((item, index) => (
              <li key={v4()}>
                <button
                  key={v4()}
                  onClick={() => navButtonClickHandler(index, item)}
                  className={
                    styles["nav-button"] +
                    " " +
                    (index === buttonIndex
                      ? styles["nav-button-active"]
                      : styles[""])
                  }
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
