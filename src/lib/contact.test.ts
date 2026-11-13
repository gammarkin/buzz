import { describe, expect, it } from "vitest";
import { contactLimits, hasErrors, readContactForm, validateContact, type ContactValues } from "./contact";

const valid: ContactValues = {
  name: "Jamie Rivera",
  email: "jamie@example.com",
  message: "Do you offer team plans for 10 people?",
};

describe("validateContact", () => {
  it("accepts a complete submission", () => {
    expect(validateContact(valid)).toEqual({});
  });

  it("requires every field", () => {
    const errors = validateContact({ name: "", email: "", message: "" });
    expect(Object.keys(errors)).toEqual(["name", "email", "message"]);
  });

  it.each(["jamie", "jamie@", "jamie@example", "jamie @example.com"])("rejects the email %s", (email) => {
    expect(validateContact({ ...valid, email }).email).toBeDefined();
  });

  it("enforces length limits", () => {
    expect(validateContact({ ...valid, name: "J" }).name).toMatch(/at least/);
    expect(validateContact({ ...valid, message: "Too short" }).message).toMatch(/at least/);
    expect(validateContact({ ...valid, message: "a".repeat(contactLimits.message.max + 1) }).message).toMatch(
      /at most/,
    );
  });
});

describe("readContactForm", () => {
  it("trims values and treats missing fields as empty", () => {
    const formData = new FormData();
    formData.set("name", "  Jamie  ");
    formData.set("email", " jamie@example.com ");

    expect(readContactForm(formData)).toEqual({ name: "Jamie", email: "jamie@example.com", message: "" });
  });
});

describe("hasErrors", () => {
  it("reports whether any field failed", () => {
    expect(hasErrors({})).toBe(false);
    expect(hasErrors({ email: "Invalid" })).toBe(true);
  });
});
