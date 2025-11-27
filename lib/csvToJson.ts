import { parse } from "csv-parse/sync";
import * as fs from "fs";
import * as path from "path";

export function loadAgencies() {
  const filePath = path.join(process.cwd(), "public", "agencies_agency_rows.csv");
  const csvData = fs.readFileSync(filePath, "utf-8");

  const records  = parse(csvData, {
    columns: true,      // uses the first line (City, Phone, Address…) as field names
    skipEmptyLines: true, // ignore empty rows in the CSV
  });
  return records;
}

export function loadContacts() {
  const filePath = path.join(process.cwd(), "public", "contacts_contact_rows.csv");
  const csvData = fs.readFileSync(filePath, "utf-8");

  const records  = parse(csvData, {
    columns: true,      // uses the first line (City, Phone, Address…) as field names
    skipEmptyLines: true, // ignore empty rows in the CSV
  });
  return records;
}