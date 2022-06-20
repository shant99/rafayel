/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-duplicate-props */
import { useEffect, useRef, useState } from "react";
import styles from "./section4.module.scss";
import Carousel from "../carousel/Carousel";
import { useDispatch, useSelector } from "react-redux";
import {
  setCarousel2,
  setPhotography,
  setPhotographyIsVisible,
} from "../../redux/reducers/reducer";
import { v4 } from "uuid";
import Masonry from "react-masonry-css";
import sameStyles from "../../styles/same.module.scss";

const arr2 = [
  "3C67095A-DDEF-4C20-947C-DDCB3DF97AAD.JPEG",
  "4C7B3F49-B58D-458E-9680-2D67731F1A1B.JPEG",
  "942DA870-EDA8-4A5D-9FA0-92DA758ADA59.JPG",
  "2017-06-12 19.11.30.JPG",
  "2017-10-05 18.17.50.JPG",
  "2017-12-13 16.29.29 (1).JPG",
  "2017-12-17 16.59.08.JPG",
  "2018-01-06 17.07.10.JPG",
  "2018-05-09 12.14.08.JPG",
  "2018-05-09 18.24.16 (1).JPG",
  "2018-05-25 15.49.33.JPG",
  "D90B698E-3FB0-4C31-A4C7-B0FD52FF69F1.JPEG",
  "DSCN0391.JPG",
  "DSCN0397.JPG",
  "DSCN4831.JPG",
  "DSCN6604.JPG",
  "DSCN6652.JPG",
  "DSCN6663.JPG",
  "FullSizeRender 2.jpg",
  "FullSizeRender 3.jpg",
  "FullSizeRender 4.jpg",
  "FullSizeRender.jpg",
  "IMG_0396.jpg",
  "IMG_0476.jpg",
  "IMG_0669.JPG",
  "IMG_0753.JPG",
  "IMG_1207.JPG",
  "IMG_1827.jpg",
  "IMG_2630.jpg",
  "IMG_3553.jpg",
  "IMG_3658.jpg",
  "IMG_3659.jpg",
  "IMG_3839.JPG",
  "IMG_3843.jpg",
  "IMG_3995.jpg",
  "IMG_4037.jpg",
  "IMG_4307.jpg",
  "IMG_4342.jpg",
  "IMG_4857.JPG",
  "IMG_4891.jpg",
  "IMG_4941.jpg",
  "IMG_5731.jpg",
  "IMG_5732.JPG",
  "IMG_5733.jpg",
  "IMG_5909.JPG",
  "IMG_6001.JPG",
  "IMG_6002.JPG",
  "IMG_9760.JPG",
  "rafayel-yeranosyan-_bZjibKJqnE-unsplash.jpg",
  "rafayel-yeranosyan-3v6xbZFMHsU-unsplash.jpg",
  "rafayel-yeranosyan-a8UWfjSjzqE-unsplash.jpg",
  "rafayel-yeranosyan-UIzp4rtz47U-unsplash.jpg",
  "Snapseed 6.jpg",
  "Snapseed 8.JPG",
  "Snapseed 12.JPG",
];

const Section4 = () => {
  const [indexImage, setIndexImage] = useState(0);
  const { carousel2 } = useSelector((state) => state.reducer);
  const dispatch = useDispatch();
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);

  const breakpointColumnsObj = {
    default: 10,
    1100: 7,
    700: 5,
    500: 2,
  };
  const options = {
    root: null,
    rootMargin: "0px",
    thresholds: 1.0,
  };

  const imageHandler = (index) => {
    setIndexImage(index);
    dispatch(setCarousel2(true));
    document.body.classList.toggle("lock");
  };

  useEffect(() => {
    let y = ref?.current?.offsetTop;
    dispatch(setPhotography(y));
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;

      setIsVisible(entry.isIntersecting);
      if (entry.intersectionRatio < 0.5) setIsVisible(false);

      console.log(entry, "section4");
    }, options);

    if (ref.current) observer.observe(ref.current);
    dispatch(setPhotographyIsVisible(isVisible));
    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      if (ref.current) observer.unobserve(ref.current);
    };
  });
  return (
    <section className={styles["section4-container"]} ref={ref}>
      {carousel2 ? (
        <Carousel arr={arr2} index={indexImage} path={"photography"} />
      ) : (
        ""
      )}
      <div className={styles["section4"]}>
        <div className={sameStyles["aside"] + " " + styles["section4-aside"]}>
          <h2>PHOTOGRAPHY</h2>
        </div>

        {
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className={styles["my-masonry-grid"]}
            columnClassName={styles["my-masonry-grid_column"]}
          >
            {arr2.map((item, index) => {
              return (
                <div key={v4()} className={styles["image-wrapper"]}>
                  <img
                    onClick={() => imageHandler(index)}
                    src={"/photography/" + item}
                    data-src={"/photography/" + item}
                    alt="image"
                    className={styles["image"]}
                  />
                </div>
              );
            })}
          </Masonry>
        }
      </div>
    </section>
  );
};

export default Section4;
