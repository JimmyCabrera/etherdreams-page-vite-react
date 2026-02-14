import "./LegalPages.css";

const TermsPage = () => {
  return (
    <main className="legal">
      <div className="legal__container">
        <header className="legal__header">
          <h1 className="legal__title">Terms of Service</h1>
          <p className="legal__meta">
            <span className="legal__metaLabel">Effective Date:</span> March 7th, 2024
          </p>

          <p className="legal__text">
            These Terms of Service govern your use of Ether Dreams SpA’s games,
            website, and related services (the “Services”). By accessing or using
            the Services, you agree to these Terms and our Privacy Policy.
          </p>

          <p className="legal__text">
            If you do not agree, please do not use the Services.
          </p>
        </header>

        <section className="legal__section">
          <h2 className="legal__subtitle">1. Eligibility & Accounts</h2>
          <p className="legal__text">
            You must be at least 13 years old to use the Services. If you are 13–17,
            you confirm a legal guardian has reviewed and agreed to these Terms.
            You are responsible for keeping your login information secure and for
            all activity under your account.
          </p>
        </section>

        <section className="legal__section">
          <h2 className="legal__subtitle">2. License to Use</h2>
          <p className="legal__text">
            Ether Dreams grants you a limited, non-exclusive, non-transferable,
            revocable license to access and use the Services for personal,
            non-commercial entertainment purposes, provided you comply with these Terms.
          </p>
        </section>

        <section className="legal__section">
          <h2 className="legal__subtitle">3. Prohibited Conduct</h2>
          <p className="legal__text">
            You agree not to misuse the Services. This includes (but is not limited to):
          </p>
          <ul className="legal__list">
            <li>Cheats, hacks, bots, mods, exploits, or unauthorized software.</li>
            <li>Harassment, hate, threats, obscene or abusive content.</li>
            <li>Attempts to access accounts/systems without authorization.</li>
            <li>Disrupting servers, gameplay, or other users’ experience.</li>
            <li>Posting or collecting private/sensitive information of others.</li>
            <li>Infringing intellectual property or impersonating others.</li>
          </ul>
        </section>

        <section className="legal__section">
          <h2 className="legal__subtitle">4. Purchases & Virtual Items</h2>
          <p className="legal__text">
            If the Services include purchases (e.g., virtual currency/items), all
            purchases are final and non-refundable unless required by applicable law.
            Ether Dreams may modify, manage, or discontinue virtual items/features
            at any time.
          </p>
        </section>

        <section className="legal__section">
          <h2 className="legal__subtitle">5. User Content</h2>
          <p className="legal__text">
            If you submit content (e.g., chat messages, posts), you remain responsible
            for what you share. You grant Ether Dreams permission to use, reproduce,
            display, and distribute your content as needed to operate and promote the
            Services (e.g., moderation, community features, marketing).
          </p>
          <p className="legal__text">
            Ether Dreams may moderate, remove, or restrict content or accounts that
            violate these Terms.
          </p>
        </section>

        <section className="legal__section">
          <h2 className="legal__subtitle">6. Ownership & Intellectual Property</h2>
          <p className="legal__text">
            The Services (including games, code, art, audio, trademarks, and related
            materials) are owned by Ether Dreams or its licensors. You do not acquire
            ownership rights by using the Services.
          </p>
        </section>

        <section className="legal__section">
          <h2 className="legal__subtitle">7. Service Changes, Suspension & Termination</h2>
          <p className="legal__text">
            Ether Dreams may update, change, suspend, or discontinue the Services (or
            parts of them) at any time. We may suspend or terminate accounts for
            violations, suspected misuse, or to keep the Services safe and fair.
            Inactive accounts may be terminated after extended inactivity.
          </p>
        </section>

        <section className="legal__section">
          <h2 className="legal__subtitle">8. Disclaimers</h2>
          <p className="legal__text">
            The Services are provided “as is” and “as available” without warranties
            of any kind, to the maximum extent permitted by law. We do not guarantee
            uninterrupted or error-free operation.
          </p>
        </section>

        <section className="legal__section">
          <h2 className="legal__subtitle">9. Limitation of Liability</h2>
          <p className="legal__text">
            To the maximum extent permitted by law, Ether Dreams is not liable for
            indirect, incidental, special, consequential, or punitive damages. Where
            liability cannot be excluded, it will be limited as permitted by law.
          </p>
        </section>

        <section className="legal__section">
          <h2 className="legal__subtitle">10. Governing Law & Disputes</h2>
          <p className="legal__text">
            These Terms are governed by the laws of Chile. Disputes will be resolved
            exclusively by courts located in Santiago, Chile, unless applicable law
            requires otherwise.
          </p>
        </section>

        <section className="legal__section">
          <h2 className="legal__subtitle">11. Changes to These Terms</h2>
          <p className="legal__text">
            We may update these Terms from time to time by posting a new version on
            our website. Continued use of the Services after updates means you accept
            the revised Terms.
          </p>
        </section>

        <section className="legal__section">
          <h2 className="legal__subtitle">Contact</h2>
          <p className="legal__text">
            If you have questions about these Terms, contact us at{" "}
            <a className="legal__alink" href="mailto:etherdreams.contact@gmail.com">
              etherdreams.contact@gmail.com
            </a>.
          </p>
        </section>
      </div>
    </main>
  );
};

export default TermsPage;
