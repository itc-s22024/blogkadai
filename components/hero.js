import styles from 'styles/hero.module.css'
import Image from 'next/image'
// import cube from 'images/cube.jpg'

const cube = {
    src: 'https://images.microcms-assets.io/assets/ca83e792c77f456d83ca8a3e70c25305/e0505d9111f4497a8b474c370f549afd/cube.jpg',
    height: 1300,
    width: 1500,
    blurDataURL: 'data:image/jpeg;base64',
}

const Hero = ({ title, subtitle, imageOn = false }) =>
    <div className={styles.flexContainer}>
        <div className={styles.text}>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.subtitle}>{subtitle}</p>
        </div>
        {imageOn && (
        <figure className={styles.image}>
            <Image
            src={cube}
            alt=""
            sizes='(min-width: 1152px) 576px, (min-width: 768px) 50vw, 100vw'
            priority
            placeholder='blur'
            style={{width: '100%', height: 'auto',}}
            />
        </figure>
        )}
    </div>

export default Hero