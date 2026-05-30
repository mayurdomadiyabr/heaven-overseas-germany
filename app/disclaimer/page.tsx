import type { Metadata } from "next";
import LegalLayout from "../(legal)/legal-layout";

export const metadata: Metadata = {
  title: "Disclaimer | Global Heaven Overseas",
  description:
    "Disclaimer for information published on the Global Heaven Overseas website.",
};

export default function DisclaimerPage() {
  return (
    <LegalLayout title="Disclaimer" updatedAt="May 30, 2026">
      <p>
        The information published on <a href="https://heaven-overseas.com">heaven-overseas.com</a>{" "}
        by <strong>Global Heaven Overseas</strong> (&ldquo;GHO&rdquo;) is for general
        informational purposes only. While we strive to keep the content accurate
        and up to date, we make no representations or warranties of any kind,
        express or implied, regarding completeness, accuracy, reliability,
        suitability, or availability.
      </p>

      <h2>1. No Guarantee of Admission or Visa</h2>
      <p>
        GHO is an independent education consultancy. We are <strong>not</strong>{" "}
        an agent of any government, embassy, or university. Final admission
        decisions rest with the universities, and visa decisions rest with the
        relevant embassy/consulate. <strong>We do not guarantee admission,
        scholarship, or visa approval.</strong>
      </p>

      <h2>2. Tuition, Fees, and Living Costs</h2>
      <p>
        Figures such as tuition fees, semester contributions, blocked-account
        amounts, and cost-of-living estimates are based on publicly available data
        at the time of publication. These figures are subject to change by the
        respective universities and authorities. Always verify with official
        sources before financial planning.
      </p>

      <h2>3. Testimonials</h2>
      <p>
        Testimonials displayed on the Site are from real students who have used
        our services. Individual results may vary, and testimonials should not be
        construed as a guarantee of similar outcomes.
      </p>

      <h2>4. Advertising</h2>
      <p>
        Promotional materials shown on the Site or in our advertising campaigns
        (Google Ads, Meta, LinkedIn, TikTok) reflect general service offerings.
        Pricing, scholarships, or special offers mentioned in ads may have
        eligibility criteria or time limits explained at the point of consultation.
      </p>

      <h2>5. External Links</h2>
      <p>
        The Site may contain links to external websites that are not operated by
        GHO. We have no control over the content and practices of those sites and
        cannot accept responsibility for them.
      </p>

      <h2>6. Professional Advice</h2>
      <p>
        Content on the Site is not a substitute for legal, financial, medical, or
        immigration advice from a licensed professional. Please consult appropriate
        professionals before making major decisions.
      </p>

      <h2>7. Updates</h2>
      <p>
        This Disclaimer may be revised at any time without notice. The
        &ldquo;Last updated&rdquo; date at the top reflects the latest version.
      </p>

      <h2>8. Contact</h2>
      <p>
        Questions? Email{" "}
        <a href="mailto:info@heaven-overseas.com">info@heaven-overseas.com</a>.
      </p>
    </LegalLayout>
  );
}
