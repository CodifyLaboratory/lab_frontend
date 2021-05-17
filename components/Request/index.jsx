import React from 'react'
import styles from '../../styles/Request.module.css'
import Image from 'next/image'
function RequestComp() {
    return (<section className={styles.request}>
        <div className={styles.container}>
            <h2 className={styles.request__title}>Оставьте заявку</h2>
            <div className={styles.request_wrapper}>
                <p className={styles.request__text}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
        </p>
                <form className={styles.request__form}>
                    <input type="text" placeholder="Имя" className={styles.input} />
                    <input
                        type="text"
                        placeholder="+996 (000) 00-00-00"
                        className={styles.input}
                    />
                    <input type="email" placeholder="Почта" className={styles.input + ' ' + styles.email} />
                    <textarea
                        name=""
                        id=""
                        cols="30"
                        rows="10"
                        placeholder="Ваши пожелания..."
                        className={styles.input + ' ' + styles.input_area}
                    ></textarea>
                    <button type="submit" className={styles.form_btn}>
                        Отправить <Image src="/img/send.svg" layout="responsive" width={10} height={10} alt="" className={styles.send_icon} />
                    </button>
                </form>
            </div>
        </div>
    </section>)
}


export default RequestComp;