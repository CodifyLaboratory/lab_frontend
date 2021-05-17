import React from "react";
import styles from "../../styles/LastWokrs.module.css";
import Image from "next/image";
function LastWorksComp() {
  return (
    <section className={styles.last_works}>
      <div className={styles.container + " " + styles.relative}>
        <Image
          layout="fill"
          src="/img/last.svg"
          alt=""
          className={styles.last_works__up}
        />
        <h2 className={styles.section__title}>РАБОТЫ</h2>

        <div className={styles.card_wrapper}>
          <div className={styles.last_works__card}>
            <h3 className={styles.lw_card__title}>LMS.CODIFYLAB.COM</h3>
            <p className={styles.lw_card__type}>Веб-сайт</p>
            <Image
              src="/img/last-work-card-1.jpg"
              alt=""
              layout="responsive"
              width={350}
              height={190}
              className={styles.lw_card__Image}
            />
          </div>

          <div className={styles.last_works__card + " " + styles.card_cyan}>
            <h3 className={styles.lw_card__title}>Gift me</h3>
            <p className={styles.lw_card__type}>Веб-сайт</p>
            <Image
              src="/img/last-works-card-2.png"
              alt=""
              layout="responsive"
              width={350}
              height={190}
              className={styles.lw_card__Image}
            />
          </div>

          <div className={styles.last_works__card + " " + styles.card_yellow}>
            <h3 className={styles.lw_card__title}>SEMANTIR.LAB</h3>
            <p className={styles.lw_card__type}>Веб-сайт</p>
            <Image
              src="/img/last-works-card-3.svg"
              alt=""
              layout="responsive"
              width={350}
              height={190}
              className={styles.lw_card__Image}
            />
          </div>
        </div>

        <a href="#" className={styles.btn}>
          Все работы
        </a>
      </div>
    </section>
  );
}

export default LastWorksComp;
