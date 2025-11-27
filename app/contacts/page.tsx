import { loadContacts } from "@/lib/csvToJson"
import ContactsTable from "@/app/components/ContactsTable"

interface Contact {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  title: string;
  department: string;
}

export default async function contactspage(){
    const contacts = await loadContacts() as Contact[];

  return <ContactsTable contacts={contacts} />;
}