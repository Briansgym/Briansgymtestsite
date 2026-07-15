"use client";

import { useState, type FormEvent } from "react";
import { Send, CheckCircle2, Loader2 } from "lucide-react";

type ContactFormProps = {
  endpoint: string;
  variant?: "contact" | "trial";
  buttonLabel?: string;
};

export default function ContactForm({
  endpoint,
  variant = "contact",
  buttonLabel,
}: ContactFormProps) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle"
  );

  const isTrial = variant === "trial";

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setStatus("submitting");

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center rounded-2xl border border-success/30 bg-success/10 p-10 text-center">
        <CheckCircle2 className="h-12 w-12 text-success" />
        <h3 className="mt-4 font-heading text-2xl font-bold text-white">
          {isTrial ? "Your free trial is on the way!" : "Message sent!"}
        </h3>
        <p className="mt-2 text-white/70">
          {isTrial
            ? "We'll reach out shortly to schedule your 3-day pass. Get ready to train!"
            : "Thanks for reaching out — we'll get back to you as soon as possible."}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-white/85">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="w-full rounded-xl border border-white/15 bg-navy px-4 py-3 text-white placeholder-white/40 outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/40"
            placeholder="Jane Doe"
          />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-white/85">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            className="w-full rounded-xl border border-white/15 bg-navy px-4 py-3 text-white placeholder-white/40 outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/40"
            placeholder="660-555-0123"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-white/85">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="w-full rounded-xl border border-white/15 bg-navy px-4 py-3 text-white placeholder-white/40 outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/40"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-white/85">
          {isTrial ? "What are your fitness goals?" : "Message"}
        </label>
        <textarea
          id="message"
          name="message"
          rows={isTrial ? 3 : 5}
          required
          className="w-full rounded-xl border border-white/15 bg-navy px-4 py-3 text-white placeholder-white/40 outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/40"
          placeholder={
            isTrial
              ? "Tell us a bit about your goals and preferred visit time..."
              : "How can we help you?"
          }
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-accent">
          Something went wrong. Please try again or call us at 660-829-0997.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-accent w-full px-8 py-4 text-base disabled:opacity-70"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" /> Sending...
          </>
        ) : (
          <>
            {buttonLabel ?? (isTrial ? "Claim My Free Trial" : "Send Message")}
            <Send className="h-4 w-4" />
          </>
        )}
      </button>
    </form>
  );
}
