import { getContacts } from "../contacts";

export const getContactsLoader = async () => {
  const contacts = await getContacts();
  return { contacts };
};
