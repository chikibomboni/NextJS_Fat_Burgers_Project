import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

const Home = () => {
  return (
    <>
      <Head>
        <title>Жирные бургеры | Главная</title>
        <meta name="title" content="Жирные бургеры"/>
      </Head>
      <div className={styles.container}>
        <h1 className={`${styles.title} font-effect-fire-animation`}>Самый Жирный Бургер!</h1>
        <div className={styles.mainImage}>
          <Image src="/fatburger.png" alt="fat burger" width={400} height={300} />
        </div>
        <p className={styles.text}>Что такое идеальный бургер? Лист свежего салата, мягкие булочки, сочное мясо. О других составляющих начинки можно поспорить, ведь это дело вкуса.</p>
        <p className={styles.text}>Есть ещё пара-тройка факторов, влияющих на аппетит: цены, качество обслуживания, правильная атмосфера заведения.</p>
        <Link href="/burgers/">
          <a className={styles.btn}>Все бургеры</a>
        </Link>

        <form action="/send-data-here" method="post">
  <label htmlFor="roll">Roll Number</label>
  <input
    type="text"
    id="roll"
    name="roll"
    required
    minLength="10"
    maxLength="20"
  />
  <label htmlFor="name">Name:</label>
  <input type="text" id="name" name="name" required />
  <button type="submit">Submit</button>
</form>
      </div>
    </>
  );
}

export default Home;