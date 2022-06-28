import Head from "next/head";
import { useEffect } from "react";
const styles = {};
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next App with Moesif</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Next.js API is running!</h1>
        <button
          onClick={() => {
            // because window.moesif is already inited in _app.js
            window.moesif.track("sign-in-now", { cta: "click to sign in" });
            window.moesif.identifyUser("userId4", { email: "foo@moesif.com" });
            window.alert(
              "an user action event sign-in-now is being sent, and userId with userId4 is being identified, assume you added your application id correctly you should see those data in moesif."
            );
          }}
        >
          Click to sign in
        </button>
      </main>
    </div>
  );
}