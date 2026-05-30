import type { Metadata } from "next";
import LegalLayout from "../(legal)/legal-layout";

export const metadata: Metadata = {
  title: "Terms of Service | Global Heaven Overseas",
  description:
    "Terms of Service governing your use of Global Heaven Overseas's website and study-abroad counseling services.",
};

export default function TermsPage() {
  return (
    <LegalLayout title="Terms of Service" updatedAt="May 30, 2026">
      <p>
        These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of
        <strong> Global Heaven Overseas</strong>&apos; website at{" "}
        <a href="https://heaven-overseas.com">heaven-overseas.com</a> and the
        services we provide. By using our Site or engaging our services, you agree to
        these Terms.
      </p>

      <h2>1. Services Provided</h2>
      <p>
        Global Heaven Overseas (&ldquo;GHO&rdquo;) provides study-abroad counseling,
        university application assistance, visa guidance, blocked-account &amp;
        insurance support, and pre-departure services — primarily for students
        pursuing higher education in Germany and other countries.
      </p>
      <p>
        Our role is <strong>advisory</strong>. Final admission decisions are made by
        universities, and final visa decisions are made by embassies/consulates.
        We do not guarantee admission or visa approval.
      </p>

      <h2>2. Eligibility</h2>
      <p>You must be at least 16 years old to use our Services. If you are under 18, a parent or legal guardian must consent to our engagement.</p>

      <h2>3. Your Responsibilities</h2>
      <ul>
        <li>Provide accurate, complete, and current information.</li>
        <li>Submit authentic documents (transcripts, certificates, identity proof).</li>
        <li>Cooperate timely with deadlines we communicate.</li>
        <li>Comply with university and immigration laws of the destination country.</li>
      </ul>
      <p>Misrepresentation or document fraud may result in immediate termination of services without refund and possible legal action.</p>

      <h2>4. Fees &amp; Refunds</h2>
      <p>
        Initial counseling is free. Service fees for applications, visa support, and
        other paid services will be quoted and agreed to in writing before commencement.
      </p>
      <p>
        <strong>Refund policy:</strong> Fees are partially refundable up to the
        point we begin work on your application (e.g. SOP drafting, uni-assist
        submission). Application fees paid to universities, APS bodies, embassies,
        or third parties are <strong>non-refundable</strong>.
      </p>

      <h2>5. Intellectual Property</h2>
      <p>
        The Site, including text, logos (including the Global Heaven Overseas®
        mark), graphics, and code, is owned by GHO or its licensors and is protected
        by copyright and trademark laws. You may not copy, modify, distribute, or
        create derivative works without our written permission.
      </p>

      <h2>6. User Submissions</h2>
      <p>
        Any inquiry, feedback, testimonial, or content you submit may be used by
        GHO (without identifying personal details unless you consent) for marketing
        and service-improvement purposes.
      </p>

      <h2>7. Third-Party Services</h2>
      <p>
        We may link to or integrate with third-party services (universities,
        uni-assist, Expatrio/Fintiba, Vercel hosting, advertising platforms). We are
        not responsible for the content, policies, or practices of those third parties.
      </p>

      <h2>8. Disclaimers</h2>
      <p>
        The Site and Services are provided <strong>&ldquo;as is&rdquo;</strong>
        without warranties of any kind. We do not warrant that the Site will be
        uninterrupted, error-free, or that information is exhaustive or current
        beyond reasonable best-effort updates.
      </p>
      <p>
        Information about tuition fees, blocked-account amounts, visa requirements,
        and timelines is subject to change by the relevant authorities. Always
        verify with official sources before making decisions.
      </p>

      <h2>9. Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by law, GHO shall not be liable for any
        indirect, incidental, consequential, or punitive damages arising out of or
        related to your use of the Services. Our aggregate liability in any matter
        shall not exceed the amount you paid us for the specific service in question.
      </p>

      <h2>10. Indemnification</h2>
      <p>
        You agree to indemnify and hold GHO harmless from any claims, losses, or
        damages arising from your breach of these Terms, misrepresentation, or
        violation of any third-party rights or applicable laws.
      </p>

      <h2>11. Termination</h2>
      <p>
        We may suspend or terminate your access to the Services at any time for
        violation of these Terms, fraudulent activity, or non-payment of fees.
      </p>

      <h2>12. Governing Law &amp; Disputes</h2>
      <p>
        These Terms are governed by the laws of India. Any disputes shall be
        subject to the exclusive jurisdiction of the courts at New Delhi, India.
      </p>

      <h2>13. Changes to Terms</h2>
      <p>
        We may update these Terms at any time. Material changes will be posted on
        this page with the &ldquo;Last updated&rdquo; date. Continued use of the Site
        after changes constitutes acceptance.
      </p>

      <h2>14. Contact</h2>
      <p>
        <strong>Global Heaven Overseas®</strong><br />
        Email: <a href="mailto:info@heaven-overseas.com">info@heaven-overseas.com</a><br />
        Phone: +91 99999 99999
      </p>
    </LegalLayout>
  );
}
