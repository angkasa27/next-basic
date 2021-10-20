//default buat fetch api dari next
import styles from "../../styles/Ninjas.module.css";
import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return { props: { data } };
};

export default function index({ data }) {
  return (
    <div>
      <h1>{"All " + data.length + " Ninjas"}</h1>
      {data.map((v) => (
        <Link key={v.id} href={"/ninjas/" + v.id}>
          <a className={styles.single}>
            <h3>{v.name}</h3>
          </a>
        </Link>
      ))}
    </div>
  );
}
