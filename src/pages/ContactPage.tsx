import { useMemo, useState } from "react";
import "./ContactPage.css";

const TO_EMAIL = "etherdreams.contact@gmail.com";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  // honeypot (si esto se llena, es bot)
  const [company, setCompany] = useState("");

  const [error, setError] = useState<string | null>(null);
  const [isSending, setIsSending] = useState(false);

  const isValidEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());

  const canSend = useMemo(() => {
    const n = name.trim();
    const e = email.trim();
    const s = subject.trim();
    const m = message.trim();
    return n.length >= 2 && isValidEmail(e) && s.length >= 3 && m.length >= 10 && company.trim() === "";
  }, [name, email, subject, message, company]);

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    setError(null);

    if (company.trim() !== "") {
      // bot
      return;
    }

    if (!canSend) {
      setError("Please complete all fields (message min. 10 chars) and use a valid email.");
      return;
    }

    setIsSending(true);

    const safeSubject = subject.trim();
    const body =
      `Name: ${name.trim()}\n` +
      `Email: ${email.trim()}\n\n` +
      `${message.trim()}\n\n` +
      `— Sent from etherdreams.cl`;

    const mailto = `mailto:${TO_EMAIL}?subject=${encodeURIComponent(
      safeSubject
    )}&body=${encodeURIComponent(body)}`;

    // abre el cliente de correo
    window.location.href = mailto;

    // soltamos el estado
    setTimeout(() => setIsSending(false), 500);
  };

  return (
    <main className="contact">
      <div className="contact__container">
        <header className="contact__header">
          <h1 className="contact__title">Contact</h1>
          <p className="contact__lead">
            Send a message directly to Ether Dreams. We’ll get back to you as soon as possible.
          </p>
        </header>

        <section className="contact__card" aria-label="Contact form">
          <form className="contact__form" onSubmit={handleSubmit} noValidate>
            <div className="contact__grid">
              <div className="contact__field">
                <label className="contact__label" htmlFor="name">Name</label>
                <input
                  id="name"
                  className="contact__input"
                  type="text"
                  autoComplete="name"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className="contact__field">
                <label className="contact__label" htmlFor="email">Email</label>
                <input
                  id="email"
                  className="contact__input"
                  type="email"
                  autoComplete="email"
                  placeholder="you@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <p className="contact__hint">We’ll only use this to reply to you.</p>
              </div>

              {/* Honeypot */}
              <div className="contact__hp" aria-hidden="true">
                <label htmlFor="company">Company</label>
                <input
                  id="company"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                />
              </div>

              <div className="contact__field contact__field--full">
                <label className="contact__label" htmlFor="subject">Subject</label>
                <input
                  id="subject"
                  className="contact__input"
                  type="text"
                  placeholder="What is this about?"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required
                />
              </div>

              <div className="contact__field contact__field--full">
                <label className="contact__label" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  className="contact__textarea"
                  placeholder="Write your message…"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={7}
                  required
                />
                <p className="contact__hint">Tip: include your device/platform if it’s a game issue.</p>
              </div>
            </div>

            {error && (
              <div className="contact__error" role="alert">
                {error}
              </div>
            )}

            <div className="contact__actions">
              <button
                type="submit"
                className="contact__btn"
                disabled={!canSend || isSending}
              >
                {isSending ? "Opening email…" : "Send message"}
              </button>

              <p className="contact__alt">
                Or email us at{" "}
                <a className="contact__link" href={`mailto:${TO_EMAIL}`}>
                  {TO_EMAIL}
                </a>
              </p>
            </div>
          </form>
        </section>
      </div>
    </main>
  );
};

export default ContactPage;
