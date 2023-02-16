import Logo from "./logo"
import styles from "styles/footer.module.css"
import Container from "./container"
import Social from "./social"

const Footer = () =>
    <footer className={styles.wrapper}>
        <Container>
            <div className={styles.flexContainer}>
                <Logo />
                <Social />
            </div>
        </Container>
    </footer>

export default Footer