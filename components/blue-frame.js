import styles from 'styles/blue-frame.module.css'
import Container from './container'
import Link from 'next/link'

const BlueFrame = ({ children }) =>
    <div className={styles.frame}>
        <Container>{children}</Container>
        <Link href="/blog" className={styles.sideBtn}>
            Recent Blog Posts
        </Link>
    </div>

export default BlueFrame