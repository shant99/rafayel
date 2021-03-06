import Image from "next/image";
import styles from "./section2.module.scss";
import { v4 } from "uuid";
import { useEffect, useRef, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from "../carousel/Carousel";
import {
  setAboutMe,
  setAboutMeIsVisible,
  setCarousel,
} from "../../redux/reducers/reducer";
import { useDispatch, useSelector } from "react-redux";
import sameStyles from "../../styles/same.module.scss";

let arr = [
  "IMG_1906.JPG",
  "IMG_1915.jpg",
  "IMG_2179.jpg",
  "IMG_4943.JPG",
  "IMG_4944.JPG",
  "IMG_4945.JPG",
  "IMG_4946.JPG",
  "IMG_4948.jpg",
];

const Section2: React.FC = () => {
  const [indexImage, setIndexImage] = useState(0);
  const dispatch = useDispatch();
  const { carousel } = useSelector((state: any) => state.reducer);
  const ref: any = useRef();

  const [isVisible, setIsVisible] = useState(false);
  const [seeMoreButton , setSeeMoreButton] = useState(false)

  const imageClickHandler = (index: any) => {
    dispatch(setCarousel(true));
    setIndexImage(index);
    document.body.classList.toggle("lock");
  };

  const options = {
    root: null,
    rootMargin: "0px",
    thresholds: 1.0,
  };

  useEffect(() => {
    let y: any = ref.current.offsetTop;
    dispatch(setAboutMe(y));

    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;

      setIsVisible(entry.isIntersecting);
    }, options);

    if (ref.current) observer.observe(ref.current);
    dispatch(setAboutMeIsVisible(isVisible));
    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      if (ref.current) observer.unobserve(ref.current);
    };
  });

  const seeMoreButtonClickHandler = () => {
    setSeeMoreButton(prev => !prev)
  }

  const section2Slice1PActive = seeMoreButton ? styles["section2-slice1-p-active"]: styles[""]

  return (
    <section className={styles["section2-container"]} ref={ref}>
      {carousel ? (
        <Carousel arr={arr} index={indexImage} path={"LedboxPhoto"} />
      ) : (
        ""
      )}

      <div className={styles["section2"]}>
        <div className={sameStyles["aside"]}>
          <h2>ABOUT ME</h2>
        </div>
        <div className={styles["section2-slice1"]}>
          <div className={styles["section2-slice1-see-more-button-wrapper"]}>
            <h2>About Me</h2>
            <button 
            onClick={seeMoreButtonClickHandler}
            className={styles["section2-slice1-see-more-button"]}>
              See More
            </button>
          </div>
          <div className={styles["section2-slice1-p"] + ' ' + section2Slice1PActive}>
            <p>
              {" "}
              Hello! I am Rafayel. I???m passionate about photography??and anything
              related to it. I have been practicing photography for 6 years now.
              I started out as an amateur photographer with the desire to find
              beauty in everything. Today I am a photographer and designer who
              helps others to see beauty everywhere.
            </p>{" "}
            <p>
              I have one year experience working in the UI/UX??sphere. I enjoyed
              meeting new people and grasping how they think. It???s one of the
              reasons I had many meetings: from product management to anything
              design related ??(research, design thinking, design system, etc.)
              and communicated with people in general, as there???s always an
              opportunity to learn something new from the other point of view.
            </p>{" "}
            <p>
              {" "}
              Afterwards I started my freelance journey as a??logo designer. It
              is captivating to create a unique piece of art that later
              represents a company or an initiative. Today I look forward to
              taking on all kinds of design work???{" "}
            </p>
            <p>
              I am currently involved in entrepreneurship, which of course is
              also connected to art and design.
            </p>
            <p>
              {" "}
              And finally, in my spare I enjoy cycling and taking care of my
              plants :)
            </p>
          </div>
        </div>
        <div className={styles["section2-slice2"]}>
          <div className={styles["business-box"]}>
            <div className={styles["business-box-slice1"]}>
              <div className={styles["business-box-icon"]}>
                <Image
                  src={"/icon2/ledbox logo_about me_page.svg"}
                  width={157}
                  height={34}
                  alt="iamge"
                />
              </div>
              <p className={styles["business-box-description"]}>
                Ledbox was launched in March 2021. Ledbox offers high quality
                light boxes, dimensional letters, lighting panels and various
                laser works.
              </p>
              <div className={styles["business-box-images"]}>
                {arr.map((item, index) => {
                  return (
                    <Image
                      key={v4()}
                      src={"/LedboxPhoto/" + item}
                      width={77}
                      height={77}
                      alt="iamge"
                      className={styles["business-box-image"]}
                      onClick={() => imageClickHandler(index)}
                    />
                  );
                })}
              </div>
              <a
                rel="noreferrer"
                href="https://www.ledbox.am"
                target="_blank"
                className={styles["business-box-website"]}
              >
                www.ledbox.am
              </a>
            </div>
            <div className={styles["business-box-slice2"]}>
              <div className={styles["marsmaris-wrapper"]}>
                <Image
                  src="/icon2/marsmaris_logo_for_about me_page.svg"
                  width={180}
                  height={38}
                  className={styles["marsmaris"]}
                  alt="ss"
                />
              </div>
              <p className={styles["business-box-description"]}>
                MarsMaris is currently in the launching process. It is going to
                produce mandala-designed goods, mainly mirrors and interior
                accessories.
              </p>
              <div className={styles["business-box-slice2-footer"]}>
                <div className={styles["loading-icon-wrapper"]}>
                  <Image
                    src="/icon2/loading_icon.svg"
                    width={54}
                    height={54}
                    className={styles["loading-icon"]}
                    alt="ss"
                  />
                </div>
                <p className={styles["business-box-website"]}>
                  www.marsmaris.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Section2;
