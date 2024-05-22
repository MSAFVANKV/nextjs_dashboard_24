import Image from "next/image";
import styles from "./rightbar.module.css";
import { MdPlayCircle, MdPlayCircleFilled, MdReadMore } from "react-icons/md";

const Rightbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <Image src="/astronaut.png" alt="astronaut" fill className={styles.bg}/>
        </div>
        <div className={styles.texts}>
          <span className={styles.notification}>Available now</span>
          <h3 className={styles.title}>How to use the new version of the admin dashboard</h3>
          <span className={styles.subTitle}>Takes a 4 minutes to learn</span>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            vero quaerat veniam iure, ipsa illum omnis ipsam deleniti temporibus
          </p>
          <button className={styles.button}>
            <MdPlayCircleFilled/>
            watch
          </button>
        </div>
      </div>
      {/* second */}
      <div className={styles.item}>
        <div className={styles.texts}>
          <span className={styles.notification}>Available now</span>
          <h3 className={styles.title}>How to use the new version of the admin dashboard</h3>
          <span className={styles.subTitle}>Boost your productivity</span>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            vero quaerat veniam iure, ipsa illum omnis ipsam deleniti temporibus
          </p>
          <button className={styles.button}>
            <MdReadMore/>
            Lern
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
