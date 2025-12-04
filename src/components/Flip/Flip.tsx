import Image from 'next/image';
import styles from './Flip.module.css';

interface Props {
  id: number;
  frontLogo: { id: string; title: string; image: string };
  backLogo: { id: string; title: string; image: string };
}

function FlipLogos({ id, frontLogo, backLogo }: Props) {
  let delay = 0.1;
  let flipDelay = 1 + id * delay;

  return (
    <div className={styles['card']}>
      <div
        className={`${styles['card-inner']}`}
        style={{
          animationDelay: `${flipDelay}s`,
          animationIterationCount: 'infinite',
          animationDuration: '5s',
        }}
      >
        <div className={styles['card-front']}>
          <Image
            width={500}
            height={500}
            className='w-full h-auto grayscale hover:grayscale-0'
            src={`/images/services/${frontLogo.image}`}
            alt={frontLogo.title}
          />
        </div>
        <div className={`${styles['card-back']}`}>
          <Image
            width={200}
            height={200}
            className='w-full h-auto grayscale hover:grayscale-0'
            src={`/images/services/${backLogo.image}`}
            alt={backLogo.title}
          />
        </div>
      </div>
    </div>
  );
}

export default FlipLogos;
