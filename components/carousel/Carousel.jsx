import styles from "./carousel.module.scss";
import Slider from "react-slick";
import { v4 } from "uuid";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Image from "next/image";

const Carousel = ({ arr }) => {
  const settings = {
    fade: false,
    touchMove: true,
    useCSS: true,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    swipeToSlide: true,
  };
  return (
    <div className={styles["carousel-container"]}>
      <div>

      <div className={styles["carousel-wrapper"]}>
        <Slider {...settings} className={styles["carousel"]}>
          {arr.map((item, index) => {
            return (
              <Image
                key={v4()}
                src={"/LedboxPhoto/" + item}
                width={77}
                height={77}
                alt="iamge"
              />
            );
          })}
        </Slider>
      </div>
      </div>
    </div>
  );
};

export default Carousel;
