"use client";

import { useActionState, useState, type FormEvent } from "react";
import { submitContact } from "@/app/actions";
import { buttonBase, buttonVariants } from "@/components/ui/ButtonLink";
import {
  contactFields,
  contactLimits,
  hasErrors,
  readContactForm,
  validateContact,
  type ContactErrors,
  type ContactField,
  type ContactFormState,
} from "@/lib/contact";
import { cn } from "@/lib/cn";

const initialState: ContactFormState = { status: "idle" };

export function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContact, initialState);
  // Client-side errors give instant feedback; the server action validates again.
  const [clientErrors, setClientErrors] = useState<ContactErrors | null>(null);

  const errors = clientErrors ?? (state.status === "error" ? state.errors : {});
  const values = state.status === "error" ? state.values : undefined;
  const showSuccess = state.status === "success" && !clientErrors && !pending;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    const nextErrors = validateContact(readContactForm(new FormData(event.currentTarget)));

    if (hasErrors(nextErrors)) {
      event.preventDefault();
      setClientErrors(nextErrors);
      const firstInvalid = contactFields.find((field) => nextErrors[field]);
      const element = firstInvalid && event.currentTarget.elements.namedItem(firstInvalid);
      if (element instanceof HTMLElement) element.focus();
      return;
    }

    setClientErrors(null);
  }

  function clearError(field: ContactField) {
    if (!errors[field]) return;
    const rest = { ...errors };
    delete rest[field];
    setClientErrors(rest);
  }

  return (
    <form
      action={formAction}
      onSubmit={handleSubmit}
      noValidate
      aria-labelledby="contact-form-title"
      aria-describedby="contact-form-description"
      className="flex flex-col gap-6 rounded-2xl border border-line bg-white px-5 py-6 shadow-card sm:p-8 lg:w-[540px] lg:shrink-0 lg:p-10"
    >
      <div>
        <h3 id="contact-form-title" className="font-display text-h3 font-bold text-ink">
          Contact us
        </h3>
        <p id="contact-form-description" className="mt-2 text-small text-body">
          Fill out the fields and we will get in touch.
        </p>
      </div>

      <div className="flex flex-col gap-5">
        <FormField
          field="name"
          label="Full name"
          placeholder="Your name"
          autoComplete="name"
          maxLength={contactLimits.name.max}
          defaultValue={values?.name}
          error={errors.name}
          onEdit={clearError}
        />
        <FormField
          field="email"
          label="Email"
          type="email"
          placeholder="youremail@example.com"
          autoComplete="email"
          inputMode="email"
          defaultValue={values?.email}
          error={errors.email}
          onEdit={clearError}
        />
        <FormField
          field="message"
          label="Your question"
          placeholder="Tell us how we can help..."
          multiline
          maxLength={contactLimits.message.max}
          defaultValue={values?.message}
          error={errors.message}
          onEdit={clearError}
        />
      </div>

      <div className="flex flex-col gap-3">
        <button
          type="submit"
          disabled={pending}
          className={cn(buttonBase, buttonVariants.primary, "w-full py-[13px] disabled:cursor-wait disabled:opacity-80")}
        >
          {pending ? "Sending…" : "Send message"}
        </button>
        <p role="status" className="text-center text-small text-success empty:hidden">
          {showSuccess && `Thanks, ${state.name}! Your message is on its way. We reply within 24 hours.`}
        </p>
      </div>
    </form>
  );
}

type FormFieldProps = {
  field: ContactField;
  label: string;
  placeholder: string;
  error?: string;
  defaultValue?: string;
  multiline?: boolean;
  type?: "text" | "email";
  autoComplete?: string;
  inputMode?: "text" | "email";
  maxLength?: number;
  onEdit: (field: ContactField) => void;
};

const controlClassName =
  "w-full rounded-lg border bg-cream px-4 text-small text-ink transition-colors placeholder:text-body focus:bg-white focus:outline-none focus-visible:ring-3 motion-reduce:transition-none";

function FormField({
  field,
  label,
  placeholder,
  error,
  defaultValue,
  multiline = false,
  type = "text",
  autoComplete,
  inputMode,
  maxLength,
  onEdit,
}: FormFieldProps) {
  const id = `contact-${field}`;
  const errorId = `${id}-error`;
  const stateClassName = error
    ? "border-danger focus:border-danger focus-visible:ring-danger/20"
    : "border-line focus:border-brand focus-visible:ring-brand/20";

  const shared = {
    id,
    name: field,
    placeholder,
    defaultValue,
    maxLength,
    required: true,
    "aria-invalid": error ? true : undefined,
    "aria-describedby": error ? errorId : undefined,
    onChange: () => onEdit(field),
  };

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-small font-bold text-ink">
        {label}
      </label>
      {multiline ? (
        <textarea
          {...shared}
          rows={3}
          className={cn(controlClassName, stateClassName, "min-h-[100px] resize-y py-3.5 lg:min-h-[120px]")}
        />
      ) : (
        <input
          {...shared}
          type={type}
          autoComplete={autoComplete}
          inputMode={inputMode}
          className={cn(controlClassName, stateClassName, "h-12 py-3")}
        />
      )}
      {error && (
        <p id={errorId} className="text-small text-danger">
          {error}
        </p>
      )}
    </div>
  );
}
