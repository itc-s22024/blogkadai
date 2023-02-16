import styles from 'styles/contact.module.css'
import Social from './social'

const Contact = () =>
    <div className={styles.stack}>
        <h3 className={styles.heading}>Contact</h3>
        <Social iconSize="30px"/>
        <address>main@email.addres</address>
    </div>

export default Contact