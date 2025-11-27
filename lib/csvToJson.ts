import { parse } from "csv-parse/sync";
import { promises as fs } from "fs";
import * as path from "path";

export async function loadAgencies() {
  const filePath = path.join(process.cwd(), "data", "agencies_agency_rows.csv");
  const csvData = await fs.readFile(filePath, "utf-8");
  const records = parse(csvData, { columns: true, skipEmptyLines: true });
  return records;
}

export async function loadContacts() {
  const filePath = path.join(process.cwd(), "data", "contacts_contact_rows.csv");
  const csvData = await fs.readFile(filePath, "utf-8");
  const records = parse(csvData, { columns: true, skipEmptyLines: true });
  return records;
}