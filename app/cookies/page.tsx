import type { Metadata } from "next";
import LegalLayout from "../(legal)/legal-layout";

export const metadata: Metadata = {
  title: "Cookie Policy | Global Heaven Overseas",
  description:
    "Cookie Policy describing how Global Heaven Overseas uses cookies and similar technologies, including for advertising and analytics.",
};

export default function CookiesPage() {
  return (
    <LegalLayout title="Cookie Policy" updatedAt="May 30, 2026">
      <p>
        This Cookie Policy explains how <strong>Global Heaven Overseas</strong>
        (&ldquo;GHO&rdquo;) uses cookies and similar tracking technologies on{" "}
        <a href="https://heaven-overseas.com">heaven-overseas.com</a>.
      </p>

      <h2>1. What Are Cookies?</h2>
      <p>
        Cookies are small text files placed on your device when you visit a
        website. They are widely used to make websites work efficiently, remember
        your preferences, and provide insights to site owners.
      </p>

      <h2>2. Types of Cookies We Use</h2>
      <h3>2.1 Strictly Necessary</h3>
      <p>Required for the website to function (e.g. session, security, load balancing). These cannot be disabled.</p>

      <h3>2.2 Performance &amp; Analytics</h3>
      <ul>
        <li><strong>Google Analytics 4</strong> (<code>_ga</code>, <code>_ga_*</code>): pages visited, session duration, traffic sources.</li>
        <li><strong>Vercel Analytics</strong>: aggregated, anonymous performance metrics.</li>
      </ul>

      <h3>2.3 Advertising &amp; Retargeting</h3>
      <ul>
        <li><strong>Google Ads</strong> (<code>_gcl_au</code>, <code>IDE</code>): conversion tracking and remarketing.</li>
        <li><strong>Meta Pixel</strong> (<code>_fbp</code>, <code>fr</code>): Facebook/Instagram ad measurement and retargeting.</li>
        <li><strong>LinkedIn Insight Tag</strong> (<code>li_sugr</code>, <code>UserMatchHistory</code>): B2B campaign tracking.</li>
        <li><strong>TikTok Pixel</strong> (<code>_ttp</code>): video-ad attribution.</li>
      </ul>

      <h3>2.4 Functional</h3>
      <p>Remember your preferences (language, region, form data) to improve your experience.</p>

      <h2>3. Managing Cookies</h2>
      <p>You can control cookies through:</p>
      <ul>
        <li>Your browser settings — block or delete cookies on a per-site basis.</li>
        <li>Privacy add-ons such as Ghostery, Privacy Badger, or uBlock Origin.</li>
        <li>Opt-out portals:
          {" "}<a href="https://adssettings.google.com" target="_blank" rel="noreferrer">Google Ad Settings</a>,
          {" "}<a href="https://www.facebook.com/adpreferences" target="_blank" rel="noreferrer">Meta Ad Preferences</a>,
          {" "}<a href="https://optout.aboutads.info" target="_blank" rel="noreferrer">DAA Opt-out</a>,
          {" "}<a href="https://www.youronlinechoices.com" target="_blank" rel="noreferrer">Your Online Choices (EU)</a>.
        </li>
      </ul>
      <p>
        Note: blocking strictly necessary cookies may affect website functionality.
      </p>

      <h2>4. Do Not Track</h2>
      <p>
        Currently, no widely adopted standard exists for &ldquo;Do Not Track&rdquo;
        signals. Our Site does not respond to DNT signals at this time.
      </p>

      <h2>5. Updates</h2>
      <p>
        We may update this Cookie Policy. The &ldquo;Last updated&rdquo; date at
        the top reflects the latest revision.
      </p>

      <h2>6. Contact</h2>
      <p>
        Email <a href="mailto:info@heaven-overseas.com">info@heaven-overseas.com</a>{" "}
        for any questions about this policy.
      </p>
    </LegalLayout>
  );
}
