// components/Navbar.js
import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li>
          <Link href="/">
            <span className={styles.navLink}>Home</span>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <span className={styles.navLink}>About</span>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <span className={styles.navLink}>Contact</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
