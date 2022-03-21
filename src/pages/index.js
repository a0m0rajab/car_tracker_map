
import styles from '../../styles/Home.module.css';

import Layout from '../components/layout'

export default function Home() {
  return (
    <Layout>
        <div className={styles.grid}>
          <a href="./login" className={styles.card}>
            <h3>Login &rarr;</h3>
            <p>Login/Register page.</p>
          </a>

          <a href="./cars" className={styles.card}>
            <h3>Cars &rarr;</h3>
            <p>Cars List page</p>
          </a>

          <a href="./cars/map" className={styles.card}>
            <h3>Cars Map &rarr;</h3>
            <p>Cars Map page.</p>
          </a>

          <a href="./profile" className={styles.card}>
            <h3>profile page &rarr;</h3>
            <p>User profile page.</p>
          </a>
        </div>
        </Layout>


  )
}
