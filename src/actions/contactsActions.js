import { redirect } from "react-router-dom";
import { createContact, deleteContact, updateContact } from "../contacts";

export async function createContactAction() {
  const contact = await createContact();
  return { contact };
}

export async function updateContactAction({ request, params }) {
  const formData = await request.formData();

  const updates = Object.fromEntries(formData);
  console.log(updates);
  await updateContact(params.contactId, updates);
  return redirect(`/contacts/${params.contactId}`);
}

export async function deleteContactAction({ params }) {
  // throw new Error("oh dang!");
  await deleteContact(params.contactId);
  return redirect("/");
}
