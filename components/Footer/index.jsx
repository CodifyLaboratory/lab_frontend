import React from 'react'
import styles from '../../styles/Footer.module.css'
import Image from 'next/image'

function FooterComp() {
    return (<footer className={styles.footer}>
        <div className={styles.container + ' ' + styles.container_footer}>
            <div className={styles.footer__about}>
                <h3 className={styles.footer__title}>О компании</h3>
                <div className={styles.footer__underline}></div>
                <ul className={styles.footer__links}>
                    <li><a href="#" className={styles.footer__link}>О нас</a></li>
                    <li><a href="#" className={styles.footer__link}>Портфолио</a></li>
                    <li><a href="#" className={styles.footer__link}>Услуги</a></li>
                    <li><a href="#" className={styles.footer__link}>Новости</a></li>
                </ul>
            </div>

            <div className={styles.footer__contacts}>
                <h3 className={styles.footer__title}>Контакты</h3>
                <div className={styles.footer__underline}></div>
                <ul className={styles.footer__links + ' ' + styles.footer__links_gap}>
                    <li>
                        <a href="tel:+996708520039" className={styles.footer__link}
                        ><Image
                                layout="intrinsic"
                                width={30}
                                height={30}
                                src="/img/phone-call.svg"
                                alt=""
                                className={styles.footer__icon}
                            />+996 708 520 039</a
                        >
                    </li>
                    <li>
                        <a href="tel:+996755151920" className={styles.footer__link}
                        ><Image
                                layout="intrinsic"
                                width={30}
                                height={30}
                                src="/img/phone-call-2.svg"
                                alt=""
                                className={styles.footer__icon}
                            />+996 755 151 920</a
                        >
                    </li>
                    <li>
                        <a href="mailto:info@codifylab.com" className={styles.footer__link}
                        ><Image
                                layout="intrinsic"
                                width={30}
                                height={30}
                                src="/img/mail.svg"
                                alt=""
                                className={styles.footer__icon}
                            />info@codifylab.com</a
                        >
                    </li>
                    <li>
                        <a href="#" className={styles.footer__link}
                        ><Image
                                layout="intrinsic"
                                width={30}
                                height={30}
                                src="/img/location.svg"
                                alt=""
                                className={styles.footer__icon}
                            />ул. Исанова 105/3, 1 этаж</a
                        >
                    </li>
                </ul>
            </div>

            <div className={styles.footer__projects}>
                <h3 className={styles.footer__title}>Наши проекты</h3>
                <div className={styles.footer__underline}></div>
                <ul className={styles.footer__links}>
                    <li><a href="#" className={styles.footer__link}>Codify Teen</a></li>
                    <li><a href="#" className={styles.footer__link}>Codify Academy</a></li>
                    <li><a href="#" className={styles.footer__link}>Codify CRM/LMS</a></li>
                    <li><a href="#" className={styles.footer__link}>Codify Franchise</a></li>
                </ul>
            </div>

            <ul className={styles.footer__socials}>
                <li>
                    <a href="#"><Image layout="intrinsic" width={30} height={30} src="/img/facebook.svg" alt="" /></a>
                </li>
                <li>
                    <a href="#"><Image layout="intrinsic" width={30} height={30} src="/img/instagram.svg" alt="" /></a>
                </li>
                <li>
                    <a href="#"><Image layout="intrinsic" width={30} height={30} src="/img/twitter.svg" alt="" /></a>
                </li>
            </ul>
        </div>

        <p className={styles.footer__copyright}>
            Копирайт копирайт копирайт копирайт копирайт копирайт копирайт копирайт
    </p>
    </footer>)
}



export default FooterComp;