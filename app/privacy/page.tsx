import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | ISHAN Foundation',
  description: 'Privacy Policy for ISHAN Foundation',
}

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#FFFFFF] pt-32 pb-24 px-6 md:px-12 font-sans">
      <div className="max-w-[760px] mx-auto">
        
        {/* Back Link */}
        <Link 
          href="/" 
          className="inline-flex items-center text-[#9FBB90] hover:text-[#33472C] text-xs uppercase tracking-widest font-semibold transition-colors duration-300 mb-12"
        >
          ← Back to Home
        </Link>
        
        {/* Header */}
        <header className="mb-12">
          <h1 className="font-display text-4xl md:text-5xl text-[#33472C] mb-4">
            Privacy Policy
          </h1>
          <p className="text-[#33472C]/60 italic font-light">
            Last updated: <span className="bg-[#9FBB90]/30 text-[#33472C] px-2 py-0.5 rounded font-medium ml-2">[PLACEHOLDER — August 4, 2026]</span>
          </p>
        </header>

        {/* Content */}
        <div className="space-y-6 text-[#33472C]/80 font-light leading-relaxed text-[15px] md:text-[16px]">
          <p>
            ISHAN Foundation ("we", "us", "our") operates ishanfoundation.lk (the "Site"). This Privacy Policy explains what personal information we collect, how we use it, and the choices you have.
          </p>

          <section>
            <h2 className="text-2xl font-display text-[#33472C] pt-8 mb-4">1. Information We Collect</h2>
            
            <p className="font-medium text-[#33472C] mb-2">Information you provide directly:</p>
            <ul className="list-disc pl-6 space-y-2 mb-6 marker:text-[#9FBB90]">
              <li>Name, email address, and phone number when you fill out a booking or contact form</li>
              <li>Number of participants and package selection when booking a Samanvaya journey</li>
              <li>Payment information is processed directly by PayPal — we do not collect or store your card or PayPal account details on our servers</li>
            </ul>

            <p className="font-medium text-[#33472C] mb-2">Information collected automatically:</p>
            <ul className="list-disc pl-6 space-y-2 marker:text-[#9FBB90]">
              <li>Basic analytics data (pages visited, time on site, general location based on IP) if analytics tools are active on the Site</li>
              <li>Cookies used for site functionality and, if applicable, marketing pixels (e.g. Pinterest, Google) for advertising and verification purposes</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display text-[#33472C] pt-8 mb-4">2. How We Use Your Information</h2>
            <p className="mb-2">We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2 marker:text-[#9FBB90]">
              <li>Process and confirm your booking and payment</li>
              <li>Send you booking confirmations and related communications by email</li>
              <li>Respond to inquiries you send us</li>
              <li>Improve our Site and services</li>
              <li>Comply with legal and accounting obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display text-[#33472C] pt-8 mb-4">3. Third-Party Services We Use</h2>
            <p className="mb-2">We share limited information with the following third-party services to operate the Site:</p>
            <ul className="list-disc pl-6 space-y-2 mb-6 marker:text-[#9FBB90]">
              <li><strong className="text-[#33472C] font-medium">PayPal</strong> — to process payments securely. See PayPal's own privacy policy for how they handle your payment data.</li>
              <li><strong className="text-[#33472C] font-medium">Supabase</strong> — to securely store booking records (name, email, phone, package, payment reference).</li>
              <li><strong className="text-[#33472C] font-medium">Resend</strong> — to send booking confirmation and notification emails.</li>
              <li className="list-none -ml-6 mt-4">
                <span className="bg-[#9FBB90]/30 text-[#33472C] px-2 py-0.5 rounded font-medium">[PLACEHOLDER — add Google Analytics/Search Console and Pinterest here if actively used, with a short line each]</span>
              </li>
            </ul>
            <p>We do not sell your personal information to third parties.</p>
          </section>

          <section>
            <h2 className="text-2xl font-display text-[#33472C] pt-8 mb-4">4. Data Retention</h2>
            <p>
              We retain booking records for as long as necessary to fulfill the purpose they were collected for, and as required by applicable tax, accounting, or legal obligations.{' '}
              <span className="bg-[#9FBB90]/30 text-[#33472C] px-2 py-0.5 rounded font-medium inline-block mt-2">[PLACEHOLDER — client to confirm specific retention period, e.g. "7 years" or similar]</span>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display text-[#33472C] pt-8 mb-4">5. Your Rights</h2>
            <p className="mb-2">Depending on your location, you may have the right to:</p>
            <ul className="list-disc pl-6 space-y-2 mb-6 marker:text-[#9FBB90]">
              <li>Request access to the personal information we hold about you</li>
              <li>Request correction or deletion of your information</li>
              <li>Withdraw consent for marketing communications at any time</li>
            </ul>
            <p>
              To exercise any of these rights, contact us at <span className="bg-[#9FBB90]/30 text-[#33472C] px-2 py-0.5 rounded font-medium ml-1">[PLACEHOLDER — privacy contact email, e.g. privacy@ishanfoundation.lk]</span>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display text-[#33472C] pt-8 mb-4">6. Cookies</h2>
            <p>Our Site may use cookies to improve your browsing experience and, where applicable, for analytics and marketing purposes. You can control cookies through your browser settings.</p>
          </section>

          <section>
            <h2 className="text-2xl font-display text-[#33472C] pt-8 mb-4">7. Children's Privacy</h2>
            <p>Our Site and services are not directed at children under 18, and we do not knowingly collect personal information from children.</p>
          </section>

          <section>
            <h2 className="text-2xl font-display text-[#33472C] pt-8 mb-4">8. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated "Last updated" date.</p>
          </section>

          <section>
            <h2 className="text-2xl font-display text-[#33472C] pt-8 mb-4">9. Contact Us</h2>
            <p className="mb-4">If you have questions about this Privacy Policy, contact us at:</p>
            <div className="flex flex-col gap-3">
              <span className="bg-[#9FBB90]/30 text-[#33472C] px-3 py-1.5 rounded font-medium w-fit border border-[#9FBB90]/50">[PLACEHOLDER — contact email]</span>
              <span className="bg-[#9FBB90]/30 text-[#33472C] px-3 py-1.5 rounded font-medium w-fit border border-[#9FBB90]/50">[PLACEHOLDER — physical address if applicable]</span>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
