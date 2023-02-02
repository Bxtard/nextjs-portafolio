import Hero from './components/Hero/Hero';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero /> <br /> About <br /> tecnologies <br /> Services <br /> projects
      <br /> contact
    </main>
  );
}
