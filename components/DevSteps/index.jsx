import React from "react";
import styles from "../../styles/DevSteps.module.css";
import Image from "next/image";
function DevStepsComp() {
  return (
    <section className={styles.dev_steps}>
      <div className={styles.container + " " + styles.relative}>
        <Image
          layout="fill"
          src="/img/dev-steps-up.svg"
          alt=""
          className={styles.dev_steps_up}
        />
        <h2 className={styles.section__title}>ПРОЕКТА</h2>

        <div className={styles.cards_wrapper}>
          <div className={styles.lines_wrapper}>
            <Image
              src="/img/lines.svg"
              width={108}
              height={1921}
              alt=""
              layout="intrinsic"
            />
          </div>
          <div className={styles.dev_steps_card}>
            <Image
              layout="intrinsic"
              width={442}
              height={307}
              src="/img/1-card.png"
              alt=""
              className={styles.dev_steps_card__Image}
            />
            <p className={styles.dev_steps_card__about}>
              Создание технического задания совместно с вами и менеджером
              проекта
            </p>
          </div>

          <div className={styles.dev_steps_card}>
            <p className={styles.dev_steps_card__about + " " + styles.right}>
              Оценка стоимости и сроков разработки, а также подписание договора
              на разработку проекта
            </p>
            <Image
              layout="intrinsic"
              width={407}
              height={300}
              src="/img/card-2.png"
              alt=""
              className={styles.dev_steps_card__Image}
            />
          </div>

          <div className={styles.dev_steps_card}>
            <Image
              layout="intrinsic"
              width={437}
              height={298}
              src="/img/card-3.png"
              alt=""
              className={styles.dev_steps_card__Image}
            />
            <p className={styles.dev_steps_card__about}>
              Проектирование логической структуры и интерфейса веб- проекта
              UI|UX дизайнерами
            </p>
          </div>

          <div className={styles.dev_steps_card}>
            <p className={styles.dev_steps_card__about + " " + styles.right}>
              Разработка серверной части сервиса Backend разработчиками
            </p>
            <Image
              layout="intrinsic"
              width={470}
              height={338}
              src="/img/card-5.png"
              alt=""
              className={styles.dev_steps_card__Image}
            />
          </div>

          <div className={styles.dev_steps_card}>
            <Image
              layout="intrinsic"
              width={428}
              height={302}
              src="/img/card-6.png"
              alt=""
              className={styles.dev_steps_card__Image}
            />
            <p className={styles.dev_steps_card__about}>
              Разработка клиентской стороны пользовательского интерфейса
              верстальщиками и разработчиками
            </p>
          </div>

          <div className={styles.dev_steps_card}>
            <p className={styles.dev_steps_card__about + " " + styles.right}>
              Тестирование функционала и работоспособности сайта QA
              специалистами
            </p>
            <Image
              layout="intrinsic"
              width={475}
              height={341}
              src="/img/card-4.png"
              alt=""
              className={styles.dev_steps_card__Image}
            />
          </div>

          <div className={styles.dev_steps_card}>
            <Image
              layout="intrinsic"
              width={481}
              height={364}
              src="/img/card-7.png"
              alt=""
              className={styles.dev_steps_card__Image}
            />
            <p className={styles.dev_steps_card__about}>
              Сдача проекта, техническая поддержка и обучение персонала
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DevStepsComp;
