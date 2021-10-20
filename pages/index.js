import Link from "next/link";
import styles from "../styles/Home.module.css";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>My List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div className={styles.container}>
        <h1 className={styles.title}>Home Page</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor sequi
          quam maxime, consequatur placeat pariatur, quo magni optio earum sint
          reiciendis nihil facere tempore cumque aspernatur laudantium veritatis
          cupiditate ad!
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor sequi
          quam maxime, consequatur placeat pariatur, quo magni optio earum sint
          reiciendis nihil facere tempore cumque aspernatur laudantium veritatis
          cupiditate ad!
        </p>
        <Link href="/ninjas">
          <a className={styles.btn}>See All Ninja</a>
        </Link>
      </div>
    </>
  );
}
