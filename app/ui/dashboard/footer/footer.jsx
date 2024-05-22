
import styles from './footer.module.css'
function Footer() {
  return (
    <div className={styles.container}>
        <div lassName={styles.logo}>Safvan</div>
        <div lassName={styles.texts}>&copy All rights reserved.</div>

    </div>
  )
}

export default Footer