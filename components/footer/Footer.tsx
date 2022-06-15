import Image from "next/image";
import Link from "next/link";
import { v4 } from "uuid";
import styles from "./footer.module.scss";

const arr = ["telegram-1.svg", "linkedin-icon.png", "upwork.svg"];

const Footer = () => {
  return (
    <section className={styles["footer-container"]}>
      <div className={styles["footer"]}>
        {arr.map((item) => {
          return (
            <Link href="/" key={v4()} className={styles["footer-link"]}>
              <Image
                width={42}
                height={42}
                src={"/icon/"+item}
                alt="image"
                className={styles["footer-image"]}
              />
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Footer;
