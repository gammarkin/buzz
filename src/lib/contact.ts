export const contactFields = ["name", "email", "message"] as const;

export type ContactField = (typeof contactFields)[number];
export type ContactValues = Record<ContactField, string>;
export type ContactErrors = Partial<Record<ContactField, string>>;

export type ContactFormState =
  | { status: "idle" }
  | { status: "error"; errors: ContactErrors; values: ContactValues }
  | { status: "success"; name: string };

export const contactLimits = {
  name: { min: 2, max: 80 },
  message: { min: 10, max: 1000 },
} as const;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function readContactForm(formData: FormData): ContactValues {
  const read = (field: ContactField) => {
    const value = formData.get(field);
    return typeof value === "string" ? value.trim() : "";
  };
  return { name: read("name"), email: read("email"), message: read("message") };
}

/** Shared by the client (instant feedback) and the server action (source of truth). */
export function validateContact(values: ContactValues): ContactErrors {
  const errors: ContactErrors = {};

  if (!values.name) {
    errors.name = "Please enter your name.";
  } else if (values.name.length < contactLimits.name.min) {
    errors.name = `Your name should have at least ${contactLimits.name.min} characters.`;
  } else if (values.name.length > contactLimits.name.max) {
    errors.name = `Your name should have at most ${contactLimits.name.max} characters.`;
  }

  if (!values.email) {
    errors.email = "Please enter your email address.";
  } else if (!EMAIL_PATTERN.test(values.email)) {
    errors.email = "Please enter a valid email, like name@example.com.";
  }

  if (!values.message) {
    errors.message = "Please tell us how we can help.";
  } else if (values.message.length < contactLimits.message.min) {
    errors.message = `Your question should have at least ${contactLimits.message.min} characters.`;
  } else if (values.message.length > contactLimits.message.max) {
    errors.message = `Your question should have at most ${contactLimits.message.max} characters.`;
  }

  return errors;
}

export function hasErrors(errors: ContactErrors) {
  return Object.keys(errors).length > 0;
}
