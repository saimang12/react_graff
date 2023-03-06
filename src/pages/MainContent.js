import { BTN, Inner } from "./common";
import styles from '../css/MainContent.module.scss';

const MainContent = ({ DEFAULT_CONTENTS, DEFAULT_PRODUCT }) => {

    return (
        <section className={styles.MainContent}>
            <h2>{DEFAULT_CONTENTS[0].title}</h2>
            <p>{DEFAULT_CONTENTS[0].description}</p>
            <Inner className={styles.inner}>
                {
                    DEFAULT_PRODUCT.slice(0, 3).reverse().map((product, index) => {
                        return (
                            <div key={product.id}>
                                <figure>
                                    <img src={process.env.PUBLIC_URL + `/assets/lesedilarona0${index + 1}.jpg`} alt="" />
                                </figure>
                                <p>{product.title}</p>
                                <BTN>구매하기</BTN>
                            </div>
                        )
                    })
                }
            </Inner>
        </section>
    )
}

export default MainContent;