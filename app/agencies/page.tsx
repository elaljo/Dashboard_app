import { loadAgencies } from "@/lib/csvToJson"
import styles from "./agencies.module.css"

export default function agenciesPage(){
    const agencies = loadAgencies();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}> Agencies Details</h1>
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>NO.</th>
              <th>Agency Name</th>
              <th>State</th>
              <th>Type</th>
              <th>Population</th>
              <th>Website</th>
            </tr>
          </thead>
          <tbody>
            {agencies.map((agency: any, index: number) => (
              <tr key={index}>
                <td>{index}</td>
                <td>{agency.name}</td>
                <td>{agency.state}</td>
                <td>{agency.type}</td>
                <td>{agency.population}</td>
                <td>{agency.website}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}