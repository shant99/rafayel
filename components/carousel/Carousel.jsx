import styles from "./carousel.module.scss";
import Slider from "react-slick";
import { v4 } from "uuid";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { setCarousel, setCarousel2 } from "../../redux/reducers/reducer";
import { useRef, useState } from "react";

const Carousel = ({ arr, index , path }) => {
  const dispatch = useDispatch();
  
  const ref = useRef(null)

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    useCSS: true,
    arrows: false,
    centerMode: false,
    initialSlide: index,
  };
  const closeButtonHandler = () => {
    dispatch(setCarousel(false));
    dispatch(setCarousel2(false));
    document.body.classList.toggle("lock");
  };
  const prevHandler = () => {
    ref.current.slickPrev()
  };
  const nextHandler = () => {
    ref.current.slickNext()

  };
  return (
    <>
      <div className={styles["carousel-container"]}>
        <div className={styles["carousel-wrapper"]}>
          <button
            onClick={closeButtonHandler}
            className={styles["closeButton"]}
          >
            x
          </button>
          <Slider ref={ref} {...settings} className={styles["slider"]}>
            {arr.map((item) => {
              return (
                <div key={v4()} className={styles["image-carousel"]}>
                  <img
                  className={styles["image"]}
                    src={"/" + path + "/" + item}
                    alt="iamge"
                  />
                </div>
              );
            })}

          </Slider>
          <span onClick={prevHandler} className={styles["prev"]}>
            {" "}
            prev{" "}
          </span>
          <span onClick={nextHandler} className={styles["next"]}>
            {" "}
            next{" "}
          </span>
        </div>
      </div>
    </>
  );
};

export default Carousel;
