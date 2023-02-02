import Image from 'next/image';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.imageContainer}>
        <Image alt={'image js'} src={'/fondojs.png'} fill={true} />
        <div className={styles.imageInfo}>
          image info Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Ratione magnam tempore vitae ea dignissimos magni cumque eaque facilis
          eius sint blanditiis illum ab aspernatur officia, sed dolores minus
          cupiditate dicta eos. Qui reprehenderit nam vitae dolore pariatur
          minima, voluptatem nemo obcaecati necessitatibus et iusto inventore
          delectus ad eligendi quas consectetur!
        </div>
      </div>
    </div>
  );
};

export default Hero;
