import React from 'react'
import styles from '../../styles/News.module.css';
import Image from 'next/image'

function NewsComp() {
    return (<section className={styles.news}>
        <div className={styles.container}>
            <h2 className={styles.section__title}>НОВОСТИ</h2>
            <div className={styles.wrapper}>
                <div className={styles.news__card}>
                    <Image layout="responsive" width={380} height={210} src="/img/news-card.png" alt="" className={styles.news__card_img} />

                    <div className={styles.news__card_middle}>
                        <h4 className={styles.news__card_title}>
                            Мио или Муги? Выбираем лучшую вай...
            </h4>
                        <p className={styles.news__card_content}>
                            Очень много споров ходят вокруг этих двух красавиц ещё с самого
                            старта этого аниме. В этой статье мы...
            </p>
                    </div>

                    <div className={styles.news__card_footer}>
                        <p className={styles.news__card_date}>21.04.2021</p>
                        <a href="#" className={styles.btn + ' ' + styles.btn_card}>
                            Подробнее
              <Image src="/img/arrow.svg" layout="intrinsic" width={20} height={16} alt="" className={styles.arrow_icon} />
                        </a>
                    </div>
                </div>

                <div className={styles.news__card}>
                    <Image src="/img/news-card-2.png" layout="responsive" width={380} height={210} alt="" className={styles.news__card_img} />

                    <div className={styles.news__card_middle}>
                        <h4 className={styles.news__card_title}>Как осчастливить Систину?</h4>
                        <p className={styles.news__card_content}>
                            Рыба рыба рыба рыба рыба рыба рыба рыба рыба рыба рыба рыба рыба
                            рыба рыба рыба рыба рыба...
            </p>
                    </div>

                    <div className={styles.news__card_footer}>
                        <p className={styles.news__card_date}>19.04.2021</p>
                        <a href="#" className={styles.btn + ' ' + styles.btn_card}>
                            Подробнее
              <Image src="/img/arrow.svg" layout="intrinsic" width={20} height={16} alt="" className={styles.arrow_icon} />
                        </a>
                    </div>
                </div>

                <div className={styles.news__card}>
                    <Image layout="responsive" width={380} height={210} src="/img/news-card-3.png" alt="" className={styles.news__card_img} />

                    <div className={styles.news__card_middle}>
                        <h4 className={styles.news__card_title}>
                            Лучшие рецепты от Тору на завтрак и...
            </h4>
                        <p className={styles.news__card_content}>
                            Рыба рыба рыба рыба рыба рыба рыба рыба рыба рыба рыба рыба рыба
                            рыба рыба рыба рыба рыба...
            </p>
                    </div>

                    <div className={styles.news__card_footer}>
                        <p className={styles.news__card_date}>10.04.2021</p>
                        <a href="#" className={styles.btn + ' ' + styles.btn_card}
                            >Подробнее
                            <Image src="/img/arrow.svg" layout="intrinsic" width={20} height={16} alt="" className={styles.arrow_icon} />
                        </a>
                    </div>
                </div>
            </div>

            <a href="#" className={styles.btn + ' ' + styles.btn_news}>Смотреть все новости</a>
        </div>
    </section>)
}


export default NewsComp;