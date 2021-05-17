import React from "react";
import styles from '../../styles/Hero.module.css'
import Image from 'next/image'
function HeroComp() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <header className={styles.header}>
          <nav>
            <ul className={styles.nav__links}>
              <li>
                <a href="#" className={styles.nav__link}>
                  О нас
                </a>
              </li>
              <li>
                <a href="#" className={styles.nav__link}>
                  Портфолио
                </a>
              </li>
              <li>
                <a href="#" className={styles.nav__link}>
                  Услуги
                </a>
              </li>
              <li className={styles.logo_bg}>
                <Image src="/img/logo.svg" width={185} height={40} />
              </li>
              <li>
                <a href="#" className={styles.nav__link}>
                  Тарифы
                </a>
              </li>
              <li>
                <a href="#" className={styles.nav__link}>
                  Новости
                </a>
              </li>
              <li>
                <a href="#" className={styles.nav__link}>
                  Контакты
                </a>
              </li>
            </ul>
          </nav>
        </header>
        <div className={styles.hero__words}>
          <h1 className={styles.hero__title}>
            Мы сделаем сайт <br />
            вашей мечты
          </h1>
          <p className={styles.hero__subtitle}>Просто доверьтесь нам</p>

          <a href="#" className={styles.contact_us_btn}>
            Связаться
          </a>
        </div>
      </div>
    </section>
  );
}


export default HeroComp;