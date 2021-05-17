import React from "react";
import styles from "../../styles/Features.module.css";
import Image from "next/image";
function FeaturesComp() {
  return (
    <section className={styles.features}>
      <div className={styles.relative + " " + styles.container}>
        <Image
          layout="fill"
          src="/img/features-up.svg"
          className={styles.features__up}
        />
        <h2 className={styles.section__title}>УСЛУГИ</h2>

        <div className={styles.card_wrapper}>
          <div className={styles.features__card}>
            <Image
              layout="fill"
              src="/img/design.svg"
              className={styles.card__img}
            />
            <h4 className={styles.card__title}>UI|UX дизайн</h4>
            <p className={styles.card__about}>
              Проектируем пользовательские веб-интерфейсы для сайтов и
              приложений
            </p>
          </div>

          <div className={styles.features__card + " " + styles.card_purple}>
            <Image
              layout="fill"
              src="/img/phone.svg"
              className={styles.card__img}
            />
            <h4 className={styles.card__title}>Мобильные приложения</h4>
            <p className={styles.card__about}>
              Разрабатываем мобильные приложения на платформах IOS и Android
            </p>
          </div>

          <div className={styles.features__card + " " + styles.card_green}>
            <Image
              layout="fill"
              src="/img/website.svg"
              className={styles.card__img}
            />
            <h4 className={styles.card__title}>Сайты</h4>
            <p className={styles.card__about}>
              Создаём клиентские сайты с адаптивной версией для мобильных
              приложений
            </p>
          </div>
        </div>

        <a href="#" className={styles.btn}>
          Все услуги
        </a>
      </div>
    </section>
  );
}

export default FeaturesComp;
