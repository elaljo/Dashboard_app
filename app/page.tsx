import CardBox from "./components/CardBox";
import styles from "./page.module.css";
import { currentUser } from "@clerk/nextjs/server";

export default async function Home() {
  const user = await currentUser()
  const username = user?.username;
  const welcomeSuffix = username ? ` ${username} ` : '';

  return (
    <div className={styles.HomePage}>
      <h1> WELCOME {welcomeSuffix} TO OUR INTERACTIVE DASHBOARD!</h1>
      <p className={styles.P1}> Here, you can explore all our agencies and their associated employee contacts in one convenient place.</p>
      <div className={styles.Boxes}>
        <CardBox
          icon="/agency.svg"
          title="Agencies"
          description="Click on view details to explore all of our agencies"
          buttonText="View Details"
          href="/agencies"
          />

        <CardBox
          icon="/contact.svg"
          title="Contacts"
          description="Click on view details to see all contacts that's working across our agencies"
          buttonText="View Details"
          href="/contacts"
        />
      </div>
      <p className={styles.P2}> This tool makes it easy to navigate our network, stay connected, and find the information you need efficiently.</p>
    </div>
  );
}
