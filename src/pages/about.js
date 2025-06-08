// pages/about.js
import Head from 'next/head';
import styles from '../styles/About.module.css';

export default function About() {
  return (
    <>
      <Head>
        <title>About - SnapTask</title>
      </Head>
      <main className={styles.container}>
        <h1 className={styles.heading}>About SnapTask</h1>
        <p className={styles.text}>
          SnapTask is your AI-powered productivity partner. Just snap a photo of your handwritten or whiteboard notes, and we’ll turn it into a structured to-do list or calendar schedule.
        </p>
        <p className={styles.text}>
          We blend OCR, smart scheduling, and Google integrations to make your workflow seamless. Whether it’s planning your day or managing your deadlines — SnapTask does it in a snap.
        </p>
      </main>
    </>
  );
}
