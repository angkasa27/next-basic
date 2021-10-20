import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);

  return (
    <>
      <Head>
        <title>My List | 404</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div className="not-found">
        <h1>Ooopsss...</h1>
        <h2>Your page doesn Exist</h2>
        <p>
          Goback to the{" "}
          <Link href="/">
            <a>Home</a>
          </Link>
        </p>
      </div>
    </>
  );
};

export default NotFound;
