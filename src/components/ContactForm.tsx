"use client";
import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { services } from "@/lib/site";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: services[0].title,
    message: "",
  });

  const set = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    // No backend by design — scripted confirmation. Wire to Pipedrive/email later.
    setSent(true);
  };

  if (sent) {
    return (
      <div className="card p-8 text-center">
        <CheckCircle2 size={48} className="text-green-500 mx-auto" />
        <h3 className="mt-4 font-display font-bold text-2xl">Thanks, {form.name || "friend"}!</h3>
        <p className="mt-2 text-steel">
          Your request is in. A Gridline team member will reach out shortly to confirm
          your visit. For urgent issues, please call us directly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="card p-6 sm:p-8 space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Full Name" required>
          <input
            required
            value={form.name}
            onChange={(e) => set("name", e.target.value)}
            className="input"
            placeholder="Jane Doe"
          />
        </Field>
        <Field label="Phone" required>
          <input
            required
            type="tel"
            value={form.phone}
            onChange={(e) => set("phone", e.target.value)}
            className="input"
            placeholder="(720) 555-0148"
          />
        </Field>
      </div>

      <Field label="Email">
        <input
          type="email"
          value={form.email}
          onChange={(e) => set("email", e.target.value)}
          className="input"
          placeholder="you@email.com"
        />
      </Field>

      <Field label="Service Needed">
        <select
          value={form.service}
          onChange={(e) => set("service", e.target.value)}
          className="input"
        >
          {services.map((s) => (
            <option key={s.title}>{s.title}</option>
          ))}
          <option>Emergency / Other</option>
        </select>
      </Field>

      <Field label="How can we help?">
        <textarea
          rows={4}
          value={form.message}
          onChange={(e) => set("message", e.target.value)}
          className="input resize-none"
          placeholder="Tell us what's going on…"
        />
      </Field>

      <button type="submit" className="btn btn-primary w-full justify-center text-base">
        <Send size={18} /> Request My Visit
      </button>
      <p className="text-xs text-steel text-center">
        We&apos;ll never share your info. For emergencies, please call us directly.
      </p>

      <style jsx>{`
        .input {
          width: 100%;
          border: 1px solid var(--color-mist);
          border-radius: 0.6rem;
          padding: 0.7rem 0.9rem;
          font-size: 0.95rem;
          background: var(--color-paper);
          outline: none;
          transition: border-color 0.15s, box-shadow 0.15s;
        }
        .input:focus {
          border-color: var(--color-brand);
          box-shadow: 0 0 0 3px rgba(10, 111, 242, 0.15);
        }
      `}</style>
    </form>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="block text-sm font-medium text-slate2 mb-1.5">
        {label} {required && <span className="text-brand">*</span>}
      </span>
      {children}
    </label>
  );
}
