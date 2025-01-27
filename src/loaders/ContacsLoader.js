import localforage from "localforage";
import { getContact, getContacts } from "../contacts";

export const getContactsLoader = async ({ request }) => {
  // localforage.clear();
  const url = new URL(request.url);
  const q = url.searchParams.get("q");
  const contacts = await getContacts(q);
  // const contacts = await getContacts();
  return { contacts, q };
};

export async function getContactLoader({ params }) {
  const contact = await getContact(params.contactId);
  if (!contact) {
    throw new Response("", {
      status: 404,
      statusText: "Not Found",
    });
  }
  return { contact };
}
