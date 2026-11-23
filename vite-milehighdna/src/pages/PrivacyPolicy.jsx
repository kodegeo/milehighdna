import React from 'react';
import { Helmet } from 'react-helmet-async';

const LAST_UPDATED = 'November 23, 2026';

const Section = ({ title, children }) => (
  <section className="mb-8">
    <h2 className="text-2xl font-semibold text-blue-700 mb-3">{title}</h2>
    <div className="space-y-3 text-gray-700 leading-relaxed">{children}</div>
  </section>
);

const PrivacyPolicy = () => (
  <>
    <Helmet>
      <title>Privacy Policy | Mile High DNA Testing</title>
      <meta
        name="description"
        content="How Mile High DNA Testing collects, uses, and protects your information, and how to request deletion of your data."
      />
      <link rel="canonical" href="https://milehighdnatesting.com/privacy" />
    </Helmet>

    <main className="bg-white py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-700 mb-2">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-10">Last updated: {LAST_UPDATED}</p>

        <Section title="Who we are">
          <p>
            Mile High DNA Testing (&quot;we,&quot; &quot;us&quot;) provides paternity, prenatal, immigration,
            and other relationship DNA testing from our office at 975 N Lincoln St, Suite 205C, Denver,
            CO 80203. This policy explains how we handle information collected through
            milehighdnatesting.com, our social media pages, and our services.
          </p>
        </Section>

        <Section title="Information we collect">
          <p>
            Information you give us: your name, phone number, email address, appointment details, and
            any information you include when you book an appointment, contact us, or order a test.
          </p>
          <p>
            Information collected automatically: basic website usage data such as pages visited, device
            and browser type, and how you arrived at our site, collected through analytics and
            advertising tools (for example Google Analytics and Google Ads).
          </p>
          <p>
            DNA samples and test results are handled by our accredited partner laboratory under strict
            chain-of-custody and confidentiality procedures and are released only to authorized
            parties.
          </p>
        </Section>

        <Section title="How we use your information">
          <p>
            We use your information to schedule and provide testing, communicate with you about your
            case, process payments, respond to questions, improve our website, and measure the
            effectiveness of our advertising. We do not sell your personal information.
          </p>
        </Section>

        <Section title="Social media">
          <p>
            We publish educational content and updates to our Facebook, Instagram, and Threads accounts
            using a business publishing tool we operate. That tool posts only to our own business
            accounts and does not collect personal information about people who view or interact with
            our posts. Comments and messages you send us on social media are governed by that
            platform&apos;s privacy policy as well as this one.
          </p>
        </Section>

        <Section title="Sharing">
          <p>
            We share information only with service providers who help us operate (such as our partner
            laboratory, scheduling, payment, and website hosting providers), when you authorize it, or
            when required by law.
          </p>
        </Section>

        <Section title="Data retention and security">
          <p>
            We keep information only as long as needed for the purposes above or as required by law,
            and we use reasonable administrative and technical safeguards to protect it.
          </p>
        </Section>

        <Section title="Your choices and data deletion">
          <p>
            You may ask us to access, correct, or delete your personal information at any time. To
            request deletion, email{' '}
            <a href="mailto:info@milehighdnatesting.com" className="text-blue-600 underline">
              info@milehighdnatesting.com
            </a>{' '}
            or call (720) 900-9342 with your name and the contact details you used with us. We will
            confirm your request and complete it within 30 days, except for records we are legally
            required to keep (for example, legal chain-of-custody records).
          </p>
        </Section>

        <Section title="Contact us">
          <p>
            Questions about this policy: info@milehighdnatesting.com · (720) 900-9342 · 975 N Lincoln
            St, Suite 205C, Denver, CO 80203.
          </p>
        </Section>
      </div>
    </main>
  </>
);

export default PrivacyPolicy;
