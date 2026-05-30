import type { Metadata } from "next";
import LegalLayout from "../(legal)/legal-layout";

export const metadata: Metadata = {
  title: "Privacy Policy | Global Heaven Overseas",
  description:
    "Privacy Policy for Global Heaven Overseas — how we collect, use, share, and protect your personal data when you use our website and study-abroad services.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout title="Privacy Policy" updatedAt="May 30, 2026">
      <p>
        <strong>Global Heaven Overseas</strong> (&ldquo;<strong>GHO</strong>,&rdquo;
        &ldquo;<strong>we</strong>,&rdquo; &ldquo;<strong>us</strong>,&rdquo; or
        &ldquo;<strong>our</strong>&rdquo;) respects your privacy. This Privacy Policy
        explains how we collect, use, share, and protect your information when you
        visit <a href="https://heaven-overseas.com">heaven-overseas.com</a>{" "}
        (the &ldquo;Site&rdquo;) or use our study-abroad counseling services
        (collectively, the &ldquo;Services&rdquo;).
      </p>
      <p>
        By using the Site or submitting an inquiry, you agree to this Privacy Policy.
        If you do not agree, please do not use the Site or submit your information.
      </p>

      <h2>1. Information We Collect</h2>
      <h3>1.1 Information You Provide</h3>
      <ul>
        <li><strong>Contact details:</strong> name, email, phone number, country/city.</li>
        <li><strong>Educational details:</strong> academic background, intended program, intake, target university/country.</li>
        <li><strong>Communications:</strong> messages you send us via forms, email, WhatsApp, or phone.</li>
        <li><strong>Documents (later in process):</strong> transcripts, CVs, SOPs, passport details — only if you formally engage us for application assistance.</li>
      </ul>

      <h3>1.2 Information Collected Automatically</h3>
      <ul>
        <li>IP address, browser type, device, operating system, referring URL.</li>
        <li>Pages viewed, time spent, clicks, scroll depth.</li>
        <li>Cookies and similar technologies (see our <a href="/cookies">Cookie Policy</a>).</li>
      </ul>

      <h3>1.3 Information from Third Parties</h3>
      <ul>
        <li>Advertising platforms (Google Ads, Meta/Facebook, LinkedIn, TikTok) may share aggregated campaign performance data.</li>
        <li>Analytics providers (Google Analytics, Meta Pixel) may share user-behavior insights.</li>
      </ul>

      <h2>2. How We Use Your Information</h2>
      <ul>
        <li>To respond to your inquiries and provide study-abroad counseling.</li>
        <li>To prepare and submit university applications, visa paperwork, and other services you engage us for.</li>
        <li>To send service-related updates, newsletters, and promotional offers (you can opt out anytime).</li>
        <li>To improve our Site, services, and user experience.</li>
        <li>To measure and optimize our advertising campaigns.</li>
        <li>To comply with legal obligations and prevent fraud.</li>
      </ul>

      <h2>3. Advertising & Tracking</h2>
      <p>
        We use third-party advertising and analytics services that may set cookies
        and collect data about your visits to this and other websites. These include:
      </p>
      <ul>
        <li><strong>Google Ads</strong> &amp; <strong>Google Analytics 4</strong> — for measurement and remarketing.</li>
        <li><strong>Meta Pixel</strong> (Facebook &amp; Instagram) — for conversion tracking and audience building.</li>
        <li><strong>LinkedIn Insight Tag</strong> — for B2B lead measurement.</li>
        <li><strong>TikTok Pixel</strong> — for video-ad conversion tracking.</li>
      </ul>
      <p>
        You can opt out of personalized advertising by visiting:{" "}
        <a href="https://adssettings.google.com" target="_blank" rel="noreferrer">Google Ad Settings</a>,{" "}
        <a href="https://www.facebook.com/adpreferences" target="_blank" rel="noreferrer">Meta Ad Preferences</a>,{" "}
        <a href="https://optout.aboutads.info" target="_blank" rel="noreferrer">Digital Advertising Alliance opt-out</a>, or{" "}
        <a href="https://www.youronlinechoices.com" target="_blank" rel="noreferrer">Your Online Choices (EU)</a>.
      </p>

      <h2>4. How We Share Your Information</h2>
      <p>We do <strong>not</strong> sell your personal data. We may share information with:</p>
      <ul>
        <li><strong>Universities and partners</strong> only when you ask us to submit an application or recommendation.</li>
        <li><strong>Service providers</strong> (hosting on Vercel, email tools, CRM, form processors, analytics) under confidentiality agreements.</li>
        <li><strong>Government authorities</strong> when required by law (e.g. visa processing).</li>
        <li><strong>Successors</strong> in case of a merger, acquisition, or sale of assets.</li>
      </ul>

      <h2>5. Data Retention</h2>
      <p>
        We retain your information only as long as needed for the purposes outlined
        above, typically:
      </p>
      <ul>
        <li>Inquiry data — up to 24 months from last contact.</li>
        <li>Active client records — until 5 years after service completion (for audit/regulatory needs).</li>
        <li>Analytics data — up to 14 months by default in Google Analytics.</li>
      </ul>

      <h2>6. Your Rights</h2>
      <p>Depending on your jurisdiction (GDPR / India DPDP Act / CCPA), you may have the right to:</p>
      <ul>
        <li>Access the personal data we hold about you.</li>
        <li>Request correction or deletion.</li>
        <li>Withdraw consent for marketing communications.</li>
        <li>Object to or restrict certain processing.</li>
        <li>Lodge a complaint with your local data-protection authority.</li>
      </ul>
      <p>
        To exercise any of these rights, email us at{" "}
        <a href="mailto:info@heaven-overseas.com">info@heaven-overseas.com</a>. We
        respond within 30 days.
      </p>

      <h2>7. Data Security</h2>
      <p>
        We use HTTPS/TLS encryption, access controls, and reputable hosting
        (Vercel). No transmission over the internet is 100% secure, so we cannot
        guarantee absolute security but commit to industry-standard safeguards.
      </p>

      <h2>8. Children&apos;s Privacy</h2>
      <p>
        Our Services are intended for users 16 years or older. We do not knowingly
        collect personal data from children under 16. If you believe we have, please
        contact us so we can delete it.
      </p>

      <h2>9. International Transfers</h2>
      <p>
        Your data may be processed in countries outside your own (e.g. the US for
        hosting and analytics). We rely on standard contractual clauses or
        equivalent safeguards where applicable.
      </p>

      <h2>10. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. The &ldquo;Last
        updated&rdquo; date at the top reflects the most recent revision. Material
        changes will be communicated through the Site or email where appropriate.
      </p>

      <h2>11. Contact Us</h2>
      <p>
        <strong>Global Heaven Overseas®</strong><br />
        Email: <a href="mailto:info@heaven-overseas.com">info@heaven-overseas.com</a><br />
        Phone: <a href="tel:+4917647625653">+49 176 47625653</a><br />
        Offices: New Delhi · Hyderabad · Bengaluru
      </p>
    </LegalLayout>
  );
}
