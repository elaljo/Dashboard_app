import Papa from "papaparse";
import fs from "fs";
import path from "path";

export function loadAgencies() {
  const filePath = path.join(process.cwd(), "public", "agencies_agency_rows.csv");
  const csvData = fs.readFileSync(filePath, "utf-8");

  const parsed = Papa.parse(csvData, {
    header: true,      // convert each row into an object & uses the first line (City, Phone, Address…) as field names
    skipEmptyLines: true, // ignore empty rows in the CSV
  });
  console.log(parsed.data);
  return parsed.data; // this is now an array of agencies
}

loadAgencies();