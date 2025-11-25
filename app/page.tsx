import styles from "./page.module.css";
import { currentUser } from "@clerk/nextjs/server";
export default async function Home() {
  const user = await currentUser()
  const username = user?.username;
  const welcomeSuffix = username ? `, ${username}` : '';

  return (
    <div>
      <h1> Welcome{welcomeSuffix} 👋</h1>
      <p> Welcome to our interactive dashboard!</p>
      <p> Here, you can explore all our agencies and their associated employee contacts in one convenient place. Click on an agency to view its details and quickly access contact information for its employees. This tool makes it easy to navigate our network, stay connected, and find the information you need efficiently.</p>
    </div>
  );
}
