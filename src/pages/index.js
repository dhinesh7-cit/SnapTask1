import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Welcome to SnapTask</h1>
      <p className={styles.description}>
        Effortless task scheduling powered by AI.
      </p>

      <Link href="https://dhinesh7-cit.github.io/SnapTask" passHref target="_blank" rel="noopener noreferrer">
        <button className={styles.visitBtn}>Visit Now</button>
      </Link>
    </main>
  );
}
