import { loadContacts } from "@/lib/csvToJson"
import styles from "./contacts.module.css"

export default function contactspage(){
    const contacts = loadContacts();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}> Contacts Details</h1>
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
                <th>No.</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Title</th>
              <th>Department</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact: any, index: number) => (
              <tr key={index}>
                <td>{index}</td>
                <td>{contact.first_name}</td>
                <td>{contact.last_name}</td>
                <td>{contact.email}</td>
                <td>{contact.phone}</td>
                <td>{contact.title}</td>
                <td>{contact.department}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}