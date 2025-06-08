// pages/contact.js
import Head from 'next/head';
import styles from '../styles/Contact.module.css';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact - SnapTask</title>
      </Head>
      <main className={styles.container}>
        <h1 className={styles.heading}>Get in Touch</h1>
        <p className={styles.subtext}>
          Have feedback, questions, or collaboration ideas? We'd love to hear from you!
        </p>
        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Your Name" className={styles.input} required />
          <input type="email" placeholder="Your Email" className={styles.input} required />
          <textarea placeholder="Your Message" className={styles.textarea} rows="5" required></textarea>
          <button type="submit" className={styles.button}>Send Message</button>
        </form>
      </main>
    </>
  );
}
