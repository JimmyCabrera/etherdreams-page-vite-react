import "./LegalPages.css";

const PrivacyPage = () => {
  return (
    <main className="legal">
      <div className="legal__container">
        <header className="legal__header">
          <h1 className="legal__title">Privacy Policy</h1>
          <p className="legal__meta">
            <span className="legal__metaLabel">Effective Date:</span> March 7th,
            2024
          </p>
          <p className="legal__lead">
            Thank you for playing our games! This Privacy Policy describes:
          </p>
          <ul className="legal__list">
            <li>The ways we collect personal data about you and why we do so</li>
            <li>How we use your personal data, and</li>
            <li>The choices you have about your personal data.</li>
          </ul>

          <p className="legal__text">
            This Privacy Policy applies to Ether Dreams SpA&apos;s games,
            websites, and related services (collectively, the “Services”). When
            we refer to “Ether Dreams” (or any similar terms like “we” or “us”)
            in this policy, we mean Ether Dreams SpA. You can also find details
            about the data controller for personal information we collect
            through our different Services under “Contact Us” below.
          </p>
        </header>

        <section className="legal__section">
          <h2 className="legal__subtitle">The Services</h2>
          <p className="legal__text">
            The term “Services” describes any Ether Dreams products or services.
            These include:
          </p>
          <ul className="legal__list">
            <li>Games like KiraKira Slime</li>
            <li>www.etherdreams.cl website</li>
          </ul>
        </section>

        <section className="legal__section">
          <h2 className="legal__subtitle">The Information We Collect</h2>
          <p className="legal__text">
            Here is the information we collect from you and how we use it:
          </p>

          <h3 className="legal__subsubtitle">Information you provide us</h3>
          <ul className="legal__list">
            <li>Player name</li>
            <li>
              Your messages to the Service (such as chat logs and player support
              tickets)
            </li>
            <li>
              Other information you choose to give us (such as password, country
              of residence, email address, or information to identify a lost
              account)
            </li>
            <li>
              Information used by you to make a purchase (such as credit card
              number and expiration date)
            </li>
          </ul>

          <h3 className="legal__subsubtitle">Information we collect automatically</h3>
          <ul className="legal__list">
            <li>Information about your account and game progress</li>
            <li>
              Usage information and statistics about how you interact with the
              Services and other players inside the Services, including the game
              you played, how long you played it and when, gameplay attempts,
              progression and results, saved preferences, crash reports, and
              more
            </li>
            <li>
              Your IP address and mobile device identifiers (such as your device
              ID, advertising ID, MAC address, IMEI)
            </li>
            <li>
              Information about your device, such as device name and operating
              system, browser type, language, internet service provider, plugins,
              and other device or system-related specifications
            </li>
            <li>General location data</li>
            <li>Geolocation data (via GPS, with your consent)</li>
          </ul>

          <h3 className="legal__subsubtitle">Information we collect from our partners</h3>
          <ul className="legal__list">
            <li>
              Information we receive if you link a third party tool with the
              Services (such as Facebook or Google)
            </li>
            <li>
              Demographic data (such as to determine the coarse location of your
              IP address)
            </li>
            <li>
              Data to fight fraud (such as refund abuse in games or click fraud
              in advertising)
            </li>
            <li>
              Data from platforms that the games run on (such as to verify
              payment)
            </li>
            <li>
              Data for advertising and analytics purposes, so we can improve
              your experience and the Services
            </li>
          </ul>
        </section>

        <section className="legal__section">
          <h2 className="legal__subtitle">How We Use Your Information</h2>

          <h3 className="legal__subsubtitle">To make the Service work</h3>
          <p className="legal__text">
            We process data necessary to:
          </p>
          <ul className="legal__list">
            <li>Create accounts and allow you to play our games and use our Services</li>
            <li>Operate the Services</li>
            <li>Verify and confirm payments</li>
            <li>Provide and deliver products and services you request</li>
            <li>Send you Service-related communications</li>
          </ul>

          <h3 className="legal__subsubtitle">
            To make the Service more suitable for our players
          </h3>
          <p className="legal__text">
            To provide great Services to our players, we have a legitimate
            interest to collect and process necessary data to:
          </p>
          <ul className="legal__list">
            <li>Update and develop player profiles</li>
            <li>Develop and improve the Services and player experience</li>
            <li>Manage our relationship with you</li>
            <li>Provide social features as part of the Services</li>
            <li>Customize your Service experience</li>
            <li>Respond to your comments and questions and provide player support</li>
            <li>Provide you EtherDreams offers</li>
            <li>Send you related information, such as updates, security alerts, and support messages</li>
            <li>Enable you to communicate with other players</li>
          </ul>

          <h3 className="legal__subsubtitle">To show personalized advertisements</h3>
          <p className="legal__text">
            To show you personalized advertisements in the Services as well as
            in other websites and services (including email) we have a
            legitimate interest to process necessary data to:
          </p>
          <ul className="legal__list">
            <li>Track the content you access in connection with the Services and your online behavior</li>
            <li>Deliver, target, and improve our advertising and the Services</li>
          </ul>

          <h3 className="legal__subsubtitle">To keep the Service safe and fair</h3>
          <p className="legal__text">
            Ensuring a level playing field in the Services is a top priority for
            us. For more information on our acceptable use policy, see the Ether
            Dreams Terms of Service. In order to keep the Services and their
            social features safe and fair, to fight fraud and ensure acceptable
            use otherwise, we have a legitimate interest to process necessary
            data to:
          </p>
          <ul className="legal__list">
            <li>Analyze and monitor use of the Services and its social features</li>
            <li>Moderate chats either automatically or manually</li>
            <li>Take action against fraudulent or misbehaving players</li>
          </ul>

          <h3 className="legal__subsubtitle">With your consent</h3>
          <p className="legal__text">
            With your consent, we may process your data for additional purposes,
            such as using your GPS location to show you local events. We collect
            the following categories of your personal information and may sell
            it to third parties: identifiers, commercial information, internet
            or other electronic network activity information, geolocation data,
            and inferences drawn from these categories.
          </p>
        </section>

        <section className="legal__section">
          <h2 className="legal__subtitle">How We Share Information</h2>
          <p className="legal__text">
            We may share some of the information we collect to help operate and
            improve the Services. Examples of how we share information include:
          </p>
          <ul className="legal__list">
            <li>
              With other players and users to enable social features and allow
              other players to, for example, see your profile data, in-game
              activities, and read the messages you have posted.
            </li>
            <li>
              With Ether Dreams partners who perform services for us, such as
              facilitating gameplay and developing game features. These partners
              process your data only at and according to Ether Dreams&apos;s
              instructions to provide the Services, such as hosting, player
              support, advertising, analytics, and fraud prevention.
            </li>
            <li>
              With other companies and public authorities in order to combat
              fraud and illegal activity, to prevent or investigate violations
              of our terms or policies, to protect others from death or serious
              harm to body or property, and to public authorities in response to
              lawful requests (such as a court order or subpoena).
            </li>
            <li>With your consent.</li>
          </ul>
          <p className="legal__text">
            We may also share information that does not identify you, including
            aggregate or de-identified information.
          </p>
          <p className="legal__text">
            <strong className="legal__strong">Advertising and social media partners.</strong>{" "}
            The Services include features from our partners, such as social media
            interaction tools and in-game advertising. A list of these partners
            is available at partner-opt-out. These partners may access your data
            and operate under their own privacy policies. We encourage you to
            check their privacy policies to learn more about their data
            processing practices.
          </p>
        </section>

        <section className="legal__section">
          <h2 className="legal__subtitle">Additional Information for California Residents</h2>
          <p className="legal__text">
            The following applies to California residents who interact with our
            Services. The California Consumer Privacy Act (“CCPA”) provides
            consumers residing in California certain rights concerning their
            personal information.
          </p>
          <ul className="legal__list">
            <li>Identifiers (such as names and email addresses)</li>
            <li>Demographic information (such as age)</li>
            <li>Commercial information (such as purchase history)</li>
            <li>Internet or electronic network activity (for example, gameplay or website usage details)</li>
            <li>Geolocation data</li>
            <li>Other “personal information” as defined under California law (such as your credit card information)</li>
            <li>Device information</li>
            <li>Inferences drawn from any of these categories</li>
            <li>[Additional details about CCPA rights and how to exercise them]</li>
          </ul>
        </section>

        <section className="legal__section">
          <h2 className="legal__subtitle">Additional Information for EU Residents</h2>
          <p className="legal__text">
            The General Data Protection Regulation (“GDPR”) provides EU citizens
            with certain rights concerning their personal information. This
            policy applies to all personal information collected or processed by
            Ether Dreams in relation to our Services, and to all EU citizens who
            interact with our Services.
          </p>
          <ul className="legal__list">
            <li>Identifiers (such as names and email addresses)</li>
            <li>Demographic information (such as age)</li>
            <li>Commercial information (such as purchase history)</li>
            <li>Internet or electronic network activity (for example, gameplay or website usage details)</li>
            <li>Geolocation data</li>
            <li>Device information</li>
            <li>Payment information</li>
            <li>[Additional details about GDPR rights and how to exercise them]</li>
          </ul>
        </section>

        <section className="legal__section">
          <h2 className="legal__subtitle">How We Protect Your Information</h2>

          <h3 className="legal__subsubtitle">Security safeguards</h3>
          <p className="legal__text">
            In order to help ensure a secure and safe player experience, Ether
            Dreams takes appropriate technical and organizational measures to
            protect personal information from unauthorized access, disclosure,
            alteration, or destruction. We regularly review and update our data
            security policies and procedures to ensure that we are in compliance
            with relevant data protection laws.
          </p>

          <h3 className="legal__subsubtitle">Data retention</h3>
          <p className="legal__text">
            We retain your data for as long as your account is active or as
            needed to provide you the Services. We will, for example,
            periodically de-identify unused game accounts and we regularly
            review and de-identify unnecessary data. Note that if you ask us to
            remove your personal data, we will retain your data as necessary for
            our legitimate business interests, such as to comply with our legal
            obligations, resolve disputes, and enforce our agreements.
          </p>
        </section>

        <section className="legal__section">
          <h2 className="legal__subtitle">Changes to This Policy</h2>
          <p className="legal__text">
            We may periodically update this Privacy Policy by posting a new
            version on www.etherdreams.cl. When we do make a change, we’ll
            change the date noted at the top of the policy (the “effective
            date”). Your continued use of the Services after the effective date
            will be subject to the updated Privacy Policy.
          </p>
        </section>

        <section className="legal__section">
          <h2 className="legal__subtitle">Contact Us</h2>
          <p className="legal__text">
            Email:{" "}
            <a className="legal__alink" href="mailto:etherdreams.contact@gmail.com">
              etherdreams.contact@gmail.com
            </a>
          </p>
        </section>
      </div>
    </main>
  );
};

export default PrivacyPage;
