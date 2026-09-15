"use client";

import { ValidationError, useForm } from "@formspree/react";

type WaitlistFields = {
  name: string;
  email: string;
  phone: string;
  profession: string;
};

export default function WaitlistForm() {
  const [state, handleSubmit] = useForm<WaitlistFields>("xzezpzjk");
  const errorItems = state.errors
    ? [
        ...state.errors.getFormErrors().map(({ message }) => message),
        ...state.errors.getAllFieldErrors().flatMap(([field, errors]) => errors.map(({ message }) => `${String(field)}: ${message}`)),
      ]
    : [];

  if (state.succeeded) {
    return (
      <div className="form-success" role="status">
        <h3>You’re on the list.</h3>
        <p>Thanks for your interest. We’ll be in touch with pilot details as the November 2026 cohort takes shape.</p>
      </div>
    );
  }

  return (
    <form className="waitlist-form" onSubmit={handleSubmit}>
      <div className="form-fields">
        <div className="form-field">
          <label htmlFor="name">Name</label>
          <input id="name" name="name" type="text" autoComplete="name" placeholder="Your name" required aria-describedby="name-error" aria-invalid={state.errors?.getFieldErrors("name").length ? true : undefined} />
          <ValidationError id="name-error" role="alert" prefix="Name" field="name" errors={state.errors} className="form-error" />
        </div>
        <div className="form-field">
          <label htmlFor="email">E-mail</label>
          <input id="email" name="email" type="email" autoComplete="email" placeholder="you@email.com" required aria-describedby="email-error" aria-invalid={state.errors?.getFieldErrors("email").length ? true : undefined} />
          <ValidationError id="email-error" role="alert" prefix="E-mail" field="email" errors={state.errors} className="form-error" />
        </div>
        <div className="form-field">
          <label htmlFor="phone">Phone number</label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="9999999999" required aria-describedby="phone-error" aria-invalid={state.errors?.getFieldErrors("phone").length ? true : undefined} />
          <ValidationError id="phone-error" role="alert" prefix="Phone number" field="phone" errors={state.errors} className="form-error" />
        </div>
        <div className="form-field">
          <label htmlFor="profession">Profession</label>
          <input id="profession" name="profession" type="text" autoComplete="organization-title" placeholder="Chartered Accountant" required aria-describedby="profession-error" aria-invalid={state.errors?.getFieldErrors("profession").length ? true : undefined} />
          <ValidationError id="profession-error" role="alert" prefix="Profession" field="profession" errors={state.errors} className="form-error" />
        </div>
      </div>
      {errorItems.length > 0 && (
        <div className="form-error-summary" id="form-errors" role="alert" aria-live="assertive">
          <p>We couldn’t submit the form. Check the highlighted fields and try again.</p>
          <ul>
            {errorItems.map((message, index) => <li key={`${message}-${index}`}>{message}</li>)}
          </ul>
        </div>
      )}
      <button className="button form-submit" type="submit" disabled={state.submitting}>
        {state.submitting ? "Sending…" : "Request pilot details"} <span aria-hidden="true">↗</span>
      </button>
      <p className="form-note">We’ll only use these details to follow up about the CApex pilot.</p>
    </form>
  );
}
