"use server";

import { hasErrors, readContactForm, validateContact, type ContactFormState } from "@/lib/contact";

/**
 * Mock submission: validates on the server and pretends to deliver the message.
 * There is no backend for this challenge, so nothing is stored or sent.
 */
export async function submitContact(
  _previous: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const values = readContactForm(formData);
  const errors = validateContact(values);

  if (hasErrors(errors)) {
    return { status: "error", errors, values };
  }

  await new Promise((resolve) => setTimeout(resolve, 600));
  return { status: "success", name: values.name.split(" ")[0] };
}
