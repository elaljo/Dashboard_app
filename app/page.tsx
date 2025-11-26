import styles from "./page.module.css";
import { currentUser } from "@clerk/nextjs/server";
export default async function Home() {
  const user = await currentUser()
  const username = user?.username;
  const welcomeSuffix = username ? ` ${username} 👋` : '';

  return (
    <div className={styles.HomePage}>
      <h1 className={styles.Welcome}> Welcome {welcomeSuffix}</h1>
      <p className={styles.P1}> Welcome to our interactive dashboard!</p>
      <div className={styles.details}>
        <p className={styles.D1}> Here, you can explore all our agencies and their associated employee contacts in one convenient place.</p>
        <p className={styles.D2}> 💡Click on an agency to view its details and quickly access contact information for its employees.</p>
        <p className={styles.D3}> This tool makes it easy to navigate our network, stay connected, and find the information you need efficiently.</p>
      </div>
    </div>
  );
}
