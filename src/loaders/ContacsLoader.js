import localforage from "localforage";
import { getContact, getContacts } from "../contacts";

export const getContactsLoader = async () => {
  // localforage.clear();
  const contacts = await getContacts();
  return { contacts };
};

export async function getContactLoader({ params }) {
  const contact = await getContact(params.contactId);
  return { contact };
}
