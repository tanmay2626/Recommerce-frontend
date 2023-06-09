import Header from "@/components/layout/Header";
import styles from "@/styles/Home.module.scss";
import { Divider } from "@mui/material";
import Head from "next/head";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const handleScrapyar = () => {
    localStorage.setItem("current", "scrapyar");
    router.push("/scrapyar");
  };
  const handleCreativeScrapyar = () => {
    localStorage.setItem("current", "creative");
    router.push("/creative-scrapyar");
  };

  return (
    <>
      <Head>
        <script src="https://accounts.google.com/gsi/client" async></script>
      </Head>
      <Header />
      <main className={styles.main}>
        <section className={styles.landing}>
          <div className={styles.graphics}>
            <img src="/images/graphics.png" alt="landing-screen" />
          </div>
          <div className={styles.heading}>
            <h2>Hi There!</h2>
            <h1>Start your journey with...</h1>
            <button onClick={handleCreativeScrapyar} className={styles.right}>
              Creative ScrapYar
            </button>
            <Divider orientation="vertical" flexItem sx={{ fontSize: 15 }}>
              OR
            </Divider>
            <button onClick={handleScrapyar}>ScrapYar</button>
          </div>
        </section>
      </main>
    </>
  );
}
